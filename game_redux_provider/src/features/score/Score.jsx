import React from 'react';
// Add import statement below
import { useSelector } from 'react-redux';
import { selectMatchIDs } from '../board/boardSlice';

export const Score = () => {
  // Add selected data variable below
  const cardsMatched = useSelector(selectMatchIDs)

  return (
    // implement selected data inside <div>
    <div className="score-container">Matched: {cardsMatched.length}</div>
  );
};