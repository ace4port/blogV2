import React from 'react'

const Input = ({ type, name, value, setValue, required, label, error, ...props }) => {
  // To remove warning about uncontrolled inputs
  value = value ? value : ''
  return (
    <fieldset>
      <input type={type} name={name} value={value} placeholder=" " onChange={setValue} required={required} {...props} />
      <span>{label}</span>
      <p className="error">{error && error}</p>
    </fieldset>
  )
}

export default Input
