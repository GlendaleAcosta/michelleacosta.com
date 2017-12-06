export function closeLoadingScreen() {
  return {
    type: 'CLOSE_LOADING_SCREEN',
    payload: false,
  };
}