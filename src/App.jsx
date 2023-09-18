import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import btnImgP from '/add-circle-outline.svg';
import btnImg from '/vector.svg';

// export function MyComponent() {
//   // const myMsg = 'Merhabalar';
//   const myObj = {
//     msg: 'Selamlar',
//     cssClass: 'title'
//   };

//   return(
//     <>
//       <h1 className={myObj.cssClass}>{myObj.msg}</h1>
//     </>
//   )
// }

// function Welcome() {
//   let msg = <h2>lutfen giris yapin</h2>;
//   let isLoggedIn = false;
//   if (isLoggedIn) {
//     msg = <h2>Hos Geldiniz..</h2>;
//   }
//   return (
//     <div>
//       {msg}
//     </div>
//   );
// }
// function LogIn() {
//   return (
//     <h2>Lutfen Giris Yapin</h2>
//   )
// }

// function ProductList() {
//   const products = [
//     {
//       id: 1,
//       name: 'Elma'
//     },
//     {
//       id: 2,
//       name: 'Armut'
//     },
//     {
//       id: 3,
//       name: 'Karpuz'
//     }
//   ];

//   const productList = products.map(x => <li key={x.id}>{x.name}</li>);

//   return (
//     <ul>
//       {productList}
//     </ul>
//   )
// }

function App() {
  const [cart, setCart] = useState([]);
  const [count, setCount] = useState(0);

  function addToCart(productName, price) {
    const newCart = [...cart, { name: productName, price }];
    setCart(newCart);
    setCount(count + price);
  }

  function clearCart() {
    setCart([]);
    setCount(0);
  }

  

  function handleCategoryChange(event) {
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
  }
  

  return (
    <div>
      <h1>Aperatif ve Tatlı Kategorileri</h1>

      {/* Kategori seçim */}
      <label htmlFor="category">Kategori Seç:</label>
      <select id="category" onChange={handleCategoryChange}>
        <option value="all">Hepsi</option>
        <option value="collation">Aperatif</option>
        <option value="dessert">Tatlı</option>
      </select>
      {/* Ürünler */}
      <div id="aparatifContent" className="content">
          <h2>Aperatif</h2>
      <div className="product">
        <img src="public/beef-pizza.png" alt="Beef pizza with veggies" />
        <p>Beef pizza with veggies </p><p className='price'>$10</p>
        <button className="productBtn" onClick={() => addToCart('Beef pizza', 10)}>
          Sepete Ekle
        </button>
      </div>
      <div className="product">
        <img src="public/meats&veggies.png" alt="Meats and veggies" />
        <p>Meats and veggies</p><p className='price'>$15</p>
        <button className="productBtn" onClick={() => addToCart('Meats and veggies', 15)}>
          Sepete Ekle
        </button>
      </div>

      <div className="product">
        <img src="public/vegetarian-taco.png" alt="Vegetarian taco-zucchini" />
        <p>Vegetarian taco-zucchini</p><p className='price'>$12</p>
        <button className="productBtn" onClick={() => addToCart('Vegetarian taco-zucchini', 12)}>
          Sepete Ekle
        </button>
      </div>

      <div className="product">
        <img src="public/stick-balls.png" alt="Stick balls" />
        <p>Stick balls</p><p className='price'>$8</p>
        <button className="productBtn" onClick={() => addToCart('Stick balls', 8)}>
          Sepete Ekle
        </button>
      </div>

      <div className="product">
        <img src="public/sushi.png" alt="Cold sushi" />
        <p>Cold sushi</p><p className='price'>$18</p>
        <button className="productBtn" onClick={() => addToCart('Cold sushi', 18)}>
          Sepete Ekle
        </button>
      </div> 
      </div>
      <div id="dessertContent" class="content">
          <h2>Tatlı</h2>
          <div class="products yemek">
              <div class="product">
                  <img src="public/p-cake.png" alt=""/>
                  <p>Straberry pink cake</p><p className='price'>$9</p>
                  <button className="productBtn" onClick={() => addToCart('Straberry pink cake', 9)}>
          Sepete Ekle
        </button>
              </div>
              <div class="product">
                  <img src="public/c-cake.png" alt=""/>
                  <p>Crisp chocolate cake</p><p className='price'>$12</p>
                  <button className="productBtn" onClick={() => addToCart('Crisp chocolate cake', 12)}>
          Sepete Ekle
        </button>
              </div>
              <div class="product">
                  <img src="public/latte.png" alt=""/>
                  <p>Chocolate ice cream latte</p><p className='price'>$7</p>
                  <button className="productBtn" onClick={() => addToCart('Chocolate ice cream latte', 7)}>
          Sepete Ekle
        </button>
              </div>
              <div class="product">
                  <img src="public/sundae.png" alt=""/>
                  <p>Ice cream sundae</p><p className='price'>$13</p>
                  <button className="productBtn" onClick={() => addToCart('Ice cream sundae', 13)}>
          Sepete Ekle
        </button>
              </div>
              <div class="product">
                  <img src="public/ice-cream.png" alt=""/>
                  <p>Strawberry ice cream</p><p className='price'>$5</p>
                  <button className="productBtn" onClick={() => addToCart('Strawberry ice cream', 5)}>
          Sepete Ekle
        </button>
              </div>
          </div>      
        </div>      

      
      <div className="cart">
        <h2>Sepet</h2>
        <ul className='cartItem'>
          {cart.map((item, index) => (
            <li key={index}>
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

