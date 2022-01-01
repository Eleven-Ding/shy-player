import { memo, useState } from 'react';
import { shallowEqual, useSelector, useDispatch } from 'react-redux'
import { defualtState } from '../types';
import './index.less'
import * as types from '../store/constant'
export default memo(function SongList() {
    const dispatch = useDispatch()
    const { songList, hiddenSongList, currentSongIndex } = useSelector(state => ({
        songList: (state as defualtState).songList,
        hiddenSongList: (state as defualtState).hiddenSongList,
        currentSongIndex: (state as defualtState).currentSongIndex,
    }), shallowEqual)


    const handleSongListItemClick = (index: number) => {
        if (index === currentSongIndex) return
        //在这里也去改变currentSong
        dispatch({
            type: types.CHANGE_CURRENT_SONG,
            payload: songList[index]
        })
        dispatch({
            type: types.CHANGE_CURRENT_SONG_INDEX,
            payload: index
        })
    }
    return (
        <div className={['shy-song-list', hiddenSongList ? "hidden" : ""].join(" ")}>
            {songList.map((song, index) => {
                return (
                    <div className={currentSongIndex === index ? "song-list-item active-item" : "song-list-item"} onClick={() => handleSongListItemClick(index)} key={song.id}>
                        <div className="before-bar">
                            <span className='before-block'></span>
                            <span>{song.name}</span>
                        </div>
                        <div>{song.ar[0].name}</div>
                    </div>
                )
            })}

        </div>
    )
})
