function basicTeenager(age) {
  if(age >= 13 && age <= 19){
    return "You are a teenager!";
  }
}

function teenager(age) {
  if(age >= 13 && age <= 19){
    return "You are a teenager!";
  }
  else if (age < 13){
    return "You are not a teenager!"
  }
}

function ageChecker(age) {
  if(age < 13){
    return "You are a kid!";
  }
  else if(age >= 13 && age <= 19){
    return "You are a teenager!"
  }
  else if (age >= 20) {
    return "You are grownup!"
  }
}

function ternaryTeenager(age) {
  return age > 13 && age <= 19?  "You are teenager!" : "You are not teenager!";
}

function switchAge(age) {

}
