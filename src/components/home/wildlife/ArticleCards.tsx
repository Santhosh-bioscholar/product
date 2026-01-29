"use client";

import { motion } from "framer-motion";

interface Article {
    image: string;
    title: string;
    category: string;
}

const articles: Article[] = [
    {
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=120&fit=crop",
        title: "MAGNIFICENT CREATURES ROAMING ACROSS THE WILD",
        category: "#AFRICA",
    },
    {
        image: "https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?w=200&h=120&fit=crop",
        title: "MAJESTIC MOVES IN MYSTERIOUS GLORIOUS OCEANS",
        category: "#OCEAN",
    },
    {
        image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=200&h=120&fit=crop",
        title: "RARE SPECIES HIDE INTO DARK SHADOWS",
        category: "#EXPEDITION",
    },
];

const ArticleCards = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8, duration: 0.6 }}
            className="absolute bottom-8 right-8 hidden lg:flex gap-4 z-20"
        >
            {articles.map((article, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 2 + index * 0.15, duration: 0.5 }}
                    whileHover={{ y: -5, transition: { duration: 0.2 } }}
                    className="group cursor-pointer flex gap-3 bg-black/40 backdrop-blur-md p-3 rounded-sm border border-white/10 hover:border-yellow-500/30 transition-all duration-300 w-64"
                >
                    <div className="w-16 h-12 overflow-hidden rounded-sm flex-shrink-0">
                        <img
                            src={article.image}
                            alt={article.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                    </div>
                    <div className="flex flex-col justify-between">
                        <h4 className="text-[10px] font-sans font-medium leading-tight text-white/80 group-hover:text-white transition-colors duration-300">
                            {article.title}
                        </h4>
                        <span className="text-[9px] font-sans text-yellow-500/70">{article.category}</span>
                    </div>
                </motion.div>
            ))}
        </motion.div>
    );
};

export default ArticleCards;
