import { FaStar } from "react-icons/fa6"

const ProductList = ({ product, showMore, setShowMore }) => {

    return <div style={{ width: "10rem" }} className="border border-2 p-2 rounded-2">
        <div>
            <img src={product.image} alt={product.title} className="w-100" style={{ aspectRatio: 1 / 1, objectFit: "contain" }} />
        </div>
        <div onClick={() => setShowMore(product.id)}>
            {showMore == product.id ? <h5>{product.title}</h5> : <h5 className="text-truncate">{product.title}</h5>}
            <div className="d-flex justify-content-between mt-2">
                <p>${product.price}</p>
                <p><FaStar /> {product.rating.rate}</p>
            </div>
            <button className="btn btn-success w-100">Add To Cart</button>
        </div>
    </div>
}

export default ProductList