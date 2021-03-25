let age = 64
let guess = 0

while (guess !== age) {
  ag  e= parseInt(age)
  guess = parseInt(guess)
  guess = prompt('guess my age(between 0 and 100)')
  if (guess > age) prompt('your guess is too high')
  else if (guess < age) prompt('your guess is too low')
}
if (guess === age) alert('you win!')
