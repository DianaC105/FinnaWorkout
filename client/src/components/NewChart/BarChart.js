import React, { Component } from 'react'
import { Chart } from 'primereact/chart';


export class BarChart extends Component {
    state = {
        upperBody: 0,
        torso: 0,
        legs: 0,
        chest: 0,
        booty: 0
    };

    // handleIncrement increments this.state.count by 1
    handleIncrement = (bodyPart) => {
        // We always use the setState method to update a component's state
        this.setState({ 
            [bodyPart]: this.state[bodyPart] + 1 
        });
    };

    render() {
        const data = {
            labels: ['Upper Body', 'Torso', 'Legs', 'Chest', 'Booty'],
            datasets: [
                {
                    label: 'Workouts',
                    backgroundColor: 'purple',
                    data: Object.values(this.state)
                }
            ]
        };
        const multiAxisOptions = {
            responsive: true,
            tooltips: {
                mode: 'index',
                intersect: true
            },
            scales: {
                yAxes: [{
                    type: 'linear',
                    display: true,
                    position: 'left',
                    id: 'y-axis-1',
                    ticks: {
                        min: 0,
                        max: 30
                    }
                }]
            }
        }

        const btnStyle = {
            backgroundColor: "green",
            padding: 5,
            margin: 23
          
                
        }

        return (
            <div>
                <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1>Workout Stats</h1>
                        <p>See Your Progress</p>
                    </div>
                </div>

                <div className="content-section implementation">
                    {/* Chart goes here */}
                    <Chart type="bar" data={data} options={multiAxisOptions} />

                    <button color="success" style={btnStyle} onClick={() => this.handleIncrement("upperBody")} > Upper Body Completed <i className="fas fa-dumbbell"></i>
                    </button> {"  "}
                    <button color="success" style={btnStyle} onClick={() => this.handleIncrement("torso")} > Torso Completed <i className="fas fa-dumbbell"></i>
                    </button> {"  "}
                    <button color="success" style={btnStyle} onClick={() => this.handleIncrement("legs")} > Legs Completed <i className="fas fa-dumbbell"></i>
                    </button> {"  "}
                    <button color="success" style={btnStyle} onClick={() => this.handleIncrement("chest")} > Chest Completed <i className="fas fa-dumbbell"></i>
                    </button> {"  "}
                    <button color="success" style={btnStyle}  onClick={() => this.handleIncrement("booty")} > Booty Completed <i className="fas fa-dumbbell"></i>
                    </button> {"  "}
            
                </div>

            </div>
          
        )
    }
}



export default BarChart;
