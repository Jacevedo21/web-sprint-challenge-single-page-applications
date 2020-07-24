import React from 'react'

export default function Completed(props) {
    console.log('completed', props)
    const { pizza } = props;
    return (
        <div>
            <h3>Submitted Order</h3>
            <div>
                <h4>{pizza.name}</h4>
            </div>
        </div>
    );
}


