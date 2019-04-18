import axios from "axios";

export default{

  getWorkouts: function(){
    return axios.get("/api/workouts");
  },
  getBodyPart: function(q){
    return axios.get("api/workouts/bodyPart", {params: {q} });
  }
};