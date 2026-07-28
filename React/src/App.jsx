/*import SidebarN from './SidebarN'
import FilterTabs from './FilterTabs'
import TaskCard from './TaskCard'

function App() {
  return (
    <div className='container'>
      <SidebarN />
      <div className='main-content'>
        <FilterTabs />
        <div className='task-card'>
          <TaskCard />
        </div>
      </div>
    </div>
  )
}

export default App
*/

//to reuse the container multiple times
/*import ProductCard from "./Components/ProductCard"
function App() {
  return (
    <div className="product-container">
      <ProductCard productName="Sneakers" price="$50"/>
      <ProductCard productName="Bell" price="$20"/>
      <ProductCard productName="Some things" price="$40"/>
    </div>
  )
}
export default App

*/
/*import StudentsArray from "./StudentsArray";
function App() {
    const students = ["Esther", "James", "Joy", "Peace"];
    return (
        <div>
            {students.map((stu, idx) => (
                <StudentsArray studentName={stu} />
            ))}
        </div>
    )
}
export default App
*/
import ProductCardTwo from "./Components/ProductCardTwo";
function App() {
  return (


      <div className="container">
        <ProductCardTwo title="HydroSync Pro Water Bottle" image={<img src="src/hydrosync pro water bottle.png"/>} volume1="100ml" volume2="500ml" volume3="800ml" volume4="1 Litre" description="Stay on top of your daily water intake with this innovative bottle featuring built-in hydration reminders and Bluetooth connectivity." price="$137" />    
        <ProductCardTwo title="Winter Jacket" image={<img src="src/jacket2.png"/>} volume1="Small" volume2="Medium" volume3="Big" volume4="X-Big" description="A quality jacket combines durable, weatherproof materials, breathable insulation, and precision tailoring to deliver reliable comfort and functional style." price="$148" />
        <ProductCardTwo title="SteelSeries Arctis Nova Pro Wireless Headset" image={<img src="src/headset.png"/>} volume1="Black" volume2="Silver" volume3="White" volume4="Gray" description="The SteelSeries Arctis Nova Pro Wireless offers immersive audio, active noise cancellation, and supreme comfort, making it a premium choice." price="$162" />
      </div>

  )
}
export default App