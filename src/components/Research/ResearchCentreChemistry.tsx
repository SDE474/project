import React from 'react';
import { FlaskRound as Flask, Users, BookOpen, Award, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ResearchCentreChemistry() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-[#9E1B32] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-serif mb-4">Research Centre in Chemistry</h1>
          <p className="text-lg opacity-90">
            Advancing chemical sciences through innovative research
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Research Areas */}
          <Link to="/research/areas" className="group">
            <div className="bg-white rounded-xl shadow-sm p-8 transition-all duration-300 ease-in-out hover:shadow-md hover:scale-105">
              <h2 className="text-2xl font-serif text-gray-900 mb-6 flex items-center">
                <Flask className="h-6 w-6 text-[#9E1B32] mr-2" />
                Research Areas
              </h2>
              <ul className="space-y-3 text-gray-600">
                {['Organic Synthesis and Medicinal Chemistry', 'Materials Chemistry and Nanotechnology', 'Environmental and Green Chemistry', 'Analytical and Physical Chemistry'].map((item, index) => (
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
              <div className="space-y-4">
                {[
                  { name: 'Dr. Suresh Verma', role: 'Head of Research Centre' },
                  { name: 'Dr. Meera Singh', role: 'Senior Research Scientist' },
                  { name: 'Dr. Rahul Desai', role: 'Research Associate' }
                ].map((member, index) => (
                  <div key={index} className="border-b border-gray-200 pb-4">
                    <h3 className="font-medium text-gray-900">{member.name}</h3>
                    <p className="text-gray-600">{member.role}</p>
                  </div>
                ))}
              </div>
            </div>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Publications */}
          <Link to="/research/ResearchPublicationsCommerce/chemisty" className="group">
            <div className="bg-white rounded-xl shadow-sm p-8 transition-all duration-300 ease-in-out hover:shadow-md hover:scale-105">
              <h2 className="text-2xl font-serif text-gray-900 mb-6 flex items-center">
                <BookOpen className="h-6 w-6 text-[#9E1B32] mr-2" />
                Publications
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>Our research centre has published in leading chemistry journals including:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  {['Journal of Chemical Research', 'Chemical Science Review', 'International Journal of Chemistry', 'Applied Chemistry Letters'].map((journal, index) => (
                    <li key={index}>{journal}</li>
                  ))}
                </ul>
              </div>
            </div>
          </Link>

          {/* Achievements */}
          <Link to="/research/achievements" className="group">
            <div className="bg-white rounded-xl shadow-sm p-8 transition-all duration-300 ease-in-out hover:shadow-md hover:scale-105">
              <h2 className="text-2xl font-serif text-gray-900 mb-6 flex items-center">
                <Award className="h-6 w-6 text-[#9E1B32] mr-2" />
                Achievements
              </h2>
              <div className="space-y-4 text-gray-600">
                {[
                  { title: 'Excellence in Research 2023', description: 'Awarded by the Chemical Research Society of India' },
                  { title: 'Innovation Award', description: 'For breakthrough in green synthesis methods' }
                ].map((achievement, index) => (
                  <div key={index} className="border-l-4 border-[#9E1B32] pl-4 mb-4">
                    <h3 className="font-medium text-gray-900">{achievement.title}</h3>
                    <p className="text-gray-700">{achievement.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
