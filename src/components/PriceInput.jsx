export default function PriceInput({ value, max, onChange = () => {} }) {
  return (
    <div position="relative">
      <input
        className="balance_holder"
        type="number"
        min={0}
        max={max}
        value={value}
        step={0.1}
        onChange={(e) => onChange(e.target.value)}/>
      </div>
     
  );
}
