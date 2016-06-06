function Celebrity(n, a) {
	this.name = n;
	this.age = a;
}
var c = new Celebrity("MJ", "57");

console.log(Object.getOwnPropertyNames(c));


function Multiplier() {
	this.firstValue;
	this.currentValue;
	var isFirst = false;
	this.multiply = function(number){
		if (isFirst == false) {
			isFirst = true;
			firstValue = number *1;
			currentValue = firstValue;
			return firstValue;
		}
		else {
			currentValue = currentValue * number;
			return currentValue;
		}
		
	};

	this.getCurrentValue = function(){
		return currentValue;
	};
};

var mul = new Multiplier();
var answer = mul.multiply(2);
console.log(answer);

var answers = mul.multiply(7);
console.log(mul.getCurrentValue());

function Photo(f,l) {
	this.filename = f;
	this.location = l; 

	this.getFilename = function() {
		return this.filename;
	}
	this.getLocation = function() {
		return this.location;
	}
};

function Album() {
	this.photos = new Array(); 
	this.count = 0;

	this.addPhotos = function(photo) {
		this.photos[this.count] = (photo);
		this.count = this.count + 1;
	}
	this.listPhotos = function() {
		for (i = 0; i < this.photos.length; i++) {
			console.log("Filename: " + this.photos[i].getFilename() + " Location: " + this.photos[i].getLocation());
		}
	}
	this.accessPhotos = function(number) {
		for (i = 0; i < this.photos.length; i++) {
			if (i == number) {
				console.log("Filename: " + this.photos[i].getFilename() + " Location: " + this.photos[i].getLocation());
				break;
			}
		}
	}

}

var ph = new Photo("hello", "miami");
var ph1 = new Photo("bye", "NC");
var ph2 = new Photo("okay", "NewYork");
var al = new Album();
al.addPhotos(ph);
al.addPhotos(ph1);
al.addPhotos(ph2);

al.listPhotos();

al.accessPhotos(2);

function Person(n) {
	this.name = n;
	this.type = 'person';

	this.info = function() {
		console.log("Name: " + this.name);
	}

	this.getName = function() {
		return this.name;
	}
}

var Teacher = function(name){
  Person.apply(this,arguments)
  this.name = name;
  this.type = 'Teacher';
}

var Student = function(name){
  Person.apply(this,arguments)
  this.name = name;
  this.type = 'Student';
}

Teacher.prototype = Person.prototype;        
Teacher.prototype.constructor = Teacher; 

Student.prototype = Person.prototype;        
Student.prototype.constructor = Teacher;

var t = new Teacher("Mary");
var s = new Student("Bob");

t.info();
s.info();

function School () {
	this.teachers = new Array(); 
	this.students = new Array(); 
	this.counter_t = 0;
	this.counter_s = 0;

	this.add_teacher = function(t) {
		this.teachers[this.counter_t] = t;
		this.counter_t = this.counter_t + 1;
	}

	this.add_student = function(s) {
		this.students[this.counter_s] = t;
		this.counter_t = this.counter_s + 1;
	}

	this.list_teachers = function() {
		for (i = 0; i < this.teachers.length; i++) {
			console.log("Teachers: " + (this.teachers[i].info()));
		}
	}

	this.list_students = function() {
		for (j = 0; j < this.students.length; j++) {
			console.log("Students: " + this.students[j].info());  
			
		}
	}
}

var sc = new School();
sc.add_student(s);
sc.add_teacher(t);






















