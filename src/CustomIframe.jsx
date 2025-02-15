import React, { useState } from 'react'
import { createPortal } from 'react-dom'
import './style.css'

const CustomIframe = ({
  
  children,
  ...props
}) => {
  const [contentRef, setContentRef] = useState(null)

  const mountNode =
    contentRef?.contentWindow?.document?.body
    const divStyle = {
      width: "38.8vh",
      height: "29vh",
      color: 'blue',
      backgroundColor: 'white',
    
    };
  return (
    <iframe {...props} ref={setContentRef} frameBorder="0" style={divStyle}>
      {mountNode && createPortal(children, mountNode)}
    </iframe>
  )
}

export default CustomIframe;