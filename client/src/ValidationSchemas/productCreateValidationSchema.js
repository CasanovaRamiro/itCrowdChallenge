import * as yup from 'yup'

export const productValidationSchema = yup.object().shape({
    name:yup
    .string()
    .min(4)
    .required('sos feo'),
    image_url:yup
    .string()
    .url()
    .required(),
    price:yup
    .number()
    .required(),
    description:yup
    .string()
    .min(10)
    .required(),
    brandName:yup
    .string()
    .required()
})