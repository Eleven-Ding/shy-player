import { memo } from 'react';
import { shallowEqual, useSelector } from 'react-redux'
import { formatDate } from '../untils/format';
import { defualtState } from '../types';
import './index.less'
export default memo(function TimeAndTotal() {
    const { currentTime, totalTime } = useSelector((state) => ({
        currentTime: (state as defualtState).currentTime,
        totalTime: (state as defualtState).totalTime,

    }), shallowEqual)

    return (
        <div className='shy-time-line'>
            <span>{formatDate(currentTime, "mm:ss")}</span>
            <span>/</span>
            <span>{formatDate(totalTime, "mm:ss")}</span>
        </div>
    )
})
