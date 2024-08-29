import { FcGoogle } from 'react-icons/fc';
import Logo from '../assets/logo.png';
import { HiOutlineMail } from 'react-icons/hi';
import { Link, useNavigate } from 'react-router-dom';
import { AxiosError } from 'axios';
import axiosInstance from '../axiosConfig';
import { toast } from 'react-toastify';
import { useForm } from 'react-hook-form';

export type SignInFormData = {
    email: string;
    password: string;
    remember: boolean;
};

const LoginPage = () => {
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        setError,
        formState: { errors, isSubmitting }
    } = useForm<SignInFormData>();

    const onSubmit = handleSubmit(async (data) => {
        try {
            await axiosInstance.post('/api/user/sign-in', {
                email: data.email,
                password: data.password
            });
            toast.success('Logged in successfully');
            navigate('/');
        } catch (err: unknown) {
            if (err instanceof AxiosError) {
                const message =
                    err.response?.data?.message || 'Failed to login';
                if (message.includes('email')) {
                    setError('email', { type: 'manual', message });
                } else if (message.includes('password')) {
                    setError('password', { type: 'manual', message });
                } else {
                    setError('root', { type: 'manual', message });
                }
            } else {
                setError('root', {
                    type: 'manual',
                    message: 'An unexpected error occurred'
                });
            }
            console.error(err);
        }
    });

    return (
        <section className="bg-gray-50 dark:bg-gray-900">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <Link
                    to="/sign-in"
                    className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
                >
                    <img className="w-8 h-8 mr-2" src={Logo} alt="logo" />
                    JobConnect
                </Link>
                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Welcome Back!
                        </h1>
                        {/* Login Buttons */}
                        <div className="flex gap-2">
                            <button className="flex items-center justify-center w-1/2 py-2 px-4 text-xs border border-gray-300 text-gray-900 rounded-lg hover:bg-gray-100 dark:border-gray-600 dark:text-gray-200 dark:hover:bg-gray-700">
                                <FcGoogle className="mr-2 text-lg" />
                                Login with Google
                            </button>
                            <button className="flex items-center justify-center w-1/2 py-2 px-4 text-xs border border-gray-300 text-gray-900 rounded-lg hover:bg-gray-100 dark:border-gray-600 dark:text-gray-200 dark:hover:bg-gray-700">
                                <HiOutlineMail className="mr-2 text-lg" />
                                Login with Email
                            </button>
                        </div>

                        {/* OR Separator */}
                        <div className="flex items-center my-4">
                            <hr className="flex-grow border-t border-gray-300 dark:border-gray-600" />
                            <span className="px-3 text-sm text-gray-500 dark:text-gray-400">
                                or
                            </span>
                            <hr className="flex-grow border-t border-gray-300 dark:border-gray-600" />
                        </div>

                        {/* Error Message */}
                        {errors.root && (
                            <div className="text-red-500 text-sm">
                                {errors.root.message}
                            </div>
                        )}

                        {/* Login Form */}
                        <form
                            className="space-y-4 md:space-y-6"
                            onSubmit={onSubmit}
                        >
                            <div>
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                    Your email
                                </label>
                                <input
                                    type="email"
                                    {...register('email', {
                                        required: 'Email is required'
                                    })}
                                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="name@company.com"
                                    required
                                />
                                {errors.email && (
                                    <p className="text-red-500 text-xs mt-1">
                                        {errors.email.message}
                                    </p>
                                )}
                            </div>
                            <div>
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                    Password
                                </label>
                                <input
                                    type="password"
                                    {...register('password', {
                                        required: 'Password is required'
                                    })}
                                    placeholder="••••••••"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    required
                                />
                                {errors.password && (
                                    <p className="text-red-500 text-xs mt-1">
                                        {errors.password.message}
                                    </p>
                                )}
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-start">
                                    <div className="flex items-center h-5">
                                        <input
                                            id="remember"
                                            type="checkbox"
                                            {...register('remember')}
                                            className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                                        />
                                    </div>
                                    <div className="ml-3 text-sm">
                                        <label className="text-gray-500 dark:text-gray-300">
                                            Remember me
                                        </label>
                                    </div>
                                </div>
                                <Link
                                    to="/reset-password"
                                    className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                                >
                                    Forgot password?
                                </Link>
                            </div>
                            <button
                                type="submit"
                                className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? 'Signing In...' : 'Sign In'}
                            </button>
                            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                Don’t have an account yet?{' '}
                                <Link
                                    to="/sign-up"
                                    className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                                >
                                    Sign up
                                </Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LoginPage;
