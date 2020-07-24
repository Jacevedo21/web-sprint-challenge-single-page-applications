import React from 'react'

export default function Completed(props) {
    console.log('completed', props)
    const { pizza } = props;
    // console.log('pizza test', pizza)
    return (
        <div>
            <h3>Submitted Order</h3>
            <div>
                <h4>{pizza.name}</h4>
                <p>{pizza.size}</p>
                {pizza.plain && <p>Topping: plain</p>}
                {pizza.bacon && <p>Topping: bacon</p>}
                {pizza.pepperoni && <p>Topping: pepperoni</p>}
                {pizza.sausage && <p>Topping: sausage</p>}

            </div>
        </div>
    );
}


