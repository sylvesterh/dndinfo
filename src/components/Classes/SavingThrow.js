import React from 'react'

const SavingThrow = ({stats}) => {
    return (
        <div>
            {stats.map((stat) => (
                <li key={stat.index}>{stat.name}</li>
            ))}
        </div>
    )
}

export default SavingThrow
