export default function WordForm({ image, name}) {
    return (
        <div className="flex flex-col justify-center space-x-2 items-center">
               <div className="w-100 border h-100 object-cover">{image}</div>
                <p>{name}</p>
            </div>
    )
}