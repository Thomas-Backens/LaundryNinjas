import React from "react";
import "./styles.css";

export default function HowItWorks() {
  return (
    <div id="howToContent">
      <div>
        <h2>How does it work?</h2>
        <ul id="steps">
          <li>Step 1.) Complete sign up.</li>
          <li>
            Step 2.) Wait for your Laundry Ninjas clothing bag to arrive (within
            24 hours after sign-up).
          </li>
          <li>Step 3.) Schedule a pick up.</li>
          <li>
            Step 4.) Fill your Laundry Ninjas bag with dirty laundry, and set
            outside your front door on your scheduled pick up day.
          </li>
        </ul>
        <p id="simple">
          I will collect your bag; sort, wash, dry, fold and deliver your clean
          laundry the next day. It's that simple!
        </p>
        <h2>How much does it cost?</h2>
        <p id="rate">
          Current rate as of January 2023 is $1.50 per pound. Your Laundry
          Ninjas bag of dirty laundry will be weighed using a luggage scale, and
          billed accordingly. There is a one-time flat service fee of $10 that
          will be added to your first order. Payment is due before clean laundry
          is delivered back to your home.
        </p>
      </div>
    </div>
  );
}
