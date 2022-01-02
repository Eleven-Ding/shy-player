import { memo, useEffect, useRef, useCallback } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux'
import './iconfont/index.less'
import './index.less'
import { defualtState } from './types/index'


import ProgressBar from './ProgressBar';
import SongInfo from './SongInfo';
import OperationBar from './OperationBar';
import LyricsDisplay from './LyricsDisplay';
import Image from './Image';
import Songlist from './songlist';
import TimeAndTotal from './playAndTotalTime'
import * as types from './store/constant'

import { getSongList, getLyrics, getMp3 } from './untils/network'

let isFirst = true;
export default memo(function ShyPlayer() {

  const dispatch = useDispatch()
  const audioRef = useRef()
  const { currentTime, currentSong, currentSongIndex, songList } = useSelector(state => ({
    currentSong: (state as defualtState).currentSong,
    currentSongIndex: (state as defualtState).currentSongIndex,
    songList: (state as defualtState).songList,
    currentTime: (state as defualtState).currentTime,
  }), shallowEqual)
  //切换歌曲
  function changeCurrentSong(song: any) {
    dispatch({
      type: types.CHANGE_CURRENT_SONG,
      payload: song
    })
  }

  const play = useCallback(function () {
    (audioRef.current as HTMLMediaElement).play()
  }, [])
  const pause = useCallback(function () {
    (audioRef.current as HTMLMediaElement).pause()
  }, [])


  useEffect(() => {
    if (currentSong)
      getLyrics(currentSong.id).then(res => {
        // console.log(res.data.lrc.lyric);
      })
  }, [currentSong])
  useEffect(() => {
    //获取歌曲列表
    getSongList().then(res => {
      const songList = res.data.data.data.songs
      dispatch({
        type: types.GET_SONG_LIST,
        payload: songList
      })
      //当前播放 默认第一首
      changeCurrentSong(songList[0])
      //获取歌词
    })
  }, [])
  function handleTimeUpdate(event) {
    
    const currentTime = event.target.currentTime * 1000
    
    dispatch({
      type: types.CHANGE_CURRENT_TIME,
      payload: currentTime
    })
  }

  function handleAudioOnCanplay() {
    dispatch({
      type: types.CHANGE_TOTAL_TINE,
      payload: (audioRef.current as HTMLMediaElement).duration * 1000
    })
  }
  function HandleMusicEnd() {
    isFirst = false
    let index = 0
    //判断currentIndex
    if (currentSongIndex === songList.length - 1) {
      index = 0
    } else {
      index = currentSongIndex + 1
    }
    //下一首
    dispatch({
      type: types.CHANGE_CURRENT_SONG,
      payload: songList[index]
    })
    //切换currentSongIndex
    dispatch({
      type: types.CHANGE_CURRENT_SONG_INDEX,
      payload: index
    })
  }
  const changeCurrentTime = useCallback((currentTime) => {
    
    if (audioRef.current) {
      (audioRef.current as HTMLMediaElement).currentTime = currentTime 
    }
  }, [])
  return (
    <div className="shy-player">
      <div className="player-left">
        <Image play={play} pause={pause} src={currentSong?.al.picUrl || "https://blog-1303885568.cos.ap-chengdu.myqcloud.com/img/DSY-1619835493645.JPEG2000"} alt='图片加载失败'></Image>
      </div>
      <div className="player-right">
        <SongInfo songName={currentSong?.name || "shy-player"} singer={currentSong?.ar[0].name || "shy-player"}></SongInfo>
        <LyricsDisplay></LyricsDisplay>
        <div className='shy-ops'>
          <ProgressBar changeCurrentTime={changeCurrentTime} ></ProgressBar>
          <TimeAndTotal></TimeAndTotal>
          <OperationBar></OperationBar>
        </div>
      </div>
      <Songlist></Songlist>

      {currentSong && <audio  ref={audioRef} onEnded={HandleMusicEnd} onCanPlay={handleAudioOnCanplay} onTimeUpdate={handleTimeUpdate} src={getMp3(currentSong.id)} ></audio>}
    </div>
  )
})
