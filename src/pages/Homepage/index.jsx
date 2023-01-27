import { React } from "react";
import "./styles.css";
// import { Link } from "react-router-dom";

export default function Homepage() {
  return (
    <div
      id="homeRoot"
      style={{
        backgroundImage: "url('/noise filled.png')",
        backgroundRepeat: "repeat",
      }}
    >
      <div id="header">
        <div
          id="headerBorderCover"
          style={{
            backgroundImage: "url('/noise filled.png')",
            backgroundRepeat: "repeat",
          }}
        />
        <img src="/washer.png" alt="a washing room" />
        <div>
          <div
            id="headerContent"
            style={{
              backgroundImage: "url('/noise filled.png')",
              backgroundRepeat: "repeat",
            }}
          >
            <div id="headerBorder" />
            <p id="headerTag">ALL-IN-ONE LAUNDRY SERVICE</p>
            <h1>Local family owned and operated laundry service</h1>
            <button class="fillBtn">
              Schedule pickup
              <img className="btnArrow" src="/right-arrow.png" alt="arrow" />
            </button>
          </div>
        </div>
        <div id="subheaders">
          <p class="subheader">
            <img src="/checkmark.png" alt="checkmark" />
            Stay in the comfort of your home
          </p>
          <p class="subheader">
            <img src="/checkmark.png" alt="checkmark" />
            Easy schedule & pickup
          </p>
          <p class="subheader">
            <img src="/checkmark.png" alt="checkmark" />
            Get caught up on your life
          </p>
        </div>
      </div>
      <div id="services">
        <h2>SERVICES</h2>
        <div class="topic">
          <div class="topicLine" />
          <h6>Full Laundry Service</h6>
          <p>
            (sort, wash, dry, & fold) laundry with pick up and delivery
            included. (Items may be hung on hangers, upon request.)
          </p>
        </div>
        <div class="topic">
          <div class="topicLine" />
          <h6>Never leave your home</h6>
          <p>
            Place your order and let all your worries disappear! I'll pickup
            your laundry, and drop it off.
          </p>
        </div>
        <div id="topicHeader">
          <h6>What I offer</h6>
          <p>
            Your items are laundered and cared for as if they were my own.
            <br></br>I strive to please, and will communicate throughout the
            process to make sure your needs are met.<br></br>(Please note: dry
            cleaning services are not available.)
          </p>
        </div>
      </div>
      <div id="about">
        <h2>ABOUT</h2>
        <div id="aboutContent">
          <h6 id="aboutmeTag">ABOUT ME</h6>
          <h2>Who I am</h2>
          <p>
            I am not a professional. I'm just a local stay-at-home mom blessed
            with 16 biological children, seeking extra income doing what I
            enjoy. My favorite hobbies include organizing, doing laundry (of
            course), and refinishing furniture.<br></br>
            <br></br>I hope to gain enough customers to allow my stay-at-home
            daughters to earn supplemental income as well, while caring for
            their children.
          </p>
        </div>
        <img id="aboutImg" src="/Family portrait.png" alt="Family portrait" />
      </div>
      <div id="enjoy">
        <h2>BENEFITS</h2>
        <img
          id="enjoyImg"
          src="/Folding laundry.png"
          alt="Person folding laundry"
        />
        <div id="enjoyContent">
          <h6 id="enjoyTag">LIFE IS SHORT</h6>
          <h2>Spend your time doing things you enjoy.</h2>
          <p>
            If you're the type of person that hates doing laundry, or simply
            don't have the time, let me help you! There's no commitment
            required. You can use my services for weekly reoccurring laundry, or
            simply a one-time catch-up.
          </p>
          <button class="fillBtn">
            Schedule pickup
            <img className="btnArrow" src="/right-arrow.png" alt="arrow" />
          </button>
        </div>
      </div>
    </div>
  );

  // useEffect(() => {
  // fetch("api/users.js")
  //   .then((response) => response.json())
  //   .then((user_data) => console.log(user_data.data));
  // var responseClone;
  // fetch("api/user.js")
  //   .then(function (response) {
  //     responseClone = response.clone();
  //     return response.json();
  //   })
  //   .then(
  //     function (data) {
  //       console.log(data);
  //     },
  //     function (rejectionReason) {
  //       console.log(
  //         "Error parsing JSON from response:",
  //         rejectionReason,
  //         responseClone
  //       );
  //       responseClone.text().then(function (bodyText) {
  //         console.log(
  //           "Received the following instead of valid JSON:",
  //           bodyText
  //         );
  //       });
  //     }
  //   );
  // }, []);
}
