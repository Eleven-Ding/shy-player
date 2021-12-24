export interface defualtState {
    counter: number;
    //当前播放的时间
    currentTime: number;
    //总时长
    totalTime:number;
    //当前歌曲
    currentSong: any
}

export interface acitonTypes {
    type: string,
    payload: any
}
