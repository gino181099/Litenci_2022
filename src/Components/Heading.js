import React from "react";
import Design from "../Assets/design.jpg";

export default Heading = () => {
  return (
    <div className="heading">
      <div className="content__heading">
        <p className="big">Web</p>
        <p className="text__content">
          Brindamos servicios de diseño y desarrollo que no solo aumentarán la
          visibilidad y los ingresos de su empresa, sino que también le
          ahorrarán tiempo y recursos.
        </p>
      </div>
      <div className="marquee__heading">
        <p className="big">experiences</p>
        <p className="big">experiences</p>
        <p className="big">experiences</p>
        <p className="big">experiences</p>
      </div>
      <div className="design__heading">
        <p className="big">design</p>
        <img src={Design} />
      </div>
    </div>
  );
};
