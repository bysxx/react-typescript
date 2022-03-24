import React, { useState } from 'react';
import { useEffect } from 'react';
import './Coin.css';
import { getRequest } from '../../libs/axiosManager';
import useSWR from 'swr';

const SAVED_COIN = 'savedCoin';
const publicUrl = process.env.PUBLIC_URL;
const url = `https://api.coinpaprika.com/v1/ticker/`;

export interface coinState {
  id: string;
  name: string;
  symbol: string;
  rank: number;
}

interface CoinProps {
  index: number;
  coinsData: coinState[];
}

interface CoinDataProps {
  name: string;
  price_usd: string;
  price_btc: string;
}

const Coin = ({ index, coinsData }: CoinProps) => {
  const [coinId, setCoinId] = useState('');
  const [isEmpty, setIsEmpty] = useState<boolean>(true);
  const { data } = useSWR([url, coinId], () => getRequest<CoinDataProps>(url + coinId, undefined));

  useEffect(() => {
    const loadedCoinId = localStorage.getItem(SAVED_COIN + index);

    if (loadedCoinId !== null) {
      setCoinId(loadedCoinId);
      setIsEmpty(false);
    }
  }, []);

  const onChangeOption = (event: any) => {
    setIsEmpty(false);
    setCoinId(event.target.value);
    localStorage.setItem(SAVED_COIN + index, event.target.value);
  };

  const onClickReset = () => {
    setIsEmpty(true);
    setCoinId('');
    localStorage.removeItem(SAVED_COIN + index);
  };

  return (
    <div className={'coinContainer'}>
      {data ? (
        <div className={'coin'}>
          <div className={'coin_title'}>Name: {data.name}</div>
          <div>
            <div>
              Price(USD):
              {Math.round(parseFloat(data.price_usd) * 100) / 100}$
            </div>
            <div>
              Price(BTC):
              {Math.round(parseFloat(data.price_btc) * 100000000) / 100000000}
              BTC
            </div>
          </div>
          <img className={'coin_resetButton'} src={`${publicUrl}/img/close.png`} onClick={onClickReset} />
        </div>
      ) : (
        <div className={'nocoin'}>
          <input type="text" list="list" onChange={onChangeOption} />
          <datalist id="list">
            <option>Select Your Coin</option>
            {coinsData.map((data: { id: string }) => (
              <option key={data.id} value={data.id} />
            ))}
          </datalist>
          <div>Please Search Your Coin</div>
        </div>
      )}
    </div>
  );
};

export default Coin;
