import { useState, useEffect } from 'react';
import { AsyncStorage } from 'react-native';

function usePersistedState(key, initialState) {
  const [state, setState] = useState(() => {})

  useEffect(() => {
    async function getAndSetInitialState() {
      const persistedState = await AsyncStorage.getItem(key)
      if (persistedState) {
        setState(JSON.parse(persistedState));
      } else if (typeof initialState === 'function') {
        return setState(initialState());
      } else {
        return setState(initialState);
      }
    }
    getAndSetInitialState()
  }, [key])

  function setPersistedState(value) {
    AsyncStorage.setItem(key, JSON.stringify(value));
    setState(value);
  }
  console.log(state)
  return [ initialState, setPersistedState ];
  // return [ state, setPersistedState ];
}

export default usePersistedState;