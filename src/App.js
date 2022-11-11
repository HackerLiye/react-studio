import "./App.css";
import { useState } from "react";
import bakeryData from "./assets/bakery-data.json";

/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */

function App() {
  // TODO: use useState to create a state variable to hold the state of the cart
  /* add your cart state code here */
  const [total, setTotal] = useState(0);
  const [cart, setCart] = useState([]);
  function add(item) {
    setTotal(item.price + total);
    setCart([...cart, item])
  }
  return (
    <div className="App">
      <h1>My Bakery</h1> {/* TODO: personalize your bakery (if you want) */}

      {bakeryData.map((item, index) => ( // TODO: map bakeryData to BakeryItem components
        <div>
          <img src={item.image} width={500} />
          <h4><b>{item.name}</b></h4>
          <p>{item.price}</p>
          <p>{item.description}</p>
          <button className="button" onClick={() => add(item)}><span>Add</span></button>
        </div>
      ))}

      <div>
        <h2>Cart</h2>
        {
          <div>
            <p>Total Price: {total}</p>
            {cart.map((item, index) => (
              <div key={index}>
                <p>{item.name}: ${item.price}</p>
              </div>
            ))}
          </div>

        }
      </div>
    </div>
  );
}

export default App;
