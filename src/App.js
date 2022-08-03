import { useEffect, useState } from 'react';
import './App.css';
import cb from './images/coldbrew.jpg';
import cortado from './images/cortado.jpg';
import latte from './images/latte.jpg';
import pourover from './images/pourover.jpg';

const IMAGES = [
  {
    src: cb,
    alt: 'cold brew'
  },
  {
    src: cortado,
    alt: 'cortado'
  },
  {
    src: latte,
    alt: 'latte'
  },
  {
    src: pourover,
    alt: 'pourover'
  },
]
function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    window.analytics.page('Order');
  }, [])

  const addItem = (opt) => {
    setItems([...items, opt])
    window.analytics.track('Product added', {
      product: opt
    });
  }

  const proceed = () => {
    window.analytics.track('Checkout clicked', {
      products: items
    });
  }

  const renderImage = ({alt, src}) => {
    return (
      <div className="img" onClick={addItem}>
        <img src={src} alt={alt} style={{height: '300px', width:'300px'}}/>
        <p>{alt}</p>
      </div>
    )
  }

  return (
    <div className="App">
      <div className="main">
        <h1>Order</h1>
        <div className="images">
          {IMAGES.map((renderImage))}
        </div>
        {items.length > 0 && (
          <button onClick={proceed}>Proceed</button>
        )}
      </div>
    </div>
  );
}

export default App;
