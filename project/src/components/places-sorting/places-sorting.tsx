import { SetStateAction, useState } from 'react';
import { SortPopup } from '../../const';

type SortProps = {
  sortPopup: typeof SortPopup;
}

function PlacesSorting({ sortPopup }: SortProps): JSX.Element {

  const [visiblePopup, setvisiblePopup] = useState(false);
  const [activeItem, setActiveItem] = useState(0);
  const activeLabel = sortPopup[activeItem];

  const handleVisiblePopup = () => {
    setvisiblePopup(!visiblePopup);
  };

  const onSelectItem = (index: SetStateAction<number>) => {
    setActiveItem(index);
    setvisiblePopup(false);
  };

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex={0} onClick={handleVisiblePopup} >
        {activeLabel}
        <svg className="places__sorting-arrow" width={7} height={4}>
          <use xlinkHref="#icon-arrow-select" />
        </svg>
      </span>
      {visiblePopup && (
        <ul className="places__options places__options--custom places__options--opened">
          {
            sortPopup.map((sort, index) => (
              <li key={sort} onClick={() => onSelectItem(index)} className={activeItem === index ? 'places__option places__option--active' : 'places__option'} tabIndex={0}>
                {sort}
              </li>
            ))
          }
        </ul>
      )}
    </form>
  );
}

export default PlacesSorting;
