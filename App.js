import React from 'react';
import logo from './logo.svg';
import './App.css';
import HomeScreen from './Screens/HomeScreen'
import ProductsScreen from './Screens/ProductsScreen'
import {BrowserRouter,Route,Link} from 'react-router-dom'
function App() {
    const openMenu=()=>{
  document.querySelector(".sidebar").classList.add("open")

}   
  const closeMenu=()=>{
  document.querySelector(".sidebar").classList.remove("open")

}
  return (
    <BrowserRouter>
    <div className="grid-container">
       <header className="header">
           <div className="brand">
               <button onClick={openMenu}>
                   &#9776;
               </button>
               <Link to="/">ibuy</Link>
              </div>
            <div className="header-links">
                <a href="signin.html">SignIn</a>
                <a href="cart.html">Cart</a>
            </div>
        </header>
        <aside className="sidebar">
            <button className="sidebar-close-button" onClick={closeMenu}>x</button>
            <h3>Shopping categories</h3>
            <ul>
                <li><a href="index.html">Pants</a></li>
                <li><a href="index.html">Shirts</a></li>
                <li><a href="index.html">Shoes</a></li>
            </ul>
        </aside> 
           <main className="main">
               <div className="content">
               <Route path="/product/:id" component={ProductsScreen} />
              <Route path="/" component={HomeScreen} exact={true}/>
               </div>
           </main>
        <footer className="footer">All Right Resevre to Me:)</footer>
   </div>
   </BrowserRouter>
  );
}

export default App;
