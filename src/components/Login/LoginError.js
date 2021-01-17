import React from 'react';

export function LoginError({msg}) {
    if (msg === 'Login Incorrect') {
        return <h3 id='error'>Login details Incorrect!</h3>;
    }
    else if (msg === 'Signup Incorrect') {
        return <h3 id="error">ERROR! Please make sure your password has atleast 1 Uppercase, 1 Lowercase and 1 Numerical character.</h3> ;
    }
    else {
        return  <h3></h3>
    }
}