import React from 'react'
import Button from './Button'
import PropTypes from 'prop-types'

const ButtonControls = ({ excludeButton }) => {
    return (
        <div>
            <div className="flex space-x-1.5">
                <div className="inline-block">
                    <Button
                        btnText="add"
                        imageUrl="https://sakshiinfotech.com/DocVedaSEB/images/add.svg"
                    />
                </div>
                <div className="inline-block">
                    <Button
                        btnText="edit"
                        imageUrl="https://sakshiinfotech.com/DocVedaSEB/images/Edit-01.svg"
                    />
                </div>
                <div className="inline-block">
                    <Button
                        btnText="View"
                        imageUrl="https://sakshiinfotech.com/DocVedaSEB/images/Edit-01.svg"
                    />
                </div>
                <div className="inline-block">
                    <Button
                        btnText="save"
                        imageUrl="https://sakshiinfotech.com/DocVedaSEB/images/Save-01.svg"
                    />
                </div>
                <div className="inline-block">
                    <Button
                        btnText="search"
                        imageUrl="https://sakshiinfotech.com/DocVedaSEB/images/Search-01.svg"
                    />
                </div>
                <div className="inline-block">
                    <Button
                        btnText="reset"
                        imageUrl="https://sakshiinfotech.com/DocVedaSEB/images/reset.svg"
                    />
                </div>
                <div className="inline-block">
                    <Button
                        btnText="cancel"
                        imageUrl="https://sakshiinfotech.com/DocVedaSEB/images/Cancel-01.svg"
                    />
                </div>
                <div className="inline-block">
                    <Button
                        btnText="import from appointment"
                        imageUrl="https://sakshiinfotech.com/DocVedaSEB/images/Save-01.svg"
                    />
                </div>
            </div>

        </div>
    )
}

ButtonControls.protoTypes = {
    excludeButton: PropTypes.array
}

export default ButtonControls
