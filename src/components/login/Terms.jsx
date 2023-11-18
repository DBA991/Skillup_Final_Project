import React from "react";
import {
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBBtn,
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";

function Terms() {
  return (
    <MDBContainer className="p-3 my-5 d-flex flex-column w-50">
      <MDBCard>
        <MDBCardBody>
          <MDBCardTitle className="fw-bold">Subscription</MDBCardTitle>
          <MDBCardText>
            <p>
              Arrr, me heartie! Ye be seekin' the Terms and Conditions of this
              digital pirate cove, aye? Well, strap in and prepare for a
              seafarin' adventure through the code-infested waters. Mind ye,
              this be a bit of humorous jest, so heed these terms with a smile
              as wide as the seven seas! <br />
              <br />
              Preamble: The Pirate's Code <br />
              1. Introduction to the High Seas: This website, henceforth
              referred to as "The Ship," welcomes ye to sail its digital waters.
              By hoisting the anchor and setting foot on deck, ye be agreeing to
              these terms and joining our merry crew. <br />
              2. Pirate's Attire: Fancy hats and eye patches be optional, but
              encouraged. Parrots on the shoulder may be subject to squawks of
              approval. <br />
              3. Booty and Plunder: All the shiny treasures on this site,
              including witty quips, hilarious gifs, and clever code, belong to
              The Ship. Unauthorized use may result in a plank walkin'. <br />
              4. Yarrrrrr, Cookies: We use cookies to keep the ship runnin'
              smoothly. No actual biscuits, but these digital ones won't crumble
              in yer pockets. <br />
              5. Shanties and Sea Chants: The crew may break into song at any
              given moment. Feel free to join in, or cover yer ears if ye prefer
              silence. <br />
              6. Navigatin' Through Stormy Code: In the event of rough seas and
              technical glitches, send a message in a bottle or summon our
              mystical mermaids (customer support) to guide ye through. <br />
              7. Sea Monsters and Krakens: Beware of the digital sea monsters
              lurking in the shadows. We take no responsibility for lost limbs
              or hats in the process. <br />
              8. Code of Conduct: Any scurvy behavior, mutiny, or attempt at
              walking the plank without proper authorization will result in a
              banishment to Davy Jones' locker. <br />
              9. X Marks the Spot: Hidden treasures and secret codes lie in
              wait. Discover them to earn yer place among the legendary
              scallywags. <br />
              10. Pirate's Parley: If ye have grievances or be feelin' lost at
              sea, signal us with the Jolly Roger or send a message via the
              ship's crow (contact form). <br />
              <br />
              Final Words: A Toast to the Pirate's Life <br />
              By acceptin' these terms, ye pledge allegiance to a life of
              laughter, adventure, and the occasional yo-ho-ho. May yer sails be
              ever full, and yer compass point true as we navigate these digital
              seas together! Yo ho <br />
              ho, and a bottle of rum! 🏴‍☠️
            </p>
          </MDBCardText>
          <Link to="/login">
            <MDBBtn color="primary">Return to the registration form</MDBBtn>
          </Link>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
  );
}

export default Terms;
