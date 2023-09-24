import { useState } from 'react';
import { Switch } from 'antd';
import './App.css';
import beefp from '../public/beef-pizza.png';
import ccake from '../public/c-cake.png';
import icecr from '../public/ice-cream.png';
import latte from '../public/latte.png';
import meatv from '../public/meats&veggies.png';
import pcake from '../public/p-cake.png';
import stick from '../public/stick-balls.png';
import sunde from '../public/sundae.png';
import sushi from '../public/sushi.png';
import vtaco from '../public/vegetarian-taco.png';
import sepetIcn from '../public/sepet.svg';

function App() {
  const [cart, setCart] = useState([]);
  const [count, setCount] = useState(0);
  const [isSwitchChecked, setIsSwitchChecked] = useState(false);

  const Duzenle = () => {
    const [ setIsEditVisible] = useState(false);

    const onChange = (checked) => {
      setIsSwitchChecked(checked);
      setIsEditVisible(checked);
    };

    return (
      <div>
        <Switch defaultChecked={isSwitchChecked} onChange={onChange} />
      </div>
    );
  };

  const productscollation = [
    {
      id: 1,
      name: 'Beef pizza with veggies',
      price: '10',
      img: beefp
    },
    {
      id: 2,
      name: 'Meats and veggies',
      price: '15',
      img: meatv
    },
    {
      id: 3,
      name: 'Vegetarian taco-zucchini',
      price: '12',
      img: vtaco
    },
    {
      id: 4,
      name: 'Stick balls',
      price: '8',
      img: stick
    },
    {
      id: 5,
      name: 'Cold sushi',
      price: '18',
      img: sushi
    }
  ];

  const productsDessert = [
    {
      id: 1,
      name: 'Strawberry pink cake',
      price: '9',
      img: pcake
    },
    {
      id: 2,
      name: 'Crisp chocolate cake',
      price: '12',
      img: ccake
    },
    {
      id: 3,
      name: 'Chocolate ice cream latte',
      price: '7',
      img: latte
    },
    {
      id: 4,
      name: 'Ice cream sundae',
      price: '13',
      img: sunde
    },
    {
      id: 5,
      name: 'Strawberry ice cream',
      price: '5',
      img: icecr
    }
  ];

  const addToCart = (productName, price) => {
    const newCart = [...cart, { name: productName, price, isEditVisible: isSwitchChecked }];
    setCart(newCart);
    setCount(count + price);
  };

  const clearCart = () => {
    setCart([]);
    setCount(0);
  };

  const removeFromCart = (productName, productPrice) => {
    const updatedCart = cart.filter(item => item.name !== productName);
    setCart(updatedCart);
    setCount(count - parseFloat(productPrice));
  };

  const handleCategoryChange = (event) => {
    const selectedCategory = event.target.value;

    const aparatifContent = document.getElementById('aparatifContent');
    const dessertContent = document.getElementById('dessertContent');

    if (selectedCategory === 'all') {
      aparatifContent.style.display = 'block';
      dessertContent.style.display = 'block';
    } else if (selectedCategory === 'collation') {
      aparatifContent.style.display = 'block';
      dessertContent.style.display = 'none';
    } else if (selectedCategory === 'dessert') {
      aparatifContent.style.display = 'none';
      dessertContent.style.display = 'block';
    }
  };

  const productListDessert = productsDessert.map((product) => (
    <div key={product.id} className="product">
      {product.img && <img src={product.img} alt={product.name} />}
      <p>{product.name}</p>
      <p className="price">${product.price}</p>
      <button
        className="productBtn"
        onClick={() => addToCart(product.name, parseFloat(product.price))}
      >
        Sepete Ekle
      </button>
    </div>
  ));

  const productList = productscollation.map((product) => (
    <div key={product.id} className="product">
      {product.img && <img src={product.img} alt={product.name} />}
      <p>{product.name}</p>
      <p className="price">${product.price}</p>
      <button
        className="productBtn"
        onClick={() => addToCart(product.name, parseFloat(product.price))}
      >
        Sepete Ekle
      </button>
    </div>
  ));

  return (
    <div>
      <h1>Aperatif ve Tatlı Kategorileri</h1>
      <label htmlFor="category">Kategori Seç:</label>
      <select id="category" onChange={handleCategoryChange}>
        <option value="all">Hepsi</option>
        <option value="collation">Aperatif</option>
        <option value="dessert">Tatlı</option>
      </select>
      <div id="aparatifContent" className="content">
        <h2>Aperatif</h2>
        {productList}
      </div>
      <div id="dessertContent" className="content">
        <h2>Tatlı</h2>
        {productListDessert}
      </div>


      <div className="cart">
        <img src={sepetIcn} alt="" />
        <h2>Sepet</h2>
        {Duzenle()}
        <ul className="cartItem">
          {cart.map((item, index) => (
            <li key={index}>
              
              <button
        className="duzenleBtn"
        style={{ display: isSwitchChecked ? 'block' : 'none' }}
        onClick={() => removeFromCart(item.name, item.price)}
      >
        -
      </button>
              {item.name}: ${item.price}
            </li>
          ))}
        </ul>
        <p>Toplam: ${count}</p>
        <button onClick={clearCart}>Sepeti Temizle</button>
      </div>
    </div>
  );
}

export default App;