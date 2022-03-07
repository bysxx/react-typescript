import React, { useState } from "react";
import { useEffect } from "react";
import "./Coin.css";

interface CoinProps {
  index: number;
  coinData: { id: string }[];
}

const Coin: React.FC<CoinProps> = ({ index, coinData }) => {
  const [coinId, setCoinId] = useState("");
  const [selectCoinData, setSelectCoinData] = useState();

  const updateCurrentCoinData = async () => {
    const data = await (
      await fetch(`https://api.coinpaprika.com/v1/ticker/${coinId}`)
    ).json();

    console.log(data);

    setSelectCoinData(data);
  };

  useEffect(() => {
    updateCurrentCoinData();
  }, [coinId]);

  const onChangeOption = (event: any) => {
    setCoinId(event.target.value);
  };

  return (
    <div className={"coin"}>
      <div>{index}.</div>
      <select className={"coinSelect"} onChange={onChangeOption}>
        {coinData.map((data: { id: string }) => (
          <option key={data.id}>{`${data.id}`}</option>
        ))}
      </select>
      {coinId === "" ? <div>Please Select Your Coin</div> : <div>{coinId}</div>}
    </div>
  );
};

export default Coin;
