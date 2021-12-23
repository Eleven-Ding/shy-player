import rootState from './state';
import { acitonTypes, defualtState } from '../types/index'

export default function reducer(state = rootState, action: acitonTypes): defualtState {
    switch (action.type) {
        default:
            return state
    }
}