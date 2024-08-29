import { useState, useEffect } from 'react';
import axiosInstance from '../axiosConfig'; // Adjust the import based on your project structure
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import { toast } from 'react-toastify'; // For notifications

const PasswordReset = () => {
    const [email, setEmail] = useState<string>('');
    const [code, setCode] = useState<string>('');
    const [showCodeInput, setShowCodeInput] = useState<boolean>(false);
    const [timer, setTimer] = useState<number>(60);
    const [loading, setLoading] = useState<boolean>(false);

    // Timer countdown function
    useEffect(() => {
        let countdown: number | undefined; // TypeScript type for setInterval
        if (showCodeInput && timer > 0) {
            countdown = setInterval(() => {
                setTimer((prev) => prev - 1);
            }, 1000);
        } else if (timer === 0) {
            clearInterval(countdown);
            toast.error('Code expired. Please request a new code.');
            setShowCodeInput(false); // Reset to email input step
        }
        return () => clearInterval(countdown);
    }, [showCodeInput, timer]);

    // Handle form submission
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);

        try {
            // The backend will handle both sending the email and verifying the code
            await axiosInstance.post('/auth/password-reset', {
                email,
                code: showCodeInput ? code : null // Send the code only if it's in the verification step
            });

            if (!showCodeInput) {
                // If sending the code was successful
                toast.success('Verification code sent to your email.');
                setShowCodeInput(true); // Reveal code input
                setTimer(60); // Start the timer
            } else {
                // If verifying the code was successful
                toast.success(
                    'Code verified successfully. Proceed to reset your password.'
                );
                // Redirect or allow the user to reset the password
            }
        } catch (error) {
            if (!showCodeInput) {
                toast.error('Failed to send code. Please try again.');
            } else {
                toast.error('Invalid or expired code. Please try again.');
            }
        } finally {
            setLoading(false);
        }
    };
    return (
        <div className="flex justify-center items-center h-screen bg-gray-100 dark:bg-gray-900">
            <div className="w-full max-w-md p-8 space-y-6 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
                <h2 className="text-2xl font-bold text-center text-gray-900 dark:text-white">
                    Reset Your Password
                </h2>

                <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Email Input */}
                    <div>
                        <label
                            htmlFor="email"
                            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                        >
                            Enter your email address
                        </label>
                        <input
                            type="email"
                            id="email"
                            className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                            placeholder="you@example.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            disabled={showCodeInput} // Disable email input when the code input is visible
                        />
                    </div>

                    {/* Code Input (Revealed After Email Submission) */}
                    {showCodeInput && (
                        <div>
                            <label
                                htmlFor="code"
                                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                            >
                                Enter the verification code
                            </label>
                            <input
                                type="text"
                                id="code"
                                className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                                placeholder="Enter code"
                                value={code}
                                onChange={(e) => setCode(e.target.value)}
                                required
                            />
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                                You have {timer} seconds remaining to enter the
                                code.
                            </p>
                        </div>
                    )}

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                        disabled={loading}
                    >
                        {loading ? (
                            <AiOutlineLoading3Quarters className="animate-spin mx-auto" />
                        ) : showCodeInput ? (
                            'Verify Code'
                        ) : (
                            'Send Code'
                        )}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default PasswordReset;
