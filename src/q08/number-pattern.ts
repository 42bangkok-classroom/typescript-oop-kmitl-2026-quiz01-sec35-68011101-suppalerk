const size4String : string = process.argv[2]
const size4 : number = parseInt(size4String);

for (let i = 0 ; i < size4 ; i++){
  let row : number = size4 ;
  
  for (let j = 0 ; j <= i ; j++){
  row -= size4
  }
  console.log(row)
}

