import React from 'react';
import { FlaskRound as Flask, Users, BookOpen, Award, ArrowRight } from 'lucide-react';

export default function ResearchCentreChemistry() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-[#9E1B32] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-serif mb-4">Research Centre in Chemistry</h1>
          <p className="text-lg opacity-90">
            Advancing chemical sciences through innovative research
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-xl shadow-sm p-8">
            <h2 className="text-2xl font-serif text-gray-900 mb-6 flex items-center">
              <Flask className="h-6 w-6 text-[#9E1B32] mr-2" />
              Research Areas
            </h2>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start">
                <ArrowRight className="h-5 w-5 text-[#9E1B32] mr-2 mt-1 flex-shrink-0" />
                Organic Synthesis and Medicinal Chemistry
              </li>
              <li className="flex items-start">
                <ArrowRight className="h-5 w-5 text-[#9E1B32] mr-2 mt-1 flex-shrink-0" />
                Materials Chemistry and Nanotechnology
              </li>
              <li className="flex items-start">
                <ArrowRight className="h-5 w-5 text-[#9E1B32] mr-2 mt-1 flex-shrink-0" />
                Environmental and Green Chemistry
              </li>
              <li className="flex items-start">
                <ArrowRight className="h-5 w-5 text-[#9E1B32] mr-2 mt-1 flex-shrink-0" />
                Analytical and Physical Chemistry
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-8">
            <h2 className="text-2xl font-serif text-gray-900 mb-6 flex items-center">
              <Users className="h-6 w-6 text-[#9E1B32] mr-2" />
              Research Team
            </h2>
            <div className="space-y-4">
              <div className="border-b border-gray-200 pb-4">
                <h3 className="font-medium text-gray-900">Dr. Suresh Verma</h3>
                <p className="text-gray-600">Head of Research Centre</p>
              </div>
              <div className="border-b border-gray-200 pb-4">
                <h3 className="font-medium text-gray-900">Dr. Meera Singh</h3>
                <p className="text-gray-600">Senior Research Scientist</p>
              </div>
              <div className="border-b border-gray-200 pb-4">
                <h3 className="font-medium text-gray-900">Dr. Rahul Desai</h3>
                <p className="text-gray-600">Research Associate</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl shadow-sm p-8">
            <h2 className="text-2xl font-serif text-gray-900 mb-6 flex items-center">
              <BookOpen className="h-6 w-6 text-[#9E1B32] mr-2" />
              Publications
            </h2>
            <div className="space-y-4 text-gray-600">
              <p>Our research centre has published in leading chemistry journals including:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Journal of Chemical Research</li>
                <li>Chemical Science Review</li>
                <li>International Journal of Chemistry</li>
                <li>Applied Chemistry Letters</li>
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-8">
            <h2 className="text-2xl font-serif text-gray-900 mb-6 flex items-center">
              <Award className="h-6 w-6 text-[#9E1B32] mr-2" />
              Achievements
            </h2>
            <div className="space-y-4 text-gray-600">
              <div className="border-l-4 border-[#9E1B32] pl-4 mb-4">
                <h3 className="font-medium text-gray-900">Excellence in Research 2023</h3>
                <p>Awarded by the Chemical Research Society of India</p>
              </div>
              <div className="border-l-4 border-[#9E1B32] pl-4 mb-4">
                <h3 className="font-medium text-gray-900">Innovation Award</h3>
                <p>For breakthrough in green synthesis methods</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}