export type Sizes = "S" | "M" | "L" | "XL";
export type Product = {
    name: String,
    createdAt: Date,
    stock: number,
    size?: Sizes,
};

