import { motion } from "framer-motion";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    const footerSections = [
        {
            title: "Company",
            links: [
                { name: "About Us", href: "#" },
                { name: "Careers", href: "#" },
                { name: "Press", href: "#" },
                { name: "Blog", href: "#" },
                { name: "Security", href: "#" },
                { name: "Investor Relations", href: "#" }
            ]
        },
        {
            title: "Support",
            links: [
                { name: "Help Center", href: "#" },
                { name: "Contact Us", href: "#" },
                { name: "Track Order", href: "#" },
                { name: "Return Policy", href: "#" },
                { name: "FAQs", href: "#" },
                { name: "Size Guide", href: "#" }
            ]
        },
        {
            title: "Legal",
            links: [
                { name: "Privacy Policy", href: "#" },
                { name: "Terms of Service", href: "#" },
                { name: "Cookie Policy", href: "#" },
                { name: "Disclaimer", href: "#" },
                { name: "Accessibility", href: "#" }
            ]
        },
        {
            title: "Categories",
            links: [
                { name: "Fruits & Vegetables", href: "#" },
                { name: "Dairy & Breakfast", href: "#" },
                { name: "Beverages", href: "#" },
                { name: "Snacks", href: "#" },
                { name: "Personal Care", href: "#" },
                { name: "Home & Kitchen", href: "#" },
                { name: "Electronics", href: "#" },
                { name: "Pharmacy", href: "#" }
            ]
        }
    ];

    const socialLinks = [
        { icon: <FacebookIcon />, href: "#", label: "Facebook" },
        { icon: <TwitterIcon />, href: "#", label: "Twitter" },
        { icon: <InstagramIcon />, href: "#", label: "Instagram" },
        { icon: <LinkedInIcon />, href: "#", label: "LinkedIn" },
        { icon: <YouTubeIcon />, href: "#", label: "YouTube" }
    ];

    return (
        <footer className="bg-gray-900 text-white">
            {/* Main Footer Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">

                    {/* Company Info */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="lg:col-span-2"
                    >
                        <div className="mb-6">
                            <h3 className="text-2xl font-bold text-green-400 mb-2">ShopNow</h3>
                            <p className="text-gray-300 text-sm leading-relaxed">
                                Your favorite online supermarket delivering fresh groceries, medicines, and daily essentials
                                right to your doorstep with lightning-fast delivery.
                            </p>
                        </div>

                        {/* Contact Info */}
                        <div className="space-y-3 mb-6">
                            <div className="flex items-center space-x-3 text-sm text-gray-300">
                                <LocationOnIcon className="text-green-400" />
                                <span>Delhi NCR, India</span>
                            </div>
                            <div className="flex items-center space-x-3 text-sm text-gray-300">
                                <PhoneIcon className="text-green-400" />
                                <span>+91 1800-XXX-XXXX</span>
                            </div>
                            <div className="flex items-center space-x-3 text-sm text-gray-300">
                                <EmailIcon className="text-green-400" />
                                <span>support@shopnow.com</span>
                            </div>
                        </div>

                        {/* App Download */}
                        <div>
                            <h4 className="font-semibold mb-3">Download Our App</h4>
                            <div className="flex space-x-3">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="bg-black text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors duration-200"
                                >
                                    <div className="flex items-center space-x-2">
                                        <span>📱</span>
                                        <span>Google Play</span>
                                    </div>
                                </motion.button>
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="bg-black text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors duration-200"
                                >
                                    <div className="flex items-center space-x-2">
                                        <span>🍎</span>
                                        <span>App Store</span>
                                    </div>
                                </motion.button>
                            </div>
                        </div>
                    </motion.div>

                    {/* Footer Links */}
                    {footerSections.map((section, index) => (
                        <motion.div
                            key={section.title}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                        >
                            <h4 className="font-semibold text-white mb-4">{section.title}</h4>
                            <ul className="space-y-2">
                                {section.links.map((link, linkIndex) => (
                                    <li key={linkIndex}>
                                        <a
                                            href={link.href}
                                            className="text-gray-300 hover:text-green-400 text-sm transition-colors duration-200"
                                        >
                                            {link.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Newsletter Section */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-gray-800 py-8"
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h3 className="text-xl font-semibold text-white mb-2">Stay Updated</h3>
                        <p className="text-gray-300 mb-6">Subscribe to get special offers and updates</p>
                        <div className="max-w-md mx-auto flex">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="flex-1 px-4 py-2 rounded-l-lg border-0 focus:outline-none focus:ring-2 focus:ring-green-500 text-gray-900"
                            />
                            <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-r-lg font-medium transition-colors duration-200">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* Bottom Section */}
            <div className="bg-gray-950 py-6">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">

                        {/* Copyright */}
                        <div className="text-center md:text-left">
                            <p className="text-gray-400 text-sm">
                                © {currentYear} ShopNow Commerce Private Limited. All rights reserved.
                            </p>
                            <p className="text-gray-500 text-xs mt-1">
                                "ShopNow" is owned & managed by "ShopNow Commerce Private Limited"
                            </p>
                        </div>

                        {/* Social Links */}
                        <div className="flex items-center space-x-4">
                            <span className="text-gray-400 text-sm">Follow us:</span>
                            <div className="flex space-x-3">
                                {socialLinks.map((social, index) => (
                                    <motion.a
                                        key={index}
                                        href={social.href}
                                        aria-label={social.label}
                                        whileHover={{ scale: 1.1, y: -2 }}
                                        whileTap={{ scale: 0.9 }}
                                        className="text-gray-400 hover:text-green-400 transition-colors duration-200"
                                    >
                                        {social.icon}
                                    </motion.a>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Disclaimer */}
                    <div className="mt-6 pt-6 border-t border-gray-800">
                        <p className="text-xs text-gray-500 text-center leading-relaxed">
                            "ShopNow" is owned & managed by "ShopNow Commerce Private Limited" and is not related, linked or interconnected
                            in whatsoever manner or nature, to "ShopNow.COM" which is a real estate services business operated by
                            "Redstone Consultancy Services Private Limited".
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}