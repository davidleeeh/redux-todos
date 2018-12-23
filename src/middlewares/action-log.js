const actionLog = store => next => action => {
  if ( !console.group ) {
    return next(action);
  }

  console.group(action.type);
  console.log('%c prev state', 'color: gray', store.getState());
  console.log('%c action', 'color: blue', action);
  const retval = next(action);
  console.log('%c next stte', 'color: green', store.getState());
  console.groupEnd(action.type);
  return retval;
}

export default actionLog;