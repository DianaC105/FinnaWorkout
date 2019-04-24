import React, {Component} from "react";
import {Redirect} from "react-router-dom";
import API from "../utils/API";
import Example from "../components/Nav";
import Wrapper from "../components/Wrapper";
import Jumbotron from "../components/Jumbotron";
import Roulette from '../components/Roulette';
import Form from "../components/Form"
import Workoutpick from "../components/WorkoutCard";
import BarChart from "../components/NewChart/BarChart";


export default class Home extends Component{

state = {
  
      isLoggedIn: true,
      username:"",
      workouts: [],
      plan: [],
      message: "Putting togeather you're plan now",
      q:"",
      chestWorkouts: [],
      backWorkouts: [],
      legsWorkouts: [],
      absWorkouts: [],
      muscleGroups: []
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
      let muscleGroups = []
      muscleGroups.push(chestArray,backArray,legsArray,absArray)
      console.log(muscleGroups)
      this.setState({
        muscleGroups: muscleGroups

      })

      
    }

    componentDidMount(){
      //cheecking login status
      this.loginCheck();
      //console.log("mounted")
      

    }
    loginCheck = () => {
      API
        .loginCheck()
        .then(res => this.setState({
          isLoggedIn: res.data.isLoggedIn, username: res.data.username
        }))
        .then(res => {
          this.getWorkouts();
        })
        .catch(err => {
          console.log(err);
          this.setState({isLoggedIn: false})
        })
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
      if(!this.state.isLoggedIn){
        return <Redirect to = "/login"/>
      }
      console.log(this.state)
    return (
      <div>
        <Example />
        <Wrapper>
        <Jumbotron /> FinnaWorkOUT
        <BarChart />
        <Roulette
        />
        {this.state.muscleGroups.map(muscleGroups=>(

        <Workoutpick
          id={muscleGroups.id}
          key={muscleGroups.id}
          name={muscleGroups.name}
          
        />
        )
        )
        }
        
        
         
        


        {/* {this.state.workoutpick.map(workoutpick => (
       
        <Workoutpick
            id={workoutpick.id}
            key={workoutpick.id}
            name={workoutpick.name}
            image={workoutpick.image}
            occupation={workoutpick.occupation}
            location={workoutpick.location}
          />
        ))} */}
        {/* <Roulette 
          chestWorkouts={this.state.chestWorkouts} 
          backWorkouts={this.state.backWorkouts}
          legsWorkouts={this.state.legsWorkouts}
          absWorkouts={this.state.absWorkouts}
        /> */}
        <Form />
        </Wrapper>
      </div>
    )
  }
}



