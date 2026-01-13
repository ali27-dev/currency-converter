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
  const [isAmount, setIsAmount] = useState(1);
  const [fromCurrency, setFromCurrancy] = useState("EUR");
  const [toCurrency, setToCurrency] = useState("USD");
  const [toConverter, setToConverter] = useState("");
  // const [isLoading, setLoading] = useState(false);

  useEffect(
    function () {
      async function fetchingCurrency() {
        try {
          // setLoading(true);
          const res = await fetch(
            `https://api.frankfurter.app/latest?amount=${isAmount}&from=${fromCurrency}&to=${toCurrency}`
          );

          const data = await res.json();

          setToConverter(data.rates[toCurrency]);
          // setLoading(false);
        } catch (error) {
          console.error("Not Fetching Currency!");
        }
      }
      if (fromCurrency === toCurrency) return setToConverter(isAmount);
      // setLoading(false);
      fetchingCurrency();
    },
    [fromCurrency, toCurrency, isAmount]
  );
  return (
    <div className="">
      <>
        <input
          type="text"
          placeholder="Enter Amount..."
          value={isAmount}
          onChange={(e) => Number(setIsAmount(e.target.value))}
          // disabled={isLoading}
        />
        <select
          name=""
          id=""
          value={fromCurrency}
          onChange={(e) => setFromCurrancy(e.target.value)}
          // disabled={isLoading}
        >
          <option value="EUR">EUR</option>
          <option value="USD">USD</option>
          <option value="CAD">CAD</option>
          <option value="INR">INR</option>
        </select>

        <select
          name=""
          id=""
          value={toCurrency}
          onChange={(e) => setToCurrency(e.target.value)}
          // disabled={isLoading}
        >
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="CAD">CAD</option>
          <option value="INR">INR</option>
        </select>
      </>

      <h4>
        {toConverter} {toCurrency}
      </h4>
    </div>
  );
}

// function Loding() {
//   return <p className="loader">Data is fetching please wait....</p>;
// }
