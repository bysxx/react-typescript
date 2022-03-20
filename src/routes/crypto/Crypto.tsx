import React, { useEffect, useState } from 'react';
import './Crypto.css';
import Coin, { coinState } from './components/Coin';
import { getRequest } from '../../libs/axiosManager';

function Crypto() {
  const [cryptoData, setCryptoData] = useState([]);
  const [loading, setLoading] = useState(true);

  const indexes: number[] = [1, 2, 3, 4, 5, 6];

  const getCoinData = async () => {
    const data = await getRequest<coinState[]>('https://api.coinpaprika.com/v1/tickers', undefined);

    setLoading(false);
    setCryptoData(data);
  };

  useEffect(() => {
    getCoinData();
  }, []);

  return (
    <div className={'cryptoContainer'}>
      {loading ? (
        <div className={'loader'}>
          <span>Loading...</span>
        </div>
      ) : (
        <div className={'coins'}>
          {indexes.map((i) => (
            <Coin key={i} index={i} coinsData={cryptoData} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Crypto;
