import "./App.css";
import "./index.css";
const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

const Pizza = (props) => {
  return (
    <li className="pizza">
      <img src={props.photoName} alt={props.name} />
      <div>
        <h2>{props.name}</h2>
        <p>{props.ingredient}</p>
        <p>{props.price}</p>
      </div>
    </li>
  );
};

const Header = () => {
  return (
    <header className="header">
      <h1>Fast React Pizza Co.</h1>
    </header>
  );
};

const Menu = () => {
  const pizzas = pizzaData;
  // const pizzas = [];
  const numPizzas = pizzas.length;
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      <ul className="pizzas">
        {numPizzas > 0 ? (
          pizzas.map((pizza) => (
            <Pizza
              name={pizza.name}
              ingredient={pizza.ingredients}
              photoName={pizza.photoName}
              price={pizza.price}
            />
          ))
        ) : (
          <p>No Pizzas Available</p>
        )}
      </ul>
    </main>
  );
};

const Footer = () => {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  return (
    <div>
      <footer className="footer">
        {isOpen ? (
          <div className="order">
            <p>We are open until {closeHour}</p>
            <button className="btn">Order</button>
          </div>
        ) : (
          <p>
            We are happy to welcome you between {openHour}:00 and {closeHour}:00
          </p>
        )}
      </footer>
    </div>
  );
};

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

export default App;
