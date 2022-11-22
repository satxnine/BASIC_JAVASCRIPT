function person(name, age, favColor) {
    this.name = name;  
    this.age = age;
    this.favColor = favColor;
    this.change = function (name, age, favColor) {
        this.name = name;
        this.age = age;
        this.favColor = favColor;
    }
}

var p = new person("Fara", 19, "blue");
p.change("Rida ", 17, " black");

console.log(p.name + p.age + p.favColor)