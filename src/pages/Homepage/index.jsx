import React from "react";
import "./styles.css";

export default function Homepage() {
  return (
    <div id="content">
      <div id="top">
        <button className="contentBtn">SCHEDULE A PICKUP</button>
      </div>
      <div id="bottom">
        <h6>About Me</h6>
        <div className="section">
          <img
            src="/Laundry Wave.webp"
            alt="a woman about to be devoured by a wave of laundry"
          />
          <div className="info">
            <h6>What I offer</h6>
            <p>
              Set your bag(s) of laundry outside your front door. I will pick it
              up, sort, wash, dry, fold, and deliver the next business day.
            </p>
          </div>
        </div>
        <div className="section">
          <div className="info">
            <h6>Who I am</h6>
            <p>
              I am a stay at home mother, blessed with 16 biological children.
              I've always had a love for doing laundry, which turned out to be
              quite handy with so many kids!
            </p>
          </div>
          <img
            src="/Flooding Washer.webp"
            alt="a washer exploding with water and bubbles, flooding the room"
          />
        </div>
        <div className="section">
          <img
            src="/Calm Beach Meditation.webp"
            alt="a woman meditating on the beach in summer morning as the sun rises"
          />
          <div className="info">
            <h6>Enjoy life, not laundry</h6>
            <p>
              Let us do the work for you, while you enjoy life to its fullest!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
