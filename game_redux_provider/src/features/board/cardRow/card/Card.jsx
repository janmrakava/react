import React from 'react';
// Add import statements below
import { useSelector, useDispatch } from 'react-redux';
import { selectVisibleIDs, flipCard, selectMatchIDs, resetCards } from '../../boardSlice';

let cardLogo = "https://static-assets.codecademy.com/Courses/Learn-Redux/matching-game/codecademy_logo.png";

export const Card = ({ id, contents }) => {
  // Add selected data and dispatch variables below
  const visibleIDs = useSelector(selectVisibleIDs)
  const matchesIDs = useSelector(selectMatchIDs)
  const dispatch = useDispatch()
  // flip card action
  const flipHandler = (id) => {
    // Add action dispatch below
    dispatch(flipCard(id))
  };

  const tryAgainHandler = () => {
    // Add action dispatch below
    dispatch(resetCards())
  };

  let cardStyle = 'resting'
  let click = () => flipHandler(id);
  
  let cardText = (
    <img src={cardLogo} className="logo-placeholder" alt="Card option" />
  );

  // 1st if statement
  // implement card id array membership check
  if (visibleIDs.includes(id) || matchesIDs.includes(id)) {
    cardText = contents;
    click = () => {};  
  }

  // 2nd if statement
  // implement card id array membership check
  if (matchesIDs.includes(id)) {
    cardStyle = 'matched';
  }

  // 3rd if statement
  // implement number of flipped cards check
  if (visibleIDs.length === 2) {    
    click = tryAgainHandler;
  }

  if (visibleIDs.length >= 2 || matchesIDs.includes(id)){
    cardStyle = 'no-match'
  }

  return (
    <button onClick={click} className={`card ${cardStyle}`}>
      {cardText}
    </button>
  );
};
