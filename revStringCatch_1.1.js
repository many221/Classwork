
/**
 * /*
 
 ╦  ┌─┐┌─┐┬┌─┐
 ║  │ ││ ┬││  
 ╩═╝└─┘└─┘┴└─┘

  +-+-+-+-+ +-+
  |p|a|r|t| |1|
  +-+-+-+-+ +-+

 create an array with elements representing the type of value coming from the string

 (they're assigned by regex)
 0 -> " " white space 
 1 -> lowerCase letters
 2 -> upperCase letters
 3 -> special characters
 99 -> any character not specified

 Add a conditional for the the first and last value of the array 
 that if the last index is 1 and the first index 3, turn the 1 into 3 and  3 into a 1.

   +-+-+-+-+ +-+
  |p|a|r|t| |2|
  +-+-+-+-+ +-+

  Sort the characters into arrays based on their value in reverse
  (this can be done in the previous steps conditional using unshift)
  arr0 = white space
  arr1 = lowerCase
  arr2 = upperCase
  arr3 = specialCharacters
  arr99 = unknown characters

  +-+-+-+-+ +-+
  |p|a|r|t| |3|
  +-+-+-+-+ +-+

  Fill in a new array based on the key map using the sorted arrays
  Turn the new array into a string  and viola!

 * 
 * 
 * --[]Create a key map from the string map. 
 * --[]Break the string down into  5 arrays based off of value
 * --[]
 * --[]
 * 
 * 
 */

  function revStr(string) {
    
    //map of values
    let map = [];
   
    //Reverses Pattern
    let revMap = []

    //to be messed with
    let rebuild = [];

    let test1 = []

    //Regex checks
    const upper =  /[A-Z]/;
    const lower = /[a-z]/;
    const space = /\s/;
    const special = /[!@#$%^*(),.?"':{}|<>]/;

    //arrays of matching value
    arr0 = []; //spaces
    arr1 = []; //lowercase
    arr2 = []; //uppercase
    arr3 = []; //special
    arr99 = []; //unknown characters
    //Viewing and testing purposes
    
    //FIXME:  Need to deal with special Characters & first and last index swap for special and lower to uppercase
    // if (lower.test(string[string.length - 1] && upper.test(string[0]))){
        
    //     string[string.length - 1] = string[string.length - 1].toLowerCase(),
    //     string[0] =
    // }
    for (let i = 0; i < string.length; i++) {
        
    if (space.test(string[i])) {
        map[i] = 0;
        rebuild[i] = 0;
        arr0.unshift(string[i])
    }else if (lower.test(string[i])) {
        map[i] = 1;
        rebuild[i] = 1;
        arr1.unshift(string[i])
    }else if (upper.test(string[i])) {
        map[i] = 2;
        rebuild[i] = 2;
        arr2.unshift(string[i]);
    }else if (special.test(string[i])) {
        map[i] = 3;
        rebuild[i] = 3;
        arr3.unshift(string[i])
    }else {   
        map[i] = 99;
        rebuild[i] = 99;
        arr99.unshift(string[i])
    } 
        test1.unshift(string[i])
    }

   
    for (let i = map.length - 1; i >= 0; i--) {
        
        revMap.push(map[i])
    
    }

    bigArr =[arr0,arr1,arr2,arr3,arr99];
    // --[x] Mapping and keying 

    //Part 2 assigning 
    
// for (let i = 0; i < arr1.length; i++) {
    
//     for (let j = 0; j < map.length; j++) {
       
//         if (map[i] == 1) {
            
//         }
        
//     }
    
// }
  

    for (let i = 0; i < map.length; i++) {
        if (revMap[i] == 0) {
            test1[i] = " "
        }else if (revMap[i] == 1) {
            test1[i] = test1[i].toLowerCase()
        }else if (revMap[i] == 2) {
            test1[i] = test1[i].toUpperCase()
        }
        
    }

    let rev = ""
    for (let i = 0; i < test1.length; i++) {
        rev += test1[i]
    
    }
    console.log(map);
    console.log(test1);
    //console.log(revMap);
    //console.log(rebuild);
    //console.log(rev);
   // console.log(bigArr);
  }

  revStr("?ysiadg odru oys 'erehw");