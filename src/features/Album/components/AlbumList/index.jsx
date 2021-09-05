import React from "react";
import PropTypes from "prop-types";
import Album from "../Album/Album";

AlbumList.propTypes = {
  albumList: PropTypes.array.isRequired,
};

function AlbumList({ albumList }) {
  return (
    <div>
      {albumList.map((album) => (
        <Album key={album.id} album={album} />
      ))}
    </div>
  );
}

export default AlbumList;
