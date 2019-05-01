import React, { Component } from 'react'
import { Chart } from 'primereact/chart';
import API from '../../utils/API';
import "./style.css";


export class BarChart extends Component {
    state = {
        chest: 0,
        abs: 0,
        back: 0,
        legs: 0
    };

    componentDidMount() {

        //this.updateDataBase();
        this.getDataBase();

    };


    loadStats = (bodyPart) => {
        API.getStats(bodyPart)
            .then(res => this.setState({
                [bodyPart]: this.state[bodyPart]
            }));
    }

    handleIncrement = (bodyPart) => {
        this.setState({
            [bodyPart]: this.state[bodyPart] + 1
        }, this.sendStats);
        //make an object reflects state with values to send to database

        //change it to this.state.chest


    };

    sendStats = () => {
        let statsObject = { Chest: this.state.chest, Abs: this.state.abs, Back: this.state.back, Legs: this.state.legs }
        API.updateStats(statsObject)
            .then(res => {
                console.log("this works!")

            })
    }
    getDataBase = () => {
        API.getStats()
            .then(res => {
                if (res.data.length > 0) {
                    console.log(res.data);
                    let stats = res.data
                    console.log(stats[stats.length - 1]);
                    stats = stats[stats.length - 1]
                    this.setState({
                        chest: stats.Chest,
                        abs: stats.Abs,
                        back: stats.Back,
                        legs: stats.Legs
                    })
                }
            })

    }
    updateDataBase = () => {
        let statsObject = { Chest: 3, Abs: 6, Back: 2, Legs: 5 }
        API.updateStats(statsObject)
            .then(res => {
                console.log("this works!")
            })
    }

    updateData() {
        API.updateStats({


        })
            .then(() => this.getStats());
    };

    render() {
        console.log(this.state);
        const data = {
            labels: ['Chest', 'Abs', 'Back', "Legs"],
            datasets: [
                {
                    label: 'Workouts',
                    backgroundColor: 'purple',
                    data: [this.state.chest, this.state.abs, this.state.back, this.state.legs]
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
                        max: 50
                    }
                }]
            }
        }

        const btnStyle = {
            
            padding: 7,
            borderColor: "black"
            //display: "flex",
            //flexDirection: "column",
            //justifyContent: "center"
            // margin: 100,
            //position: "relative",



        }

        const chartStyle = {
            position: "relative",
            backgroundColor: "white",
            opacity: 0.6,
            color: "purple",
            margin: 0,






        }

        return (

            <div>
                <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1 className="chartHead">Workout Stats</h1>
                        <p className="chartHead">Track Your Progress</p>
                    </div>
                </div>

                <div className="content-section implementation">
                    {/* Chart goes here */}
                    <Chart type="bar" style={chartStyle} data={data} options={multiAxisOptions} />
                    <button color="success" id="btn1" className="btn btn-info" onClick={() => this.handleIncrement("chest")} > Chest Completed <i className="fas fa-dumbbell"></i>
                    </button> {"  "}
                    <button color="success" id="btn2" className="btn btn-info" style={btnStyle} onClick={() => this.handleIncrement("abs")} > Abs Completed <i className="fas fa-dumbbell"></i>
                    </button> {"  "}
                    <button color="success" id="btn3" className="btn btn-info" style={btnStyle} onClick={() => this.handleIncrement("back")} > Back Completed <i className="fas fa-dumbbell"></i>
                    </button> {"  "}
                    <button color="success" id="btn4" className="btn btn-info" style={btnStyle} onClick={() => this.handleIncrement("legs")} > Legs Completed <i className="fas fa-dumbbell"></i>
                    </button> {"  "}
                    {/* <button color="success" style={btnStyle} onClick={() => this.handleIncrement("booty")} > Booty Completed <i className="fas fa-dumbbell"></i>
                    </button> {"  "} */}

                </div>

            </div >

        )
    }
}



export default BarChart;
