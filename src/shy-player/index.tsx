import { memo, useCallback } from 'react';
import ProgressBar from './ProgressBar';
export default memo(function ShyPlayer() {
  const handleProgressChange = useCallback(function () {

  }, [])
  return (
    <div>
      <ProgressBar handleProgressChange={handleProgressChange}> </ProgressBar>
      <h1>ShyPlayer</h1>
    </div>
  )
})
