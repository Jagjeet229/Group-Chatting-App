import firebase from 'firebase';


  var Config = {
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "m",
    messagingSenderId: "",
    appId: ""
  };
var fire=firebase.initializeApp(Config)
export default fire;
