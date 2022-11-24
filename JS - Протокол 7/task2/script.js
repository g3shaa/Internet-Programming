function student() {
    this.name = "Georgi";
    console.log("My name is: " + this.name);
}

var student = new student();
student.display();
document.getElementById("test").innerHTML="My name is  " + student.name;