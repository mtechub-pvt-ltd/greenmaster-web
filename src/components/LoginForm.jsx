// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// // @mui
// import { Link, Stack, IconButton, InputAdornment, TextField, Checkbox, Alert } from '@mui/material';
// import { LoadingButton } from '@mui/lab';
// // components
// import * as Yup from 'yup';
// // import { loginSchema } from 'src/utils/yupSchema';
// import { useFormik } from 'formik';
// import axios from 'axios';
// import { useDispatch } from 'react-redux';

// // import { setUserInfo } from 'src/redux/reducer/authReducer';
// // import Iconify from '../components/iconify/Iconify';
// import { BASEURL } from '../../utils/BASEURL';


// export default function LoginForm() {
//   const navigate = useNavigate();
//   const dispatch=useDispatch()
//    const validationSchema  = Yup.object({
//     email: Yup.string().email('Invalid email format').required('Email is required'),
//     password: Yup.string().required('Password is required'),
//   });
//   const [showPassword, setShowPassword] = useState(false);
//   const [ApiError, setApiError] = useState("")
//   const initialValues = {
//     email: '',
//     password: '',
//     remember: false,
//   };
//   const formik = useFormik({
//     initialValues,
//     validationSchema ,
//     onSubmit: async (values) => {
//       try {
//         // Replace with your login API endpoint
//        setApiError('')
//         const response = await axios.post(`${BASEURL}/users/adminlogin`, values);
//         if(response.status===200){
//           setApiError("")
//         //    dispatch(setUserInfo(response.data.user))
//           navigate('/dashboard', { replace: true });
//         }
//       } catch (error) {
//         // if(error.response.status===401){
//         // setApiError(error.response.data.message)
//         // }else{
//           setApiError(error.response.data.message)
//         // }
        
//         // Handle login error, e.g., display an error message.
//         console.error('Login failed:', error);
//       }
//     },
//   });
//   const { values, errors, touched, handleChange, handleBlur, handleSubmit } = formik;

//   return (
//     <>
//     <form onSubmit={handleSubmit}>
//       <Stack spacing={3}>
//         <TextField name="email" label="Email address" 
//          value={values.email}
//          onChange={handleChange}
//          onBlur={handleBlur}
//          error={touched.email && Boolean(errors.email)}
//          helperText={touched.email && errors.email}
//         />

//         <TextField
//           name="password"
//           label="Password"
//           type={showPassword ? 'text' : 'password'}
//           value={values.password}
//           onChange={handleChange}
//           onBlur={handleBlur}
//           error={touched.password && Boolean(errors.password)}
//           helperText={touched.password && errors.password}
//           InputProps={{
//             endAdornment: (
//               <InputAdornment position="end">
//                 <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
//                   {/* <Iconify icon={showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'} /> */}
//                 </IconButton>
//               </InputAdornment>
//             ),
//           }}
//         />
//        {ApiError && (
//         <Alert severity="error" sx={{ mt: 2 }}>
//           {/* <AlertTitle>Error</AlertTitle> */}
//           {ApiError}
//         </Alert>
//       )}
        
//       </Stack>

//       <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ my: 2 }}>
//         <Checkbox name="remember" label="Remember me" checked={values.remember}
//           onChange={handleChange} />
//         <Link style={{cursor:"pointer"}} variant="subtitle2" underline="hover" onClick={() => navigate('/forget-password')}>
//           Forgot password?
//         </Link>
//       </Stack>

//       <LoadingButton fullWidth size="large" type="submit" variant="contained"  onClick={handleSubmit}>
//         Login
//       </LoadingButton>
//       </form>
//     </>
//   );
// }
