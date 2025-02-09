import React from "react";
import { motion } from "framer-motion";

const Mentor = () => {
  return (
    <motion.div
      className="pt-16"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl font-bold text-center mb-8 text-[#9E1B32]"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          Mentor
        </motion.h2>

        <motion.div
          className="w-full max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <iframe
            title="Mentor Policy"
            src="https://pdearmacs.edu.in/PolicyProcedure/18_Mentorwebsite.pdf"
            className="w-full h-[600px] border shadow-lg rounded-lg"
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Mentor;
