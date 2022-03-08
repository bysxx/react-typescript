import React, { useState } from "react";
import { useEffect } from "react";
import "./Coin.css";

const SAVED_COIN = "savedCoin";
const publicUrl = process.env.PUBLIC_URL;

interface CoinProps {
  index: number;
  coinsData: { id: string }[];
}

interface CoinDataProps {
  name: string;
  price_usd: string;
  price_btc: string;
}

const Coin: React.FC<CoinProps> = ({ index, coinsData }) => {
  const [coinId, setCoinId] = useState("");
  const [coinData, setCoinData] = useState<CoinDataProps>(null);

  const updateCurrentCoinData = async () => {
    const data = await (
      await fetch(`https://api.coinpaprika.com/v1/ticker/${coinId}`)
    ).json();

    setCoinData(data);
  };

  useEffect(() => {
    const loadedCoinId = localStorage.getItem(SAVED_COIN + index);

    if (loadedCoinId !== null) {
      setCoinId(loadedCoinId);
    }
  }, []);

  useEffect(() => {
    if (coinId !== "") {
      updateCurrentCoinData();
    } else {
      setCoinData(null);
    }

    localStorage.setItem(SAVED_COIN + index, coinId);
  }, [coinId]);

  const onChangeOption = (event: any) => {
    setCoinId(event.target.value);
  };

  const onClickReset = () => {
    setCoinId("");
  };

  return (
    <div className={"coinContainer"}>
      {coinData === null ? (
        <div className={"nocoin"}>
          <input type="text" list="list" onChange={onChangeOption} />
          <datalist id="list">
            <option>Select Your Coin</option>
            {coinsData.map((data: { id: string }) => (
              <option key={data.id} value={data.id} />
            ))}
          </datalist>
          <div>Please Search Your Coin</div>
        </div>
      ) : (
        <div className={"coin"}>
          <div className={"coinTitle"}>Name: {coinData.name}</div>
          <div>
            <div>
              Price(USD):
              {Math.round(parseFloat(coinData.price_usd) * 100) / 100}$
            </div>
            <div>
              Price(BTC):
              {Math.round(parseFloat(coinData.price_btc) * 100000000) /
                100000000}
              BTC
            </div>
          </div>
          <img
            className={"resetButton"}
            src={`${publicUrl}/img/close.png`}
            onClick={onClickReset}
          />
        </div>
      )}
    </div>
  );
};

export default Coin;
