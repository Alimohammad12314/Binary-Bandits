const firebaseConfig = {
    apiKey: "AIzaSyBsuCriWU4MqL0o0Ikvuo4qVtVX-iYtcv0",
    authDomain: "greenit-ff959.firebaseapp.com",
    databaseURL: "https://greenit-ff959-default-rtdb.firebaseio.com",
    projectId: "greenit-ff959",
    storageBucket: "greenit-ff959.appspot.com",
    messagingSenderId: "833709158297",
    appId: "1:833709158297:web:797b266ee8251570812d08",
    measurementId: "G-G7PTZJ77DQ"
  };
//initialize
firebase.initializeApp(firebaseConfig);

//reference for database
var UserSignupDB = firebase.database().ref("UserSignup");


document.getElementById('UserSignup').addEventListener("submit", submitForm);


function submitForm(e){
    e.preventDefault();

    var username = getElementVal('username');
    var email = getElementVal('email');
    var password = getElementVal('password');

    saveMessages(username, email, password);

    //alert

    document.querySelector('.alert').style.display = 'block';

    //alert remove
    setTimeout(()=>{
    document.querySelector(".alert").style.display="none";
    }, 3000);

    //form reset

    document.getElementById("contactForm").reset();
}
    const saveMessages = (username, email, password) =>{
        var newForm = UserSignupDB.push();

        newForm.set({
            username: username,
            email: email,
            password:password,

        });
    };

const getElementVal =(id) => {
    return document.getElementById(id).value;
};