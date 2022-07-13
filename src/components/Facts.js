import '../fonts.css'

export default function Facts() {
  return (
    <div className="container__small2">
    <p className="return">6%</p>
    <p className="daily">Daily<br/>Returns</p>
    <ul className="apr">
        <li className="apr__text">APR</li>
        <li className="apr__text">Dev Fee</li>
        <li className="apr__text">Marketing Fee</li>
        <li className="apr__text">Ecosystem Fee</li>
        <div className="line2"> </div>
        <li className="apr__text">*If you use "plant" with an existing reward,</li>
        <li className="apr__text">the reward will be automatically reinvested.</li>
        <li className="apr__text">*More information in our Whitepaper</li>
    </ul>
    <ul className="apr__bnb">
        <li className="apr__text">2190%</li>
        <li className="apr__text">2%</li>
        <li className="apr__text">2%</li>
        <li className="apr__text">1%</li>
        <li className="apr__text"></li>
    </ul>
</div>
  );
}
