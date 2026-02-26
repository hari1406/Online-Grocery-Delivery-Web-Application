import { motion } from "framer-motion";
import Card from "./Card.jsx";
import { useNavigate } from "react-router-dom";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export default function CategoryRow({ category, items, onSeeAll }) {
    const navigate = useNavigate();

    const handleSeeAll = () => {
        if (typeof onSeeAll === "function") return onSeeAll(category);
        const slug = encodeURIComponent(category.toLowerCase().replace(/\s+/g, "-"));
        navigate(`/category/${slug}`, { state: { category, items } });
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12 mx-4 sm:mx-8 lg:mx-12"
        >
            {/* Header */}
            <div className="flex justify-between items-center mb-6">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                >
                    <h2 className="text-2xl font-bold text-gray-900 mb-1">{category}</h2>
                    <p className="text-gray-600 text-sm">Fresh and quality products</p>
                </motion.div>

                <motion.button
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    whileHover={{ scale: 1.05, x: 5 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleSeeAll}
                    className="flex items-center space-x-2 text-green-600 hover:text-green-700 font-medium transition-colors duration-200 group"
                >
                    <span>See all</span>
                    <ArrowForwardIcon className="text-sm group-hover:translate-x-1 transition-transform duration-200" />
                </motion.button>
            </div>

            {/* Products Grid */}
            <div className="relative">
                <div className="flex space-x-4 overflow-x-auto scrollbar-hide pb-4">
                    {items.map((item, idx) => (
                        <motion.div
                            key={item?.id ?? idx}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            className="flex-shrink-0"
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
                </div>

                {/* Gradient fade on right */}
                <div className="absolute top-0 right-0 w-20 h-full bg-gradient-to-l from-white to-transparent pointer-events-none"></div>
            </div>

            {/* Quick Stats */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mt-6 flex justify-center"
            >
                <div className="bg-gray-50 rounded-lg px-6 py-3 text-center">
                    <p className="text-sm text-gray-600">
                        Showing {Math.min(items.length, 6)} of {items.length} products
                    </p>
                </div>
            </motion.div>
        </motion.div>
    );
}