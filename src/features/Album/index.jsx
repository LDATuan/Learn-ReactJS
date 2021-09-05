import React from "react";
import PropTypes from "prop-types";
import AlbumList from "./components/AlbumList";

AlbumFeature.propTypes = {};

function AlbumFeature() {
  const albumList = [
    {
      id: 1,
      title: "DRIVING",
      thumbnailUrl:
        "https://photo-zmp3.zadn.vn/cover/2/e/9/6/2e966bf47b1989fdff7149c7a1b0f25e.jpg",
      listThumbUrl: [
        "https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/8/7/0/d/870d10b42c9428b49de58543541dc74a.jpg",
        "https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/a/1/f/9/a1f9a241b3160760e93ced0330e0f0b3.jpg",
        "https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/6/6/b/5/66b577a28360d8325346993f50fed582.jpg",
      ],
    },
    {
      id: 2,
      title: "SPA-YOGA",
      thumbnailUrl:
        "https://photo-zmp3.zadn.vn/cover/d/0/d/7/d0d772a6c3e35b3e768d5c3ebf644ecd.jpg",
      listThumbUrl: [
        "https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/6/7/0/f/670f2846fbafcd6cac859fc35debaa98.jpg",
        "https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/f/f/0/c/ff0c7e32e0e2cb133839ab14cda1f377.jpg",
        "https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/f/5/5/4/f5544d2947e814adeb5bcf43cc767b68.jpg",
      ],
    },
    {
      id: 3,
      title: "RELAX",
      thumbnailUrl:
        "https://photo-zmp3.zadn.vn/cover/0/f/d/1/0fd1da7445b21a752a1c4282b06f2cf0.jpg",
      listThumbUrl: [
        "https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/4/4/6/9/446986d77e500272ef59d8747ea1ae6a.jpg",
        "https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/5/4/2/0/5420f218e43677a7ceb74e305945c390.jpg",
        "https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/d/8/b/c/d8bc440bc14d854b3ca98819b6619ddf.jpg",
      ],
    },
    {
      id: 4,
      title: "TRAVEL",
      thumbnailUrl:
        "https://photo-zmp3.zadn.vn/cover/e/3/d/4/e3d43659c6dc756f87f4e44220313f92.jpg",
      listThumbUrl: [
        "https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/c/0/1/3/c01338d95f095138c7aac4fbd221b4a4.jpg",
        "https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/b/c/8/5/bc851d955b666a5fd2ce87463dbdbb4a.jpg",
        "https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/b/9/9/1/b99110c674403276be34e4a18feb7d4c.jpg",
      ],
    },
  ];
  return (
    <div>
      <AlbumList albumList={albumList} />
    </div>
  );
}

export default AlbumFeature;
