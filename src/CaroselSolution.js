import React, { useEffect, useState } from "react";
//import "./carousel.scss";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

let images = [
    "https://images.unsplash.com/photo-1517423738875-5ce310acd3da?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZnVubnl8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1505628346881-b72b27e84530?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fGZ1bm55fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
     "https://images.unsplash.com/photo-1558237316-d4762d4b8ce7?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzF8fGZ1bm55fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
    ];

function CarouselExample() {
  const [index, setIndex] = useState(0);
  const [imageUrl, setImageUrl] = useState(undefined);
  const [vhLeft, setVhLeft] = useState("");
  const [vhRight, setVhRight] = useState("");

  useEffect(() => {
    if (index === 0) setVhLeft("arrowInvisible");
    else setVhLeft("");
    if (index === images.length - 1) setVhRight("arrowInvisible");
    else setVhRight("");
    let image = images[index];
    setImageUrl(image);
  }, [index]);

  function handleLeft() {
    console.log("left");
    if (index > 0) {
      console.log("left invoked");
      setIndex(index - 1);
    }
  }

  function handleRight() {
    console.log("right");
    if (index < images.length - 1) {
      console.log("right invoked");
      setIndex(index + 1);
    } else {
    }
  }

  return (
    <div id="carousel-main">
      
        <div id="photoContainer">
          <img id="photo" src={imageUrl} alt="project pics" />
        </div>
        <div id="carousel">
        <div id="leftNav">
          <div className={`${vhLeft}`} onClick={() => handleLeft()}>
            <ArrowBackIosIcon />
          </div> <br></br>
        </div>{" "}
        <div id="rightNav">
          <div className={`${vhRight}`} onClick={() => handleRight()}>
            <ArrowForwardIosIcon />
          </div>
        </div>{" "}
      </div>{" "}
      <div className="imageNumber">
        {" "}
        {index + 1} - {images.length}{" "}
      </div>
    </div>
  );
}

export default CarouselExample;