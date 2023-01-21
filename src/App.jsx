import "./App.css";
import Products from "./components/ProductsObj/Products";
import Nav from "./components/Nav/Nav";

function App() {
  return (
    <>
      <Nav />
      <div className="App">
        <Products/> 
      </div>
    </>
  );
}

export default App;
