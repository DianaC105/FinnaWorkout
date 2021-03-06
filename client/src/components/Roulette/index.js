import React from 'react';
import PropTypes from 'prop-types';
import "./style.css";

class Roulette extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //chestWorkout: this.props.chestWorkouts,
      spinAngleStart: 0,
      startAngle: 0,
      spinTime: 0,
      arc: Math.PI / (props.options.length / 2),
      //refinedOptions:[]

    }
    this.spinTimer = null;
    this.handleOnClick = this.handleOnClick.bind(this);
    this.spin = this.spin.bind(this);
    this.rotate = this.rotate.bind(this);
  }

  static propTypes = {
    className: PropTypes.string,
    options: PropTypes.array,
    baseSize: PropTypes.number,
    spinAngleStart: PropTypes.number,
    spinTimeTotal: PropTypes.number,
    onComplete: PropTypes.func,
  };

  static defaultProps = {
    
    options:  ['item1', 'item2','item3','item4','item5'],
    baseSize: 250,
    spinAngleStart: Math.random() * 10 + 10,
    spinTimeTotal: Math.random() * 3 + 4 * 1000,
  };

  componentDidMount() {
    // console.log("is this Mounted")
    this.drawRouletteWheel();
    
  }

  byte2Hex(n) {
    const nybHexString = '7c9a34C23';
    return String(nybHexString.substr((n >> 4) & 0x0F,1)) + nybHexString.substr(n & 0x0F,1);
  }

  RGB2Color(r,g,b) {
  	return '#' + this.byte2Hex(r) + this.byte2Hex(g) + this.byte2Hex(b);
  }

  getColor(item, maxitem) {
    const phase = 0;
    const center = 128;
    const width = 128;
    const frequency = Math.PI*2/maxitem;

    const red   = Math.sin(frequency*item+2+phase) * width + center;
    const green = Math.sin(frequency*item+0+phase) * width + center;
    const blue  = Math.sin(frequency*item+4+phase) * width + center;

    return this.RGB2Color(red,green,blue);
  }
  // midPointArray(twoDArray, i){ 
  //   for(let j =0; j <twoDArray.length; j++){ 
  //     console.log([i], "check")
  //     console.log(this.props.options[i], "")
  //    let refined =  this.state.refinedOptions.push(this.props.options[i][j].name )
  //     console.log(refined);
  //   }
  // }

