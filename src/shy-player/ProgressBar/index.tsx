import { memo, useRef } from 'react';
import './index.css'
interface ProgeressBarProps {
    handleProgressChange: (event: React.MouseEvent) => void
}
export default memo(function ProgeressBar({ handleProgressChange }: ProgeressBarProps) {
    const InputRef = useRef()

    function progressChange(event) {
        console.log(InputRef.current.value);
        
        handleProgressChange(InputRef.current);
    }
    return (
        <div>
            <input ref={InputRef} onChange={(event) => progressChange(event)} type="range" id="volume" name="volume" step="1"
                min="0" max="100" />
        </div>
    )
})
