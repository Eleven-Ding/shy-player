import { memo } from 'react';
import './index.less'
export default memo(function ShySongList() {
    return (
        <div>
            {/* 歌单列表 */}
            <div className="shy-songlist">
                <span className='iconfont icon-list'></span>
            </div>
        </div>
    )
})
