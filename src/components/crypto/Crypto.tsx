import React, { useEffect, useState } from 'react';
import './Crypto.css';
import Coin, { coinState } from './Coin';
import { getRequest } from '../../libs/axiosManager';
import useSWR from 'swr';

const url = `https://api.coinpaprika.com/v1/ticker`;

function Crypto() {
  const indexes: number[] = [0, 1, 2, 3, 4, 5];
  const { data } = useSWR([url], () => getRequest<coinState[]>(url, undefined));

  return (
    <div className={'cryptoContainer'}>
      {data ? (
        <div className={'coins'}>
          {indexes.map((i) => (
            <Coin key={i} index={i} coinsData={data} />
          ))}
        </div>
      ) : (
        <div className={'loader'}>
          <span>Loading...</span>
        </div>
      )}
    </div>
  );
}

export default Crypto;
