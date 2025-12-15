const NString : string = process.argv[2]
const N : number = parseInt(NString);
let sum : number = 0;
if (Number.isNaN(N)){
  process.exit(0);
}
for (let i = 1 ; i <= N ; i++){
  sum = i+sum
  //console.log (i);
  //console.log (sum);
}
console.log ("Sum :",sum)