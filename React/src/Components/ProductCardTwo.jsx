import { BsCart3 } from "react-icons/bs";
export default function ProductCardTwo({image, price, description, volume1, volume2, volume3, volume4, title}) {
    return (
        <div className="card">
            <div className="photo">{image}</div>
            <h4>{title}</h4>
            <div className="volume-btns">
                <button>{volume1}</button>
                <button>{volume2}</button>
                <button>{volume3}</button>
                <button>{volume4}</button>
            </div>
            <p>{description}</p>
            <div className="volume-price">
                <button className="price-btn">{price}</button>
                <button className="cart-btn">
                    <BsCart3 />
                    Add to Cart
                </button>
            </div>
        </div>
        
    )
}