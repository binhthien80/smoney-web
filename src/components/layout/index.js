import React from 'react';

const Layout = props => {
    console.log(11111, typeof props.children);
    return (
      <div>
        <div>
            Header
        </div>
        <div>
          {props.children}                
        </div>
        <div>
            Footer
        </div>
      </div>
    );
  };

export default Layout