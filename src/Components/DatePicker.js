import "../Css/DatePicker.css";

const DatePicker = ({ date, setDate, today }) => (
  <input
    className="Date_picker"
    type="date"
    value={date}
    max={today}
    onChange={(e) => setDate(e.target.value)}
    style={{ margin: 32 }}
  />
);

export default DatePicker;
