import React from "react";

const ErrorMsg = ({ error }) => {

    return (
        <>            
            <h3 className='error-message'>{error}</h3>
        </>
        
    )
}

export default ErrorMsg;
