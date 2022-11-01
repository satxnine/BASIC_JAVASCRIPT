function person(name, age, color){
    this.name = name
    this.age = age
    this.favColor = color
}
var p1 = new person("John", 37, "red");
var p2 = new person("Johan", 25, "black");
console.log(p1.name+' dan '+p2.name+' menyukai warna '+p2.favColor)