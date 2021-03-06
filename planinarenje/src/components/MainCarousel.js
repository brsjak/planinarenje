import React from "react";

export function MainCarousel() {
  const overlay = {
    position: "absolute",
    left: "0",
    top: "0",
    height: 100,
    width: "100%",
    zIndex: -1,
    content: "",
    background: "rgba(51, 51, 51, 0.66)",
    filter: "blur(4px)"
  };
  const overlayFull = {
    position: "absolute",
    left: "0",
    top: "0",
    right: "0",
    bottom: "0",
    zIndex: -1,
    content: "",
    background: "rgba(51, 51, 51, 0.33)",
    filter: "blur(4px)"
  };

  return (
    <div className="p-0 m-0">
      <section id="hero1-2" className="hero bg-video video-play">
        <div
          style={{
            position: "absolute",
            zIndex: "-1",
            inset: "0px",
            overflow: "hidden",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "50% 50%",
            backgroundImage: "none"
          }}
        >
          <video
            autoPlay
            muted
            loop
            style={{
              margin: "auto",
              position: "absolute",
              zIndex: "-1",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              visibility: "visible",
              width: "100%",
              height: "auto"
            }}
          >
            <source src={require("../SLIKI/hero-video.mp4")} type="video/mp4" />
            <source
              src={require("../SLIKI/hero-video.mp4")}
              type="video/webm"
            />
            <source src={require("../SLIKI/hero-video.mp4")} type="video/ogg" />
          </video>
        </div>
        <div className="overlay" style={overlay}></div>
        <div className="overlay" style={overlayFull}></div>
        <div
          className="container vertical-center-rel"
          style={{ marginTop: "15%" }}
        >
          <div className="row mt-5">
            <div className="col-md-7">
              <h1 className="text-white p-t-md" style={{ fontWeight: "700" }}>
                ПОЧУСТВУВАЈТЕ ЈА АВАНТУРАТА
              </h1>
              <p className="lead text-white m-b-md ">
                Станете дел од најголемата заедница за планинарење во Република Македонија.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
