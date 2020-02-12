
var config = {
     apiKey: "AIzaSyAvrf87ypXXZSfx-P18Qq3YEyVlwCX8uOA",
    authDomain: "lovemyrugby-13cd4.firebaseapp.com",
    databaseURL: "https://lovemyrugby-13cd4.firebaseio.com",
    projectId: "lovemyrugby-13cd4",
    storageBucket: "lovemyrugby-13cd4.appspot.com",
    messagingSenderId: "535851985572",
    appId: "1:535851985572:web:37960375302148a15b9431",
    measurementId: "G-9S9T681F1D"
  };
  firebase.initializeApp(config);
  
  
  var messagesRef = firebase.database().ref('messages');
  
  
  document.getElementById('contactForm').addEventListener('submit', submitForm);
  
  
  function submitForm(e){
    e.preventDefault();
  
    
    var name = getInputVal('name');
    var company = getInputVal('company');
    var email = getInputVal('email');
    var phone = getInputVal('phone');
    var message = getInputVal('message');
  
    
    saveMessage(name, company, email, phone, message);
  
    
    document.querySelector('.alert').style.display = 'block';
  
    
    setTimeout(function(){
      document.querySelector('.alert').style.display = 'none';
    },3000);
  
    
    document.getElementById('contactForm').reset();
  }
  

  function getInputVal(id){
    return document.getElementById(id).value;
  }
  
  
  function saveMessage(name, company, email, phone, message){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
      name: name,
      company:company,
      email:email,
      phone:phone,
      message:message
    });
  }