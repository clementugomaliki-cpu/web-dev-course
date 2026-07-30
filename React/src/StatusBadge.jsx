export default function StatusBadge({ isActive }) {
 return (
    <p className={isActive ? "text-green-800 font-medium" : "text-red-800 font-medium"}>{isActive ? `Active` : `Standby`}</p>
 )
}
 