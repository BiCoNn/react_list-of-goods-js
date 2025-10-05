import { useState } from 'react';

import 'bulma/css/bulma.css';
import './App.scss';

export const goodsFromServer = [
  'Dumplings',
  'Carrot',
  'Eggs',
  'Ice cream',
  'Apple',
  'Bread',
  'Fish',
  'Honey',
  'Jam',
  'Garlic',
];

export const App = () => {
  const [goods, setGoods] = useState([...goodsFromServer]);
  const [activeButton, setActiveButton] = useState(null);
  const [isReversed, setIsReversed] = useState(false);

  const sortByAlphabet = () => {
    setActiveButton('alphabet');
    const sortedGoods = [...goods].sort((goodsA, goodsB) => {
      return goodsA.localeCompare(goodsB);
    });

    setGoods(sortedGoods);
  };

  const sortByLength = () => {
    setActiveButton('length');
    const sortedGoods = [...goods].sort((goodsA, goodsB) => {
      return goodsA.length - goodsB.length;
    });

    setGoods(sortedGoods);
  };

  const toggleReverse = () => {
    setIsReversed(!isReversed);
    setActiveButton('reverse');
    const reversedGoods = [...goods].reverse();

    setGoods(reversedGoods);
  };

  const resetSort = () => {
    setIsReversed(false);
    setActiveButton(null);
    setGoods([...goodsFromServer]);
  };

  const arraysEqual = (arr1, arr2) => {
    if (arr1.length !== arr2.length) {
      return false;
    }

    return arr1.every((value, index) => value === arr2[index]);
  };

  return (
    <div className="section content">
      <div className="buttons">
        <button
          type="button"
          className={`button is-info ${activeButton === 'alphabet' ? '' : 'is-light'}`}
          onClick={sortByAlphabet}
        >
          Sort alphabetically
        </button>

        <button
          type="button"
          className={`button is-info ${activeButton === 'length' ? '' : 'is-light'}`}
          onClick={sortByLength}
        >
          Sort by length
        </button>

        <button
          type="button"
          className={`button is-info ${isReversed === true ? '' : 'is-light'}`}
          onClick={toggleReverse}
        >
          Reverse
        </button>

        {!arraysEqual(goods, goodsFromServer) && (
          <button
            type="button"
            className={`button is-danger ${activeButton === 'reset' ? '' : 'is-light'}`}
            onClick={resetSort}
          >
            Reset
          </button>
        )}
      </div>

      <ul>
        {goods.map(item => (
          <li data-cy="Good" key={item}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};
