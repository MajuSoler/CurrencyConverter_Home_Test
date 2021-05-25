import "../Css/CoinSelector.css";

const CoinSelector = ({ onChange, options }) => (
  <select className="coin_selector" onChange={onChange}>
    <option value={""}>Select a currency</option>
    {options.map((name, index) => (
      <option key={index} value={name}>
        {name}
      </option>
    ))}
  </select>
);

export default CoinSelector;
