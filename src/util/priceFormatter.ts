const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});

const priceFormatter = (price: number) => formatter.format(price);

export default priceFormatter;
