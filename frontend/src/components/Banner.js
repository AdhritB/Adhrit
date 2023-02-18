import React from 'react'
import { motion } from "framer-motion";
function Banner() {
    return (
        <motion.div
            initial={{ opacity: 0, x: 0 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
                ease: "easeInOut",
                duration: 1,
                delay: 0.6,
            }}
        >
            <div class="marquee">
                <span class="text-xl font-bold">Brand</span>
            </div>
        </motion.div >
    )
}

export default Banner