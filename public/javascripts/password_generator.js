//sample a element in collection
function sample(collection){
  let randomIndex = Math.floor(Math.random() * collection.length)
  return collection[randomIndex]
}

function generatePassword(){
  const lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz'
  const uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  const numbers = '1234567890'
  const symbols = '`~!@#$%^&*()_+-={}[]|":;<>?/'

  const options = {
    length: '12',
    lowercase: 'on',
    uppercase: 'on',
    numbers: 'on',
    symbols: 'on',
    excludeCharacters: ''
  }

  let collection = []

  if(options.lowercase === 'on'){
    collection = collection.concat(lowercaseLetters.split(''))
  }

  if(options.uppercase === 'on'){
    collection = collection.concat(uppercaseLetters.split(''))
  }

  if(options.numbers === 'on'){
    collection = collection.concat(numbers.split(''))
  }

  if(options.symbols === 'on'){
    collection = collection.concat(symbols.split(''))
  }

  // remove things user do not need
  if(options.excludeCharacters){
    collection = collection.filter(
      character => !options.excludeCharacters.includes(character)
    )
  }

  let password = ''
  for(let i = 1; i <= options.length; i++){
    password += sample(collection)
  }

  return password
}

//export
module.exports = { generatePassword }