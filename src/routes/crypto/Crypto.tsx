import React, { useEffect, useState } from "react";
import "./Crypto.css";
import Coin from "./components/Coin";

function Crypto() {
  const [cryptoData, setCryptoData] = useState([]);
  const [loading, setLoading] = useState(true);

  const [index] = useState([1, 2, 3, 4, 5, 6]);

  const getCoinData = async () => {
    const data = await (
      await fetch("https://api.coinpaprika.com/v1/tickers")
    ).json();

    setLoading(false);
    setCryptoData(data);
  };

  useEffect(() => {
    getCoinData();
  }, []);

  return (
    <div className={"container"}>
      {loading ? (
        <div className={"loader"}>
          <span>Loading...</span>
        </div>
      ) : (
        <div className={"coins"}>
          {index.map((i) => (
            <Coin key={i} index={i} coinData={cryptoData} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Crypto;
