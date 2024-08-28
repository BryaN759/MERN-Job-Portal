const FilterSidebar = () => {
    return (
        <div className="w-full lg:w-1/4 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-4">
                Filters
            </h2>

            {/* Location Filter */}
            <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Location
                </h3>
                <div className="flex flex-col space-y-2">
                    <label className="flex items-center text-gray-600 dark:text-gray-400">
                        <input
                            type="checkbox"
                            className="mr-2"
                            value="new-york"
                        />
                        New York
                    </label>
                    <label className="flex items-center text-gray-600 dark:text-gray-400">
                        <input
                            type="checkbox"
                            className="mr-2"
                            value="san-francisco"
                        />
                        San Francisco
                    </label>
                    <label className="flex items-center text-gray-600 dark:text-gray-400">
                        <input
                            type="checkbox"
                            className="mr-2"
                            value="remote"
                        />
                        Remote
                    </label>
                </div>
            </div>

            {/* Category Filter */}
            <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Category
                </h3>
                <div className="flex flex-col space-y-2">
                    <label className="flex items-center text-gray-600 dark:text-gray-400">
                        <input
                            type="checkbox"
                            className="mr-2"
                            value="engineering"
                        />
                        Engineering
                    </label>
                    <label className="flex items-center text-gray-600 dark:text-gray-400">
                        <input
                            type="checkbox"
                            className="mr-2"
                            value="design"
                        />
                        Design
                    </label>
                    <label className="flex items-center text-gray-600 dark:text-gray-400">
                        <input
                            type="checkbox"
                            className="mr-2"
                            value="marketing"
                        />
                        Marketing
                    </label>
                    <label className="flex items-center text-gray-600 dark:text-gray-400">
                        <input type="checkbox" className="mr-2" value="sales" />
                        Sales
                    </label>
                </div>
            </div>

            {/* Salary Range Filter */}
            <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Salary Range
                </h3>
                <input
                    type="range"
                    min="30000"
                    max="150000"
                    step="5000"
                    className="w-full"
                />
                <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400 mt-1">
                    <span>$30k</span>
                    <span>$150k+</span>
                </div>
            </div>
        </div>
    );
};

export default FilterSidebar;
