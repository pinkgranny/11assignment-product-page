import React from "react"
import Product from "./product"

const productsJson = require("./../products.json")

class App extends React.Component {
  render() {
    return (
      <div className="App">
            <header>
              <h1 id="header">Products</h1>
            </header>

          <div className="Product-container">
             {/* <div className="Product-list"> */}
              {productsJson.products.map((item) => {
                return <Product key={item.id}
                  name={item.name}
                  image={item.image}
                  type={item.type}
                  substance={item.substance}
                  size={item.size}
                  numberInPack={item.numberInPack}
                  price={item.price}
                  deliveryTime={item.deliveryTime}
                  />
              })}
              {/* </div> */}
          </div>
      </div>
    )
  }
}

export default App
