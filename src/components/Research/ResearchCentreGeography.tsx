import React from 'react';
import { Globe, Users, BookOpen, Award, ArrowRight } from 'lucide-react';

export default function ResearchCentreGeography() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-[#1B5E20] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-serif mb-4">Research Centre in Geography</h1>
          <p className="text-lg opacity-90">
            Exploring geographical patterns and environmental changes
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-xl shadow-sm p-8">
            <h2 className="text-2xl font-serif text-gray-900 mb-6 flex items-center">
              <Globe className="h-6 w-6 text-[#1B5E20] mr-2" />
              Research Areas
            </h2>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start">
                <ArrowRight className="h-5 w-5 text-[#1B5E20] mr-2 mt-1 flex-shrink-0" />
                Climate Change and Adaptation
              </li>
              <li className="flex items-start">
                <ArrowRight className="h-5 w-5 text-[#1B5E20] mr-2 mt-1 flex-shrink-0" />
                Urban and Rural Development
              </li>
              <li className="flex items-start">
                <ArrowRight className="h-5 w-5 text-[#1B5E20] mr-2 mt-1 flex-shrink-0" />
                Geographic Information Systems (GIS)
              </li>
              <li className="flex items-start">
                <ArrowRight className="h-5 w-5 text-[#1B5E20] mr-2 mt-1 flex-shrink-0" />
                Natural Resource Management
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-8">
            <h2 className="text-2xl font-serif text-gray-900 mb-6 flex items-center">
              <Users className="h-6 w-6 text-[#1B5E20] mr-2" />
              Research Team
            </h2>
            <div className="space-y-4">
              <div className="border-b border-gray-200 pb-4">
                <h3 className="font-medium text-gray-900">Dr. Anjali Sharma</h3>
                <p className="text-gray-600">Head of Research Centre</p>
              </div>
              <div className="border-b border-gray-200 pb-4">
                <h3 className="font-medium text-gray-900">Dr. Vikram Rao</h3>
                <p className="text-gray-600">Senior Research Fellow</p>
              </div>
              <div className="border-b border-gray-200 pb-4">
                <h3 className="font-medium text-gray-900">Dr. Pooja Mehta</h3>
                <p className="text-gray-600">Research Associate</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl shadow-sm p-8">
            <h2 className="text-2xl font-serif text-gray-900 mb-6 flex items-center">
              <BookOpen className="h-6 w-6 text-[#1B5E20] mr-2" />
              Publications
            </h2>
            <div className="space-y-4 text-gray-600">
              <p>Our research centre has published in leading geography journals including:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Journal of Geographic Research</li>
                <li>Urban and Rural Studies Review</li>
                <li>Environmental Geography Journal</li>
                <li>GIS and Remote Sensing Advances</li>
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-8">
            <h2 className="text-2xl font-serif text-gray-900 mb-6 flex items-center">
              <Award className="h-6 w-6 text-[#1B5E20] mr-2" />
              Achievements
            </h2>
            <div className="space-y-4 text-gray-600">
              <div className="border-l-4 border-[#1B5E20] pl-4 mb-4">
                <h3 className="font-medium text-gray-900">Excellence in Geographic Research 2023</h3>
                <p>For contributions in GIS and Climate Adaptation</p>
              </div>
              <div className="border-l-4 border-[#1B5E20] pl-4 mb-4">
                <h3 className="font-medium text-gray-900">Sustainable Development Award</h3>
                <p>For research influencing environmental policies</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
