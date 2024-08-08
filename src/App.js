import React from "react";
import ReactDOM from "react-dom/client";
import { pizzaData } from "./data";
import "./index.css";

function App() {
  console.log(pizzaData);
  return (
    <>
      <div className="container">
        <Header />
        <Menu />
        <Footer />
      </div>
    </>
  );
}

export default App;

function Menu() {
  return (
    <>
      <main className="menu">
        <h2>Our menu</h2>
        {pizzaData.length > 0 ? (
          <>
            <p>
              Authentic Italian cuisine. 6 creative dishes to choose from. All
              from our stone oven, all organic, all delicious.
            </p>

            <ul className="pizzas">
              {pizzaData.map((pizza) => (
                <Pizza pizzaData={pizza} key={pizza.name} />
              ))}
            </ul>
          </>
        ) : (
          <p>We're still working on our menu. Please come back later :)</p>
        )}
      </main>
    </>
  );
}

function Pizza({ pizzaData }) {
  return (
    <li className={`pizza ${pizzaData.soldOut ? "sold-out" : ""}`}>
      <img src={pizzaData.photoName} alt={pizzaData.name} />
      <div>
        <h3>{pizzaData.name}</h3>
        <p>{pizzaData.ingredients}</p>
        <span>{pizzaData.soldOut ? "SOLD OUT" : pizzaData.price}</span>
      </div>
    </li>
  );
}

function Header() {
  return (
    <header className="header">
      <h1>Fast React Pizza Co.</h1>
    </header>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const open = 8;
  const close = 22;
  const isOpen = hour >= open && hour <= close;

  return (
    <footer className="footer">
      {isOpen ? (
        <Order closeHour={close} openHour={open} />
      ) : (
        <p>
          We're happy to welcome you between {open}:00 and {close}:00.
        </p>
      )}
    </footer>
  );
}

function Order({ closeHour, openHour }) {
  return (
    <div className="order">
      <p>
        We're open from {openHour}:00 to {closeHour}:00. Come visit us or order
        online.
      </p>
      <button className="btn">Order</button>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
