import Logo from '../assets/logo.png';
import { FcGoogle } from 'react-icons/fc';
import { HiOutlineMail } from 'react-icons/hi';
import axiosInstance from '../axiosConfig';
import { ChangeEvent, FormEvent, useState } from 'react';
import { AxiosError } from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

export type SignUpFormData = {
    role: string;
    email: string;
    password: string;
    confirmPassword: string;
    acceptTerms: boolean;
};

const SignupPage = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState<SignUpFormData>({
        role: '',
        email: '',
        password: '',
        confirmPassword: '',
        acceptTerms: false
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

        if (formData.password !== formData.confirmPassword) {
            setError('Passwords do not match');
            return;
        }

        setLoading(true);
        setError('');

        try {
            await axiosInstance.post(
                '/api/user/sign-up',
                {
                    role: formData.role,
                    email: formData.email,
                    password: formData.password
                },
                {
                    withCredentials: true
                }
            );

            toast.success('Account created successfully');
            navigate('/');
        } catch (err: unknown) {
            if (err instanceof AxiosError) {
                setError(
                    err.response?.data?.message || 'Failed to create account'
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
        <section className="py-10 bg-gray-50 dark:bg-gray-900">
            <div className="flex flex-col items-center justify-center px-6 py-20 mx-auto md:h-screen lg:py-0">
                <a
                    href="/sign-up"
                    className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
                >
                    <img className="w-8 h-8 mr-2" src={Logo} alt="logo" />
                    JobConnect
                </a>
                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Create an account
                        </h1>

                        {/* Login Buttons */}
                        <div className="flex gap-2">
                            <button className="flex items-center justify-center w-1/2 py-2 px-4 text-xs border border-gray-300 text-gray-900 rounded-lg hover:bg-gray-100 dark:border-gray-600 dark:text-gray-200 dark:hover:bg-gray-700">
                                <FcGoogle className="mr-2 text-lg" />
                                Sign up with Google
                            </button>
                            <button className="flex items-center justify-center w-1/2 py-2 px-4 text-xs border border-gray-300 text-gray-900 rounded-lg hover:bg-gray-100 dark:border-gray-600 dark:text-gray-200 dark:hover:bg-gray-700">
                                <HiOutlineMail className="mr-2 text-lg" />
                                Sign up with Email
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

                        {/* Sign Up Form */}
                        <form
                            className="space-y-4 md:space-y-6"
                            onSubmit={handleSubmit}
                        >
                            {/* Type Selection Dropdown */}
                            <div>
                                <label
                                    htmlFor="countries"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    Select an option
                                </label>
                                <select
                                    id="role"
                                    name="role"
                                    value={formData.role}
                                    onChange={handleChange}
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    required
                                >
                                    <option value="" disabled>
                                        Choose account type
                                    </option>
                                    <option value="seeker">Seeker</option>
                                    <option value="recruiter">Recruiter</option>
                                </select>
                            </div>

                            {/* Email Input */}
                            <div>
                                <label
                                    htmlFor="email"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    Your email
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="name@company.com"
                                    required
                                />
                            </div>

                            {/* Password Input */}
                            <div>
                                <label
                                    htmlFor="password"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    Password
                                </label>
                                <input
                                    type="password"
                                    name="password"
                                    id="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    placeholder="••••••••"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    required
                                />
                            </div>

                            {/* Confirm Password Input */}
                            <div>
                                <label
                                    htmlFor="confirm-password"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    Confirm password
                                </label>
                                <input
                                    type="password"
                                    name="confirmPassword"
                                    id="confirmPassword"
                                    value={formData.confirmPassword}
                                    onChange={handleChange}
                                    placeholder="••••••••"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    required
                                />
                            </div>

                            {/* Terms and Conditions */}
                            <div className="flex items-start">
                                <div className="flex items-center h-5">
                                    <input
                                        id="acceptTerms"
                                        name="acceptTerms"
                                        type="checkbox"
                                        checked={formData.acceptTerms}
                                        onChange={handleChange}
                                        className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                                        required
                                    />
                                </div>
                                <div className="ml-3 text-sm">
                                    <label
                                        htmlFor="terms"
                                        className="font-light text-gray-500 dark:text-gray-300"
                                    >
                                        I accept the{' '}
                                        <a
                                            className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                                            href="/terms&conditions"
                                        >
                                            Terms & Conditions
                                        </a>
                                    </label>
                                </div>
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                                disabled={loading}
                            >
                                {loading
                                    ? 'Signing up...'
                                    : 'Create an account'}
                            </button>

                            {/* Redirect to Login */}
                            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                Already have an account?{' '}
                                <a
                                    href="/sign-in"
                                    className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                                >
                                    Login here
                                </a>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SignupPage;
