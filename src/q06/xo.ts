const size1String : string = process.argv[2]
const size1 : number = parseInt(size1String);

for (let i = 0 ; i < size1 ; i++){
  let row =""
  for (let j = 0 ; j < size1 ; j++){
    if (i === 0 || i === size1 -1 || j === 0 || j === size1 -1){
      row += "x"
    } else{
      row += "o"
    }
  }
  console.log(row)
}