import * as yup from 'yup'

export const brandValidationSchema = yup.object().shape({
    name:yup
    .string()
    .min(4)
    .required(),
    logo_url:yup
    .string()
    .url()
    .required()  
})