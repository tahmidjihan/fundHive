import React, { useContext } from 'react';
import { authContext } from '../AuthProvider';
import { Link, useNavigate } from 'react-router';

function AuthPanel(props) {
  const { login } = props;
  const { loginWithGoogle, signIn, signUp, user } = useContext(authContext);
  const [passErr, setPassErr] = React.useState('');
  const navigate = useNavigate();
  function handleSubmit(e) {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    if (password.length < 6) {
      setPassErr('at least 6 characters');
      return;
    } else if (!/[a-z]/.test(password)) {
      setPassErr('at least one lowercase letter');
      return;
    } else if (!/[A-Z]/.test(password)) {
      setPassErr('at least one uppercase letter');
      return;
    } else {
      setPassErr('');
    }

    if (login) {
      signIn(email, password);
    } else {
      const name = e.target.name.value;
      const PhotoURL = e.target.PhotoURL.value;
      signUp(email, password, name, PhotoURL);
    }
  }
  if (user) {
    navigate('/');
  }
  return (
    <>
      <div className='bg-base-200 py-20'>
        <div className='bg-white m-20 max-w-xl mx-auto rounded-3xl'>
          <div className='flex items-center justify-center w-full'>
            <div className='flex items-center xl:p-10'>
              <form
                className='flex flex-col w-full h-full pb-6 text-center bg-white rounded-3xl'
                onSubmit={handleSubmit}>
                <h3 className='mb-3 text-4xl font-extrabold text-dark-gray-900'>
                  {login ? 'Login' : 'Sign Up'}
                </h3>
                <p className='mb-4 text-gray-700'>
                  Enter your email and password
                </p>
                <span
                  onClick={loginWithGoogle}
                  className='btn flex items-center justify-center w-full py-4 mb-6 cursor-pointer text-sm font-medium transition duration-300 rounded-2xl text-gray-900 bg-gray-300 hover:bg-gray-400 focus:ring-4 focus:ring-gray-300'>
                  <img
                    className='h-5 mr-2'
                    src='https://raw.githubusercontent.com/Loopple/loopple-public-assets/main/motion-tailwind/img/logos/logo-google.png'
                    alt=''
                  />
                  Sign in with Google
                </span>
                <div className='flex items-center mb-3'>
                  <hr className='h-0 border-b border-solid border-gray-500 grow' />
                  <p className='mx-4 text-gray-600'>or</p>
                  <hr className='h-0 border-b border-solid border-gray-500 grow' />
                </div>
                <label
                  htmlFor='email'
                  className='mb-1 text-sm text-start text-gray-900'>
                  Email*
                </label>
                <input
                  id='email'
                  type='email'
                  name='email'
                  placeholder='mail@example.com'
                  className='flex items-center w-full px-5 py-4 mr-2 text-sm font-medium outline-none focus:bg-gray-400 mb-4 placeholder:text-gray-700 bg-gray-200 text-dark-gray-900 rounded-2xl'
                  required
                />
                {login || (
                  <>
                    <label
                      htmlFor='Name'
                      className='mb-1 text-sm text-start text-gray-900'>
                      Name*
                    </label>
                    <input
                      id='Name'
                      type='text'
                      name='name'
                      placeholder='Enter a Name'
                      className='flex items-center w-full px-5 py-4 mb-4 mr-2 text-sm font-medium outline-none focus:bg-gray-400 placeholder:text-gray-700 bg-gray-200 text-dark-gray-900 rounded-2xl'
                      required
                    />
                    <label
                      htmlFor='PhotoURL'
                      className='mb-1 text-sm text-start text-gray-900'>
                      PhotoURL*
                    </label>
                    <input
                      id='PhotoURL'
                      type='text'
                      name='PhotoURL'
                      placeholder='Enter a PhotoURL'
                      className='flex items-center w-full px-5 py-4 mb-4 mr-2 text-sm font-medium outline-none focus:bg-gray-400 placeholder:text-gray-700 bg-gray-200 text-dark-gray-900 rounded-2xl'
                      required
                    />
                  </>
                )}
                <label
                  htmlFor='password'
                  className='mb-1 text-sm text-start text-gray-900'>
                  Password*
                </label>
                <input
                  id='password'
                  type='password'
                  name='password'
                  placeholder='Enter a password'
                  className='flex items-center w-full px-5 py-4 mr-2 text-sm font-medium outline-none focus:bg-gray-400 placeholder:text-gray-700 bg-gray-200 text-dark-gray-900 rounded-2xl'
                  required
                />
                <p className='text-sm leading-tight text-red-600 mb-4 text-start'>
                  {passErr}
                </p>
                <div className='flex flex-row justify-between mb-8'>
                  <a className='mr-4 text-sm font-medium text-purple-blue-500'>
                    Forget password?
                  </a>
                </div>
                <button
                  type='submit'
                  className=' bg-hive w-full px-6 py-5 mb-5 text-sm font-bold leading-none text-black transition duration-300 md:w-96 rounded-2xl hover:bg-purple-blue-600 focus:ring-4 focus:ring-purple-blue-100 bg-purple-blue-500'>
                  {login ? 'Login' : 'Sign Up'}
                </button>
                <p className='text-sm leading-relaxed text-gray-900'>
                  {login
                    ? 'Don’t have an account?'
                    : 'Already have an account?'}
                  <Link
                    to={!login ? '/login' : '/register'}
                    className='font-bold text-gray-700 cursor-pointer hover:underline'>
                    {login ? 'Create an account' : 'Login'}
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AuthPanel;
