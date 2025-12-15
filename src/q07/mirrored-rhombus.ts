const sizeString : string = process.argv[2]
const size : number = parseInt(sizeString);

for (let i = 0 ; i < size ; i++){
  let row =""

  for (let space = 0 ; space < i ; space++){
    row +=" "
  }
  for (let star = 0 ; star < size ; star++){
    row +="*"
  }
  console.log(row)
}