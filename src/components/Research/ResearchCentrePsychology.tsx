import React from 'react';
import { Brain, Users, BookOpen, Award, ArrowRight } from 'lucide-react';

export default function ResearchCentrePsychology() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-[#9E1B32] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-serif mb-4">Research Centre in Psychology</h1>
          <p className="text-lg opacity-90">
            Advancing psychological research for mental well-being and cognitive development
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-xl shadow-sm p-8">
            <h2 className="text-2xl font-serif text-gray-900 mb-6 flex items-center">
              <Brain className="h-6 w-6 text-[#9E1B32] mr-2" />
              Research Areas
            </h2>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start">
                <ArrowRight className="h-5 w-5 text-[#9E1B32] mr-2 mt-1 flex-shrink-0" />
                Cognitive Psychology
              </li>
              <li className="flex items-start">
                <ArrowRight className="h-5 w-5 text-[#9E1B32] mr-2 mt-1 flex-shrink-0" />
                Clinical and Counseling Psychology
              </li>
              <li className="flex items-start">
                <ArrowRight className="h-5 w-5 text-[#9E1B32] mr-2 mt-1 flex-shrink-0" />
                Behavioral Neuroscience
              </li>
              <li className="flex items-start">
                <ArrowRight className="h-5 w-5 text-[#9E1B32] mr-2 mt-1 flex-shrink-0" />
                Social and Developmental Psychology
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
                <h3 className="font-medium text-gray-900">Dr. Aditi Sharma</h3>
                <p className="text-gray-600">Head of Research Centre</p>
              </div>
              <div className="border-b border-gray-200 pb-4">
                <h3 className="font-medium text-gray-900">Dr. Vikram Rao</h3>
                <p className="text-gray-600">Senior Research Fellow</p>
              </div>
              <div className="border-b border-gray-200 pb-4">
                <h3 className="font-medium text-gray-900">Dr. Rina Verma</h3>
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
              <p>Our research centre has published in prestigious psychology journals including:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Journal of Cognitive Science</li>
                <li>Clinical Psychology Review</li>
                <li>Behavioral Neuroscience Journal</li>
                <li>Developmental Psychology Reports</li>
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
                <h3 className="font-medium text-gray-900">Best Cognitive Research Award 2023</h3>
                <p>For outstanding contributions in cognitive psychology</p>
              </div>
              <div className="border-l-4 border-[#9E1B32] pl-4 mb-4">
                <h3 className="font-medium text-gray-900">Mental Health Impact Award</h3>
                <p>For pioneering work in clinical and counseling psychology</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
