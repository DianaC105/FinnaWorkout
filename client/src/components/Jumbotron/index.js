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
// import { Jumbotron, Container } from 'reactstrap';
import "./style.css";

function Jumbotron({children}) {
  return (
    <div
      style={{ height: 300, clear: "both", paddingTop: 120, textAlign: "center", backgroundImage:"https://images.pexels.com/photos/669580/pexels-photo-669580.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" }}
      className="jumbotron"
    >
    <h1>FinnaWorkOUT</h1>
      {children}
    </div>
  );
};

export default Jumbotron;

// class Jumbotron extends Component {

//   State={
//     var wrapperEl = document.querySelector('.wrapper');
//     var numberOfEls = 90;
//     var duration = 6000;
//     var delay = duration / numberOfEls;
//     var tl = anime.timeline({
//   duration: delay,
//   complete: function complete() {
//     tl.restart();
//   }
// });

// function createEl(i) {
//   var el = document.createElement('div');
//   var rotate = 360 / numberOfEls * i;
//   var translateY = -50;
//   var hue = Math.round(360 / numberOfEls * i);
//   el.classList.add('el');
//   el.style.backgroundColor = 'hsl(' + hue + ', 40%, 60%)';
//   el.style.transform = 'rotate(' + rotate + 'deg) translateY(' + translateY + '%)';
//   tl.add({
//     begin: function begin() {
//       anime({
//         targets: el,
//         backgroundColor: ['hsl(' + hue + ', 40%, 60%)', 'hsl(' + hue + ', 60%, 80%)'],
//         rotate: [rotate + 'deg', rotate + 10 + 'deg'],
//         translateY: [translateY + '%', translateY + 10 + '%'],
//         scale: [1, 1.25],
//         easing: 'easeInOutSine',
//         direction: 'alternate',
//         duration: duration * .1
//       });
//     }
//   });
//   wrapperEl.appendChild(el);
// }

// ;

// for (var i = 0; i < numberOfEls; i++) {
//   createEl(i);
// }
//   }
// }

// export default Jumbotron;
