import React, { useState } from "react";
import "./HomePage.css";
import ResultComponent from "./ResultComponent";
import { get } from "axios";

/**
 * This component creates the Home Search
 */
function HomePage() {
  //#region states
  const [searchStr, setSearchStr] = useState("");
  const [currResult, setCurrResult] = useState();
  const [loading, setLoading] = useState(false);
  const [numResults, setNumResults] = useState();
  //#endregion

  /**
   * query the image using the user's search input
   * @param {*} e search event
   */
  const queryImages = (e) => {
    setLoading(true);
    e.stopPropagation();
    e.preventDefault();

    // url to get the images
    get(`http://images-api.nasa.gov/search?media_type=image&q=${searchStr}`)
      .then(({ data }) => {
        // set the image data (only the first one)
        setCurrResult(data.collection.items?.[0] ?? null);
        setLoading(false);
        setNumResults(data.collection.metadata.total_hits ?? 0);
      })
      .catch((error) => {
        alert("Error occured with search. Try again.");
      });
  };

  return (
    <div className="home-page">
      <div className="form">
        <form className="register-form" onSubmit={queryImages}>
          <label>NASA Image Search</label>
          <input
            value={searchStr}
            type="search"
            placeholder="Search for images..."
            onChange={(event) => setSearchStr(event.target.value)}
          />
          <button type="submit">Go</button>
        </form>
        {/* query may take a while, so it is good to show loading state */}
        {loading && <span>Loading...</span>}
        {numResults && (
          <div className="number-results">
            Showing 1 of {numResults} results
          </div>
        )}
        {!loading && <ResultComponent result={currResult} />}
      </div>
    </div>
  );
}

export default HomePage;
