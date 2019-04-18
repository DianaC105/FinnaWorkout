import React, {Component} from "react";
import API from "../utils/API";
import WorkoutCard from "../components/WorkoutCard"
export default class Home extends Component{
state = {
  
      muscleGroups: [],
      workouts: [],
      plan: [],
      message: "Putting togeather you're plan now",
      q:""
    };
 
  componentDidMount(){
    this.getWorkouts()
    this.getMuscleGroup()
  }
  
  componentDidUpdate(){
    console.log(this.state.workouts,"Workout Data from Backend");
    
  }

  getMuscleGroups(array){
    for (let i = 0; i < array.length; i ++){
      
    }

  }
  getWorkouts = () => {
    API.getWorkouts()
      .then(res =>{
        console.log(res,"Responce json obj")
        this.setState({
          workouts: res.data
        })
      }
        )
        .catch(() => 
          this.setState({
            plan: [],
            message: "no plan generated"
          })
        );
  };
  getMuscleGroup = () => {
    API.getMuscleGroup()
    .then(res =>{
      console.log(res.data.bodyPart, "response from database only getting the bodypart variables")
      this.setState({
        muscleGroups: res.data.bodyPart
      })
    }
      )
      .catch((err) => {

        this.setState({
          muscleGroup: [],
          message:   "Muscle Group added"
        })
          console.log(err)
      }
      );
  };

 


  render(){
    return (
      <div>
        {this.state.workouts.map(workout =>(
          <WorkoutCard
          id={workout._id}
          bodyPart={workout.bodyPart}
          key={workout._id}
          />
        ))}
      </div>
    )
  }
}


