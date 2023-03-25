const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here
function reducer (array){
let batteries =()=>{
let total= (array.reduce((a,b)=>{return a+b;}))
return total;
}
let totalBatteries =batteries()
return totalBatteries;
}
let totalBatteries = reducer(batteryBatches);
console.log(reducer(batteryBatches))