import { useEffect, useState } from "react";
import "./App.css";
import cb from "./images/coldbrew.jpg";
import cortado from "./images/cortado.jpg";
import latte from "./images/latte.jpg";
import pourover from "./images/pourover.jpg";

const IMAGES = [
  {
    src: cb,
    alt: "cold brew",
    value: "Cold brew",
  },
  {
    src: cortado,
    alt: "cortado",
    value: "Cortado",
  },
  {
    src: latte,
    alt: "latte",
    value: "Latte",
  },
  {
    src: pourover,
    alt: "pourover",
    value: "Pourover",
  },
];
function App() {
  const [items, setItems] = useState([]);
  console.log(window.analytics);
  useEffect(() => {
    window.analytics.load("dJ4Q7khrMuccRJy5bUQnN9DvkJczut6E");
  }, []);

  useEffect(() => {
    window.analytics.page("Order");
  }, []);

  const addItem = (opt) => {
    setItems([...items, opt]);
    window.analytics.track("Product added", {
      product: opt,
    });
  };

  const proceed = () => {
    console.log({ items });
    window.analytics.track("Checkout clicked", {
      products: items,
    });
  };

  const renderImage = ({ alt, src, value }) => {
    return (
      <div className="img" onClick={() => addItem(value)} key={src}>
        <img src={src} alt={alt} style={{ height: "300px", width: "300px" }} />
        <p>{value}</p>
      </div>
    );
  };

  return (
    <div className="App">
      <div className="main">
        <h1>Order</h1>
        <div className="images">{IMAGES.map(renderImage)}</div>
        {items.length > 0 && <button onClick={proceed}>Proceed</button>}
      </div>
    </div>
  );
}

export default App;
