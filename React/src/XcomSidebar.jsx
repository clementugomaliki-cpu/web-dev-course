export default function XcomSidebar({icon, button}) {
return (
    <div className="flex gap-5items-center">
        <div>{ icon }</div>
        <button>{ button }</button>
    </div>
)
}