import React from "react";
import { PiFirstAidFill, PiArrowDownBold } from "react-icons/pi";

const Description = ({ onQuant, onAdd, onRemove, onSetOrderedQuant }) => {
  return (
    <section className="description">
      <p className="pre">
        First Imdaad Box <u style={{ color: "#f96d6d" }}>alternative</u> to
        First aid{" "}
      </p>
      <h1>
        {/* <PiFirstAidFill /> */}
        all your first aid necessities
      </h1>
      <p className="desc">
        Designed to provide peace of mind, the First Imdaad Box is an ideal fit
        for homes, offices, vehicles, and outdoor excursions. Its compact and
        user-friendly design ensures easy accessibility during critical moments,
        empowering you to act promptly in times of need.
      </p>
      <div className="price">
        <div className="main-tag">
          <p>1500 Rs.</p>
          <p>50%</p>
        </div>
        <s>3000 Rs.</s>
      </div>
      <div className="buttons">
        {/* <QuantityButton onQuant={onQuant} onRemove={onRemove} onAdd={onAdd} /> */}
        <button
          className="add-to-cart"
          style={{ background: "#f96d6d", color: "#fff" }}
        >
          {/* <CartIcon /> */}
          <PiFirstAidFill style={{ color: "#fff" }} />
          Order now
        </button>
        <button
          className="add-to-cart"
          onClick={() => {
            onSetOrderedQuant(onQuant);
          }}
        >
          {/* <CartIcon /> */}
          Explore Imdaad Box <PiArrowDownBold />
        </button>
      </div>
    </section>
  );
};

export default Description;
