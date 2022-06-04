import React from 'react'

const Error = ({ children }) => {
  return (
    <div className="bg-red-800 p-3 text-center text-white rounded-md mb-3 font-bold uppercase">
        {children}
    </div>
  )
}

export default Error