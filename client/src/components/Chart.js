// import React, {Component} from "react";
// import { Bar, Line } from 'react-chartjs-2';

// //line chart to show weight loss progress
// //input for user to enter weight that saves with current date
// //update chart with state change

// class Chart extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             chartData: {
//                 labels: ["Jan", "Feb", "March50"],
//                 datasets:[
//                     {
//                         label: "Weight Loss Progress",
//                         data: [

//                            170, 160, 150, 140, 130
//                         ],
//                         backgroundColor: [
//                             "#666"
//                         ]
//                     }
//                 ]
//             }
//         }
//     }

//     render() {
//         return (
//             <div className="chart">
//            <Line
//                 data={this.state.chartData}

//                 options={{
//                     showLine:true,
//                 }}
//                 />
//             </div>
//         )
//     }

// }

// export default Chart;


// import React, {Component} from 'react';
// import {Chart} from 'primereact/chart';

// export class LineChartDemo extends Component {

//     render() {
//         const data = {
//             labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
//             datasets: [
//                 {
//                     label: 'First Dataset',
//                     data: [65, 59, 80, 81, 56, 55, 40],
//                     fill: false,
//                     backgroundColor: '#42A5F5',
//                     borderColor: '#42A5F5'
//                 },
//                 {
//                     label: 'Second Dataset',
//                     data: [28, 48, 40, 19, 86, 27, 90],
//                     fill: false,
//                     backgroundColor: '#66BB6A',
//                     borderColor: '#66BB6A'
//                 }
//             ]   
//         }
//     }
// }



import React, { Component } from 'react';
import { Chart } from 'primereact/chart';


const LineChart = () => {
    {
        const data = {
            labels: ['Upper Body', 'Torso', 'Legs', 'Chest', 'Booty'],
            datasets: [
                {
                    label: 'First Dataset',
                    data: [65, 59, 80, 81, 56, 55, 40, 35, 20],
                    //replace data with props.array from database
                    //need to sort to go inline with the months
                    //array needs to have a value of 12 
                    fill: false,
                    backgroundColor: '#42A5F5',
                    borderColor: '#42A5F5'
                }
            ]
        }
        return (
            <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1>Workout Stats</h1>
                        <p>See your progress</p>
                    </div>
                
            <Chart type="bar" data={data} />
            </div>
            
        )
    }

}

export default LineChart;