import { memo } from 'react';
import './iconfont/index.less'
import './index.less'
import ProgressBar from './ProgressBar';
import SongInfo from './SongInfo';
import OperationBar from './OperationBar';
import LyricsDisplay from './LyricsDisplay';
import Image from './image';
export default memo(function ShyPlayer() {
  return (
    <div className="shy-player">
      <div className="player-left">
        <Image src='https://p1.music.126.net/DSTg1dR7yKsyGq4IK3NL8A==/109951163046050093.jpg?param=100y100' alt='图片加载失败'></Image>
      </div>
      <div className="player-right">
        <SongInfo songName="Burning" singer="Various Artists"></SongInfo>
        <LyricsDisplay></LyricsDisplay>
        <div className='shy-ops'>
          <ProgressBar> </ProgressBar>
          <OperationBar></OperationBar>
        </div>
      </div>
    </div>
  )
})
