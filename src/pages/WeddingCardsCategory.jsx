import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import WeddingCards from './WeddingCards';

const WeddingCardsCategory = () => {
  const { category } = useParams();
  const navigate = useNavigate();

  // Validate category
  useEffect(() => {
    const validCategories = [
      'anant-bandhan', 'farman-card', 'forever-in-gold', 'legend-wedding-card',
      'riwaaz-wed-card', 'royal-vows', 'sunehri-shaadi', 'vivah-sutra',
      'wedding-card', 'customized-wedding-card', 'beautiful-classic-card',
      'emboss-card', 'gold-effect-card', 'luxury-card', 'metallic-card',
      'natural-card', 'premium-card', 'silver-effect-card', 'special-card'
    ];

    if (!validCategories.includes(category)) {
      navigate('/weddingcards');
    }
  }, [category, navigate]);

  return <WeddingCards />;
};

export default WeddingCardsCategory;