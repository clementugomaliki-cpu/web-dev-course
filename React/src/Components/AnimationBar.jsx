export default function AnimationBar({message}) {
    return (
        <>
        <div className="bg-blue-600 text-white h-10 flex items-center" style={{ overflow: "hidden", whiteSpace: "nowrap" }}>
                <div
                    style={{
                        display: "inline-flex",
                        animation: "marquee 85s linear infinite",
                    }}
                >
                    <span style={{ paddingRight: "4rem" }}>{message}</span>
                    <span style={{ paddingRight: "4rem" }}>{message}</span>
                </div>
            </div>

            <style>{`
                @keyframes marquee {
                    from { transform: translateX(0%); }
                    to { transform: translateX(-50%); }
                }
            `}</style>
        </>
    )
}