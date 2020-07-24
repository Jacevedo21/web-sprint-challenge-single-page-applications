import React, { useState, useEffect, useHistory } from "react";
import axios from 'axios'
import { Link, Route, Switch } from 'react-router-dom'
import formSchema from './component/formSchema'
import Form from './component/Form'
import Completed from './component/Completed'
import * as yup from 'yup'

const initialForm = {
  name: '',
  size: '',
  plain: false,
  bacon: false,
  pepperoni: false,
  sausage: false,
}

const initialError = {
  name: '',
  size: '',
  plain: false,
  bacon: false,
  pepperoni: false,
  sausage: false,
}

const App = () => {
  const [forms, setForms] = useState(initialForm);
  const [pizza, setPizza] = useState([]);
  const [disabled, setDisabled] = useState(true);
  const [errors, setErrors] = useState(initialError);
  const history = useHistory()


  // useEffect(() => {
  //   const getForm = () => {
  //     axios.get('https://reqres.in/')
  //       .then(res => {

  //         console.log('api test', res)
  //         setForms(res.data)
  //       })
  //       .catch(err => {
  //         debugger
  //       })
  //   }
  //   getForm()
  // }, [])


  useEffect(() => {
    formSchema.isValid(pizza).then(valid => {
      setDisabled(!valid)
    })
  }, [pizza])

  const handleChange = (e) => {
    e.persist();
    e.target.type === "checkbox"
      ? setPizza({ ...pizza, [e.target.name]: e.target.checked })
      : setPizza({ ...pizza, [e.target.name]: e.target.value })
    validatePizza(e);
  }

  const validatePizza = (e) => {
    yup
      .reach(formSchema, e.target.name)
      .validate(
        e.target.type === "checkbox" ? e.target.checked : e.target.value
      )
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post('https://reqres.in/', forms)
      .then(res => {
        console.log(res.data)
        setPizza(res.data, ...pizza);
        setForms(initialForm);
        history.push('/complete')
      })
      .catch(err => {
        console.log(err)
      })
  }
  return (
    <div className="app">
      <h1>Lambda Eats</h1>
      <nav>
        <Link to='/'>Home</Link>
        <Link to="/pizza">Order</Link>
      </nav>
      <Switch>
        <Route exact path='/pizza'>
          <Form
            form={forms}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            disable={disabled}
          />
        </Route>
        <Route path='/complete'>
          <Completed pizza={pizza} />
        </Route>
      </Switch>

    </div>
  );
};
export default App;
