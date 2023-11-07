const initialState = {
    number: 100,
}

export const demoReduxReducer = (state = initialState, action) => {
    console.log('action: ', action)
    switch (action.type) {
        case 'INCREASE_NUMBER': {
            state.number += action.payload
            return { ...state }
        }
        default:
            return state
    }
}
