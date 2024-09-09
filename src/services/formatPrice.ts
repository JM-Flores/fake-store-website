const formatPrice = (price?: number) => {
    const formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    });

    return price ? formatter.format(price) : 0;
}

export default formatPrice;
