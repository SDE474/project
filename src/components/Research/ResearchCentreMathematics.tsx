import React from 'react';
import { BarChart3, Users, BookOpen, Award, ArrowRight } from 'lucide-react';

export default function ResearchCentreMathematics() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-[#1B3A9E] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-serif mb-4">Research Centre in Mathematics</h1>
          <p className="text-lg opacity-90">
            Advancing mathematical sciences and problem-solving methodologies
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-xl shadow-sm p-8">
            <h2 className="text-2xl font-serif text-gray-900 mb-6 flex items-center">
              <BarChart3 className="h-6 w-6 text-[#1B3A9E] mr-2" />
              Research Areas
            </h2>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start">
                <ArrowRight className="h-5 w-5 text-[#1B3A9E] mr-2 mt-1 flex-shrink-0" />
                Algebra and Number Theory
              </li>
              <li className="flex items-start">
                <ArrowRight className="h-5 w-5 text-[#1B3A9E] mr-2 mt-1 flex-shrink-0" />
                Mathematical Modeling and Simulation
              </li>
              <li className="flex items-start">
                <ArrowRight className="h-5 w-5 text-[#1B3A9E] mr-2 mt-1 flex-shrink-0" />
                Computational Mathematics
              </li>
              <li className="flex items-start">
                <ArrowRight className="h-5 w-5 text-[#1B3A9E] mr-2 mt-1 flex-shrink-0" />
                Applied Statistics and Probability
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-8">
            <h2 className="text-2xl font-serif text-gray-900 mb-6 flex items-center">
              <Users className="h-6 w-6 text-[#1B3A9E] mr-2" />
              Research Team
            </h2>
            <div className="space-y-4">
              <div className="border-b border-gray-200 pb-4">
                <h3 className="font-medium text-gray-900">Dr. Anil Verma</h3>
                <p className="text-gray-600">Head of Research Centre</p>
              </div>
              <div className="border-b border-gray-200 pb-4">
                <h3 className="font-medium text-gray-900">Dr. Radhika Shah</h3>
                <p className="text-gray-600">Senior Research Fellow</p>
              </div>
              <div className="border-b border-gray-200 pb-4">
                <h3 className="font-medium text-gray-900">Dr. Rajesh Nair</h3>
                <p className="text-gray-600">Research Associate</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl shadow-sm p-8">
            <h2 className="text-2xl font-serif text-gray-900 mb-6 flex items-center">
              <BookOpen className="h-6 w-6 text-[#1B3A9E] mr-2" />
              Publications
            </h2>
            <div className="space-y-4 text-gray-600">
              <p>Our research centre has published in renowned mathematics journals including:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Journal of Pure and Applied Algebra</li>
                <li>Mathematical Modelling Review</li>
                <li>Computational Mathematics Journal</li>
                <li>International Journal of Probability and Statistics</li>
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-8">
            <h2 className="text-2xl font-serif text-gray-900 mb-6 flex items-center">
              <Award className="h-6 w-6 text-[#1B3A9E] mr-2" />
              Achievements
            </h2>
            <div className="space-y-4 text-gray-600">
              <div className="border-l-4 border-[#1B3A9E] pl-4 mb-4">
                <h3 className="font-medium text-gray-900">Best Research Paper Award 2023</h3>
                <p>For contributions in Computational Mathematics</p>
              </div>
              <div className="border-l-4 border-[#1B3A9E] pl-4 mb-4">
                <h3 className="font-medium text-gray-900">Mathematical Excellence Award</h3>
                <p>For groundbreaking work in Algebra and Number Theory</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
