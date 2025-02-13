import React, { useEffect, useState } from "react";

export default function Keypad({ usedKeys }) {
  const [letters, setLetters] = useState(null);

  const handlepress = (letter) => {
    const event = new KeyboardEvent("keydown", {
      key: letter,
      code: `Key${letter}`,
      bubbles: true,
    });
    document.dispatchEvent(event);
    console.log(letter);
  };

  useEffect(() => {
    fetch("https://tvapple.vercel.app/api/letters")
      .then((res) => res.json())
      .then((json) => {
        setLetters(json);
      });
  }, []);

  return (
    <div className="keypad">
      {letters &&
        letters.map((l) => {
          const color = usedKeys[l.value];
          return (
            <div
              key={l.value}
              className={color}
              onClick={() => handlepress(l.value)}
            >
              {l.value}
            </div>
          );
        })}
    </div>
  );
}
