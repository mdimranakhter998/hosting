import * as yup from  'yup'
export const applicantSignUpSchema=yup.object({
    name:yup.string().min(3).required("please enter your name"),
    email:yup.string().email(),
    phone:yup.string().max(12).required("please enter your phone"),
    password:yup.string().required("please enter your password"),
    confirm_password:yup.string().required("please enter your confirm password").oneOf([yup.ref("password"),null],"password not match") 
})

export const applicantSignInSchema=yup.object({
    phone:yup.string().max(12).required("please enter your phone"),
    password:yup.string().required("please enter your password")
})

export const editProfileSchema=yup.object({
    name:yup.string().min(3).required("please enter your name"),
    email:yup.string().email(),
    phone:yup.string().max(12).required("please enter your phone"),
   
})

const fileSize = 160*1024;
const SUPPORTED_FORMATS = [
  // "image/jpg",
  "image/jpeg",
  "image/gif",
  // "image/pdf"
];
export const newConnectionSchema=yup.object({
    connection_type:yup.string().required("please select your connection type"),
    tension_type:yup.string().required("please select your tension type"),
    tariff:yup.string().required("please select your tariff "),
    phase:yup.number().required("please select your phase"),
    load:yup.string().required("please select your load"),
    district:yup.string().required("please select your district"),
    block:yup.string().required("please select your block"),
    panchayat:yup.string().required("please select your panchayat"),
    village:yup.string().required("please select your village"),
    division:yup.string().required("please select your division"),
    subdivision:yup.string().required("please select your subdivision"),
    section:yup.string().required("please select your section"),
    gender:yup.string().required("please select your gender"),
    father_name:yup.string().required("please enter your father/husband name"), 
    address:yup.string().required("please enter your address"),  
    pincode:yup.string().required("please enter your pincode"),
    document_type:yup.string().required("please select your document proof"),
       

    document_file: yup
        .mixed()
        .required("please upload your file"),
       
    address_type:yup.string().required("please select your address proof"),     
    address_front: yup
        .mixed()
        .required("please upload your file"),
       
    address_back: yup
        .mixed()
        .required("please upload your file"),
        
    
        owner_file: yup
        .mixed()
        .required("please upload your file"),
        
    
    photo: yup
        .mixed()
        .required("please upload your file"),
       
   

})

export const statusSchema=yup.object({
    request_no:yup.string().required("please enter your Application No")
})

export const checkPhone=yup.object({
    phone:yup.string().required("please enter your Phone No")
})
