export default function OrderItem({ name, qty, price, icon }) {
return (
    <div className="flex justify-between w-100 px-6 text-sm py-4 text-white bg-red">
        <div className="flex items-center gap-3">
        <span className="text-xl">{icon}</span>
        <div>
            <h4 className="font-bold">{ name }</h4>
            <p>Qty: { qty }</p>
        </div>
        </div>
        <p>{ price }</p>
    </div>
)
}