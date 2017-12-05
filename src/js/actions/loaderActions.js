export function closeLoadingScreen() {
  console.log('close loading screen');
  return {
    type: 'CLOSE_LOADING_SCREEN',
    payload: false,
  };
}