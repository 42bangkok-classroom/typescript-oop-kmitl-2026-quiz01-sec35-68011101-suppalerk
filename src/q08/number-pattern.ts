const size4String : string = process.argv[2]
const size4 : number = parseInt(size4String);

if (Number.isNaN(size4) || size4 < 0){
    console.log ("Invalid Input");
}
for (let i = 0 ; i <= size4 ; i++){
  let row : number = size4 ;
  
  for (let j = 0 ; j < i ; j++){
  row -= 1
  }
  console.log(row)
}

