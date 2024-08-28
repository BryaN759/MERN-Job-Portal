// JobCards.tsx
const JobCards = () => {
    return (
        <div className="w-full">
            {' '}
            {/* Remove width restriction */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {Array.from({ length: 6 }).map((_, index) => (
                    <div
                        key={index}
                        className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md"
                    >
                        <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                            Job Title {index + 1}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400">
                            Company Name
                        </p>
                        <p className="text-gray-500 dark:text-gray-400">
                            Location
                        </p>
                        <p className="text-gray-500 dark:text-gray-400">
                            $60,000 - $90,000
                        </p>
                        <button className="mt-4 py-2 px-4 w-full bg-primary-700 hover:bg-primary-800 text-white rounded-lg focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
                            Apply Now
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default JobCards;
