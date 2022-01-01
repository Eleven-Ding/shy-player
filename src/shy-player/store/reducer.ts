import rootState from './state';
import { acitonTypes, defualtState } from '../types/index'

import * as types from './constant'
export default function reducer(state = rootState, action: acitonTypes): defualtState {
    switch (action.type) {
        case types.GET_SONG_LIST:
            return { ...state, songList: action.payload }
        case types.CHANGE_CURRENT_SONG:
            return { ...state, currentSong: action.payload }
        case types.CHANGE_LIST_HIDDEN:
            return { ...state, hiddenSongList: action.payload }
        case types.CHANLE_IS_PLAYING:
            return { ...state, isPlaying: action.payload }
        case types.CHANGE_CURRENT_SONG_INDEX:
            return { ...state, currentSongIndex: action.payload }
        case types.CHANGE_CURRENT_TIME:
            return { ...state, currentTime: action.payload }
        case types.CHANGE_TOTAL_TINE:
            return { ...state, totalTime: action.payload }
        default:
            return state
    }
}