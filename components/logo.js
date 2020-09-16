import React from 'react'

const Logo = React.forwardRef(({ onClick, href, className }, ref) => (
  <div className={className}>
    <a href={href} onClick={onClick} ref={ref}>
      <h1>
        UniFinder
        <img src="/uniFinder-logo.svg" alt="logo" />
      </h1>
    </a>
  </div>
))

export default Logo
