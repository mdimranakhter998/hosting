export const titleCase=(value)=>{
   return value.split(' ').map(e=>e.charAt(0).toUpperCase()+e.slice(1)).join(' ')
}
