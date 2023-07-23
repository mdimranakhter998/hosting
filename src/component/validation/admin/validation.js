import * as yup from  'yup'

// adminSignUp
export const adminSignUpSchema=yup.object({
    name:yup.string().min(3).required("please enter your name"),
    email:yup.string().email().required("please enter your email"),
    phone:yup.string().max(12).required("please enter your phone"),
    password:yup.string().required("please enter your password"),
    confirm_password:yup.string().required("please enter your confirm password").oneOf([yup.ref("password"),null],"password not match") 
})
// adminSignIn
export const adminSignInSchema=yup.object({
    email:yup.string().required("please enter your email"),
    password:yup.string().required("please enter your password")
})
// admin change password
export const changePasswordSchema=yup.object({
    password:yup.string().required("please enter your password"),
    new_password:yup.string().required("please enter your password"),
    confirm_password:yup.string().required("please enter your confirm password").oneOf([yup.ref("new_password"),null],"password not match") 
})
// admin forget password
export const forgetPasswordSchema=yup.object({
   
    new_password:yup.string().required("please enter your password"),
    confirm_password:yup.string().required("please enter your confirm password").oneOf([yup.ref("new_password"),null],"password not match") 
})
//  officerSignUp
export const officerSignUpSchema=yup.object({
    name:yup.string().min(3).required("please enter your name"),
    email:yup.string().email().required("please enter your email"),
    phone:yup.string().max(12).required("please enter your phone"),
    password:yup.string().required("please enter your password"),
    confirm_password:yup.string().required("please enter your confirm password").oneOf([yup.ref("password"),null],"password not match") 
})
// district
export const districtSchema=yup.object({
    district:yup.string().required("please enter your district")
})

// block 
export const blockSchema=yup.object({
    block:yup.string().required("please enter your block"),

})
// panchayat
export const panchayatSchema=yup.object({
    panchayat:yup.string().required("please enter your panchayat"),

})

// village
export const villageSchema=yup.object({
    village:yup.string().required("please enter your village"),

})

// division
export const divisionSchema=yup.object({
    division:yup.string().required("please enter your division"),
    
})

// subdivision
export const subdivisionSchema=yup.object({
    subdivision:yup.string().required("please enter your subdivision"),

})

// section
export const sectionSchema=yup.object({
    section:yup.string().required("please enter your section "),

})

// connection type
export const connectionTypeSchema=yup.object({
    connection_type:yup.string().required("please select your connection Type")
})
// tension type
export const tensionTypeSchema=yup.object({
    tension_type:yup.string().required("please select your Tension Type")
})
// tariff
export const tariffSchema=yup.object({
    tariff:yup.string().required("please select your tariff")
})

// phase
export const phaseSchema=yup.object({
    phase:yup.string().required("please select your phase")
})
// load
export const loadSchema=yup.object({
    load:yup.string().required("please select your Load")
})

export const checkEmail=yup.object({
    email:yup.string().email().required("please enter your Email")
})




