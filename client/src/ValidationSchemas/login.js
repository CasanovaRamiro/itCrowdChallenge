import * as yup from 'yup'

export const loginValidationSchema = yup.object().shape({
    name:yup
    .string()
    .min(4)
    .required(),
    role:yup
    .string()
    .required()
})