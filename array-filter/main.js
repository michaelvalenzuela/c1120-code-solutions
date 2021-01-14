const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const names = [
  'Ada',
  'Hedy',
  'Jean',
  'Grace',
  'Evelyn',
  'Joan',
  'Elizabeth',
  'Janese',
  'Donna'
];

const evenNumbers = numbers.filter(x => { return x % 2 === 0; });
const overFive = numbers.filter(x => { return x > 5; });
const startWithE = names.filter(x => { return x.charAt(0) === 'E'; });
const haveD = names.filter(x => { return x.charAt(0) === 'd' || x.charAt(0) === 'D'; });

console.log('Even Numbers:', evenNumbers);
console.log('Over Five:', overFive);
console.log('Start with E:', startWithE);
console.log('Have D:', haveD);
