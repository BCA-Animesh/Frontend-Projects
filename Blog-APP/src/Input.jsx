import React, { forwardRef, useId } from 'react'

const Input=forwardRef(function({lable, type, className, ...props},ref){
  const id=useId()
  return (
    <div>
      {
        lable && <lable htmlFor={id}>
          {lable}
        </lable>
      }
      <input type={type} id={id} ref={ref} {...props} className={`${className}`}/>
    </div>
  )
})

export default Input