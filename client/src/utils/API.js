import axios from "axios";

export default{

  getWorkouts: function(){
    return axios.get("/api/workouts");
  },
  getMuscleGroup: function(musGrop){
    return axios.get("api/workouts/" + musGrop );
  }
};