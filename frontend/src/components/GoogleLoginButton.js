import React from 'react'
import { useGoogleLogin } from '@react-oauth/google';
import GoogleButton from "react-google-button";

const GoogleLoginButton = () => {


    const handleSuccess = (codeResponse) => {
        console.log(codeResponse);

        const authorizationCode = codeResponse.code;
    
        fetch('/api/auth/google', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ code: authorizationCode }),
        })
        .then(response => response.json())
        .then(data => {
          // Handle the response from your backend server
          console.log('Login successful, backend response:', data);
        })
        .catch(error => {
          // Handle errors in communicating with your backend server
          console.error('Error exchanging authorization code:', error);
        });
      };

      const handleError = (errorResponse) => {
        console.error('Google login failed', errorResponse);
      };

      const login = useGoogleLogin({
        onSuccess: handleSuccess,
        flow: 'auth-code',
        redirect_uri: 'http://localhost:8000'
      });
      
  return (
    <div>
       {/* <button onClick={() => login()}>Sign in with Google 🚀</button> */}
      <GoogleButton onClick={login} label="Sign in with Google"/>
    </div>
  )
}

export default GoogleLoginButton