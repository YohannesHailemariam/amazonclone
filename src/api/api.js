import axios from "axios";

export async function productsData() {
    const Products = await axios.get(
        "https://fakestoreapiserver.vercel.app/amazonproducts"
    );
    return Products
}