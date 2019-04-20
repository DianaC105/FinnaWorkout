// import React from "react";
// import "./style.css";

// function Jumbotron({ children }) {
//   return (
//     <div
//       style={{ height: 300, clear: "both", paddingTop: 120, textAlign: "center" }}
//       className="jumbotron"
//     >
//     HIII Bitches
//       {children}
//     </div>
//   );
// }

// export default Jumbotron;

import React from 'react';
import { Jumbotron, Container } from 'reactstrap';
import "./style.css";

const Jumbo = (props) => {
  return (
    <div>
      <Jumbotron fluid>
        <Container fluid>
          <h1 className="display-3">FinnaWorkout</h1>
          <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Jumbo;