import classNames from 'classnames';
import React from 'react'

export default function Panel({ children, className, ...rest }) {
  const finalClassNames = classNames('border rounded p-3 shadow bg-white w-full',
  className
  );
  
  return (
    <div {...rest} className={finalClassNames}>{children}</div>
  )
}
