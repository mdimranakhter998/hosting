import * as yup from  'yup'
//  officerSignIn
export const officerSignInSchema=yup.object({
    email:yup.string().required("please enter your email"),
    password:yup.string().required("please enter your password")
})

export const checkEmail=yup.object({
    request_no:yup.string().required("please enter your Email")
})