import React from "react";
import PropTypes from "prop-types";
import "./style.scss";
Album.propTypes = {
  album: PropTypes.object.isRequired,
};

function Album({ album }) {
  const { title, thumbnailUrl, listThumbUrl } = album;
  return (
    <div className="album">
      <img src={thumbnailUrl} alt="#" />
      <div className="album__content">
        <p>{title}</p>
        <div className="album__childImg">
          {listThumbUrl.map((imgUrl) => (
            <img
              key={imgUrl}
              className="album__childImg__item"
              src={imgUrl}
              alt="#"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Album;
