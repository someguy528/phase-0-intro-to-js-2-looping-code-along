// Code your solutions in this file
function writeCards(names,event){
let eventArray=[];
    for (let i = 0; i<names.length;i++){
eventArray.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
}
return eventArray;
}
function countDown(number){
    while(0<=number){
        console.log(number);
        number--;
    }
}