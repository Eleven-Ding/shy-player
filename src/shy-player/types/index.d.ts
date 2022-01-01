export interface defualtState {
    //当前播放的时间
    currentTime: number;
    //总时长
    totalTime: number;
    //当前歌曲
    currentSong: any,
    //歌单
    songList: Array<any>;
    //是否展示歌单
    hiddenSongList: boolean;
    //是否正在播放
    isPlaying: boolean;
    //当前是第几首
    currentSongIndex: number
}

export interface acitonTypes {
    type: string,
    payload: any
}
