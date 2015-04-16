/*
  Your 3 Users will be the following. 
    0) Tyler, tylermcginnis33@gmail.com, 'iLoveJS'
    1) Cahlan, cahlan@devmounta.in, 'iLoveHashtags'
    2) Lenny, lenny@theLenster.com, 'iLoveLentilSoup'
*/

var User = function(name, email, pw){
  this.name = name;
  this.email = email;
  this.pw = pw;
}

//Create an Array called 'users' that will store all our instances of User.

var users = [];

//Now create and push into your users array 3 seperate instances of User using the data from above in that exact order

var Tyler = new User('Tyler', 'tylermcginnis33@gmail.com', 'iLoveJS');
  users.push(Tyler);


console.log('Tyler\'s information is ');
//Console.log all of Tylers information

console.log('Tyler\'s information is ' , Tyler  )

console.log('Lenny\'s information is ');
//Now console.log all of Lennys information

  var Lenny = new User('Tyler', 'tylermcginnis33@gmail.com', 'iLoveJS');
  users.push(Lenny);
  


//Now create another instance of User using your own information and then add that to your users array.

  var Nui = new User('Nui', "sigbin2000@gmail.com", 'openit');
  users.push(Nui);

console.log('All my users names are ');
//Now loop through your users Array and console.log every users name. 
var sayName =  function (users){
  console.log('All my users names are '){
    for (var i=0; i < users.length; i++){
      console.log(users[i].name);
    }
  }
}
for (var i=0; i < users.length; i++){
  console.log('All my users names are ', users[i].name);
};
  //code here
