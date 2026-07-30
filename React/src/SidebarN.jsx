function SidebarN() {
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
    </div>
  )
}

export default SidebarN