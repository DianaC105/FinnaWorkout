import React, {Component} from "react";
import {Redirect} from "react-router-dom";
import API from "../utils/API";
import Example from "../components/Nav";
import Wrapper from "../components/Wrapper";
import Roulette from '../components/Roulette';
import ResultCard from "../components/ResultCard"
import "./Homepage.css";
//import Form from "../components/Form"
//import Workoutpick from "../components/WorkoutCard";
import BarChart from "../components/NewChart/BarChart";
import Footer from "../components/Footer/Footer";
//import Dice from "../components/Dice";
import DiceApp from "../components/Dice/DiceApp";




export default class Home extends Component{


state = {
  
      isLoggedIn: true,
      username:"",
      workouts: [],
      apiData: [],
      plan: [],
      message: "Putting together your plan now",
      q:"",
      chestWorkouts: [],
      backWorkouts: [],
      absWorkouts: [],
      legsWorkouts:[],
      muscleGroups: [],
      chestOptionNames: [],
      backOptionNames: [],
      absOptionNames: [],
      legsOptionNames: [],
      mapObjects: ["chest", "back", "abs", "legs"],
      chosenId: [],
      chosenWorkOut: [],
      chosenChest: "",
      chosenBack: "",
      chosenAbs: "",
      chosenLegs: ""
};



    
    filterWorkouts(){
      let chestArray = this.filterBodyParts(this.state.workouts, "chest");
      let backArray = this.filterBodyParts(this.state.workouts, "back");
      let absArray = this.filterBodyParts(this.state.workouts, "abs");
      let legsArray = this.filterBodyParts(this.state.workouts, "legs")
      this.setState({
        chestWorkouts: chestArray,
        backWorkouts: backArray,
        absWorkouts: absArray,
        legsWorkouts: legsArray
      }, () => {
        console.log(this.state);
        console.log(this.state.chestWorkouts);
        this.updateWorkoutsByBodyPart(this.state.chestWorkouts);
        this.updateWorkoutsByBodyPart(this.state.backWorkouts);
        this.updateWorkoutsByBodyPart(this.state.absWorkouts);
        this.updateWorkoutsByBodyPart(this.state.legsWorkouts);
      })
        
        let muscleGroupsArr = []

      let {chestWorkouts, backWorkouts, absWorkouts, legsWorkouts} = this.state;
      muscleGroupsArr.push(chestWorkouts);
      muscleGroupsArr.push(backWorkouts);
      muscleGroupsArr.push(absWorkouts);
      muscleGroupsArr.push(legsWorkouts);

      this.setState({
        muscleGroups: muscleGroupsArr
      })
      
    }
    
    updateWorkoutsByBodyPart = (objects) => {
      let chestWorkouts = [];
      let backWorkouts = [];
      let absWorkouts = [];
      let legsWorkouts = [];
      
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
        else if (object.bodyPart === "legs"){
          legsWorkouts.push(object.name);
          this.setState({
            legsOptionNames: legsWorkouts
          },
           () => {console.log(this.state.absOptionNames); })
        }
      })
      console.log(chestWorkouts);
      console.log(backWorkouts)
      console.log(absWorkouts)
      console.log(legsWorkouts)
    }

    // setChosenWorkOut = workout => {
    //   // let a = this.state.arr.slice();
    //   // a[workout] = "random element";
    //   this.setState({ 
    //     chosenWorkOut:workout
    //    });
      
    //   this.setState({ chosenChest:this.state.chestWorkouts})
    //   this.setState({chosenBack:this.state.backWorkouts})
    //   this.setState({chosenAbs:this.state.absWorkouts})
    // }

    handleOnComplete = (chosenWorkOut) => {
      // console.log('add to array', )
      // console.log('workout chosen by roulette gods', chosenWorkOut)
      this.setState({
        chosenId: 123,
        chosenWorkOut: [...this.state.chosenWorkOut, " ", chosenWorkOut],
        chosenChest: chosenWorkOut,
        chosenBack : chosenWorkOut,
        chosenAbs: chosenWorkOut,
        chosenLegs: chosenWorkOut
      });
        if(chosenWorkOut === 'xyz'){
          
        }
        console.log(this)
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
      } else if (object === "legs"){
        return this.state.legsOptionNames;
      }
    }
    renderRoulette = () => {
    
      // console.log("render attempt");
      // console.log(this.state.chestOptionNames);
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
          
           <Roulette
           options = {this.state.legsOptionNames}
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
        for (let i = 0; i <= this.state.chosenWorkOut.length; i++) {
          // go through array of objects
          // at each object, identify which body part category
          // set property of result card to that category
          // assign value of property to the workout within that object

          /* ex: {
            bodyPart: 'chest', (this is attached to wheel)
            workOut: 'Bench Press' (this is selected when wheel stops)
          }
          */

          // chosenWorkOut[i].bodyPart
          // chosenWorkOut[i].workOut
                }
        return(
          <ResultCard
          chosenChest={this.state.chosenWorkOut[1]}
          chosenBack={this.state.chosenWorkOut[3]}
          chosenAbs={this.state.chosenWorkOut[5]}
          chosenLegs={this.state.chosenWorkOut[7]}
          />)
      } else {
        return false
      }
    }
    superClick = () =>{
      this.setState({chosenWorkOut: []}, () => {

        let b1 = document.getElementById('Bar');
        let b2 = document.getElementById('Se');
        let b3 = document.getElementById('Tuc');
        let b4 = document.getElementById('Squ');
        b1.click();
        b2.click();
        b3.click();
        b4.click();
      })


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

      

        
       
        {/* <input type="button" value="spin" onClick={this.superClick} className="button" id="spin" /> */}
        <div className="button_base b07_3d_double_roll" onClick={this.superClick}>
        <div>Spin All</div> 
        <div>Spin All</div>
        <div>Spin All</div>
        <div>Spin All</div>
        </div>
         
        <div className = "row roulfun">
      
          {this.renderRoulette()}
        
        </div>
        
        
        <div className = "row">
          {this.renderResCard()}
          
          <DiceApp />
        </div>
      
        <BarChart />
        
          
        </Wrapper>

       <br></br>
        <Footer />
      </div>
    )
  }
}



