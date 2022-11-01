/*function person(name, age){
    this.name = name
    this.age = age
    this.changeName = function(name){
        this.name = name
    }
}
var p1 = new person('Pooh', 27);
p1.changeName('ida')
console.log(p1.name+" "+p1.age)
*/
function makan(status, food){
    this.status = status
    this.food = food
    this.changeStatus = function(status){
        this.status = status
    }
}

var p1 = new makan('berdoa ', 'Mie')
p1.changeStatus("selesai")
console.log(p1.status+" makan "+p1.food)