import React from 'react'

/**
 *
 * @param {handleCLick} func
 * @param {variant} [primary, seconday, outlined, danger, info, warning, danger]
 * @param {type} button type
 * @returns
 */
const Button = ({
  handleClick,
  variant = 'primary',
  rounded = false,
  disabled = 'false',
  label = 'Button',
  type = 'button',
  children,
  ...props
}) => (
  <button
    onClick={handleClick}
    type="button"
    className={`btn ${rounded ? 'btn__round' : ''} btn--${variant} `}
    disabled={disabled === 'true' || variant === 'disabled' ? true : false}
    {...props}
  >
    {children || label}
  </button>
)

export default Button

export const RoundButton = (props) => <Button {...props} rounded />

export const OutlinedButton = (props) => <Button {...props} variant="outlined" />
