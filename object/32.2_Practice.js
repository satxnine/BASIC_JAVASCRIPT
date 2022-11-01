
function main() {

    var flightNumber = "NGT 929";
    var flightStatus = "landed" ;
    
    var flight1 = new Flight (flightNumber,flightStatus);

    console.log('Flight ' + flight1.number + ' has ' + flight1.status)
    
}

function Flight(flightNumber, status) {

    this.number = flightNumber;
    this.status = status;
};
main()