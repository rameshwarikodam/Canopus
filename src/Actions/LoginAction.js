import Axios from "axios";

export function userLoginRequest(userData){
    return dispatch=>{

    console.log(" in userLoginRequest userData :: ", userData);
    var payLoad = {
      "email_id1" : userData.email_id
    }
    console.log(" payLoad :: ", payLoad);
    
    const url = 'https://canopus-api.herokuapp.com/api/login';
    Axios(url, {
      method: 'POST',
      data : payLoad,
      headers: {
        //'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'
      }
    }).then(response => {
      console.log(">>>response :: ",response)
    });


    // var data = Axios
                    // .post('https://canopus-api.herokuapp.com/api/login', payLoad)
                    // .then(function(response) {
        // console.log("response :: ",response);
        // if (response.status === "true") {
        //   alert("Login successfull");
        // } 
        // else if(response.status === "false"){
        //   alert("Can not login");
        // }
        // else {
        //   console.log("Login unsuccessful");
        //   alert("Login unsuccessful");
        // }
      // });
      
    }    
}