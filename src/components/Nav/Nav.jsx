import "./Nav.css";

function Nav() {
  const i = (f) => {
    input = f.target.value;
    console.log(f.target.value);
  };

  return (
    <>
      <div className="nav">
        <h2>Apple</h2>
        <input
          type="text"
          className="inp"
          name="post"
          placeholder="Search"
          onChange={i}
        />
        <button className="btnn">Search</button>
      </div>
    </>
  );
}

export default Nav;
