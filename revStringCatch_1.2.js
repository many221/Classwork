/*
 
  +-+-+-+ +-+-+-+ +-+-+-+ +-+-+-+-+-+-+-+-+-+-+-+-+-+
  |S|E|E| |1|.|1| |f|o|r| |d|o|c|u|m|e|n|t|a|t|i|o|n|
  +-+-+-+ +-+-+-+ +-+-+-+ +-+-+-+-+-+-+-+-+-+-+-+-+-+
 
*/
//Focus on spaces
//Just starting with a blank page to refresh mind
//using a space map 
function reverseString(str) {
    return str.split("").reverse().join("");
}


function revString(string) {
       //will need to split into sub arrays based off of spacing
        //Regex checks
        const upper =  /[A-Z]/;
        const lower = /[a-z]/;
        const space = /\s/;
        const special = /[!@#$%^&*(),.?"':{}|<>]/;

        let spaceMap = []

        

        for (let i = 0; i < string.length; i++) {
           
            
        }
     

        //will be using shortcut methods to reverse string for sake of sanity

        let rString = reverseString(string)
        
        console.log(rString);
}

revString("?ysiadg odru oys 'erehw")