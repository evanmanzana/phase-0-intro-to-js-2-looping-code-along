
function writeCards(nameArray, eventName){
  let anything = []
  for (let i = 0; i < nameArray.length; i++) {
    anything.push(`Thank you, ${nameArray[i]}, for the wonderful ${eventName} gift!`)
  }
  return anything
}

function countDown(startPoint) {
  while (startPoint >= 0) {
    console.log(startPoint--)
  }
  
  }

