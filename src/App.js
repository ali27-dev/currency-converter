import { useEffect, useState } from "react";
// `https://api.frankfurter.app/latest?amount=100&from=EUR&to=USD`

export default function App() {
  return (
    <div className="App">
      <CurrencyConverter />
    </div>
  );
}

function CurrencyConverter() {
  const [isText, setIsText] = useState(0);
  const [isCurrency, setIsCurrency] = useState(0);

  useEffect(function () {
    async function fetchingCurrency() {
      try {
        const res = await fetch(
          `https://api.frankfurter.app/latest?amount=100&from=EUR&to=USD`
        );

        const data = await res.json();
        console.log(data.rates);
        setIsCurrency(data);
      } catch (error) {
        console.error("Not Fetching Currency!");
      }
    }
    fetchingCurrency();
  }, []);
  return (
    <div className="">
      <input
        type="text"
        placeholder="Enter Amount..."
        onChange={(e) => setIsText(e.target.value)}
      />
      <select name="" id="">
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <select name="" id="">
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>

      <h4>{isText * 385}</h4>
    </div>
  );
}
