import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import StarIcon from '@mui/icons-material/Star';

export default function Hero() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const heroSlides = [
        {
            image: "heroSection/paan-corner.webp",
            title: "Fresh & Quality Products",
            subtitle: "Get your favorite items delivered in minutes",
            cta: "Shop Now"
        }
    ];

    const features = [
        { icon: <LocalShippingIcon />, text: "Free Delivery", subtext: "On orders above ₹99" },
        { icon: <AccessTimeIcon />, text: "Express Delivery", subtext: "Within 15 minutes" },
        { icon: <StarIcon />, text: "Quality Assured", subtext: "100% fresh products" }
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="hero-container mt-24 relative overflow-hidden bg-gradient-to-br from-green-50 to-blue-50">
            {/* Main Hero Section */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="relative"
            >
                <div className="px-4 sm:px-8 lg:px-32 py-12">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Hero Content */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="space-y-6"
                        >
                            <div>
                                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                                    Your <span className="text-green-600">Daily</span> Essentials
                                    <br />
                                    <span className="text-blue-600">Delivered Fast</span>
                                </h1>
                                <p className="text-lg text-gray-600 mt-4 max-w-md">
                                    Get fresh groceries, medicines, and daily needs delivered to your doorstep in minutes with our lightning-fast delivery service.
                                </p>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold text-lg transition-colors duration-200 shadow-lg"
                                >
                                    Order Now
                                </motion.button>
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="border-2 border-gray-300 hover:border-gray-400 text-gray-700 px-8 py-3 rounded-lg font-semibold text-lg transition-colors duration-200"
                                >
                                    Browse Categories
                                </motion.button>
                            </div>
                        </motion.div>

                        {/* Hero Image */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="relative"
                        >
                            <div className="relative">
                                <img
                                    src={heroSlides[currentSlide].image}
                                    alt="Fresh Products"
                                    className="w-full h-55 object-cover rounded-2xl shadow-2xl"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </motion.div>

            {/* Features Section */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="bg-white py-8 shadow-sm"
            >
                <div className="px-4 sm:px-8 lg:px-32">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ y: -5 }}
                                className="flex items-center space-x-4 p-4 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                            >
                                <div className="text-green-600 text-3xl">
                                    {feature.icon}
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-900">{feature.text}</h3>
                                    <p className="text-sm text-gray-600">{feature.subtext}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.div>

            {/* Promotional Banners */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="px-4 sm:px-8 lg:px-32 py-8"
            >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="relative overflow-hidden rounded-xl shadow-lg"
                    >
                        <img
                            src="heroSection/babycare-WEB.avif"
                            alt="Baby Care"
                            className="w-full h-32 object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                            <h3 className="text-white font-semibold">Baby Care Essentials</h3>
                        </div>
                    </motion.div>

                    <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="relative overflow-hidden rounded-xl shadow-lg"
                    >
                        <img
                            src="heroSection/Pet-Care_WEB.avif"
                            alt="Pet Care"
                            className="w-full h-32 object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                            <h3 className="text-white font-semibold">Pet Care Products</h3>
                        </div>
                    </motion.div>

                    <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="relative overflow-hidden rounded-xl shadow-lg"
                    >
                        <img
                            src="heroSection/pharmacy-WEB.avif"
                            alt="Pharmacy"
                            className="w-full h-32 object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                            <h3 className="text-white font-semibold">Health & Pharmacy</h3>
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </div>
    );
}