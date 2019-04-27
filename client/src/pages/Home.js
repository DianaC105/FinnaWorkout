import React, {Component} from "react";
import {Redirect} from "react-router-dom";
import API from "../utils/API";
import Example from "../components/Nav";
import Wrapper from "../components/Wrapper";
import Jumbotron from "../components/Jumbotron";
import Roulette from '../components/Roulette';
import ResultCard from "../components/ResultCard"
import "./Homepage.css";
//import Form from "../components/Form"
//import Workoutpick from "../components/WorkoutCard";
import BarChart from "../components/NewChart/BarChart";



export default class Home extends Component{


state = {
  
      isLoggedIn: true,
      username:"",
      workouts: [],
      apiData: [],
      plan: [],
      message: "Putting togeather you're plan now",
      q:"",
      chestWorkouts: [],
      backWorkouts: [],
      absWorkouts: [],
      muscleGroups: [],
      chestOptionNames: [],
      backOptionNames: [],
      absOptionNames: [],
      mapObjects: ["chest", "back", "abs"],
      chosenId: [],
      chosenWorkOut: [],
      chosenChest: "",
      chosenBack: "",
      chosenAbs: ""
};



    
    filterWorkouts(){
      let chestArray = this.filterBodyParts(this.state.workouts, "chest");
      let backArray = this.filterBodyParts(this.state.workouts, "back");
      let absArray = this.filterBodyParts(this.state.workouts, "abs");
      this.setState({
        chestWorkouts: chestArray,
        backWorkouts: backArray,
        absWorkouts: absArray,
      }, () => {
        console.log(this.state);
        console.log(this.state.chestWorkouts);
        this.updateWorkoutsByBodyPart(this.state.chestWorkouts);
        this.updateWorkoutsByBodyPart(this.state.backWorkouts);
        this.updateWorkoutsByBodyPart(this.state.absWorkouts);
      })
        
        let muscleGroupsArr = []

      let {chestWorkouts, backWorkouts, absWorkouts} = this.state;
      muscleGroupsArr.push(chestWorkouts);
      muscleGroupsArr.push(backWorkouts);
      muscleGroupsArr.push(absWorkouts);

      this.setState({
        muscleGroups: muscleGroupsArr
      })
      
    }
    
    updateWorkoutsByBodyPart = (objects) => {
      let chestWorkouts = [];
      let backWorkouts = [];
      let absWorkouts = [];
      
      objects.forEach(object => {
        if (object.bodyPart === "chest") {
          chestWorkouts.push(object.name);
          this.setState({
            chestOptionNames: chestWorkouts
          }, () => {console.log(this.state.chestOptionNames); })
        }
        else if (object.bodyPart === "back") {
          backWorkouts.push(object.name);
          this.setState({
            backOptionNames: backWorkouts
          }, () => {console.log(this.state.backOptionNames); })
        }
        else if (object.bodyPart === "abs"){
          absWorkouts.push(object.name);
          this.setState({
            absOptionNames: absWorkouts
          },
           () => {console.log(this.state.absOptionNames); })
        }
      })
      console.log(chestWorkouts);
      console.log(backWorkouts)
      console.log(absWorkouts)
    }

    setChosenWorkOut = workout => {
      // let a = this.state.arr.slice();
      // a[workout] = "random element";
      this.setState({ 
        chosenWorkOut: workout
       });
      
      // this.setState({ chosenChest:chestWorkouts})
      // this.setState({chosenBack:backWorkouts})
      // this.setState({chosenAbs:absWorkouts})
    }

    handleOnComplete = () => {
      for (let i = 0; i < this.state.workouts.length; i++ ){
        const {workoutName,bodyPart,id} = this.state.workouts[i]
        const chest = bodyPart[0]
        const back = bodyPart[1]
        const abs = bodyPart[2]
        if(workoutName === this.state.chosenWorkOut){
          this.setState({
            chosenId: id,
            chosenChest: chest,
            chosenBack : back,
            chosenAbs: abs
          })
        }
      }
    }
     
    // componentWillMount(){
    //   console.log("mounting")
    //   this.getWorkouts() 
    //   // this.updateWorkoutsByBodyPart(this.state.chestWorkouts);
    // }

    componentDidMount(){

      //cheecking login status
      this.loginCheck();
      
      

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
    
    checkBodyPart= (object) => {
      if (object === "chest") {
        return this.state.chestOptionNames;
      } else if (object === "back") {
        return this.state.backOptionNames;
      } else if (object === "abs") {
        return this.state.absOptionNames;
      }
    }
    renderRoulette = () => {
    
      console.log("render attempt");
      console.log(this.state.chestOptionNames);
      if(this.state.chestOptionNames.length > 0){
        
        return(
          <div>
          <Roulette 
            options = {this.state.chestOptionNames}
            setChosenWorkOut={this.setChosenWorkOut}
            onComplete={this.handleOnComplete}
          />
          <Roulette 
          options = {this.state.absOptionNames}
          setChosenWorkOut={this.setChosenWorkOut}
          onComplete={this.handleOnComplete}
          />
          <Roulette
           options = {this.state.backOptionNames}
           setChosenWorkOut={this.setChosenWorkOut}
            onComplete={this.handleOnComplete}
           />
          </div>
        )
      } else{
        return "Nothing here"
      }
    }
    renderResCard = () => {
      if(this.state.chosenWorkOut.length > 0){
        return(
          <ResultCard
          chosenChest={this.state.chosenWorkOut}
          chosenBack={this.state.chosenWorkOut}
          chosenAbs={this.state.chosenWorkOut}
          />)
      } else {
        return false;
      }
    }
    
      superClick = () =>{
      let b1 = document.getElementById('Bar');
      let b2 = document.getElementById('Se');
      let b3 = document.getElementById('Tuc');
      b1.click();
      b2.click();
      b3.click();

    }

    render(){

      if(!this.state.isLoggedIn){
        return <Redirect to = "/login"/>
      }
      console.log(this.state);
      console.log(this.state.chestWorkouts);
    return (
      <div>
        <div className="backlay"></div>
        <div className = "overlay"></div>
        <Example />
        <Wrapper>
        <Jumbotron /> FinnaWorkOUT
        
        
        <div>
          {this.renderRoulette()}
          {this.renderResCard()}
          <input type="button" value="spin" onClick={this.superClick} className="button" id="spin" />
        </div>

        <BarChart />
          
        </Wrapper>
      </div>
    )
  }
}


