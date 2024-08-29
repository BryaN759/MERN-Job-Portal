import { FcGoogle } from 'react-icons/fc';
import Logo from '../assets/logo.png';
import { HiOutlineMail } from 'react-icons/hi';
import { useNavigate } from 'react-router-dom';
import { ChangeEvent, FormEvent, useState } from 'react';
import { AxiosError } from 'axios';
import axiosInstance from '../axiosConfig';
import { toast } from 'react-toastify';

export type SignInFormData = {
    email: string;
    password: string;
    remember: boolean;
};

const LoginPage = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState<SignInFormData>({
        email: '',
        password: '',
        remember: false
    });

    const [error, setError] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);

    const handleChange = (
        e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
        const { name, value, type } = e.target;

        const checked =
            type === 'checkbox'
                ? (e.target as HTMLInputElement).checked
                : undefined;

        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value
        });
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        setLoading(true);
        setError('');

        try {
            await axiosInstance.post(
                '/api/user/sign-in',
                {
                    email: formData.email,
                    password: formData.password
                },
                {
                    withCredentials: true
                }
            );
            toast.success('Logged in successfully');
            navigate('/');
        } catch (err: unknown) {
            if (err instanceof AxiosError) {
                setError(
                    err.response?.data?.message || 'Failed to log in to account'
                );
            } else {
                setError('An unexpected error occurred');
            }
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="bg-gray-50 dark:bg-gray-900">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <a
                    href="/sign-in"
                    className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
                >
                    <img className="w-8 h-8 mr-2" src={Logo} alt="logo" />
                    JobConnect
                </a>
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
                        {error && (
                            <p className="text-red-500 text-sm">{error}</p>
                        )}

                        {/* Login Form */}
                        <form
                            className="space-y-4 md:space-y-6"
                            onSubmit={handleSubmit}
                        >
                            <div>
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                    Your email
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="name@company.com"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                    Password
                                </label>
                                <input
                                    type="password"
                                    name="password"
                                    id="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    placeholder="••••••••"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    required
                                />
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-start">
                                    <div className="flex items-center h-5">
                                        <input
                                            id="remember"
                                            aria-describedby="remember"
                                            type="checkbox"
                                            className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                                        />
                                    </div>
                                    <div className="ml-3 text-sm">
                                        <label className="text-gray-500 dark:text-gray-300">
                                            Remember me
                                        </label>
                                    </div>
                                </div>
                                <a
                                    href="#"
                                    className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                                >
                                    Forgot password?
                                </a>
                            </div>
                            <button
                                type="submit"
                                className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                                disabled={loading}
                            >
                                {loading ? 'Signing In...' : 'Sign In'}
                            </button>
                            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                Don’t have an account yet?{' '}
                                <a
                                    href="/sign-up"
                                    className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                                >
                                    Sign up
                                </a>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LoginPage;
