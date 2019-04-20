import React, {Component} from 'react';
// import {Link} from 'react-router-dom';
import {InputText} from 'primereact/inputtext';
import {Button} from 'primereact/button';

class InputForm extends Component {
        
        state = {
            value: 0
            
        };
    

    toggle() {
        this.setState({disabled: !this.state.disabled});
    }

    onChange () {
        console.log(this.state.weight);
    }

    handleClick = event => {
        event.preventDefault();
       console.log("click works")
       console.log(this.state.value);

      


    }

    render() {
        console.log(this.state.value)
        return (
            <div>
                <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1>Weight Tracker</h1>
                        <p>See your progress</p>
                    </div>
                </div>

                <div className="content-section implementation">
                    <div className="content-section implementation">
                       
                        <h3>Enter Current Weight</h3>
                        <InputText type="text" keyfilter="pint" 
                        
                        // value={this.state.weight}
                        
                        onChange={(e) => this.setState({value: e.target.value})} />
                        
                        <Button label="Save" onClick={this.handleClick} />
                        
                    </div>
                    
                </div>
            </div>
        )
    }
}

export default InputForm;