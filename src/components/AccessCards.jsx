import React from 'react'

const AccessCards = ({AccessImg,AccessText}) => {
    return (
        <div className="access-card-btn" >
            <input type='checkbox' name={AccessText} value={AccessText} />
            <span>
                <img src={AccessImg} />
            </span>
        </div>
    )
}

export default AccessCards
