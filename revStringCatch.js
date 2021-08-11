let ogString = "dlro Wolleh"
let oGarr = []

//is the mapping key
let oGarrMap = []

//Sets the ranges of the regex
const upper =  /[A-Z]/
const lower = /[a-z]/
const space = /\s/
const special = /[!@#$%^&*(),.?"':{}|<>]/

//loops throug string and based off of conditions assigns a value to the map
for (let i = 0; i < ogString.length; i++) {
    
    if ( space.test(ogString[i]) ){
        oGarrMap[i] = 0
    }else if ( lower.test(ogString[i]) ){
        oGarrMap[i] = 1
    }else if( upper.test(ogString[i]) ){
        oGarrMap[i] = 2
    }else if ( special.test(ogString[i]) ){
        oGarrMap[i] = 3

        //this checks for unknown character
    } else  oGarrMap[i] = 99

    //for checking placement
    oGarr[i] = ogString[i]; 
    
    
}

//reversed string first with reversed for loop
let rogString = "";

//Reversed Array based off of map
let roGarr = []//

//Reverses sstring
    for(i = ogString.length - 1 ; i >= 0; i--){

       rogString += ogString[i]
    
}

//Swaps the last values to special and caps
if (oGarrMap[0] == 3 && oGarrMap[oGarrMap.length-1] == 1){
    oGarrMap[0] = 2;
    oGarrMap[oGarrMap.length-1] = 3
}

//adds reverse string to array so the mapping can be applied
for (let i = 0; i < rogString.length; i++) {
   
  if (oGarrMap[i] == 0) {
      roGarr[i] = " "
  }else if (oGarrMap[i] == 1) {
    roGarr[i] = rogString[i].toLowerCase()
  }else if (oGarrMap[i] == 2) {
    roGarr[i] = rogString[i].toUpperCase()
  }else if (oGarrMap[i] == 3) {
    roGarr[i] = "-"
  }
  
}
// array concated into a string
let revStr = "";

for (let i = 0; i < roGarr.length; i++) {
    
    revStr += roGarr[i]
     
}





console.log(oGarr);
console.log(oGarrMap);
console.log(roGarr);
console.log(ogString);
console.log(revStr);

//console.log(rogString);

let test1 = "}"
 //console.log(special.test(test1));