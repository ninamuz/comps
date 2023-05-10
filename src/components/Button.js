import React from 'react';
import className from 'classnames';

export default function Button({
  children,
  primary,
  secondary,
  success,
  warning,
  danger,
  outline,
  rounded,
  // We want to automatically take all these remaining props 
  // & pass them to the button element
  ...rest
}) {
// we also pass the rest object into classes so we can use 'className' in the Button comp
const classes = className(rest.className, 'flex items-center px-3 py-1.5 border', {
  'border-blue-500 bg-blue-500 text-white': primary,
  'border-gray-900 bg-gray-900 text-white': secondary,
  'border-green-500 bg-green-500 text-white': success,
  'border-yellow-400 bg-yellow-400 text-white': warning,
  'border-red-500 bg-red-500 text-white': danger,
  'rounded-full': rounded,
  'bg-white': outline,
  'text-blue-500': outline && primary,
  'text-gray-500': outline && secondary,
  'text-green-500': outline && success,
  'text-yellow-500': outline && warning,
  'text-red-500': outline && danger,
});

  return (
    <button {...rest} className={classes}>{children}</button>
  );
}

// checking for just one type of button with 'prop-types' library
Button.propTypes = {
  checkVariationValue: ({
    primary,
    secondary,
    success,
    warning,
    danger }) => {
    const count = Number(!!primary)
      + Number(!!secondary)
      + Number(!!warning)
      + Number(!!success)
      + Number(!!danger)

    if (count > 1) {
      return new Error('Invalid! please choose just one type (primary, secondary, warning or danger)')
    }
  }
};