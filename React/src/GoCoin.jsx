function GoCoin() {
  return (
    <div>
            <div className="sidebar">
                <div className="logo-section">
                   <div className="logo"> <i className="fa-regular fa-face-angry"></i> </div>
                    <h1>GOCOIN</h1>
                </div>
                <div className="nav-links">
                <button>
                    <i className="fa-solid fa-house"></i>
                    Home
                </button>
                <button>
                    <i className="fa-sharp-duotone fa-solid fa-credit-card"></i>
                    Wallet
                </button>
                <button>
                    <i className="fa-solid fa-crown"></i>
                    Leaderboard
                </button>
                <button>
                    <i class="fa-regular fa-user"></i>
                    Profile
                </button>
                </div>
            </div>
            <div className="dashboard-bar">
                <span>Dashboard
                <button className="search-bar">
                    <i class="fa-solid fa-magnifying-glass"></i>
                    Search...
                </button>
                </span>
                <div className="notifications">
                    <button className="count-bar">
                        <i className="fa-solid fa-fire"></i>
                        <span>20</span>
                    </button>
                    <i class="fa-regular fa-bell"></i>
                </div>
            </div>
</div>
  )
}

export default GoCoin