//WordWrapped
wordWrap(context, text, x, y, lineHeight, fitWidth) {
  fitWidth = fitWidth || 0;
  if (fitWidth <= 0) {
      context.fillText(text, x, y);
      return;
  }
  var words = text.split(' ');
  var currentLine = 0;
  var idx = 1;
  while (words.length > 0 && idx <= words.length) {
      var str = words.slice(0, idx).join(' ');
      var w = context.measureText(str).width;
      if (w > fitWidth) {
          if (idx === 1) {
              idx = 2;
          }
          context.fillText(words.slice(0, idx - 1).join(' '), x, y + (lineHeight * currentLine));
          currentLine++;
          words = words.splice(idx - 1);
          idx = 1;
      }
      else { idx++; }
  }
  if (idx > 0)
      context.fillText(words.join(' '), x, y + (lineHeight * currentLine));
}


  drawRouletteWheel() {
    const { options, baseSize } = this.props;
    let { startAngle, arc } = this.state;


    // const spinTimeout = null;
    // const spinTime = 0;
    // const spinTimeTotal = 0;

    let ctx;

    const canvas = this.refs.canvas;
    if (canvas.getContext) {
      // const outsideRadius = baseSize - 25;
      // const textRadius = baseSize - 45;
      // const insideRadius = baseSize - 55;

      const outsideRadius = baseSize - 20;
      const textRadius = baseSize - 100;
      const insideRadius = 100;
      
      ctx = canvas.getContext('2d');
      ctx.clearRect(0,0,600,600);
      
      ctx.strokeStyle = 'white';
      ctx.lineWidth = 2;
      
      ctx.font = '20px Work Sans, sans-serif';
      
      for(let i = 0; i < options.length; i++) {
        const angle = startAngle + i * arc;
        
        ctx.fillStyle = this.getColor(i, options.length);
        
        ctx.beginPath();
        ctx.arc(baseSize, baseSize, outsideRadius, angle, angle + arc, false);
        ctx.arc(baseSize, baseSize, insideRadius, angle + arc, angle, true);
        ctx.fill();
        
        ctx.save();
        ctx.fillStyle = 'white';
        ctx.translate(baseSize + Math.cos(angle + arc / 2) * textRadius,
        baseSize + Math.sin(angle + arc / 2) * textRadius);
        ctx.rotate(angle + arc / 2 + Math.PI / 2);
        const text = options[i];
        this.wordWrap (ctx,text, -37.5, -15, 15,50)
        // ctx.fillText(text, -ctx.measureText(text).width / 2, 0);
        ctx.restore();
        // this.midPointArray(options, i)

        // console.log(this.midPointArray(options,i),"Is this function being called")
      }
      //Arrow
      ctx.fillStyle = 'Yellow';
      ctx.beginPath();
      ctx.lineTo(baseSize + 10, baseSize - (outsideRadius + 20));
      ctx.lineTo(baseSize + 0, baseSize - (outsideRadius - 5));
      ctx.lineTo(baseSize - 10, baseSize - (outsideRadius + 20));
      ctx.fill();
      ctx.stroke();
    }
  }
  

  spin() {
    this.spinTimer = null;
    this.setState({ spinTime: 0}, () => this.rotate());
  }

  rotate(){
    const { spinAngleStart, spinTimeTotal } = this.props;
    if(this.state.spinTime > 2800) {
      clearTimeout(this.spinTimer);
      this.stopRotateWheel();
    } else {
      const spinAngle = spinAngleStart - this.easeOut(this.state.spinTime, 0, spinAngleStart, spinTimeTotal);
      this.setState({
        startAngle: this.state.startAngle + spinAngle * Math.PI / 180,
        spinTime: this.state.spinTime + 15,
      }, () => {
        this.drawRouletteWheel();
        clearTimeout(this.spinTimer);
        this.spinTimer = setTimeout(() => this.rotate(), 30);
      })
    }

    // console.log('state within rotate', this.state);
  }

  stopRotateWheel() {
    let { startAngle, arc } = this.state;
    const { options, baseSize } = this.props;

    const canvas = this.refs.canvas;
    const ctx = canvas.getContext('2d');

    const degrees = startAngle * 180 / Math.PI + 90;
    const arcd = arc * 180 / Math.PI;
    const index = Math.floor((360 - degrees % 360) / arcd);
    ctx.save();
    ctx.font = '35px Russo One, sans-serif';
    const text = options[index]
    console.log(text, "is the the final output");
    ctx.fillText(text, baseSize - ctx.measureText(text).width / 2, baseSize / 3);
    ctx.restore();
    this.props.onComplete(text);
    // this.props.onComplete(text);
  }

  easeOut(t, b, c, d) {
    const ts = (t/=d)*t;
    const tc = ts*t;
    return b+c*(tc + -3*ts + 3*t);
  }

  handleOnClick() {
    this.spin();
  }

  render() {
    // console.log(this.props);
    const { baseSize } = this.props;

    return (
      <div className="roulette">
        <div className="roulette-container">
          <canvas ref="canvas" width={baseSize * 2} height={baseSize * 2} className="roulette-canvas">
          </canvas>
        </div>
        <div className="roulette-container">
        
                    <div className="button_base b03_skewed_slide_in"onClick={this.handleOnClick} id={this.props.options[0].substring(0,3).trim()}>
                            <div>Spin</div>
                            <div></div>
                            <div>Spin</div>
                    </div>
                    
          {/* <input type="button" value="spin" onClick={this.handleOnClick} className="button" id={this.props.options[0].substring(0,3).trim()} /> */}
        </div>
      </div>
    );
  }
}

export default Roulette;