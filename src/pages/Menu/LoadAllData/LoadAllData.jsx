import { useEffect, useState } from "react";
import useMenu from "../../../hooks/useMenu";
import ShowAllData from "./ShowAllData";

const LoadAllData = () => {
    const [menu] = useMenu();
    const [searchInput, setSearchInput] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 9;

    // Function to handle search
    const handleSearch = () => {
        const results = menu.filter((data) =>
            data.category.toLowerCase().includes(searchInput.toLowerCase())
        );
        setSearchResults(results);
        setSearchInput("");
        setCurrentPage(1); // Reset to the first page after search
    };

    // Function to handle Enter key press
    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            handleSearch();
        }
    };

    /// Function to get paginated data
    const getPaginatedData = () => {
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        const totalItems = searchResults.length > 0 ? searchResults.length : menu.length;

        if (endIndex > totalItems) {
            // If endIndex exceeds the total number of items, adjust it
            return searchResults.length > 0
                ? searchResults.slice(startIndex)
                : menu.slice(startIndex);
        }

        return searchResults.length > 0
            ? searchResults.slice(startIndex, endIndex)
            : menu.slice(startIndex, endIndex);
    };


    // Initial data load
    useEffect(() => {
        setSearchResults(menu);
    }, [menu]);

    return (
        <div>
            {/* Search Input */}
            <div className="px-10">
                <input
                    type="text"
                    className="w-[500px] py-4 bg-[#101c1f] text-[#C9AB81] rounded-lg ps-4 paragraph-font mb-6"
                    placeholder="Search by category(salad, pasta etc..)"
                    value={searchInput}
                    onChange={(e) => setSearchInput(e.target.value)}
                    onKeyPress={handleKeyPress}
                />
                <button className="ms-6 paragraph-font text-[#C9AB81] bg-[#14262D] p-4 rounded-lg hover:bg-[#101c1f] hover:text-white" onClick={handleSearch}>Search</button>
            </div>

            {/* Display Paginated Data */}
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-10">
                {getPaginatedData().map((data) => (
                    <ShowAllData key={data._id} allData={data} />
                ))}
            </div>

            {/* Pagination Buttons */}
            <div className="join grid grid-cols-2 bg-[#C9AB81] mt-10 mx-10 paragraph-font w-1/4">
                <button
                    className="join-item btn btn-outline"
                    onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                    disabled={currentPage === 1}
                >
                    Previous page
                </button>
                <button
                    className="join-item btn btn-outline"
                    onClick={() =>
                        setCurrentPage((prev) =>
                            Math.min(
                                prev + 1,
                                Math.ceil(searchResults.length / itemsPerPage)
                            )
                        )
                    }
                    disabled={
                        currentPage === Math.ceil(searchResults.length / itemsPerPage)
                    }
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default LoadAllData;



