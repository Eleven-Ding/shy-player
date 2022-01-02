import { memo } from 'react';
import './index.less'
export interface SongInfoProps {
  //歌曲名字
  songName: string;
  //歌手
  singer: string;
}
export default memo(function SongInfo({ songName, singer }: SongInfoProps) {
  return (
    <div className='shy-song-info'>
      <span>{songName}</span>
      <span> - {singer}</span>
    </div>
  )
})
