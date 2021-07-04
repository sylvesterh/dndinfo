import React from 'react'

const SavingThrow = ({stats}) => {
    return (
        <div>
            {stats.map((stat) => (
                <p key={stat.index}>{stat.name}</p>
            ))}
        </div>
    )
}

export default SavingThrow
