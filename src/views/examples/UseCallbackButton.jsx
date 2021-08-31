import React, {memo} from 'react'

const UseCallbackButton = ({ inc }) => {
    return (
        <div className="center">
            <div>
                <button className="btn" onClick={() => inc(6)}>
                    +6
                </button>
                <button className="btn" onClick={() => inc(12)}>
                    +12
                </button>
                <button className="btn" onClick={() => inc(18)}>
                    +18
                </button>

            </div>
        </div>

    )
}

export default memo(UseCallbackButton)
