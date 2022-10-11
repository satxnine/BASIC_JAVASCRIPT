
    var pilihan = 2;

/*
1. light
2. Dark
3. Nocturne
4. Indigo
*/

//cara kesatu
if (pilihan == 1) {
    console.log ("Light")
  } 
  else if (pilihan == 2) {
    console.log("Dark")
  } 
  else if (pilihan == 3) {
    console.log("Nocturne")
  } 
  else if (pilihan == 4) {
    console.log("Terminal")
  } 
  else {
    console.log("Indigo")
  }

  //cara kedua
  switch (pilihan) {
    case 1:
        console.log("Light");
        break;
    case 2:
        console.log("Dark");
        break;
    case 3:
        console.log("Nocturne");
        break;
    case 4:
        console.log("Terminal");
        break;
    case 5:
        console.log("Indigo");
        break;
}
    
//cara ketiga ternary one line
console.log(pilihan == 1 ? "Light" : (pilihan == 2 ? "Dark" : (pilihan == 3 ? "Nocturne" : (pilihan == 4 ? "Terminal" : "Indigo"))));
