const calculateDiscountPrice = (price?: number, discountPercent?: number) => {
    if (!price || !discountPercent) return null;
    return (price * (100 - discountPercent)/ 100).toFixed(2);
}

export default calculateDiscountPrice;