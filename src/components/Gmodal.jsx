import React from "react";

export default function Gmodal({ setModal }) {
  setTimeout(() => {
    setModal(false);
  }, 1000 * 10);
  return (
    <div className="mmodal">
      <div className="ov">
        <h1>Welcome</h1>
        <p className="g-one">Guess the word 👍</p>
        <p className="g-two">Guess a hidden word in a (six) of tries</p>

        <div className="wrapper">
          <div className="color-flex">
            <span className="c-green"></span>
            <p className="c-word">Green</p>
          </div>
          <div className="color-flex">
            <span className="c-yellow"></span>
            <p className="c-word">Yellow</p>
          </div>
          <div className="color-flex">
            <span className="c-gray"></span>
            <p className="c-word">Gray</p>
          </div>
        </div>
        <p className="guide">
          Green
          <span>: Denotes correct letter in right position.</span>
        </p>
        <p className="guide">
          Yellow
          <span>: Denotes correct letter in wrong position.</span>
        </p>
        <p className="guide">
          Gray<span>: Letter not in the correct word.</span>
        </p>
        <button className="btn" onClick={() => setModal(false)}>
          close
        </button>
      </div>
    </div>
  );
}
