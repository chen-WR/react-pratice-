import React from 'react';

function PageJump({goPrev,goNext}) {
    return (
        <div>
            {goPrev && <button onClick={ goPrev }>Prev</button>}
            {goNext && <button onClick={ goNext }>Next</button>}
        </div>
    )
}

export default PageJump;