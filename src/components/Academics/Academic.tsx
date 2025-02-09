import React from 'react';

const Academic = () => {
  return (
    <div className="pt-16">
      <div className="container mt-6 px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-[#9E1B32]">Academic</h2>
        <div className="w-full max-w-4xl mx-auto">
          <iframe
            title="Academic Policy"
            src="https://pdearmacs.edu.in/PolicyProcedure/29_Preamble.pdf"
            className="w-full h-[600px] border shadow-lg rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Academic;