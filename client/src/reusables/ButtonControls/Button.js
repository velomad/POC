import React from 'react'

const Button = ({ imageUrl, btnText }) => {
    return (
        <div>
            <div className="flex cursor-pointer  border-gray-200 border-2 p-1 items-center space-x-2 bg-white">
                <div>
                    <img src={imageUrl} width="15px" />
                </div>
                <div className="capitalize">{btnText}</div>
            </div>
        </div>
    )
}

export default Button
