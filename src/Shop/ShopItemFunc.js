import React from 'react';
import PropTypes from 'prop-types';

function ShopItemFunc({ item }) {
  const {
    brand,
    title,
    description,
    descriptionFull,
    price,
    currency,
  } = item;

  return (
    <div className="main-content">
      <h2>{brand}</h2>
      <h1>{title}</h1>
      <h3>{description}</h3>

      <div className="description">
        {descriptionFull}
      </div>

      <div className="highlight-window mobile">
        <div className="highlight-overlay" />
      </div>

      <div className="divider" />

      <div className="purchase-info">
        <div className="price">
          {currency || '£'}
          {price.toFixed(2)}
        </div>
        <button type="button">Добавить в корзину</button>
      </div>
    </div>
  );
}

ShopItemFunc.propTypes = {
  item: PropTypes.exact({
    brand: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    descriptionFull: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    currency: PropTypes.string,
  }).isRequired,
};

export default ShopItemFunc;
