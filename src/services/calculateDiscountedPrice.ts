const calculateDiscountPrice = (price?: number, discountPercent?: number) => {
    if (!price || !discountPercent) return 0;
    return parseInt((price * (100 - discountPercent)/ 100).toFixed(2));
}

export default calculateDiscountPrice;