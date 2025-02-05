import React from 'react';

const ResearchPublications = () => {
  return (
    <div className="bg-gray-50 min-h-screen p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-blue-900 mb-8">Research Publications</h1>

        {/* Faculty Publications Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 border-b-2 border-blue-200 pb-2">
            Faculty Publications
          </h2>
          <div className="space-y-6">
            {/* Paste faculty publications here */}
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <p className="text-sm text-gray-600 mb-2">S. P. Rasale, et al. Spectral and thermal studies of Cd(II)... IJCPS Journal 2018</p>
              <div className="text-xs text-gray-500">Pages: 89-95 | ISSN: XXXX-XXXX</div>
            </div>
            {/* Add other faculty publications in similar format */}
          </div>
        </section>

        {/* Student Publications Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 border-b-2 border-blue-200 pb-2">
            Student Publications
          </h2>
          <div className="space-y-6">
            {/* Paste student publications here */}
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <p className="text-sm text-gray-600 mb-2">Sandeep Kanade, et al. Heterostructured Ti-doped ZnO/Ag metal... Desalination and Water Treatment 2017</p>
              <div className="text-xs text-gray-500">Vol. 71 | ISSN: 1944-3994</div>
            </div>
            {/* Add other student publications in similar format */}
          </div>
        </section>

        {/* Recent Publications Section */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 border-b-2 border-blue-200 pb-2">
            Recent Publications
          </h2>
          <div className="space-y-6">
            {/* Paste recent publications here */}
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <p className="text-sm text-gray-600 mb-2">Utilization of Naturally Occurring Pigment Lycopene... ES Food & Agroforestry 2023</p>
              <div className="text-xs text-gray-500">Vol. 6 | Pages: 27-34</div>
            </div>
            {/* Add other recent publications in similar format */}
          </div>
        </section>
      </div>
    </div>
  );
};

export default ResearchPublications;