import React from 'react';
import { LineChart, Users, BookOpen, Award, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ResearchCentreCommerce() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-[#9E1B32] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-serif mb-4">Research Centre in Commerce</h1>
          <p className="text-lg opacity-90">Advancing business research and economic development</p>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Research Areas */}
          <Link to="/research/areas" className="group">
            <div className="bg-white rounded-xl shadow-sm p-8 transition-all duration-300 ease-in-out hover:shadow-md hover:scale-105">
              <h2 className="text-2xl font-serif text-gray-900 mb-6 flex items-center">
                <LineChart className="h-6 w-6 text-[#9E1B32] mr-2" />
                Research Areas
              </h2>
              <ul className="space-y-3 text-gray-700 text-lg">
                {['Financial Markets and Investment Analysis', 'Marketing Research and Consumer Behavior', 'Business Strategy and Innovation', 'International Trade and Commerce'].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-[#9E1B32] mr-2 mt-1 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Link>

          {/* Research Team */}
          <Link to="/research/team" className="group">
            <div className="bg-white rounded-xl shadow-sm p-8 transition-all duration-300 ease-in-out hover:shadow-md hover:scale-105">
              <h2 className="text-2xl font-serif text-gray-900 mb-6 flex items-center">
                <Users className="h-6 w-6 text-[#9E1B32] mr-2" />
                Research Team
              </h2>
              {[
                { name: 'Dr. Anil Kapoor', role: 'Head of Research Centre' },
                { name: 'Dr. Smita Joshi', role: 'Senior Research Fellow' },
                { name: 'Dr. Ravi Kumar', role: 'Research Associate' }
              ].map((member, index) => (
                <div key={index} className="border-b border-gray-200 pb-4">
                  <h3 className="font-medium text-gray-900">{member.name}</h3>
                  <p className="text-gray-600">{member.role}</p>
                </div>
              ))}
            </div>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Publications */}
          <Link to="/research/ResearchPublicationsCommerce/commerce" className="group">
            <div className="bg-white rounded-xl shadow-sm p-8 transition-all duration-300 ease-in-out hover:shadow-md hover:scale-105">
              <h2 className="text-2xl font-serif text-gray-900 mb-6 flex items-center">
                <BookOpen className="h-6 w-6 text-[#9E1B32] mr-2" />
                Publications
              </h2>
              <p className="text-lg text-gray-700">Our research centre has published in leading commerce journals including:</p>
              <ul className="list-disc list-inside space-y-2 ml-4 text-gray-700 text-lg">
                {['Journal of Business Research', 'International Commerce Review', 'Business Strategy Journal', 'Marketing Research Quarterly'].map((journal, index) => (
                  <li key={index}>{journal}</li>
                ))}
              </ul>
            </div>
          </Link>

          {/* Achievements */}
          <Link to="/research/achievements" className="group">
            <div className="bg-white rounded-xl shadow-sm p-8 transition-all duration-300 ease-in-out hover:shadow-md hover:scale-105">
              <h2 className="text-2xl font-serif text-gray-900 mb-6 flex items-center">
                <Award className="h-6 w-6 text-[#9E1B32] mr-2" />
                Achievements
              </h2>
              {[
                { title: 'Best Research Paper Award 2023', description: 'For contributions in Marketing Research' },
                { title: 'Excellence in Commerce Research', description: 'Awarded by the Indian Commerce Association' }
              ].map((achievement, index) => (
                <div key={index} className="border-l-4 border-[#9E1B32] pl-4 mb-4">
                  <h3 className="font-medium text-gray-900">{achievement.title}</h3>
                  <p className="text-gray-700">{achievement.description}</p>
                </div>
              ))}
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
