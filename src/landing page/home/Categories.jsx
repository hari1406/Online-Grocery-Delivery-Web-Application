import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function Categories() {
    const navigate = useNavigate();

    const categories = [
        { name: "Fruits & Vegetables", img: "categories/one.avif", slug: "fruits-vegetables" },
        { name: "Dairy & Bread", img: "categories/two.avif", slug: "dairy-bread" },
        { name: "Snacks", img: "categories/three.avif", slug: "snacks" },
        { name: "Beverages", img: "categories/four.avif", slug: "beverages" },
        { name: "Personal Care", img: "categories/five.avif", slug: "personal-care" },
        { name: "Household", img: "categories/six.avif", slug: "household" },
        { name: "Baby Care", img: "categories/seven.avif", slug: "baby-care" },
        { name: "Pet Care", img: "categories/eight.avif", slug: "pet-care" },
        { name: "Pharmacy", img: "categories/nine.avif", slug: "pharmacy" },
        { name: "Meat & Seafood", img: "categories/ten.avif", slug: "meat-seafood" },
        { name: "Bakery", img: "categories/A-one.avif", slug: "bakery" },
        { name: "Frozen Foods", img: "categories/A-two.avif", slug: "frozen-foods" },
        { name: "Organic", img: "categories/A-three.avif", slug: "organic" },
        { name: "Ready to Eat", img: "categories/A-four.avif", slug: "ready-to-eat" },
        { name: "Breakfast", img: "categories/A-five.avif", slug: "breakfast" },
        { name: "Sweets", img: "categories/A-six.avif", slug: "sweets" },
        { name: "Tea & Coffee", img: "categories/A-seven.avif", slug: "tea-coffee" },
        { name: "Cleaning", img: "categories/A-eight.avif", slug: "cleaning" },
        { name: "Stationery", img: "categories/A-nine.avif", slug: "stationery" },
        { name: "Electronics", img: "categories/A-ten.avif", slug: "electronics" },
    ];

    const handleCategoryClick = (category) => {
        navigate(`/category/${category.slug}`, {
            state: {
                category: category.name,
                items: [] // In a real app, this would fetch items for the category
            }
        });
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="py-8 bg-white"
        >
            <div className="px-4 sm:px-8 lg:px-32">
                <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">Shop by Category</h2>
                    <p className="text-gray-600">Find everything you need in our curated categories</p>
                </div>

                <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-10 lg:grid-cols-10 gap-4">
                    {categories.map((cat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.05 }}
                            whileHover={{ scale: 1.1, y: -5 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => handleCategoryClick(cat)}
                            className="flex flex-col items-center text-center cursor-pointer group"
                        >
                            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden shadow-md group-hover:shadow-lg transition-shadow duration-200 mb-2">
                                <img
                                    src={cat.img}
                                    alt={cat.name}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-200"
                                />
                            </div>
                            <p className="text-xs sm:text-sm font-medium text-gray-700 group-hover:text-green-600 transition-colors duration-200 leading-tight">
                                {cat.name}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* Popular Categories Highlight */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="mt-12 bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-6"
                >
                    <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">Popular Right Now</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {categories.slice(0, 4).map((cat, index) => (
                            <motion.div
                                key={`popular-${index}`}
                                whileHover={{ scale: 1.05 }}
                                className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-200 cursor-pointer"
                                onClick={() => handleCategoryClick(cat)}
                            >
                                <img
                                    src={cat.img}
                                    alt={cat.name}
                                    className="w-12 h-12 rounded-lg object-cover mx-auto mb-2"
                                />
                                <p className="text-sm font-medium text-center text-gray-700">{cat.name}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </motion.div>
    );
}