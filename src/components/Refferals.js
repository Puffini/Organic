import React from 'react';
import '../fonts.css'
import { useAuthContext } from "../providers/AuthProvider";
import { useContractContext } from "../providers/ContractProvider";

export default function Refferals() {
  const {wrongNetwork, web3 } =
      useContractContext();
  const { address } = useAuthContext();
  const [copied, setCopied] = React.useState(false);
  const [refLink, setRefLink] = React.useState('');

  React.useEffect(() => {
    if (!web3 || wrongNetwork || !address) {
      setRefLink(`Connect`)
    } else {
      setRefLink(`https://www.bnb-organic.farm/?ref=${address}`);
    }
      return;
    },[web3, wrongNetwork, address])

  const handleCopy = () => {
    navigator.clipboard.writeText(refLink)
    setCopied(true)
  }
  return (
    <div className="container__small3">
            <p className="ref">Referrals</p>
            <div className="reff">
            <div className="connect2">
            <p className="refflink">{refLink}</p>
            </div>
            
      <div className="copy">
            <p><button className="copytext" onClick={handleCopy}  primary width='25%' height='70%' >{copied ? 'Copied!' : 'Copy'}</button></p>
        </div>
    </div>
        <p className="last__text2">Three-level referral system, how does it work? <a href="https://organic-farm.gitbook.io/organic-farm/info/referrals">Link</a></p>
    <p  className="last__text3">1st lvl 8%, 2nd 2%, 3rd 1%</p>
          </div>
  );
}

