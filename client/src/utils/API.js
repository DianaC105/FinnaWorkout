import axios from "axios";

export default {
  /*
  loginCreds = {username: "peter", "password": password}
  */
 login: function(loginCreds){
   return axios.post('/api/user/login', loginCreds)
 },
 //path to cehck if user is logged in
 loginCheck: function(){
   return axios.get('/api/user/login')
 },

 //path to log out
 logout: function(){
   return axios.get('/api/user/logout')
 },
 /*
  Path to register new username + password must exist
  e.g.
  userInfo = {
    username: "peter",
    password: password
  }
  */
 register: function(userInfo) {
   return axios.post("/api/user/register", userInfo)
 },

  getWorkouts: function(){
    return axios.get("/api/workouts");
  },
  getMuscleGroup: function(musGrop){
    return axios.get("api/workouts/" + musGrop );
  }
}