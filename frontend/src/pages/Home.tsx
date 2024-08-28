import FilterSidebar from '../components/FilterSidebar';
import JobCards from '../components/JobCards';
import SearchHeaderSection from '../components/SearchHeaderSection';

const Home = () => {
    return (
        <div className="flex flex-col lg:flex-row gap-4 p-4 bg-white dark:bg-gray-900">
            <FilterSidebar />
            <div className="flex-1 flex flex-col">
                <SearchHeaderSection />
                <JobCards />
            </div>
        </div>
    );
};

export default Home;
