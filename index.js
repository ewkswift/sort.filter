//homework1 
let cars = [5000, 10000, 15000, 20000, 25000, 30000, 35000, 40000, 45000, 50000, 55000, 60000, 70000, 80000];

let cheap = cars.filter(function(number) {
  return number > 35000;
});

console.log(cheap);


//Homework2

let index = ['emin', "damir", 'samir', 'ilxom', 'daler', 'anvar', 'shaxzod', 'bexruz', 'ibragim', 'samira', 'barbara']

console.log(
    index.sort((a,b) => b.length - a.length)
);


//homework3

let arr = [1, 2, false, 'hello', 24, 'world', undefined, null, 'error', 22]

let n = arr.filter(item => typeof item ==='number')


if (n.length >= 5 ) {
    console.log('good');
}

else {
    console.log(
        "bad"
    );
}
