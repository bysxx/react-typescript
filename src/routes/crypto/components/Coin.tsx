import React, { useState } from "react";
import "./Coin.css";

export interface CoinProps {
  coinData: { id: string }[];
}

const Coin: React.FC<CoinProps> = ({ coinData }) => {
  const [currentCoin, setCurrentCoin] = useState("");

  const onChangeOption = (event: any) => {
    setCurrentCoin(event.target.value);
  };

  return (
    <div className={"coin"}>
      <select className={"coinSelect"} onChange={onChangeOption}>
        {coinData.map((data: { id: string }) => (
          <option key={data.id}>{`${data.id}`}</option>
        ))}
      </select>
      {currentCoin === "" ? <div>골라요</div> : <div>{currentCoin}</div>}
    </div>
  );
};

export default Coin;
