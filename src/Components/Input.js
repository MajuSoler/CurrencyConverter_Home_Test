import "../Css/Input.css";

export default function Input({ onChange }) {
  return (
    <div className="input_container">
      <input
        className="Amounth_input"
        type="number"
        placeholder="Amounth"
        onChange={onChange}
      />
    </div>
  );
}
