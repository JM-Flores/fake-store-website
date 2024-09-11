export interface ProductInvoice {
    id: number;
    name: string;
    price: number;
    quantity: number;
}

interface Invoice {
    products: ProductInvoice[];
    totalPrice: number;
}

export default Invoice;