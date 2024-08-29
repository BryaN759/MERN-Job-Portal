import { Link } from 'react-router-dom';

const TermsAndConditions = () => {
    return (
        <div className="min-h-screen bg-white dark:bg-gray-900 p-6 flex flex-col justify-between">
            {/* Main Content */}
            <div className="max-w-3xl mx-auto">
                <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-6">
                    Terms & Conditions
                </h1>

                <section className="mb-6">
                    <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-200 mb-2">
                        1. Introduction
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                        Welcome to our job portal. By accessing or using our
                        website, you agree to be bound by these terms and
                        conditions, including our privacy policy.
                    </p>
                </section>

                <section className="mb-6">
                    <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-200 mb-2">
                        2. User Responsibilities
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                        Users are responsible for maintaining the
                        confidentiality of their account information and
                        ensuring that all information provided is accurate and
                        up-to-date.
                    </p>
                </section>

                <section className="mb-6">
                    <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-200 mb-2">
                        3. Job Listings
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                        All job listings are provided by employers and are not
                        verified by us. We do not guarantee the accuracy or
                        validity of any job postings.
                    </p>
                </section>

                <section className="mb-6">
                    <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-200 mb-2">
                        4. Privacy Policy
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                        Our privacy policy explains how we handle your personal
                        data. By using our service, you consent to the
                        collection and use of your data as described in the
                        privacy policy.
                    </p>
                </section>

                <section className="mb-6">
                    <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-200 mb-2">
                        5. Changes to Terms
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                        We reserve the right to update or change these terms at
                        any time. Continued use of the site after any changes
                        constitutes acceptance of the new terms.
                    </p>
                </section>

                <section className="mb-6">
                    <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-200 mb-2">
                        6. Contact Us
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                        If you have any questions or concerns about these terms,
                        please contact us at support@example.com.
                    </p>
                </section>
            </div>

            {/* Go Back Button */}
            <div className="text-center mt-6">
                <Link
                    to="/sign-up"
                    className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
                >
                    Go back
                    <svg
                        className="ml-2 -mr-1 w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fillRule="evenodd"
                            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                            clipRule="evenodd"
                        ></path>
                    </svg>
                </Link>
            </div>
        </div>
    );
};

export default TermsAndConditions;
