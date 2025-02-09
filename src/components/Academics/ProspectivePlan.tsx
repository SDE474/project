import React from 'react';

const ProspectivePlan = () => {
  return (
    <div className="pt-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-[#9E1B32]">Prospective Plan</h2>
        <div className="w-full max-w-4xl mx-auto">
          <iframe
            title="Prospective Plan"
            src="https://pdearmacs.edu.in/PolicyProcedure/27_Institutional%20Development%20Plan.pdf"
            className="w-full h-[600px] border shadow-lg rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default ProspectivePlan;