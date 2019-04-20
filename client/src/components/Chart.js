import React, {Component} from "react";
import { Bar, Line } from 'react-chartjs-2';

//line chart to show weight loss progress
//input for user to enter weight that saves with current date
//update chart with state change

class Chart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chartData: {
                labels: ["Jan", "Feb", "March50"],
                datasets:[
                    {
                        label: "Weight Loss Progress",
                        data: [
                          
                           170, 160, 150, 140, 130
                        ],
                        backgroundColor: [
                            "#666"
                        ]
                    }
                ]
            }
        }
    }

    render() {
        return (
            <div className="chart">
           <Line
                data={this.state.chartData}
                
                options={{
                    showLine:false,
                }}
                />
            </div>
        )
    }

}

export default Chart;