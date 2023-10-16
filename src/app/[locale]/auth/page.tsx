'use client'
import { useSearchParams } from 'next/navigation'
import Register from './register'
import Login from './login/Login';

export default function Home(props: any) {
  console.log(props)
  let pageMode = useSearchParams().get('mode');
  return (
    <>
      {pageMode === 'signup' && (
        <Register />
      )}
      {pageMode === 'login' && (
        <Login />
      )}
    </>
  )
}
