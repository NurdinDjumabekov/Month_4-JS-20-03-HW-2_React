import "./Product.css";

function Product({ product }) {
  return (
    <div className={product.class}>
      <h2 className={product.clas}>Phone:{product.name}</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet commodi
        expedita hic minima minus odio quo quos sequi veniam vero?
      </p>
      <span className={product.clas}>Цена: {product.price}</span>
      <a href="https://www.apple.com/iphone-14/">
        <img src={product.url} className="imgs" alt="" />
      </a>
      <div className="btn">
        <button>basket</button>
      </div>
    </div>
  );
}

export default Product;
