import { ErrorMessage, Field, Form, Formik } from 'formik';
import { loginValidationSchema } from '../../ValidationSchemas/login';
function LogIn() {
    
    // validationSchema={loginValidationSchema}
  return (
    <Formik
				initialValues={{
					name: "",
					role: "",
				}}
				validationSchema={loginValidationSchema}
				onSubmit={(values) => {
					console.log(values);
				}}
			>
				{({ errors }) => (
					<Form >
						<div>
							<label htmlFor='name'>Name</label>
							<Field
								type='text'
								id='name'
								name='name'
								placeholder='Name'
							/>
							<ErrorMessage
								name='name'
								component={() => <div className='error'>{errors.name}</div>}
							/>
						</div>
						
					
						<div>
							<Field name='role' as='select'>
                                <option value=''>Role</option>
								<option value='Admin'>Admin</option>
								<option value='User'>User</option>
								
							</Field>
                            <ErrorMessage
								name='role'
								component={() => <div className='error'>{errors.role}</div>}
							/>
						</div>
					


						<button type='submit'>Enviar</button>
						
					</Form>
				)}
			</Formik>
  )
}

export default LogIn