import React from 'react'

const Alert = ({children , alertClass , styleContent}) => {
  return (
    <div className={alertClass} style={styleContent}  role="alert">
      <div className="flex flex-col justify-center h-full px-3 min-h-6">
        {children}
      </div>
    </div>
  )
}

export default Alert