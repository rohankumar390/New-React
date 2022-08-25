import React from 'react'

function Alert(props) {
  const cap=(word)=>{
    const neword=word.toLowerCase();
    return neword.charAt(0).toUpperCase() +neword.slice(1);
  }
  return (
    props.alert && <div class={`alert alert-${props.alert.type} alert-dismissible fade show` }role="alert">
 <strong>{cap(props.alert.type)} : </strong> 
  
  {props.alert.message}
</div> 
   
  )
}

export default Alert
