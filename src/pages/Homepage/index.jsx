import { React } from "react";
import "./styles.css";
import { Link } from "react-router-dom";

export default function Homepage() {
  return (
    <div id="homeRoot">
      <div id="header">
        <img src="/washer.png" alt="a washing room" />
        <div>
          <div id="headerContent">
            <h1>Local family owned and operated laundry service</h1>
            <button class="fillBtn">
              Schedule pickup
              <img className="btnArrow" src="/right-arrow.png" />
            </button>
          </div>
        </div>
      </div>
      <div id="services">
        <h2>SERVICES</h2>
        <div class="topic">
          <h6>Full Laundry Service</h6>
          <p>
            (sort, wash, dry, & fold) laundry with pick up and delivery
            included. (Items may be hung on hangers, upon request.)
          </p>
        </div>
        <div class="topic">
          <h6>You never have to leave your home</h6>
          <p>
            Place your order and let all your worries disappear! I’ll pickup
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
          <h6 id="aboutmeTag">About me</h6>
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
        <div id="aboutImg">
          <img src="/Mask group.png" alt="background mask style" id="maskImg" />
          <img src="/Family portrait.png" alt="Family portrait" />
        </div>
      </div>
      <div id="enjoy">
        <div id="enjoyImg">
          <img src="/Mask group.png" alt="background mask style" id="maskImg" />
          <img src="/Folding laundry.png" alt="Person folding laundry" />
        </div>
        <div id="enjoyContent">
          <h2>
            Life is short.<br></br>Spend your time doing things you enjoy.
          </h2>
          <p>
            If you're the type of person that hates doing laundry, or simply
            don't have the time, let me help you!<br></br>
            There's no commitment required.<br></br>
            You can use my services for weekly reoccurring laundry, or simply a
            one-time catch-up.
          </p>
          <button class="fillBtn">
            Schedule pickup
            <img className="btnArrow" src="/right-arrow.png" />
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

  // return (
  //   <div id="content">
  //     <div id="top">
  //       <Link to="/schedule">
  //         <button className="contentBtn">SCHEDULE A PICKUP</button>
  //       </Link>
  //     </div>
  //     <div id="bottom">
  //       <h6>About Me</h6>
  //       <div className="section">
  //         <img
  //           src="/Laundry Wave.webp"
  //           alt="a woman about to be devoured by a wave of laundry"
  //         />
  //         <div className="info">
  //           <h6>What I offer</h6>
  //           <p>
  //             Full service (sort, wash, dry, & fold) laundry with pick up and
  //             delivery included. (Items may be hung on hangers, upon request.)
  //             You never have to leave your house!<br></br>
  //             <br></br>
  //             Your items are laundered and cared for as if they were my own. I
  //             strive to please, and will communicate throughout the process to
  //             make sure your needs are met. (Please note: dry cleaning services
  //             are not available.)
  //           </p>
  //         </div>
  //       </div>
  //       <div className="section">
  //         <div className="info">
  //           <h6>Who I am</h6>
  //           <p>
  //             I am not a professional. I'm just a local stay-at-home mom blessed
  //             with 16 biological children, seeking extra income doing what I
  //             enjoy. My favorite hobbies include organizing, doing laundry (of
  //             course), and refinishing furniture.<br></br>
  //             <br></br>I hope to gain enough customers to allow my stay-at-home
  //             daughters to earn supplemental income as well, while caring for
  //             their children.
  //           </p>
  //         </div>
  //         <img
  //           src="/Flooding Washer.webp"
  //           alt="a washer exploding with water and bubbles, flooding the room"
  //         />
  //       </div>
  //       <div className="section">
  //         <img
  //           src="/Calm Beach Meditation.webp"
  //           alt="a woman meditating on the beach in summer morning as the sun rises"
  //         />
  //         <div className="info" style={{ marginTop: -20 }}>
  //           <h6 style={{ marginBottom: 80 }}>
  //             Life is short.<br></br>Spend your time doing things you enjoy.
  //           </h6>
  //           <p>
  //             If you're the type of person that hates doing laundry, or simply
  //             don't have the time, let me help you!<br></br> There's no
  //             commitment required.<br></br> You can use my services for weekly
  //             reoccurring laundry, or simply a one-time catch-up.<br></br>
  //             <br></br>
  //             Click on the “Schedule Pickup” tab above to get started!
  //           </p>
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // );
}
