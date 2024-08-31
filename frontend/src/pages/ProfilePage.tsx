import { useState } from 'react';

const ProfilePage = () => {
    // State to track the current section
    const [currentSection, setCurrentSection] = useState(0);

    // Function to go to the navigate section
    const navigateSection = (direction: 'next' | 'back') => {
        setCurrentSection((prevSection) => {
            if (direction === 'next') {
                return (prevSection + 1) % 5; // 5 is the total number of sections
            } else {
                return (prevSection - 1 + 5) % 5; // Ensure it wraps around properly
            }
        });
    };

    return (
        <div className="bg-gray-50 dark:bg-gray-900 w-full flex flex-col gap-5 px-3 md:px-16 lg:px-28 md:flex-row text-gray-900 dark:text-white">
            {/* Sidebar */}
            <aside className="hidden py-4 md:w-1/3 lg:w-1/4 md:block">
                <div className="sticky flex flex-col gap-2 p-4 text-sm border-r border-gray-600 top-12">
                    <h2 className="pl-3 mb-4 text-2xl font-semibold">
                        Settings
                    </h2>
                    <a
                        href="#"
                        className="flex items-center px-3 py-2.5 font-semibold bg-gray-700 border rounded-full"
                    >
                        Public Profile
                    </a>
                    <a
                        href="#"
                        className="flex items-center px-3 py-2.5 font-semibold hover:border hover:rounded-full"
                    >
                        Reset Password
                    </a>
                    <a
                        href="#"
                        className="flex items-center px-3 py-2.5 font-semibold hover:border hover:rounded-full"
                    >
                        Notifications
                    </a>
                    <a
                        href="#"
                        className="flex items-center px-3 py-2.5 font-semibold hover:border hover:rounded-full"
                    >
                        Payments
                    </a>
                </div>
            </aside>

            {/* Main Content */}
            <main className="w-full min-h-screen py-1 md:w-2/3 lg:w-3/4">
                <div className="p-2 md:p-4">
                    <div className="w-full px-6 pb-8 mt-8 sm:max-w-xl sm:rounded-lg">
                        {/* Conditional Rendering for Sections */}
                        {currentSection === 0 && (
                            <>
                                {/* Public Profile Section */}
                                <h2 className="pl-6 text-2xl font-bold sm:text-xl">
                                    Public Profile
                                </h2>

                                {/*Profile picture*/}
                                <div className="flex flex-col items-center space-y-5 sm:flex-row sm:space-y-0">
                                    <img
                                        className="object-cover w-40 h-40 p-1 rounded-full ring-2 ring-indigo-300"
                                        src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZhY2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
                                        alt="Bordered avatar"
                                    />
                                    <div className="flex flex-col space-y-5 sm:ml-8">
                                        <button
                                            type="button"
                                            className="py-3.5 px-7 text-base font-medium text-indigo-100 bg-primary-700 hover:bg-primary-800 rounded-lg border border-indigo-200 focus:outline-none focus:z-10 focus:ring-4 focus:ring-indigo-200"
                                        >
                                            Change picture
                                        </button>
                                        <button
                                            type="button"
                                            className="py-3.5 px-7 text-base font-medium text-indigo-900 bg-white rounded-lg border border-indigo-200 hover:bg-indigo-100 hover:text-[#202142] focus:outline-none focus:z-10 focus:ring-4 focus:ring-indigo-200"
                                        >
                                            Delete picture
                                        </button>
                                    </div>
                                </div>

                                {/* Full Name */}
                                <div className="mt-6">
                                    <label
                                        htmlFor="full_name"
                                        className="block mb-2 text-sm font-medium"
                                    >
                                        Full Name
                                    </label>
                                    <input
                                        type="text"
                                        id="full_name"
                                        className="bg-gray-50 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="John Doe"
                                        required
                                    />
                                </div>
                                {/* Phone Number */}
                                <div className="mt-6">
                                    <label
                                        htmlFor="phone_number"
                                        className="block mb-2 text-sm font-medium"
                                    >
                                        Phone Number
                                    </label>
                                    <input
                                        type="text"
                                        id="phone_number"
                                        className="bg-gray-50 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="Phone Number"
                                    />
                                </div>

                                {/* Location */}
                                <div className="mt-6">
                                    <label
                                        htmlFor="location"
                                        className="block mb-2 text-sm font-medium"
                                    >
                                        Location
                                    </label>
                                    <input
                                        type="text"
                                        id="location"
                                        className="bg-gray-50 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="Location (e.g., City, Country)"
                                    />
                                </div>

                                {/* Bio */}
                                <div className="mt-6">
                                    <label
                                        htmlFor="bio"
                                        className="block mb-2 text-sm font-medium"
                                    >
                                        Bio
                                    </label>
                                    <textarea
                                        id="bio"
                                        className="bg-gray-50 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="Tell us about yourself"
                                        rows={4}
                                    />
                                </div>

                                {/* Website */}
                                <div className="mt-6">
                                    <label
                                        htmlFor="website"
                                        className="block mb-2 text-sm font-medium"
                                    >
                                        Website
                                    </label>
                                    <input
                                        type="url"
                                        id="website"
                                        className="bg-gray-50 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="https://yourwebsite.com"
                                    />
                                </div>

                                {/* Social Links */}
                                <div className="mt-6">
                                    <h3 className="text-lg font-medium">
                                        Social Links
                                    </h3>
                                    <div className="mt-2">
                                        <label
                                            htmlFor="linkedin"
                                            className="block mb-2 text-sm font-medium"
                                        >
                                            LinkedIn
                                        </label>
                                        <input
                                            type="url"
                                            id="linkedin"
                                            className="bg-gray-50 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            placeholder="https://linkedin.com/in/your-profile"
                                        />
                                    </div>
                                    <div className="mt-2">
                                        <label
                                            htmlFor="github"
                                            className="block mb-2 text-sm font-medium"
                                        >
                                            GitHub
                                        </label>
                                        <input
                                            type="url"
                                            id="github"
                                            className="bg-gray-50 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            placeholder="https://github.com/your-profile"
                                        />
                                    </div>
                                    <div className="mt-2">
                                        <label
                                            htmlFor="twitter"
                                            className="block mb-2 text-sm font-medium"
                                        >
                                            Twitter
                                        </label>
                                        <input
                                            type="url"
                                            id="twitter"
                                            className="bg-gray-50 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            placeholder="https://twitter.com/your-profile"
                                        />
                                    </div>
                                </div>
                            </>
                        )}

                        {currentSection === 1 && (
                            <>
                                {/* Education Section */}
                                <h2 className="pl-6 text-2xl font-bold sm:text-xl">
                                    Upload Resume
                                </h2>

                                {/* Upload Resume Section */}
                                <div className="flex items-center justify-center w-full mt-6">
                                    <label
                                        htmlFor="dropzone-file"
                                        className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-50"
                                    >
                                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                            <svg
                                                className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                                                aria-hidden="true"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 20 16"
                                            >
                                                <path
                                                    stroke="currentColor"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                                                />
                                            </svg>
                                            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                                                <span className="font-semibold">
                                                    Click to upload
                                                </span>{' '}
                                                or drag and drop
                                            </p>
                                            <p className="text-xs text-gray-500 dark:text-gray-400">
                                                PDF, DOC, DOCX (MAX. 5MB)
                                            </p>
                                        </div>
                                        <input
                                            id="dropzone-file"
                                            type="file"
                                            className="hidden"
                                        />
                                    </label>
                                </div>
                            </>
                        )}

                        {currentSection === 2 && (
                            <>
                                {/* Education Section */}
                                <h2 className="pl-6 text-2xl font-bold sm:text-xl">
                                    Education
                                </h2>
                                <div className="mt-6">
                                    <label
                                        htmlFor="institution"
                                        className="block mb-2 text-sm font-medium"
                                    >
                                        Institution
                                    </label>
                                    <input
                                        type="text"
                                        id="institution"
                                        className="bg-gray-50 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="e.g., University of XYZ"
                                    />
                                </div>

                                {/* Degree */}
                                <div className="mt-6">
                                    <label
                                        htmlFor="degree"
                                        className="block mb-2 text-sm font-medium"
                                    >
                                        Degree
                                    </label>
                                    <input
                                        type="text"
                                        id="degree"
                                        className="bg-gray-50 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="e.g., Bachelor's"
                                    />
                                </div>

                                {/* Field of Study */}
                                <div className="mt-6">
                                    <label
                                        htmlFor="field_of_study"
                                        className="block mb-2 text-sm font-medium"
                                    >
                                        Field of Study
                                    </label>
                                    <input
                                        type="text"
                                        id="field_of_study"
                                        className="bg-gray-50 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="e.g., Computer Science"
                                    />
                                </div>

                                {/* Start Date */}
                                <div className="mt-6">
                                    <label
                                        htmlFor="start_date"
                                        className="block mb-2 text-sm font-medium"
                                    >
                                        Start Date
                                    </label>
                                    <input
                                        type="date"
                                        id="start_date"
                                        className="bg-gray-50 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    />
                                </div>

                                {/* End Date */}
                                <div className="mt-6">
                                    <label
                                        htmlFor="end_date"
                                        className="block mb-2 text-sm font-medium"
                                    >
                                        End Date (optional)
                                    </label>
                                    <input
                                        type="date"
                                        id="end_date"
                                        className="bg-gray-50 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    />
                                </div>

                                {/* Description */}
                                <div className="mt-6">
                                    <label
                                        htmlFor="description"
                                        className="block mb-2 text-sm font-medium"
                                    >
                                        Description (optional)
                                    </label>
                                    <textarea
                                        id="description"
                                        className="bg-gray-50 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="Describe your education, achievements, etc."
                                        rows={4}
                                    />
                                </div>
                            </>
                        )}

                        {currentSection === 3 && (
                            <>
                                {/* Experience Section */}
                                <h2 className="pl-6 text-2xl font-bold sm:text-xl">
                                    Experience
                                </h2>

                                {/* Company */}
                                <div className="mt-6">
                                    <label
                                        htmlFor="company"
                                        className="block mb-2 text-sm font-medium"
                                    >
                                        Company
                                    </label>
                                    <input
                                        type="text"
                                        id="company"
                                        className="bg-gray-50 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="e.g., University of XYZ"
                                    />
                                </div>

                                {/* Position */}
                                <div className="mt-6">
                                    <label
                                        htmlFor="position"
                                        className="block mb-2 text-sm font-medium"
                                    >
                                        Position
                                    </label>
                                    <input
                                        type="text"
                                        id="position"
                                        className="bg-gray-50 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="e.g., Bachelor's"
                                    />
                                </div>

                                {/* Start Date */}
                                <div className="mt-6">
                                    <label
                                        htmlFor="start_date"
                                        className="block mb-2 text-sm font-medium"
                                    >
                                        Start Date
                                    </label>
                                    <input
                                        type="date"
                                        id="start_date"
                                        className="bg-gray-50 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    />
                                </div>

                                {/* End Date */}
                                <div className="mt-6">
                                    <label
                                        htmlFor="end_date"
                                        className="block mb-2 text-sm font-medium"
                                    >
                                        End Date (optional)
                                    </label>
                                    <input
                                        type="date"
                                        id="end_date"
                                        className="bg-gray-50 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    />
                                </div>

                                {/* Description */}
                                <div className="mt-6">
                                    <label
                                        htmlFor="description"
                                        className="block mb-2 text-sm font-medium"
                                    >
                                        Description (optional)
                                    </label>
                                    <textarea
                                        id="description"
                                        className="bg-gray-50 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="Describe your education, achievements, etc."
                                        rows={4}
                                    />
                                </div>
                            </>
                        )}

                        {currentSection === 4 && (
                            <>
                                {/* Skills Section */}
                                <h2 className="pl-6 text-2xl font-bold sm:text-xl">
                                    Skills
                                </h2>
                                <div className="mt-6">
                                    <label
                                        htmlFor="skills"
                                        className="block mb-2 text-sm font-medium"
                                    >
                                        Skills
                                    </label>
                                    <input
                                        type="text"
                                        id="skills"
                                        className="bg-gray-50 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="e.g., JavaScript, React, Node.js"
                                    />
                                </div>
                                {/* Add more fields for Skills */}
                            </>
                        )}

                        {/* Navigation Buttons (Next and Back) */}
                        <div className="mt-6 flex justify-between items-center">
                            {/* Back Button */}
                            <button
                                type="button"
                                onClick={() => navigateSection('back')} // Function to handle moving to the previous section
                                className="text-base font-medium text-gray-500 hover:text-gray-600 focus:outline-none"
                            >
                                <span className="mr-2">←</span> Back
                            </button>

                            {/* Next Button */}
                            <button
                                type="button"
                                onClick={() => navigateSection('next')} // Function to handle moving to the next section
                                className="text-base font-medium text-gray-500 hover:text-gray-600 focus:outline-none"
                            >
                                Next <span className="ml-2">→</span>
                            </button>
                        </div>

                        {/* Save Button */}
                        <div className="mt-6">
                            <button
                                type="button"
                                // onClick={saveSection}  // Function to handle saving the current section
                                className="w-full px-5 py-3 text-base font-medium text-center text-white bg-primary-700 rounded-lg hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300"
                            >
                                Save Changes
                            </button>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default ProfilePage;
