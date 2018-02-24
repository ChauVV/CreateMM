import store from '../../DatabaseLib/datas'

export default function createReducer (initialState, handlers) {
  return function reducer (state = initialState, action) {
    if (handlers.hasOwnProperty(action.type)) {
      return handlers[action.type](state, action)
    } else {
      return state
    }
  }
}

export const checkStore = (data, KEYSTORE) => {
  store.set(KEYSTORE, data)
}

export const checkLocalStoreToRedux = async (storeRedux, keyStoreNew, action, initData) => {
  let storage = await store.get(keyStoreNew)
  if (storage.status) {
    const data = storage.data
    typeof (initData) === 'string'
      ? !data
        ? storeRedux.dispatch(action(initData))
        : data !== initData && storeRedux.dispatch(action(data))
      : !data ? storeRedux.dispatch(action(initData))
        : typeof (initData) === 'boolean'
          ? data && storeRedux.dispatch(action(data))
          : typeof (initData) === 'number'
            ? storeRedux.dispatch(action(data))
            : data.length > 0 && storeRedux.dispatch(action(data))
  } else {
    storeRedux.dispatch(action(initData))
  }
}
