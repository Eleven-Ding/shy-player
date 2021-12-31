import { memo } from 'react';
import ShyVoice from './cpns/voice'
import ShySongList from './cpns/songlist'
import ShyLoop from './cpns/loop'
import './index.less'
export default memo(function OperationBar() {
  return (
    <div className='shy-operation-bar'>
      <ShyVoice></ShyVoice>
      <ShyLoop></ShyLoop>
      <ShySongList></ShySongList>
    </div>
  )
})
