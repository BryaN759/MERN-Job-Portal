import { useState } from 'react';

const SearchHeaderSection = () => {
    const [sort, setSort] = useState('');

    return (
        <div className="flex flex-col md:flex-row items-center justify-between mb-4 p-2 px-4 bg-white dark:bg-gray-800 rounded-lg shadow-md">
            {/* Search Results Text */}
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
                Search Results (*)
            </h2>

            {/* Sorting Dropdown */}
            <select
                className="mt-2 md:mt-0 p-2 w-48 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                value={sort}
                onChange={(e) => setSort(e.target.value)}
            >
                <option value="">Sort by</option>
                <option value="date">Date Posted</option>
                <option value="salary">Salary</option>
                <option value="location">Location</option>
            </select>
        </div>
    );
};

export default SearchHeaderSection;
