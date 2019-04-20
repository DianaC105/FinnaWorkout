import React, {Component} from "react";
import API from "../utils/API";
import WorkoutCard from "../components/WorkoutCard"
export default class Home extends Component{

state = {
  
      
      workouts: [],
      plan: [],
      message: "Putting togeather you're plan now",
      q:"",
      chestWorkouts: [],
      backWorkouts: [],
      legsWorkouts: [],
      absWorkouts: [],
    };

    
    filterWorkouts(){
      let chestArray = this.filterBodyParts(this.state.workouts, "chest");
      let legsArray = this.filterBodyParts(this.state.workouts, "legs");
      let backArray = this.filterBodyParts(this.state.workouts, "back");
      let absArray = this.filterBodyParts(this.state.workouts, "abs");
      this.setState({
        chestWorkouts: chestArray,
        backWorkouts: backArray,
        legsWorkouts: legsArray,
        absWorkouts: absArray
      })
    }

    componentDidMount(){
      console.log("mounted")
      this.getWorkouts()
      
      
      
    }
    
    filterBodyParts(array,bodyPart){
      return array.filter(workout => workout.bodyPart === bodyPart )
      
    };
    
    getWorkouts = () => {
      API.getWorkouts()
      .then(res =>{
        
        this.setState({
          workouts: res.data
        })
        if(res.data.length > 0){
          this.filterWorkouts()
        }
        
      }
      )
      .catch(() => 
      this.setState({
        plan: [],
        message: "no plan generated"
      })
      );
    };
    
    render(){
      console.log(this.state)
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


