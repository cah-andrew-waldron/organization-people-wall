var config = {
  apiKey: "AIzaSyAkrp8RZgs0yLIYdhksgd4dNupQeW43Y7s",
  authDomain: "fusewall-15ced.firebaseapp.com",
  databaseURL: "https://fusewall-15ced.firebaseio.com",
  storageBucket: "fusewall-15ced.appspot.com",
  messagingSenderId: "529721997681"
};

$(function() {
  var app = firebase.initializeApp(config);

  insertPerson({
    personId: '423423feffsddsfd',
    bubbleTitle: 'Gio Hernandez',
    bubbleDescription: 'Some of the most awesome stuff you ever saw', 
    imgS3Url: 's3://path/image.png',
    squads: ['asdf', 'asdf2']
  });

  function insertPerson(person) {
    app.database().ref("people").set(person);
  }

  function insertSquad(squad) {

  }

  function insertProduct(product) {

  }  
});
