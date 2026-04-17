import React from 'react'

function Button({children,className='',bgcolor="bg-blue-600",type="button",textColor = "text-white",...props}) {
  return (
    <button type={type}className={`${bgcolor}${textColor}${className}`}{...props}>
      {children}
    </button>
  )
}

export default Button