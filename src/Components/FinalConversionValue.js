import "../Css/FinalConversionValue.css";

const FinalConversionValue = ({ value }) => (
  <div className="Final_Conversion_Value_Container">
    <div className="Final_Conversion_Value"> {value?.toFixed(2)}</div>
  </div>
);

export default FinalConversionValue;
