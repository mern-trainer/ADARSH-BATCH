import { useState } from "react";
import { products } from "../constants/products";
import { FaStar } from "react-icons/fa6";
import ProductList from "../components/ProductList";

const ProductsListPage = () => {
    const [showMore, setShowMore] = useState(0)
    return <div>
        <h1>Products List Page</h1>
        <div className="d-flex flex-wrap gap-2 justify-content-center">
            {
                products.map(product => {
                    return <ProductList key={product.id} product={product} showMore={showMore} setShowMore={setShowMore}/>
                })
            }
        </div>
    </div>
};

export default ProductsListPage;
