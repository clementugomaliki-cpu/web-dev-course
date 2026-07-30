function FilterTabs() {
  return ( 
    <>
        <div className="filter-tabs">
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
        <div className="tabs-section">
            <div className="tabs">
                <button>All</button>
                <button>Social</button>
                <button>Content</button>
                <button>Apps</button>
                <button>Survey & Polls</button>
            </div>
            <div className="create-task-btn">
                <button><span>+</span>Create Task</button>
            </div>
        </div>
    </>
          
  )
}

export default FilterTabs