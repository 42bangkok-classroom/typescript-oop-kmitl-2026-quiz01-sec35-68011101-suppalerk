const numString1 : string = process.argv[2]
const num5 : number = parseInt(numString1);
let fac = 1;
if (Number.isNaN(num5) || num5 < 0){
  console.log("Invalid");
  process.exit(1);
}
for (let i = 1 ; i<=num5 ; i++){
  fac = i*fac;
}
console.log(fac);