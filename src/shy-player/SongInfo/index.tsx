import { memo } from 'react';
export interface SongInfoProps {
  //歌曲名字
  songName: string;
  //歌手
  singer: string;
}
export default memo(function SongInfo({ songName, singer }: SongInfoProps) {
  return (
    <div>
      {songName} - {singer}
    </div>
  )
})
