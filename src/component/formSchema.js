import * as yup from 'yup'

const formSchema = yup.object().shape({
    name: yup
    .string()
    .min(2, 'Name must be at least 2 characters')
    .required("Name is required"),
    size: yup
    .boolean()
    .required('Please select a size')
    .oneOf([true]),
    plain: yup
    .boolean()
    .required('Please select a topping')
    .oneOf([true]),
    bacon: yup
    .boolean()
    .required('Please select a topping')
    .oneOf([true]),
    pepperoni: yup
    .boolean()
    .required('Please select a topping')
    .oneOf([true]),
    sausage: yup
    .boolean()
    .required('Please select a topping')
    .oneOf([true]),
})

export default formSchema