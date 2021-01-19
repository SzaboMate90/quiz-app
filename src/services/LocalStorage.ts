
const isLocalStorageExists = () => {
  return typeof window !== 'undefined' && typeof window.localStorage !== 'undefined';
};

export function saveState(key : string, value : string) {
  isLocalStorageExists() && window.localStorage.setItem(key, value);
}

export function getState(key : string) {
  return isLocalStorageExists() && window.localStorage.getItem(key);
}

export function clearState(key : string) {
  isLocalStorageExists() && window.localStorage.removeItem(key);
}

export function clearStates() {
  isLocalStorageExists() && window.localStorage.clear();
}

export default {
  saveState,
  getState,
  clearState,
  clearStates
};