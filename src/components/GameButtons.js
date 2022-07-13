import '../fonts.css'
import Web3 from "web3";
import { useLocation } from "react-router-dom";
import PriceInput from "./PriceInput";
import { useContractContext } from "../providers/ContractProvider";
import { useAuthContext } from "../providers/AuthProvider";
import { useEffect, useState } from "react";
import { config } from "../config";
let timeout = null;

function useQuery() {
    return new URLSearchParams(useLocation().search);
  }

  export default function GameButtons() {
    const { contract, wrongNetwork, getBnbBalance, fromWei, toWei, web3 } =
      useContractContext();
    const { address, chainId } = useAuthContext();
    const [contractBNB, setContractBNB] = useState(0);
    const [walletBalance, setWalletBalance] = useState({
      bnb: 0,
      seeds: 0,
      rewards: 0,
    });
    const [plantBNB, setPlantBNB] = useState(0);
    const [calculatedSeeds, setCalculatedSeeds] = useState(0);
    const [loading, setLoading] = useState(false);
    const query = useQuery();
  
    const fetchContractBNBBalance = () => {
      if (!web3 || wrongNetwork) {
        setContractBNB(0);
        return;
      }
      getBnbBalance(config.contractAddress).then((amount) => {
        setContractBNB(fromWei(amount));
      });
    };
  
    const fetchWalletBalance = async () => {
      if (!web3 || wrongNetwork || !address) {
        setWalletBalance({
          bnb: 0,
          seeds: 0,
          rewards: 0,
        });
        return;
      }
  
      try {
        const [bnbAmount, seedsAmount, rewardsAmount] = await Promise.all([
          getBnbBalance(address),
          contract.methods
            .getMyFarmers(address)
            .call()
            .catch((err) => {
              console.error("myfarmers", err);
              return 0;
            }),
          contract.methods
            .seedRewards(address)
            .call()
            .catch((err) => {
              console.error("seedrewards", err);
              return 0;
            }),
        ]);
        setWalletBalance({
          bnb: fromWei(`${bnbAmount}`),
          seeds: seedsAmount,
          rewards: fromWei(`${rewardsAmount}`),
        });
      } catch (err) {
        console.error(err);
        setWalletBalance({
          bnb: 0,
          seeds: 0,
          rewards: 0,
        });
      }
    };
  
    useEffect(() => {
      fetchContractBNBBalance();
    }, [web3, chainId]);
  
    useEffect(() => {
      fetchWalletBalance();
    }, [address, web3, chainId]);
  
    const onUpdatePlantBNB = (value) => {
      setPlantBNB(value);
    };
  
    const getRef = () => {
      const ref = Web3.utils.isAddress(query.get("ref"))
        ? query.get("ref")
        : "0x0000000000000000000000000000000000000000";
      return ref;
    };
  
    const plant = async () => {
      setLoading(true);
  
      const ref = getRef();
  
      try {
        await contract.methods.plantSeeds(ref).send({
          from: address,
          value: toWei(`${plantBNB}`),
        });
      } catch (err) {
        console.error(err);
      }
      fetchWalletBalance();
      fetchContractBNBBalance();
      setLoading(false);
    };
  
    const rePlant = async () => {
      setLoading(true);
  
      const ref = getRef();
  
      try {
        await contract.methods.replantSeeds(ref).send({
          from: address,
        });
      } catch (err) {
        console.error(err);
      }
      setLoading(false);
    };
  
    const harvestSeeds = async () => {
      setLoading(true);
  
      try {
        await contract.methods.harvestSeeds().send({
          from: address,
        });
      } catch (err) {
        console.error(err);
      }
      fetchWalletBalance();
      fetchContractBNBBalance();
      setLoading(false);
    };
  
    return (
    
    <div className="GameButtons">
        <h1 className="intro__title">
                        Change to BSC Mainnet to connect to dApp
            </h1>
            <div className="container__small">
                <div className="small__content">
                    <ul className="small__list1">
                      <li className="small__item">Contract Balance</li>
                      <li className="small__item">Wallet Balance</li>
                      <li className="small__item">Your total Seeds</li>
                    </ul>
                </div>
                <div className="small__content">
                    <ul className="small__list2">
                        <li className="small__item">{contractBNB} BNB</li>
                        <li className="small__item">{walletBalance.bnb} BNB</li>
                        <li className="small__item">{walletBalance.seeds}</li>
 
                    </ul>
                </div>
                <div className="balance">
                    <PriceInput max={+walletBalance.bnb}
                                value={plantBNB}
                                onChange={(value) => onUpdatePlantBNB(value)}
                                />
                    <p className="bnb">BNB</p>
                </div>
                <p className="dishes"></p>
                <div className="deposit">
                <p>
                  <button 
                  className="deposit__text" 
                  disabled={wrongNetwork || !address || +plantBNB === 0 || loading}
                  onClick={plant}
                  >
                    Plant Seeds (Deposit)</button></p>
                    
                </div>
                <div className="line"> </div>
                <div className="rewards">
                    <p className="rewards__text">Rewards</p>
                    <p className="zero">{walletBalance.rewards}</p>
                    <p className="bnb2">BNB</p>
                </div>
                <div className="chefs">
                
                <p><button className="chefs__text" disabled={wrongNetwork || !address || loading}
                onClick={rePlant}>Re-planting Seeds<br/><p className="chefs__text2">(Re-Invest)</p></button></p>
                    
                </div>
                <div className="dishes2">
                <p><button className="dishes__text"disabled={wrongNetwork || !address || loading}
                onClick={harvestSeeds}>Harvest<br/><p className="dishes__text2">(Claim)</p></button></p>
                    
                </div>
                <div className="calc">
                    <p><a href="https://docs.google.com/spreadsheets/d/1jG696wVyylnKj2Umm-yDRSXmkxFttYoOPEolDawzh1g/edit"target="__blank" className="calc__text">Calculator</a> </p>
                </div>
            </div>
    </div>
  );
}
