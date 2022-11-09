import React, { useContext, useState } from 'react';
import { Player } from '@lottiefiles/react-lottie-player';
import { GoogleAuthProvider } from 'firebase/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ValidateContext } from '../../contexts/AuthProvider';
import { toast } from 'react-toastify';
import useTitle from '../../../hooks/useTitle';

const Login = () => {
    useTitle("Log In")
    const [error, setError] = useState('')
    const { loginProvider, signIn } = useContext(ValidateContext)
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname

    const googleProvider = new GoogleAuthProvider()
    const googleLoginHandle = (event) => {
        event.preventDefault()
        loginProvider(googleProvider)
            .then(res => {
                const user = res.user
                navigate(from, { replace: true })
                toast.success('Successfully Logged in!', {
                    position: "top-right",
                    autoClose: 500,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
            })
            .catch(e => console.error(e))
    }

    const handleLoginUser = event => {
        event.preventDefault()
        const form = event.target;
        const email = form.email?.value;
        const password = form.password?.value;
        signIn(email, password)
            .then(res => {
                const user = res.user
                form.reset();
                navigate(from, { replace: true })
                toast.success('Successfully Logged in!', {
                    position: "top-right",
                    autoClose: 500,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
            })
            .catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage)
                // ..
            });
    }


    return (
        <div className='bg-white dark:bg-gray-800'>
            <div className='py-4 md:py-16 lg:py-6'>
                <div
                    className="flex flex-row-reverse max-w-lg mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 lg:max-w-4xl pt-4 xl:pt-7">
                    <div className="hidden bg-cover lg:block lg:w-1/2 self-center">
                        <Player
                            src={'https://assets1.lottiefiles.com/packages/lf20_jCmeIg.json'}
                            className="player"
                            loop
                            autoplay
                        >
                        </Player>
                    </div>

                    <div className="w-full px-6 py-8 md:px-8 lg:w-1/2">
                        <div className="w-full max-w-lg p-4 rounded-md shadow sm:p-8 dark:bg-gray-900 dark:text-gray-100">
                            <h2 className="mb-3 text-3xl font-semibold text-center">Login to your account</h2>
                            <p className="text-sm text-center dark:text-gray-400">Dont have account?
                                <Link to={'/sing-up'} rel="noopener noreferrer" className="focus:underline hover:underline text-accent dark:text-warning"> Sign up here</Link>
                            </p>
                            <div className="my-6 space-y-4">
                                <button
                                    onClick={googleLoginHandle}
                                    aria-label="Login with Google"
                                    type="button"
                                    className="btn btn-ghost flex items-center justify-center w-full p-4 space-x-4 border focus:ring-emerald-600 focus:ring-2 focus:ring-offset-1 rounded-lg dark:border-gray-700 dark:text-gray-200 hover:bg-emerald-400 dark:hover:bg-gray-600 dark:bg-slate-800">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
                                        <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                                    </svg>
                                    <p>Login with Google</p>
                                </button>
                            </div>
                            <div className="flex items-center w-full my-4">
                                <hr className="w-full dark:text-gray-400" />
                                <p className="px-3 dark:text-gray-400">OR</p>
                                <hr className="w-full dark:text-gray-400" />
                            </div>
                            <form onSubmit={handleLoginUser}
                                noValidate="" action="" className="space-y-8 ng-untouched ng-pristine ng-valid">
                                <div className="space-y-4">
                                    <div className="space-y-2">
                                        <label htmlFor="email" className="block text-sm">Email address</label>
                                        <input type="email" name="email" id="email" placeholder="email@email.com" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-emerald-600" />
                                    </div>
                                    <div className="space-y-2">
                                        <div className="flex justify-between">
                                            <label htmlFor="password" className="text-sm">Password</label>
                                            <a href="#" className="text-xs hover:underline dark:text-gray-400">Forgot password?</a>
                                        </div>
                                        <input type="password" name="password" id="password" placeholder="*****" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-emerald-600" />
                                    </div>
                                </div>
                                <p className='text-error font-medium text-md md:text=lg'> {error ? error : <></>} </p>
                                <input type="Submit" className="btn w-full px-8 py-3 font-semibold rounded-md bg-teal-500 text-slate-800 dark:bg-primary dark:text-gray-900 hover:bg-emerald-500 border-primary focus:border-secondary"></input>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;