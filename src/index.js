import React from 'react';
import ReactDOM from 'react-dom';

import configureStore from './configure-store';
import Root from './containers/root';

const store = configureStore();
const render = () => {
  ReactDOM.render(
    <Root store={store} /> 
    , document.querySelector('.container')
  );
};

render();


const sleep = async (milliseconds) => {
  const p = new Promise((resolve, reject) => {
    
    setTimeout(() => {
      resolve();
      // reject('Oops something went wrong');
    }, milliseconds);
  });

  return await p;

}

const slowTask = async () => {
  await sleep(2000);
  return 20;
}

const fastTask = async () => {
  await sleep(1000);
  return 10;
}



const test = async () => {
  console.log(`Start time = ${new Date().toTimeString()}`);
  let slow = slowTask();
  let fast = fastTask();

  console.log(await slow);
  console.log(await fast);

  console.log(`End time = ${new Date().toTimeString()}`);

  // let delay = 2000;

  
  // try {
  //   console.log(`Sleep for ${delay} milliseconds...`);
  //   await sleep(delay);
  //   console.log('Wake up');
    
  //   delay = 1000;
  //   console.log(`Snooze for ${delay} milliseconds...`);
  //   await sleep(delay);
  //   console.log('Wake up');

  //   delay = 3000;
  //   console.log(`Snooze for ${delay} milliseconds...`);
  //   await sleep(delay);
  //   console.log('Wake up');

  // } catch (err) {
  //   console.log(err);
  // }
  
  
};

// test();





