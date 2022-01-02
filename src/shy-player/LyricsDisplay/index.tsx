import { memo, useEffect, useState } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { defualtState } from '../types';
import './index.less'
export default memo(function LyricsDisplay() {
  const { lyrics, currentTime } = useSelector(state => ({
    lyrics: (state as defualtState).lyrics,
    currentTime: (state as defualtState).currentTime,
  }), shallowEqual)
  const [currentLyric, setCurrentLyric] = useState("shy-player");
  const [currentPosition, setCurrentPosition] = useState(-34)
  useEffect(() => {
    for (let i = lyrics.length - 1; i >= 0; i--) {
      const item = lyrics[i];
      if (currentTime > item.time) {
        if (item.content !== currentLyric) {
          setCurrentLyric(item.content)
          //根据currentTime找
          //找currentTime 大于了多少了 
          let j = 0
          for (; currentTime > lyrics[j].time; j++);

          setCurrentPosition((j-2) * 17)
        }
        break
      }
    }
  }, [currentTime])
  return (
    <div className='shy-lyrics'>
      <div className="shy-lyrics-list" style={{ transform: `translateY(${-currentPosition}px)`, transition: "all .3s linear" }}>
        {
          lyrics.map((item, index) => {
            return (
              <div className="shy-lyrics-item" key={index}>
                <span className={currentLyric === item.content ? "lyric-active" : ""}>{item.content}</span>
              </div>
            )
          })
        }
        {/* 很多Item */}

      </div>
      <p>LyricsDisplay {lyrics.length}</p>
    </div>
  )
})
