import React, { useState } from "react";
import moment from "moment";
import { Lightbox } from "react-modal-image";
import "./ResultComponent.css";

/**
 * This component will create the result data
 * each result has an image and description
 * It will be clickable, and open modal with the
 * full image result
 * @param {*} props contains the result data
 */
function ResultComponent(props) {
  const { result } = props;

  //#region states
  const [modalOpen, setModalOpen] = useState(false);
  //#endregion

  return result ? (
    <div className="result">
      <img
        id="myImg"
        title="click to see full image"
        className="thumb-nail"
        src={result.links[0].href}
        alt="N/A"
        onClick={() => setModalOpen(true)}
      />
      {/* modal component */}
      {modalOpen && (
        <Lightbox
          hideZoom
          large={result.links[0].href}
          alt={result.data[0].title}
          onClose={() => setModalOpen(false)}
        />
      )}
      <div className="result-description">
        <button
          title="click to see full image"
          className="button-link"
          onClick={() => setModalOpen(true)}
        >
          {result.data[0].title}
        </button>
        <br />
        <span className="time-detail">
          {moment(result.data[0].date_created, "YYYY-MM-DDTHH:mm:ssZ").format(
            "ddd, DD MMM YYYY HH:mm:ss Z"
          )}
        </span>
      </div>
    </div>
  ) : (
    result === null && <span>No Results Found</span>
  );
}

export default ResultComponent;
