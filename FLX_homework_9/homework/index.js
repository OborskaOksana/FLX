// Your code goes here
const data = [{
    "_id": "5b5e3168c6bf40f2c1235cd6",
    "index": 0,
    "age": 39,
    "eyeColor": "green",
    "name": "Stein",
    "favoriteFruit": "apple"
  },
  {
    "_id": "5b5e3168e328c0d72e4f27d8",
    "index": 1,
    "age": 38,
    "eyeColor": "blue",
    "name": "Cortez",
    "favoriteFruit": "strawberry"
  },
  {
    "_id": "5b5e3168cc79132b631c666a",
    "index": 2,
    "age": 2,
    "eyeColor": "blue",
    "name": "Suzette",
    "favoriteFruit": "apple"
  },
  {
    "_id": "5b5e31682093adcc6cd0dde5",
    "index": 3,
    "age": 19,
    "eyeColor": "green",
    "name": "George",
    "favoriteFruit": "banana"
  }
];

function findTypes(data) {
  return typeof data;
}
findTypes('number');


function executeforEach(element, index) {
  alert('array[' + index + '] = ' + element);
}
[1, 2, 3].forEach(executeforEach);


function map(arr, func) {
  return map(arr, func);
}
[2, 5, 8].map(x => x + 3);


function filter(arr, func) {
  return filter(arr, func);
}
[2, 5, 8].filter(x => x > 3);


function getAmountOfAdultPeople(data) {
  const DataFilter = filter(data, (element) => element.age > 18);
  return DataFilter.length;
}
getAmountOfAdultPeople(data);


function getGreenAdultBananaLovers(data) {
  const DataFilter = filter(data, (element) => element.age > 18 &&
    element.favoriteFruit === 'banan' &&
    element.eyeColor === 'green');
  return map(DataFilter, (element) => element.name);
}
getGreenAdultBananaLovers(data);


function keys(data) {
  const arr = [];
  for (let key in data) {
    if (data[key]) {
      arr.push(key);
    }
  }
  return arr;
}
keys({
  keyOne: 1,
  keyTwo: 2,
  keyThree: 3
});


function value(data) {
  const arr = [];
  for (var key in data) {
    if (data[key]) {
      arr.push(data[key]);
    }
  }
  return arr;
}
value({
  keyOne: 1,
  keyTwo: 2,
  keyThree: 3
});

function showFormattedDate(date) {
  const monthes = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const day = date.getDate();
  const month = monthes[date.getMonth()];
  const year = date.getYear();
  return `Date: ${day} of ${month}, ${year}`;
}
showFormattedDate(new Date('2019-01-27T01:10:00'));

function isEvenYear(date) {
  const year = date.getYear();
  return year % 2 === 0;
}
isEvenYear(new Date('2019-02-27T01:10:00'));
isEvenYear(new Date('2016-02-27T01:10:00'));

function isEvenMonth(date) {
  const month = date.getMonth();
  return month % 2 !== 0;
}
isEvenMonth(new Date('2019-02-27T01:10:00'));
isEvenMonth(new Date('2016-05-27T01:10:00'));