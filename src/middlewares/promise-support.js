const promiseSupport = store => next => action => {
  if (typeof action.then === 'function') {
    return action.then(obj => next(obj));
  }

  return next(action);
}

export default promiseSupport;