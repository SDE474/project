import React from 'react';
import { Atom, Users, BookOpen, Award, ArrowRight } from 'lucide-react';

export default function ResearchCentrePhysics() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-[#1E3A8A] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-serif mb-4">भौतिकी अनुसंधान केंद्र</h1>
          <p className="text-lg opacity-90">
            ब्रह्मांड की गहरी समझ विकसित करने और वैज्ञानिक खोजों को प्रेरित करने हेतु समर्पित
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-xl shadow-sm p-8">
            <h2 className="text-2xl font-serif text-gray-900 mb-6 flex items-center">
              <Atom className="h-6 w-6 text-[#1E3A8A] mr-2" />
              अनुसंधान क्षेत्र
            </h2>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start">
                <ArrowRight className="h-5 w-5 text-[#1E3A8A] mr-2 mt-1 flex-shrink-0" />
                क्वांटम भौतिकी
              </li>
              <li className="flex items-start">
                <ArrowRight className="h-5 w-5 text-[#1E3A8A] mr-2 mt-1 flex-shrink-0" />
                सापेक्षता सिद्धांत
              </li>
              <li className="flex items-start">
                <ArrowRight className="h-5 w-5 text-[#1E3A8A] mr-2 mt-1 flex-shrink-0" />
                प्लाज्मा भौतिकी
              </li>
              <li className="flex items-start">
                <ArrowRight className="h-5 w-5 text-[#1E3A8A] mr-2 mt-1 flex-shrink-0" />
                ब्रह्मांड विज्ञान और खगोल भौतिकी
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-8">
            <h2 className="text-2xl font-serif text-gray-900 mb-6 flex items-center">
              <Users className="h-6 w-6 text-[#1E3A8A] mr-2" />
              अनुसंधान दल
            </h2>
            <div className="space-y-4">
              <div className="border-b border-gray-200 pb-4">
                <h3 className="font-medium text-gray-900">डॉ. अमित वर्मा</h3>
                <p className="text-gray-600">अनुसंधान केंद्र प्रमुख</p>
              </div>
              <div className="border-b border-gray-200 pb-4">
                <h3 className="font-medium text-gray-900">डॉ. सीमा सिंह</h3>
                <p className="text-gray-600">वरिष्ठ अनुसंधान वैज्ञानिक</p>
              </div>
              <div className="border-b border-gray-200 pb-4">
                <h3 className="font-medium text-gray-900">डॉ. राजेश यादव</h3>
                <p className="text-gray-600">अनुसंधान सहयोगी</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl shadow-sm p-8">
            <h2 className="text-2xl font-serif text-gray-900 mb-6 flex items-center">
              <BookOpen className="h-6 w-6 text-[#1E3A8A] mr-2" />
              प्रकाशन
            </h2>
            <div className="space-y-4 text-gray-600">
              <p>हमारे अनुसंधान केंद्र ने प्रमुख भौतिकी पत्रिकाओं में प्रकाशित किया है:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>भारतीय जर्नल ऑफ फिजिक्स</li>
                <li>एडवांस्ड क्वांटम स्टडीज</li>
                <li>रिलेटिविटी एंड ब्रह्मांड विज्ञान</li>
                <li>खगोल भौतिकी रिव्यू</li>
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-8">
            <h2 className="text-2xl font-serif text-gray-900 mb-6 flex items-center">
              <Award className="h-6 w-6 text-[#1E3A8A] mr-2" />
              उपलब्धियां
            </h2>
            <div className="space-y-4 text-gray-600">
              <div className="border-l-4 border-[#1E3A8A] pl-4 mb-4">
                <h3 className="font-medium text-gray-900">श्रेष्ठ अनुसंधान पुरस्कार 2023</h3>
                <p>क्वांटम मैकेनिक्स में योगदान के लिए</p>
              </div>
              <div className="border-l-4 border-[#1E3A8A] pl-4 mb-4">
                <h3 className="font-medium text-gray-900">वैज्ञानिक नवाचार सम्मान</h3>
                <p>नए खोजे गए भौतिकी मॉडल के लिए</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
