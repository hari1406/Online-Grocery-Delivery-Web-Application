import React, { useState, useEffect } from "react";
import { useLocation, useParams, useNavigate } from "react-router-dom";
import Card from "../landing page/Card.jsx";
import { motion } from "framer-motion";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import FilterListIcon from '@mui/icons-material/FilterList';
import SortIcon from '@mui/icons-material/Sort';
import SearchIcon from '@mui/icons-material/Search';

export default function Category() {
    const { slug } = useParams();
    const { state } = useLocation();
    const navigate = useNavigate();

    const [searchTerm, setSearchTerm] = useState('');
    const [sortBy, setSortBy] = useState('name');
    const [filterBy, setFilterBy] = useState('all');
    const [showFilters, setShowFilters] = useState(false);

    const items = state?.items ?? [];

    // Mock data for demonstration - in a real app, this would come from an API
    const mockItems = [
        { id: 1, img: "rowImages/first.avif", title: "Fresh Apples", desc: "1 kg pack", price: 120, category: "fruits" },
        { id: 2, img: "rowImages/second.avif", title: "Organic Bananas", desc: "6 pieces", price: 60, category: "fruits" },
        { id: 3, img: "rowImages/third.avif", title: "Red Tomatoes", desc: "1 kg", price: 40, category: "vegetables" },
        { id: 4, img: "rowImages/fourth.avif", title: "Green Spinach", desc: "500g", price: 30, category: "vegetables" },
        { id: 5, img: "rowImages/fifth.avif", title: "Whole Milk", desc: "1 litre", price: 65, category: "dairy" },
        { id: 6, img: "rowImages/sixth.avif", title: "Brown Bread", desc: "400g", price: 45, category: "bakery" },
    ];

    const displayItems = items.length > 0 ? items : mockItems;

    // Filter and sort items
    const filteredAndSortedItems = displayItems
        .filter(item => {
            const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase());
            const matchesFilter = filterBy === 'all' || item.category === filterBy;
            return matchesSearch && matchesFilter;
        })
        .sort((a, b) => {
            switch (sortBy) {
                case 'price-low':
                    return a.price - b.price;
                case 'price-high':
                    return b.price - a.price;
                case 'name':
                default:
                    return a.title.localeCompare(b.title);
            }
        });

    const sortOptions = [
        { value: 'name', label: 'Name (A-Z)' },
        { value: 'price-low', label: 'Price (Low to High)' },
        { value: 'price-high', label: 'Price (High to Low)' },
    ];

    const filterOptions = [
        { value: 'all', label: 'All Products' },
        { value: 'fruits', label: 'Fruits' },
        { value: 'vegetables', label: 'Vegetables' },
        { value: 'dairy', label: 'Dairy' },
        { value: 'bakery', label: 'Bakery' },
    ];

    return (
        <motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="min-h-screen bg-gray-50"
        >
            {/* Header */}
            <div className="bg-white shadow-sm border-b sticky top-0 z-40">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <div className="flex items-center justify-between">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => navigate(-1)}
                            className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors duration-200"
                        >
                            <ArrowBackIcon />
                            <span>Back</span>
                        </motion.button>

                        <h1 className="text-2xl font-bold text-gray-900">
                            {state?.category ?? decodeURIComponent(slug).replace(/-/g, ' ')}
                        </h1>

                        <div className="w-20"></div> {/* Spacer for centering */}
                    </div>

                    {/* Search and Filters */}
                    <div className="mt-4 space-y-3">
                        {/* Search Bar */}
                        <div className="relative">
                            <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                            <input
                                type="text"
                                placeholder="Search products..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                            />
                        </div>

                        {/* Sort and Filter Controls */}
                        <div className="flex flex-wrap gap-3">
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                onClick={() => setShowFilters(!showFilters)}
                                className="flex items-center space-x-2 px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                            >
                                <FilterListIcon className="text-sm" />
                                <span>Filters</span>
                            </motion.button>

                            <select
                                value={sortBy}
                                onChange={(e) => setSortBy(e.target.value)}
                                className="px-4 py-2 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                            >
                                {sortOptions.map(option => (
                                    <option key={option.value} value={option.value}>
                                        {option.label}
                                    </option>
                                ))}
                            </select>
                        </div>

                        {/* Expandable Filters */}
                        {showFilters && (
                            <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                className="bg-white border border-gray-200 rounded-lg p-4"
                            >
                                <h3 className="font-semibold text-gray-900 mb-3">Filter by Category</h3>
                                <div className="flex flex-wrap gap-2">
                                    {filterOptions.map(option => (
                                        <button
                                            key={option.value}
                                            onClick={() => setFilterBy(option.value)}
                                            className={`px-3 py-1 rounded-full text-sm transition-colors duration-200 ${
                                                filterBy === option.value
                                                    ? 'bg-green-600 text-white'
                                                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                            }`}
                                        >
                                            {option.label}
                                        </button>
                                    ))}
                                </div>
                            </motion.div>
                        )}
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {filteredAndSortedItems.length === 0 ? (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-center py-12"
                    >
                        <div className="text-gray-400 text-6xl mb-4">🛒</div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">No products found</h3>
                        <p className="text-gray-600 mb-6">
                            Try adjusting your search or filter criteria
                        </p>
                        <button
                            onClick={() => {
                                setSearchTerm('');
                                setFilterBy('all');
                                setSortBy('name');
                            }}
                            className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors duration-200"
                        >
                            Clear Filters
                        </button>
                    </motion.div>
                ) : (
                    <>
                        {/* Results count */}
                        <div className="mb-6">
                            <p className="text-gray-600">
                                Showing {filteredAndSortedItems.length} product{filteredAndSortedItems.length !== 1 ? 's' : ''}
                                {searchTerm && ` for "${searchTerm}"`}
                            </p>
                        </div>

                        {/* Products Grid */}
                        <motion.div
                            layout
                            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6"
                        >
                            {filteredAndSortedItems.map((item, idx) => (
                                <motion.div
                                    key={item?.id ?? idx}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: idx * 0.05 }}
                                    layout
                                >
                                    <Card
                                        img={item.img}
                                        title={item.title}
                                        desc={item.desc}
                                        price={item.price}
                                        id={item.id}
                                    />
                                </motion.div>
                            ))}
                        </motion.div>
                    </>
                )}
            </div>
        </motion.main>
    );
}