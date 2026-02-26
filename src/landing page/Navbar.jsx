import { useState } from 'react';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SearchIcon from '@mui/icons-material/Search';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Logo from '../components/Logo';
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../store/slices/SliceWish';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar({ handleModalOpen }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isLocationOpen, setIsLocationOpen] = useState(false);
    const cartData = useSelector((state) => state.cart);
    const { isLoggedIn, user } = useSelector(state => state.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const toggleLocation = () => setIsLocationOpen(!isLocationOpen);

    const handleLogout = () => {
        dispatch(logout());
        navigate('/');
    };

    return (
        <nav className="bg-white shadow-sm border-b sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">

                    {/* Logo */}
                    <NavLink to="/" className="flex-shrink-0">
                        <div className="h-full flex items-center pr-4 border-r border-gray-200">
                            <Logo />
                        </div>
                    </NavLink>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center space-x-8 flex-1 ml-8">

                        {/* Location Selector */}
                        <div className="relative">
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                onClick={toggleLocation}
                                className="flex items-center space-x-2 text-sm bg-gray-50 hover:bg-gray-100 px-4 py-2 rounded-lg transition-colors duration-200"
                            >
                                <LocationOnIcon className="text-green-600" />
                                <div className="text-left">
                                    <p className="font-medium text-gray-900">Deliver in 8 minutes</p>
                                    <p className="text-gray-600 text-xs">B62, Pocket B, South City I...</p>
                                </div>
                                <ArrowDropDownIcon className={`text-gray-500 transition-transform duration-200 ${isLocationOpen ? 'rotate-180' : ''}`} />
                            </motion.button>

                            <AnimatePresence>
                                {isLocationOpen && (
                                    <motion.div
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        className="absolute top-full mt-2 w-80 bg-white border border-gray-200 rounded-lg shadow-lg z-50"
                                    >
                                        <div className="p-4">
                                            <h3 className="font-semibold text-gray-900 mb-2">Select Delivery Location</h3>
                                            <input
                                                type="text"
                                                placeholder="Enter your location"
                                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                                            />
                                            <button className="w-full mt-3 bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition-colors duration-200">
                                                Confirm Location
                                            </button>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        {/* Search Bar */}
                        <div className="flex-1 max-w-md">
                            <div className="relative">
                                <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                                <input
                                    type="text"
                                    placeholder="Search for products..."
                                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Right Side Actions */}
                    <div className="flex items-center space-x-4">

                        {/* Auth Buttons */}
                        <div className="hidden md:flex items-center space-x-4">
                            {!isLoggedIn ? (
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={handleModalOpen}
                                    className="text-gray-700 hover:text-green-600 font-medium transition-colors duration-200"
                                >
                                    Login
                                </motion.button>
                            ) : (
                                <div className="flex items-center space-x-4">
                                    <span className="text-gray-700">Hello, {user?.email?.split('@')[0]}</span>
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        onClick={handleLogout}
                                        className="text-gray-700 hover:text-red-600 font-medium transition-colors duration-200"
                                    >
                                        Logout
                                    </motion.button>
                                </div>
                            )}
                        </div>

                        {/* Cart */}
                        <NavLink to="/cart" className="relative">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-medium flex items-center gap-2 transition-colors duration-200 shadow-sm hover:shadow-md"
                            >
                                <ShoppingCartOutlinedIcon />
                                <span className="hidden sm:inline">My Cart</span>
                                {cartData.length > 0 && (
                                    <motion.span
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full"
                                    >
                                        {cartData.length}
                                    </motion.span>
                                )}
                            </motion.button>
                        </NavLink>

                        {/* Mobile Menu Button */}
                        <motion.button
                            whileTap={{ scale: 0.95 }}
                            onClick={toggleMenu}
                            className="lg:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100"
                        >
                            {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
                        </motion.button>
                    </div>
                </div>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {isMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="lg:hidden border-t border-gray-200 bg-white"
                        >
                            <div className="px-4 py-6 space-y-4">

                                {/* Mobile Location */}
                                <div className="flex items-center space-x-2 p-3 bg-gray-50 rounded-lg">
                                    <LocationOnIcon className="text-green-600" />
                                    <div>
                                        <p className="font-medium text-gray-900 text-sm">Deliver in 8 minutes</p>
                                        <p className="text-gray-600 text-xs">B62, Pocket B, South City I...</p>
                                    </div>
                                </div>

                                {/* Mobile Search */}
                                <div className="relative">
                                    <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                                    <input
                                        type="text"
                                        placeholder="Search for products..."
                                        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                                    />
                                </div>

                                {/* Mobile Auth */}
                                <div className="space-y-2">
                                    {!isLoggedIn ? (
                                        <button
                                            onClick={handleModalOpen}
                                            className="w-full text-left px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md transition-colors duration-200"
                                        >
                                            Login
                                        </button>
                                    ) : (
                                        <>
                                            <div className="px-3 py-2 text-gray-700">
                                                Hello, {user?.email?.split('@')[0]}
                                            </div>
                                            <button
                                                onClick={handleLogout}
                                                className="w-full text-left px-3 py-2 text-gray-700 hover:bg-red-100 rounded-md transition-colors duration-200"
                                            >
                                                Logout
                                            </button>
                                        </>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </nav>
    );
}