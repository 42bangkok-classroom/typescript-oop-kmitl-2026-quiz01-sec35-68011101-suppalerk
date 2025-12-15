//const scoreString : string = process.argv[2]
//const score : number = parseInt(scoreString);
const input = process.argv[2];
const score = Number(input)

if (Number.isNaN(score)){
    console.log ("Invalid");
}
 else if (score <0 || score >100) {
  console.log('Invalid Input');
} else {
  if (score >= 80) {
     console.log('A')
  } else if (score >= 70) {
    console.log('B')
  } else if (score >= 60) {
    console.log('C')
  }  else if (score >= 50) {
    console.log('D')
  }  else {
    console.log('F')
  }
}