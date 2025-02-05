import React from 'react';
import { Cpu, Users, BookOpen, Award, ArrowRight } from 'lucide-react';

export default function ResearchCentreComputerScience() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-[#1E3A8A] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-serif mb-4">Research Centre in Computer Science</h1>
          <p className="text-lg opacity-90">
            Advancing technology and innovation through cutting-edge research
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-xl shadow-sm p-8">
            <h2 className="text-2xl font-serif text-gray-900 mb-6 flex items-center">
              <Cpu className="h-6 w-6 text-[#1E3A8A] mr-2" />
              Research Areas
            </h2>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start">
                <ArrowRight className="h-5 w-5 text-[#1E3A8A] mr-2 mt-1 flex-shrink-0" />
                Artificial Intelligence & Machine Learning
              </li>
              <li className="flex items-start">
                <ArrowRight className="h-5 w-5 text-[#1E3A8A] mr-2 mt-1 flex-shrink-0" />
                Cybersecurity and Cryptography
              </li>
              <li className="flex items-start">
                <ArrowRight className="h-5 w-5 text-[#1E3A8A] mr-2 mt-1 flex-shrink-0" />
                Quantum Computing
              </li>
              <li className="flex items-start">
                <ArrowRight className="h-5 w-5 text-[#1E3A8A] mr-2 mt-1 flex-shrink-0" />
                Human-Computer Interaction
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-8">
            <h2 className="text-2xl font-serif text-gray-900 mb-6 flex items-center">
              <Users className="h-6 w-6 text-[#1E3A8A] mr-2" />
              Research Team
            </h2>
            <div className="space-y-4">
              <div className="border-b border-gray-200 pb-4">
                <h3 className="font-medium text-gray-900">Dr. Anil Sharma</h3>
                <p className="text-gray-600">Head of Research Centre</p>
              </div>
              <div className="border-b border-gray-200 pb-4">
                <h3 className="font-medium text-gray-900">Dr. Priya Verma</h3>
                <p className="text-gray-600">Senior Research Scientist</p>
              </div>
              <div className="border-b border-gray-200 pb-4">
                <h3 className="font-medium text-gray-900">Dr. Rohit Khanna</h3>
                <p className="text-gray-600">Research Associate</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl shadow-sm p-8">
            <h2 className="text-2xl font-serif text-gray-900 mb-6 flex items-center">
              <BookOpen className="h-6 w-6 text-[#1E3A8A] mr-2" />
              Publications
            </h2>
            <div className="space-y-4 text-gray-600">
              <p>Our research centre has contributed to leading technology journals, including:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Journal of Artificial Intelligence Research</li>
                <li>Cybersecurity and Data Privacy Review</li>
                <li>Quantum Computing Advances</li>
                <li>Human-Computer Interaction Journal</li>
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-8">
            <h2 className="text-2xl font-serif text-gray-900 mb-6 flex items-center">
              <Award className="h-6 w-6 text-[#1E3A8A] mr-2" />
              Achievements
            </h2>
            <div className="space-y-4 text-gray-600">
              <div className="border-l-4 border-[#1E3A8A] pl-4 mb-4">
                <h3 className="font-medium text-gray-900">Best AI Research Award 2023</h3>
                <p>For groundbreaking contributions in machine learning</p>
              </div>
              <div className="border-l-4 border-[#1E3A8A] pl-4 mb-4">
                <h3 className="font-medium text-gray-900">Top Cybersecurity Innovation</h3>
                <p>For advancements in secure computing</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
