//Debouncing
//stooping api call after every key stroke in search
//lazy load, 
//scroll event
//resize window

const counter = 0;
const getData = () => {
  //call the API and get The data

  console.log("Fetching the Data...", counter++);
};

//Better approach

const doSomething = function (fn, delay) {
  let timer;
  return function () {
    let context = this;
    args = arguments;
    clearInterval(timer);
    timer = setTimeout(() => {
      getData.apply(context, arguments);
    }, delay);
  };
};
const betterFunction = doSomething(getData, 300);
