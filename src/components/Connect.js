import '../fonts.css'
import { useAuthContext } from "../providers/AuthProvider";

export default function Connect() {
    const { address, loading, connect, disconnect } = useAuthContext();
  return (
    <div  className="Connect">
        <nav className="header__nav">
                        <ul className="header_list">
                            <li className="header__item">
                           
                            <button
                              className="walletButton"
                              disabled={loading}
                              onClick={() => (address ? disconnect() : connect())}
                            >
                              {address ? "Disconnect" : "Connect"}
                            </button>
                            
                            </li>
                        </ul>
                    </nav>
        </div>
  );
}
