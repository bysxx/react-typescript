import React, { useEffect, useState } from "react";
import "./Crypto.css";
import Coin from "./components/Coin";

function Crypto() {
  const [cryptoData, setCryptoData] = useState([]);

  const getCoinData = async () => {
    const data = await (
      await fetch("https://api.coinpaprika.com/v1/tickers")
    ).json();
    setCryptoData(data);
  };

  useEffect(() => {
    getCoinData();
  }, []);

  return (
    <div className={"container"}>
      <div className={"coins"}>
        <Coin coinData={cryptoData} />
        <Coin coinData={cryptoData} />
        <Coin coinData={cryptoData} />
        <Coin coinData={cryptoData} />
        <Coin coinData={cryptoData} />
        <Coin coinData={cryptoData} />
      </div>
    </div>
  );
}

export default Crypto;
