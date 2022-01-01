import { memo } from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux'
import './index.less'
import { defualtState } from '../../../types';
import * as types from '../../../store/constant'
export default memo(function ShySongList() {
    const { hiddenSongList } = useSelector((state) => ({
        hiddenSongList: (state as defualtState).hiddenSongList
    }), shallowEqual)
    const dispatch = useDispatch()
    function handleHiddenClick() {
        dispatch({
            type: types.CHANGE_LIST_HIDDEN,
            payload: !hiddenSongList
        })
    }
    return (
        <div className="shy-songlist" onClick={handleHiddenClick}>
            <span className='iconfont icon-list'></span>
        </div>

    )
})
