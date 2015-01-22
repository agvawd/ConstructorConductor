//Create a Person constructor that accepts name and age as parameters and sets those properties accordingly in the Constructor.

  //code here
  var person = function(name, age) {
  	this.name = name;
  	this.age = age;
}


//Now create three instances of Person with data you make up

  //code here
var Allen = new person('Allen', 23);
var Justin = new person('Justin', 22);
var Tyler = new person('Tyler', 24);

//Now add a sayName method on your Person class that will alert the name of whatever Person instance called it.

  //code here

  person.prototype.sayName = function(){
  	alert(this.name);
  }
  
  Allen.sayName();

