import React from 'react'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <>
      <Navbar/>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
  <div className="sm:mx-auto sm:w-full sm:max-w-sm">
  <Link to="/"><h1 className="w-full text-3xl font-bold text-center text-[#00df9a] ">REACT.</h1></Link>
    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white">
      Sign in to your account
    </h2>
  </div>

  <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
    <form action="#" method="POST" className="space-y-6">
      <div>
        <label htmlFor="email" className="block text-sm font-medium leading-6 text-white">
          Email address
        </label>
        <div className="mt-2">
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#00df9a] sm:text-sm sm:leading-6"
          />
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between">
          <label htmlFor="password" className="block text-sm font-medium leading-6 text-white">
            Password
          </label>
          <div className="text-sm">
            <a href="#" className="font-semibold text-[#00df9a] hover:text-[#00bf85]">
              Forgot password?
            </a>
          </div>
        </div>
        <div className="mt-2">
          <input
            id="password"
            name="password"
            type="password"
            required
            autoComplete="current-password"
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#00df9a] sm:text-sm sm:leading-6"
          />
        </div>
      </div>

      <div>
        <button
          type="submit"
          className="flex w-full justify-center rounded-md bg-[#00df9a] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#00bf85] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#00df9a]"
        >
          Sign in
        </button>
      </div>
    </form>

    <p className="mt-10 text-center text-sm text-gray-500">
      Not a member?{' '}
      <Link to="/signup"><a href="#" className="font-semibold leading-6 text-[#00df9a] hover:text-[#00bf85]">
        Create account
      </a>
      </Link>
    </p>
  </div>
</div>

    </>
  )
}

export default Login
