// src/components/BlogCard.jsx
import { motion } from "framer-motion";

const BlogCard = ({ title, description, date, link }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="p-6 rounded-2xl shadow-md bg-gradient-to-br from-indigo-500/20 to-purple-500/20 backdrop-blur-sm border border-gray-700"
    >
      <p className="text-sm text-gray-400 mb-2">{date}</p>
      <h3 className="text-xl font-semibold text-white">{title}</h3>
      <p className="text-gray-300 mt-2 text-sm">{description}</p>

      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-block text-indigo-400 font-medium hover:underline"
      >
        Read More →
      </a>
    </motion.div>
  );
};

export default BlogCard;
