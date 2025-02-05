import React from 'react';
import { BarChart3, Users, BookOpen, Award, ArrowRight } from 'lucide-react';

export default function ResearchCentreEconomics() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-[#9E1B32] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-serif mb-4">Research Centre in Economics</h1>
          <p className="text-lg opacity-90">
            Analyzing economic trends and fostering sustainable development
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-xl shadow-sm p-8">
            <h2 className="text-2xl font-serif text-gray-900 mb-6 flex items-center">
              <BarChart3 className="h-6 w-6 text-[#9E1B32] mr-2" />
              Research Areas
            </h2>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start">
                <ArrowRight className="h-5 w-5 text-[#9E1B32] mr-2 mt-1 flex-shrink-0" />
                Macroeconomic Policy Analysis
              </li>
              <li className="flex items-start">
                <ArrowRight className="h-5 w-5 text-[#9E1B32] mr-2 mt-1 flex-shrink-0" />
                Development Economics
              </li>
              <li className="flex items-start">
                <ArrowRight className="h-5 w-5 text-[#9E1B32] mr-2 mt-1 flex-shrink-0" />
                Labor Economics and Employment
              </li>
              <li className="flex items-start">
                <ArrowRight className="h-5 w-5 text-[#9E1B32] mr-2 mt-1 flex-shrink-0" />
                Environmental Economics
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
                <h3 className="font-medium text-gray-900">Dr. Sanjay Mehta</h3>
                <p className="text-gray-600">Head of Research Centre</p>
              </div>
              <div className="border-b border-gray-200 pb-4">
                <h3 className="font-medium text-gray-900">Dr. Neha Gupta</h3>
                <p className="text-gray-600">Senior Research Fellow</p>
              </div>
              <div className="border-b border-gray-200 pb-4">
                <h3 className="font-medium text-gray-900">Dr. Prakash Iyer</h3>
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
              <p>Our research centre has published in prestigious economics journals including:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Indian Journal of Economics</li>
                <li>Economic Policy Review</li>
                <li>Development Economics Quarterly</li>
                <li>Journal of Environmental Economics</li>
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
                <h3 className="font-medium text-gray-900">Outstanding Research Award 2023</h3>
                <p>For contributions in Development Economics</p>
              </div>
              <div className="border-l-4 border-[#9E1B32] pl-4 mb-4">
                <h3 className="font-medium text-gray-900">Policy Impact Award</h3>
                <p>For research influencing state economic policies</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}