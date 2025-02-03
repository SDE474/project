import React from 'react';
import { ArrowRight, BookOpen, Award, Globe } from 'lucide-react';

export default function Hero() {
  return (
    <>

      {/* Hero Content - Now at the top */}
      <div className="bg-[#9E1B32] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-serif mb-6 tracking-wide">
              Prof. Ramkrishna More College
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-xl font-light">
              Empowering minds, shaping futures through excellence in education since 1994
            </p>
            <div className="mt-10 flex justify-center gap-x-6">
              <a
                href="#apply"
                className="bg-white text-[#9E1B32] px-8 py-4 text-lg font-medium hover:bg-gray-100 transition-colors rounded"
              >
                Apply Now
              </a>
              <a
                href="#tour"
                className="border-2 border-white text-white px-8 py-4 text-lg font-medium hover:bg-white/10 transition-colors rounded flex items-center"
              >
                Virtual Tour
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
{/* Navigation Links - Now after hero content */}
<div className="bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="hidden lg:flex justify-center py-4">
            <div className="flex space-x-8">
              <NavLink href="#" text="About" />
              <NavLink href="#" text="Academics" />
              <NavLink href="#" text="Department" />
              <NavLink href="#" text="Campus Life" />
              <NavLink href="#" text="Athletics" />
              <NavLink href="#" text="Give" />
            </div>
          </nav>
        </div>
      </div>

      {/* Video Section - Moved below hero content */}
      <div className="relative h-screen min-h-[600px] max-h-[800px]">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="https://pdearmacs.edu.in/College+video+intro+6.0+FINAL.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Welcome Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-serif text-gray-900 mb-6">Welcome to PRMCAS</h2>
            <p className="text-lg text-gray-600">
              Founded in 1994, Prof. Ramkrishna More College has been a beacon of academic excellence in Pune. 
              Our institution is committed to providing quality education that nurtures intellectual growth, 
              fosters creativity, and builds character. With state-of-the-art facilities and dedicated faculty, 
              we prepare students for success in their chosen fields.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-20">
            <StatCard number="28+" label="Years of Excellence" />
            <StatCard number="15,000+" label="Students" />
            <StatCard number="200+" label="Faculty Members" />
            <StatCard number="95%" label="Placement Rate" />
          </div>
        </div>
      </section>

      {/* Programs & Courses */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif text-gray-900 mb-12 text-center">Programs & Courses</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ProgramCard
              icon={<BookOpen className="h-8 w-8" />}
              title="Arts"
              description="Explore our diverse range of undergraduate and postgraduate programs in humanities and social sciences."
            />
            <ProgramCard
              icon={<Award className="h-8 w-8" />}
              title="Commerce"
              description="Comprehensive business education programs preparing students for successful careers in commerce and finance."
            />
            <ProgramCard
              icon={<Globe className="h-8 w-8" />}
              title="Science"
              description="Cutting-edge programs in various scientific disciplines with modern laboratory facilities."
            />
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif text-gray-900 mb-12 text-center">Why Choose PRMCAS?</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-gray-50 rounded-xl p-8">
              <h3 className="text-2xl font-serif text-[#9E1B32] mb-6">Academic Excellence</h3>
              <ul className="space-y-4">
                <Feature text="NAAC A+ Accredited Institution" />
                <Feature text="State-of-the-art Infrastructure" />
                <Feature text="Industry-aligned Curriculum" />
                <Feature text="Experienced Faculty Members" />
              </ul>
            </div>
            <div className="bg-gray-50 rounded-xl p-8">
              <h3 className="text-2xl font-serif text-[#9E1B32] mb-6">Student Success</h3>
              <ul className="space-y-4">
                <Feature text="High Placement Rates" />
                <Feature text="Research Opportunities" />
                <Feature text="Industry Partnerships" />
                <Feature text="Global Alumni Network" />
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#9E1B32]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-serif text-white mb-6">Begin Your Journey with Us</h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            Take the first step towards a bright future. Apply now or schedule a campus tour to learn more about our programs.
          </p>
          <div className="flex justify-center gap-x-6">
            <a
              href="#apply"
              className="bg-white text-[#9E1B32] px-8 py-4 text-lg font-medium hover:bg-gray-100 transition-colors rounded"
            >
              Apply Now
            </a>
            <a
              href="#tour"
              className="border-2 border-white text-white px-8 py-4 text-lg font-medium hover:bg-white/10 transition-colors rounded"
            >
              Schedule a Tour
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

function StatCard({ number, label }: { number: string; label: string }) {
  return (
    <div className="text-center">
      <div className="text-4xl font-bold text-[#9E1B32] mb-2">{number}</div>
      <div className="text-gray-600">{label}</div>
    </div>
  );
}

function ProgramCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
      <div className="text-[#9E1B32] mb-4 flex justify-center">{icon}</div>
      <h3 className="text-xl font-serif text-gray-900 mb-3 text-center">{title}</h3>
      <p className="text-gray-600 text-center">{description}</p>
    </div>
  );
}

function Feature({ text }: { text: string }) {
  return (
    <li className="flex items-start">
      <ArrowRight className="h-5 w-5 text-[#9E1B32] mr-2 mt-1 flex-shrink-0" />
      <span className="text-gray-700">{text}</span>
    </li>
  );
}