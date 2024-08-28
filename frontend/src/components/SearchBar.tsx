const SearchBar = () => {
    return (
        <div className="mt-[-36px] bg-white rounded-lg shadow m-4 dark:bg-gray-800 w-full max-w-screen-xl mx-auto">
            <div className=" p-4 flex flex-col space-y-4 md:space-y-0 md:flex-row md:items-center md:justify-between">
                <div className="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-4 w-full">
                    <input
                        type="text"
                        placeholder="Search job titles..."
                        className="flex-1 px-4 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                    />
                    <select className="flex-1 px-4 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                        <option value="">Category</option>
                        <option value="engineering">Engineering</option>
                        <option value="design">Design</option>
                        <option value="marketing">Marketing</option>
                        <option value="sales">Sales</option>
                    </select>
                    <select className="flex-1 px-4 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                        <option value="">Location</option>
                        <option value="new-york">New York</option>
                        <option value="san-francisco">San Francisco</option>
                        <option value="remote">Remote</option>
                    </select>
                </div>
                <div className="mt-4 flex flex-col space-y-4 md:space-y-0 md:flex-row md:space-x-4">
                    <button className="w-full md:w-1/2 py-2 px-4 text-white bg-primary-700 hover:bg-primary-800 rounded-lg focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
                        Search
                    </button>
                    <button className="w-full md:w-1/2 mt-2 md:mt-0 py-2 px-4 text-gray-900 bg-gray-200 hover:bg-gray-300 rounded-lg focus:ring-4 focus:ring-gray-100 dark:text-white dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-800">
                        Clear
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SearchBar;
