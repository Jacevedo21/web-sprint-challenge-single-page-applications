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
    console.log(props)

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
                    <select value={size} name='size'>
                    <option value='small'>Small</option>
                    <option value='medium'>Medium</option>
                    <option value='large'>Large</option>
                </select>
            </label>
            <label>
                Plain:
                <input type="checkbox" checked={plain} />
            </label>
            <label>
                Bacon:
                <input type="checkbox" checked={bacon} />
            </label>
            <label>
                Pepperoni:
                <input type="checkbox" checked={pepperoni} />
            </label>
            <label>
                Sausage:
                <input type="checkbox" checked={sausage} />
            </label>
            <button onClick={handleSubmit}>Place Order</button>
        </form>
    )
}
