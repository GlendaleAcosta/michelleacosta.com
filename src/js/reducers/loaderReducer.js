export default function reducer(state = {
  showLoadingScreen: true,
}, action) {
  switch (action.type) {
    case 'CLOSE_LOADING_SCREEN': {
      return { ...state, showLoadingScreen: action.payload };
    }
    default: return state;
  }
}
