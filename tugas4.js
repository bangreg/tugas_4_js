function tinggiBadan(){
  var x = 186;
  var y = 185;
  var z = 184;
  if (x>y && x>z){
    if (y>z){ //x > y > z
      console.log("Kondisi 1 " + x + " " + y + " " + z);
    }else{ //x > z > y
      console.log("Kondisi 2 " + x + " " + z + " " + y);
    }
  }else if(y>z && y>x){
    if (z>x){ //y > z > x
      console.log("Kondisi 3 " + y + " " + z + " " + x);
    }else { //y > x > z
      console.log("Kondisi 4 " + y + " " + x + " " + z);
    }
  }else { //z>x && z>y
    if (x>y){ //z > x > y
      console.log("Kondisi 5 " + z + " " + x + " " + y);
    }else { //z > y > x
      console.log("Kondisi 6 " + z + " " + y + " " + x);
    }
  }
}
tinggiBadan()
