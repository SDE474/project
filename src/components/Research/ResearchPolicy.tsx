import React from 'react';
import { FileText, Download, ArrowRight } from 'lucide-react';

export default function ResearchPolicy() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-[#9E1B32] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-serif mb-4">Research Policy</h1>
          <p className="text-lg opacity-90">
            Guidelines and framework for research activities at PRMCAS
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-xl shadow-sm p-8">
          <div className="flex items-start space-x-6">
            <div className="bg-red-100 rounded-lg p-4">
              <FileText className="h-8 w-8 text-[#9E1B32]" />
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-serif text-gray-900 mb-4">Research Policy Document</h2>
              <p className="text-gray-600 mb-6">
                Our research policy outlines the guidelines, procedures, and ethical considerations for conducting research at PRMCAS. 
                It covers various aspects including research objectives, funding mechanisms, publication guidelines, and ethical standards.
              </p>
              <a 
                href="https://pdearmacs.edu.in/PolicyProcedure/22_ResearchPolicy.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-[#9E1B32] text-white px-6 py-3 rounded-lg hover:bg-[#7D1527] transition-colors"
              >
                <Download className="h-5 w-5" />
                <span>Download Research Policy</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}