import React, { useState } from 'react';
import { signIn } from 'next-auth/client';
import { useRouter } from 'next/router';
import Input from '@mui/material/Input';
import { Box } from '@mui/material';

import ButtonBPM from '@/components/ui/button-bpm';

import { authForm, inputControl } from '@/styles/auth';
import { baskervville } from '@/fonts';

async function createUser(email: string, password: string) {
  const response = await fetch('/api/auth/signup/', {
    method: 'POST',
    body: JSON.stringify({
      email: email,
      password: password,
    }),
    headers: {
      'content-type': 'application/json',
    },
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'something went wrong');
  }

  return data;
}

export default function AuthForm() {
  const router = useRouter();
  const [isLogin, setIsLogin] = useState(true);

  const [inputEmail, setInputEmail] = useState<string>('');
  const [inputPassword, setInputPassword] = useState<string>('');

  function switchAuthModeHandler() {
    setIsLogin((prevState) => !prevState);
  }

  async function submitHandler(event: Event | undefined) {
    event?.preventDefault();

    if (isLogin) {
      const result = await signIn('credentials', {
        redirect: false,
        email: inputEmail,
        password: inputPassword,
      });
      if (!result?.error) {
        router.replace('/');
      }
    } else {
      try {
        const result = await createUser(inputEmail, inputPassword);
        console.log(result.message);
        const resultEnter = await signIn('credentials', {
          redirect: false,
          email: inputEmail,
          password: inputPassword,
        });
        if (!resultEnter?.error) {
          router.replace('/');
        }
      } catch (error) {
        console.error(error);
      }
    }
  }

  const underlineContent = isLogin ? 'click to sign up' : 'log in';

  const strongContent = isLogin
    ? 'Don’t have an account?'
    : 'Already have an acount';

  return (
    <Box sx={authForm}>
      <h3>{isLogin ? 'Log in' : 'Sign up'}</h3>
      <p>Please enter your information to log in to your account.</p>
      <form onSubmit={() => submitHandler(event)}>
        <Box sx={inputControl}>
          <label htmlFor='email'>
            Email:<span>*</span>
          </label>
          <Input
            onChange={(e) => setInputEmail(e.target.value)}
            type='email'
            id='email'
            value={inputEmail}
          />
        </Box>
        <Box sx={inputControl}>
          <label htmlFor='password'>
            Password:<span>*</span>
          </label>
          <Input
            id='password'
            type='password'
            value={inputPassword}
            onChange={(e) => setInputPassword(e.target.value)}
          />
        </Box>
        <ButtonBPM
          label={isLogin ? 'Log in' : 'Sign up'}
          variantType='btnMallard'
          font={baskervville}
          type='submit'
        />
        <p className='strong'>
          {strongContent}
          <span className='underline' onClick={switchAuthModeHandler}>
            {' '}
            {underlineContent}
          </span>
        </p>
      </form>
    </Box>
  );
}
