export const formatCurrency = (price: number | null) => {
  const value = price || 0;
  const formattedPrice = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD"
  }).format(value);

  return formattedPrice;
};
