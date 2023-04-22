export const getDiscountedPrice = (price, discountPercentage) => {
  return Math.round(price - price * (discountPercentage / 100));
};
