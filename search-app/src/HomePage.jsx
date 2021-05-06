import "./HomePage.css";

function HomePage() {
  return (
    <div className="home-page">
      <div className="form">
        <form className="register-form">
          <label>NASA Image Search</label>
          <div style={{ display: "inherit" }}>
            <input type="search" placeholder="Search for images..." />
            <button type="submit">Go</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default HomePage;
