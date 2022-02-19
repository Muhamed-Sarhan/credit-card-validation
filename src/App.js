import chip from "./assets/chip.svg";
import "./App.css";
import Cleave from "cleave.js/react";
import { useState } from "react";
import { FaCcVisa, FaCcMastercard, FaMoon, FaSun } from "react-icons/fa";

function App() {
  const [creditCardNo, setCreditCardNo] = useState("");
  const [creditCardType, setCreditCardType] = useState("");
  const [creditCardExpiryDate, setCreditCardExpiryDate] = useState("");
  const [darkmode, setDarkmode] = useState(false);

  const onCreditCardChange = (e) => {
    setCreditCardNo(e.target.rawValue);
  };

  const onCreditCardTypeChanged = (type) => {
    setCreditCardType(type);
  };

  const onCreditCardExpiryChange = (e) => {
    setCreditCardExpiryDate(e.target.rawValue);
  };

  const onToggleHandler = () => {
    setDarkmode(!darkmode);
  };

  return (
    <div
      className="App"
      style={{ backgroundColor: darkmode ? "#111" : "#fff" }}
    >
      <div>
        <input
          type="checkbox"
          className="checkbox"
          id="checkbox"
          onClick={onToggleHandler}
        />
        <label
          for="checkbox"
          className="label"
          style={{ backgroundColor: darkmode ? "#fff" : "#111" }}
        >
          <FaMoon className="moon" />
          <FaSun className="sun" />
          <div
            className="ball"
            style={{ backgroundColor: darkmode ? "#111" : "#fff" }}
          />
        </label>
      </div>
      <div className={darkmode ? "cardDark" : "card"}>
        <form>
          <div className="card__row__top">
            <div className="card__col card__brand">
              {creditCardType === "visa" ? (
                <FaCcVisa style={{ color: "blue" }} />
              ) : creditCardType === "mastercard" ? (
                <FaCcMastercard style={{ color: "#FF9800" }} />
              ) : (
                <div class="card__col card__chip">
                  <img src={chip} alt="chip" />
                </div>
              )}
            </div>
            <h3
              className="card__title"
              style={{ color: darkmode ? "#E3E3E3" : "#434343" }}
            >
              Bank Name
            </h3>
          </div>
          <h3
            style={{
              textAlign: "right",
              color: darkmode ? "#E3E3E3" : "#434343",
            }}
          >
            {creditCardType === "visa"
              ? "Credit"
              : creditCardType === "mastercard"
              ? "Debit"
              : "Type"}
          </h3>
          <div className="card__row__center">
            <div className="card__col__center">
              <Cleave
                type="text"
                className="card__input card__input--large"
                placeholder="xxxx-xxxx-xxxx-xxxx"
                options={{
                  creditCard: true,
                  onCreditCardTypeChanged,
                }}
                onChange={(e) => onCreditCardChange(e)}
              />
            </div>
          </div>
          <div className="card__row__bottom">
            <div className="card__col__bottom">
              <label
                for="cardExpiry"
                className="card__label"
                style={{ color: darkmode ? "#E3E3E3" : "#434343" }}
              >
                valid thru
              </label>
              <Cleave
                className="card__input"
                placeholder="MM/YY"
                options={{ date: true, datePattern: ["m", "d"] }}
                onChange={onCreditCardExpiryChange}
              />
            </div>
          </div>
        </form>
      </div>
      <button
        className="validateBtn"
        style={{ background: darkmode ? "#e0ffe4" : "#FFE0E0" }}
      >
        {creditCardType === "visa"
          ? "Valid"
          : creditCardType === "mastercard"
          ? "VALID"
          : "INVALID"}
      </button>
    </div>
  );
}

export default App;
