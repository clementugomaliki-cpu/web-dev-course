export default function ProductCard({image, title, description, price, volume1, volume2, volume3, volume4}) {
    return (
        <>
            <div className="photo">{image}</div>
            <h4>{title}</h4>
            <div className="volume-btns">
                <button>{volume1}</button>
                <button>{volume2}</button>
                <button>{volume3}</button>
                <button>{volume4}</button>
            </div>
            <p>{description}</p>
            <div>
                <button>{price}</button>
                <button>Add to Cart</button>
            </div>
        </>
    )
}
