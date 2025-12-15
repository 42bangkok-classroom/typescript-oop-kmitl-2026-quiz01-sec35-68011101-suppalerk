const balanceString : string = process.argv[2]
const amountString : string = process.argv[3]
const balance : number = parseInt(balanceString);
const amount : number = parseInt(amountString);

if (Number.isNaN(balance&amount)) {
    console.log ("Invalid");
}
  else if (amount > balance) {
    console.log ("Insufficient balance")
  }
  else if (amount > 5000){
    console.log ("Exceeds per-withdrawal limit")
  }
  else {
    console.log ("Approved");
  }