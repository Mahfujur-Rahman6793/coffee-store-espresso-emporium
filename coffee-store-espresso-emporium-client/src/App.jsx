import { useLoaderData } from "react-router-dom"
import Coffecard from "./component/Coffecard";


function App() {

  const coffees = useLoaderData();

  return (
    <>
     
      <h1 className="text-6xl text-purple-600 text-center mb-4">Welcome to my Coffee Shop</h1>
      <p className="text-center mb-4">
        
      </p>

      <div className="grid md:grid-cols-2 gap-4">
      {
        coffees.map(coffeedetails => <Coffecard
        key={coffeedetails._id} coffeedetails={coffeedetails}
        >

        </Coffecard>)
      }
      </div>

 
  
    </>
  )
}

export default App
