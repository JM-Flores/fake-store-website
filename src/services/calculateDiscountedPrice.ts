const calculateDiscountPrice = (price?: number, discountPercent?: number) => {
    if (!price || !discountPercent) return 0;
    const result = parseFloat((price * (100 - discountPercent)/ 100).toFixed(2));
    return result;
}

export default calculateDiscountPrice;