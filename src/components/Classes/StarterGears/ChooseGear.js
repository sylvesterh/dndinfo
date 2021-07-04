import React from 'react'

const ChooseGear = ({optgear}) => {
    return (
        <div>
            <ol>
                {optgear.map((opt)=> (<li key={opt.equipment.index}>{opt.equipment.name} x {opt.quantity}</li>))}
            </ol>
        </div>
    )
}

export default ChooseGear
