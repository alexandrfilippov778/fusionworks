// I am messing first time with promises, judge by logic, not output

function newPromise() {
  return new Promise((resolve) => {
    setTimeout(() => {
      const randomBoolean = Math.round(Math.random() * 10) % 2 === 0;
      return resolve(randomBoolean);
    }, 1000);
  });
};

function resolve(randomBoolean){
	// if positive 'promise'
	if(randomBoolean % 2 == 0){
    	results._true.push(randomBoolean);
    }
    // if negative 'promise'
    else if(randomBoolean % 2 != 0){
    	results._false.push(randomBoolean);
    }

    else{
    	console.log("something wrong")
    }

    return results;
};

// Our results
var results = {
  response: [] , // Array of results from promises
  _true: [] , // Count of true values
  _false: []  // Count of false values
};

console.log("True Values Count:" + results._true.length);
console.log("False Values Count:" + results._false.length);

//save results to localSTorage
localStorage.setItem('results', results);

