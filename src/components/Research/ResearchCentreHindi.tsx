import React from 'react';
import { BookOpen, Users, Award, ArrowRight } from 'lucide-react';

export default function ResearchCentreHindi() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-[#9E1B32] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-serif mb-4">हिंदी अनुसंधान केंद्र</h1>
          <p className="text-lg opacity-90">
            हिंदी भाषा, साहित्य और संस्कृति के अनुसंधान में अग्रणी
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-xl shadow-sm p-8">
            <h2 className="text-2xl font-serif text-gray-900 mb-6 flex items-center">
              <BookOpen className="h-6 w-6 text-[#9E1B32] mr-2" />
              शोध क्षेत्र
            </h2>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start">
                <ArrowRight className="h-5 w-5 text-[#9E1B32] mr-2 mt-1 flex-shrink-0" />
                आधुनिक हिंदी साहित्य
              </li>
              <li className="flex items-start">
                <ArrowRight className="h-5 w-5 text-[#9E1B32] mr-2 mt-1 flex-shrink-0" />
                भारतीय काव्यशास्त्र
              </li>
              <li className="flex items-start">
                <ArrowRight className="h-5 w-5 text-[#9E1B32] mr-2 mt-1 flex-shrink-0" />
                हिंदी भाषा का विकास
              </li>
              <li className="flex items-start">
                <ArrowRight className="h-5 w-5 text-[#9E1B32] mr-2 mt-1 flex-shrink-0" />
                लोक साहित्य एवं संस्कृति
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-8">
            <h2 className="text-2xl font-serif text-gray-900 mb-6 flex items-center">
              <Users className="h-6 w-6 text-[#9E1B32] mr-2" />
              अनुसंधान टीम
            </h2>
            <div className="space-y-4">
              <div className="border-b border-gray-200 pb-4">
                <h3 className="font-medium text-gray-900">डॉ. सीमा वर्मा</h3>
                <p className="text-gray-600">अनुसंधान केंद्र प्रमुख</p>
              </div>
              <div className="border-b border-gray-200 pb-4">
                <h3 className="font-medium text-gray-900">डॉ. अमित शुक्ला</h3>
                <p className="text-gray-600">वरिष्ठ शोधकर्ता</p>
              </div>
              <div className="border-b border-gray-200 pb-4">
                <h3 className="font-medium text-gray-900">डॉ. निधि तिवारी</h3>
                <p className="text-gray-600">शोध सहायक</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl shadow-sm p-8">
            <h2 className="text-2xl font-serif text-gray-900 mb-6 flex items-center">
              <BookOpen className="h-6 w-6 text-[#9E1B32] mr-2" />
              प्रकाशन
            </h2>
            <div className="space-y-4 text-gray-600">
              <p>हमारे अनुसंधान केंद्र ने प्रमुख हिंदी शोध पत्रिकाओं में प्रकाशित किया है:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>हिंदी साहित्य समीक्षा</li>
                <li>भारतीय भाषा अनुसंधान पत्रिका</li>
                <li>लोक साहित्य और संस्कृति</li>
                <li>आधुनिक हिंदी अध्ययन</li>
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-8">
            <h2 className="text-2xl font-serif text-gray-900 mb-6 flex items-center">
              <Award className="h-6 w-6 text-[#9E1B32] mr-2" />
              उपलब्धियाँ
            </h2>
            <div className="space-y-4 text-gray-600">
              <div className="border-l-4 border-[#9E1B32] pl-4 mb-4">
                <h3 className="font-medium text-gray-900">श्रेष्ठ शोध पुरस्कार 2023</h3>
                <p>हिंदी साहित्य में विशेष योगदान के लिए</p>
              </div>
              <div className="border-l-4 border-[#9E1B32] pl-4 mb-4">
                <h3 className="font-medium text-gray-900">संस्कृति संवर्धन पुरस्कार</h3>
                <p>लोक साहित्य एवं भाषा अनुसंधान में उत्कृष्टता</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
