import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToBag } from "../store/slices/SliceWish";
import { toast } from "react-toastify";
import { motion } from "framer-motion";
import AddIcon from '@mui/icons-material/Add';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';

export default function Card({ id, img, title, desc, price }) {
    const dispatch = useDispatch();
    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
    const cartData = useSelector((state) => state.cart);
    const [isFavorite, setIsFavorite] = useState(false);
    const [isAdding, setIsAdding] = useState(false);

    const handleAddToCart = async (id) => {
        if (!isLoggedIn) {
            toast.info("Please login first to add items to cart!");
            return;
        }

        const exists = cartData.find((e) => e.id === id);
        if (exists) {
            toast.info("Already added! 😅");
            return;
        }

        setIsAdding(true);

        // Simulate a small delay for better UX
        setTimeout(() => {
            dispatch(addToBag({ id, img, title, desc, price }));
            toast.success("Successfully added! 😀");
            setIsAdding(false);
        }, 300);
    };

    const toggleFavorite = () => {
        setIsFavorite(!isFavorite);
        toast.success(isFavorite ? "Removed from favorites" : "Added to favorites");
    };

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ y: -8, scale: 1.02 }}
            transition={{ duration: 0.3 }}
            className="min-w-[200px] max-w-[200px] bg-white rounded-xl shadow-sm border border-gray-100 p-4 flex flex-col hover:shadow-xl transition-all duration-300 group"
        >
            {/* Image Container */}
            <div className="relative mb-3 overflow-hidden rounded-lg">
                <motion.img
                    src={img}
                    alt={title}
                    className="h-28 w-full object-cover group-hover:scale-110 transition-transform duration-300"
                    whileHover={{ scale: 1.1 }}
                />

                {/* Favorite Button */}
                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={toggleFavorite}
                    className="absolute top-2 right-2 p-1.5 rounded-full bg-white/80 backdrop-blur-sm shadow-sm hover:bg-white transition-colors duration-200"
                >
                    {isFavorite ? (
                        <FavoriteIcon className="text-red-500 text-lg" />
                    ) : (
                        <FavoriteBorderIcon className="text-gray-600 text-lg" />
                    )}
                </motion.button>

                {/* Discount Badge (if applicable) */}
                <div className="absolute top-2 left-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full font-medium">
                    10% OFF
                </div>
            </div>

            {/* Content */}
            <div className="flex-1 flex flex-col">
                <h3 className="font-semibold text-sm text-gray-900 line-clamp-2 mb-1 leading-tight">
                    {title}
                </h3>
                <p className="text-xs text-gray-500 mb-3 line-clamp-1">{desc}</p>

                {/* Rating */}
                <div className="flex items-center mb-3">
                    <div className="flex text-yellow-400 text-xs">
                        ★★★★★
                    </div>
                    <span className="text-xs text-gray-500 ml-1">(4.2)</span>
                </div>

                {/* Price and Add Button */}
                <div className="flex justify-between items-center mt-auto">
                    <div className="flex flex-col">
                        <p className="font-bold text-lg text-gray-900">₹{price}</p>
                        <p className="text-xs text-gray-500 line-through">₹{Math.round(price * 1.1)}</p>
                    </div>

                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => handleAddToCart(id)}
                        disabled={isAdding}
                        className="bg-green-600 hover:bg-green-700 disabled:bg-gray-400 text-white px-4 py-2 rounded-lg font-medium text-sm transition-colors duration-200 flex items-center gap-1 shadow-sm hover:shadow-md"
                    >
                        {isAdding ? (
                            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        ) : (
                            <>
                                <AddIcon className="text-sm" />
                                ADD
                            </>
                        )}
                    </motion.button>
                </div>
            </div>
        </motion.div>
    );
}
