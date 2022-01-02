import { memo, useCallback } from 'react';
import ShyVoice from './cpns/voice'
import ShySongList from './cpns/songlist'
import ShyLoop from './cpns/loop'
import './index.less'
interface OperationBarProps {
  changeVolume: (volume: number) => void
}
export default memo(function OperationBar({ changeVolume }: OperationBarProps) {
  const HandleChangeVolume = useCallback(function (volume:number) {
    changeVolume(volume)
  }, [])
  return (
    <div className='shy-operation-bar'>
      <ShyVoice changeVolume={HandleChangeVolume}></ShyVoice>
      <ShyLoop></ShyLoop>
      <ShySongList></ShySongList>
    </div>
  )
})
