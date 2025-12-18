import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchLogedUser } from '../../features/user/LoginUserSlice';

export const LoginForm = () => {

const displatch = useDispatch();

const {loginStatus, error, isAuthenticated} = useSelector((state) => state.loginUser )

const [credentials, setCredentials] = useState({
    username: "",
    password: ""
  });


  const handleInput = (e) => {
    const { name, value } = e.target;
    setCredentials((prevUser) => ({
      ...prevUser,
      [name]: value
    }));
  }

const handleSubmit = (e) => {
  e.preventDefault();
  displatch(fetchLogedUser(credentials))
  console.log(credentials);
}

if (isAuthenticated) {
    return <h2>Login Successful 🎉</h2>;
  }

  return (
         <div className="container flex flex-col mx-auto bg-white rounded-lg pt-12 my-5">
      <div className="flex justify-center w-full h-full my-auto xl:gap-14 lg:justify-normal md:gap-5 draggable">
        <div className="flex items-center justify-center w-full lg:p-12">
          <div className="flex items-center xl:p-10">
            <form onSubmit={handleSubmit} className="flex flex-col w-full h-full pb-6 text-center bg-white rounded-3xl">
              <h3 className="mb-3 text-4xl font-extrabold text-dark-grey-900">Log In</h3>
              <p className="mb-4 text-grey-700">Enter your user name and password</p>


              <div className="flex items-center mb-3">
                <hr className="h-0 border-b border-solid border-grey-500 grow" />
                <p className="mx-4 text-grey-600">or</p>
                <hr className="h-0 border-b border-solid border-grey-500 grow" />
              </div>

              <label htmlFor="user" className="mb-2 text-sm text-start text-grey-900">
                User*
              </label>
              <input
                name='username'
                value={credentials.username}
                onChange={handleInput}
                id="user"
                type="text"
                placeholder="User Name"
                className="flex items-center w-full px-5 py-4 mr-2 text-sm font-medium outline-none focus:bg-[#e9edf7] mb-7 placeholder:text-grey-700 bg-[#f6f8fd] text-dark-grey-900 rounded-2xl"
              />

              <label htmlFor="password" className="mb-2 text-sm text-start text-grey-900">
                Password*
              </label>
              <input
                name='password'
                value={credentials.password}
                onChange={handleInput }
                id="password"
                type="password"
                placeholder="Enter a password"
                className="flex items-center w-full px-5 py-4 mr-2 text-sm font-medium outline-none focus:bg-[#e9edf7] mb-7 placeholder:text-grey-700 bg-[#f6f8fd] text-dark-grey-900 rounded-2xl"
              />

              <div className="flex flex-row justify-between mb-8">
                <label className="relative inline-flex items-center mr-3 cursor-pointer select-none">
                  <input type="checkbox" defaultChecked className="sr-only peer" />
                  <div className="w-5 h-5 bg-white border-2 rounded-sm border-grey-500 peer peer-checked:border-0 peer-checked:bg-(--secondary-color)">
                    <img
                      src="https://raw.githubusercontent.com/Loopple/loopple-public-assets/main/motion-tailwind/img/icons/check.png"
                      alt="tick"
                    />
                  </div>
                  <span className="ml-3 text-sm font-normal text-grey-900">Keep me logged in</span>
                </label>

                <a href="#" className="mr-4 text-sm font-medium text-000 hover:text-(--secondary-color)">
                  Forget password?
                </a>
              </div>

              <button disabled={loginStatus === 'pending'} className="w-full px-6 py-5 mb-5 text-sm font-bold leading-none text-white transition duration-300 md:w-96 rounded-2xl hover:bg-(--secondary-color) focus:ring-4 focus:bg-(--secondary-color) bg-black cursor-pointer">
                {loginStatus === 'loading' ? 'Logging in...' : 'Login'}
              </button>
              {error && <p style={{ color: 'red' }}>{error}</p>}
              <p className="text-sm leading-relaxed text-grey-900">
                Not registered yet?{" "}
                <a href="#" className="font-bold text-black hover:text-(--secondary-color)">
                  Create an Account
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>

  )
}
