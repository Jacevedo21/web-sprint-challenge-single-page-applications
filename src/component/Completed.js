import React from 'react'

export default function Completed(props) {
    console.log('completed', props)
    const {pizza} = props;
    return (
        <div>
            <h3>Submitted Order</h3>
                return (
            <div>
                <h4>{pizza.name}</h4>
                <p>Size: {pizza.size}</p>
                {pizza.plain && <p>Plain</p>}
                {pizza.bacon && <p>Bacon</p>}
                {pizza.pepperoni && <p>Pepperoni</p>}
                {pizza.sausage && <p>Sausage</p>}
            </div>
        );
                    
        </div>
    );
}


