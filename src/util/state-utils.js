export const loadState = () => {
  try {
    const serializedState = localStorage.getItem('todos_state');
    return serializedState != null ? 
      JSON.parse(localStorage.getItem('todos_state')) :
      undefined;
  } catch(err) {
    return undefined;
  }
}

export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('todos_state', serializedState);
  } catch(err) {
    // Ignore if error occurs
  }
}