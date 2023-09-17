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
  const [count, setCount] = useState(0)
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  function HandleClicks(e) {
    setCount(count - 1);
  }
  function HandleClick(e) {
    setCount(count + 1);
    // setIsLoggedIn(!isLoggedIn);
  }
  return (
    <>
    <button className="productBtn" onClick={HandleClicks}><img src={btnImg} alt=""/></button>
    {count}
    <button className="productBtn" onClick={HandleClick}><img src={btnImgP} alt=""/></button>
    {/* {<ProductList></ProductList>} */}
    {/* {isLoggedIn && <Welcome />} */}
    </>
  )

  // return (
  //    <>
  //    <MyComponent />
  //      <div>
  //        <a href="https://vitejs.dev" >
  //          <img src={viteLogo} className="logo" alt="Vite logo" />
  //        </a>
  //        <a href="https://react.dev" >
  //          <img src={reactLogo} className="logo react" alt="React logo" />
  //        </a>
  //      </div>
  //      <h1>Vite + React</h1>
  //      <div className="card">
  //        <button onClick={() => setCount((count) => count + 1)}>
  //          count is {count}
  //        </button>
  //        <p>
  //          Edit <code>src/App.jsx</code> and save to test HMR
  //        </p>
  //      </div>
  //      <p className="read-the-docs">
  //        Click on the Vite and React logos to learn more
  //      </p>
  //    </>
  // )
}

export default App
