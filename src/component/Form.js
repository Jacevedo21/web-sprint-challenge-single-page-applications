import React from 'react'

export default function Form(props) {
    const {
        name,
        size,
        handleChange,
        handleSubmit,
        plain,
        bacon,
        pepperoni,
        sausage,
        errors,
    } = props
    console.log(name, 'this is topping')
    
    return (
        <form onSubmit={handleSubmit}>
            <div className='errors'>
                <div>{errors.name}</div>
                {/* <div>{errors.size}</div>
                <div>{errors.plain}</div>
                <div>{errors.bacon}</div>
                <div>{errors.pepperoni}</div>
                <div>{errors.sausage}</div> */}
            </div>
            <label>
                Your Name:
                <input name='name' value={name} onChange={handleChange} />
            </label>
            <label>
                Size:
                    <select value={size} name='size' onChange={handleChange}>
                    <option value='small'>Small</option>
                    <option value='medium'>Medium</option>
                    <option value='large'>Large</option>
                </select>
            </label>
            {/* <label>
                Plain:
                <input name="plain" type="checkbox" checked={plain} />
            </label>
            <label>
                Bacon:
                <input name="bacon" type="checkbox" checked={bacon} />
            </label>
            <label>
                Pepperoni:
                <input name="pepperoni" type="checkbox" checked={pepperoni} />
            </label>
            <label>
                Sausage:
                <input name="sausage" type="checkbox" checked={sausage} />
            </label>
            <button id='submitBtn' onClick={handleSubmit}>Place Order</button> */}
            <label>plain
                <input 
                 type="checkbox"
                 name="plain"
                 checked={plain}
                 onChange={handleChange}
                />
            </label>
            <label>bacon
                <input 
                 type="checkbox"
                 name="bacon"
                 checked={bacon}
                 onChange={handleChange}
                />
            </label>
            <label>pepperoni
                <input 
                 type="checkbox"
                 name="pepperoni"
                 checked={pepperoni}
                 onChange={handleChange}
                />
            </label>
            <label>sausage
                <input 
                 type="checkbox"
                 name="sausage"
                 checked={sausage}
                 onChange={handleChange}
                />
            </label>
            <button id='submitBtn' onClick={handleSubmit}>Place Order</button>

        </form>
    )
}
