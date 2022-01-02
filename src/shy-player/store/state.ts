import { defualtState } from '../types/index'
export enum MODLES {
    LOOP,
    INORDER,
}
const state: defualtState = {
    currentTime: 0,
    totalTime: 1,
    currentSong: null,//当前歌曲
    songList: [],//歌单
    hiddenSongList: false,//
    isPlaying: false,//默认没有播放
    currentSongIndex: 0,
    model: MODLES.INORDER,
    lyrics:[{time:0,content:"shy-player"}]
}

export default state