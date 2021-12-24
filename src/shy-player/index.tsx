import { memo } from 'react';
import './index.less'
import ProgressBar from './ProgressBar';
export default memo(function ShyPlayer() {
  return (
    <div className="shy-player">
      <ProgressBar > </ProgressBar>
      <h1>ShyPlayer</h1>
    </div>
  )
})
