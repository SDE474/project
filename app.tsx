import React from 'react';
import { BookOpen, Building2, FlaskRound as Flask, GraduationCap, Briefcase } from 'lucide-react';

const departments = [
  {
    id: 1,
    title: 'Humanities and Arts',
    icon: BookOpen,
    description: 'Explore literature, philosophy, fine arts, and cultural studies that shape our understanding of human experience.',
    image: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&q=80&w=1024',
  },
  {
    id: 2,
    title: 'Commerce and Management',
    icon: Building2,
    description: 'Develop business acumen and management skills for success in the corporate world.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1024',
  },
  {
    id: 3,
    title: 'Science and Technology',
    icon: Flask,
    description: 'Discover innovations in science, engineering, and technology that shape our future.',
    image: 'https://images.unsplash.com/photo-1507413245164-6160d8298b31?auto=format&fit=crop&q=80&w=1024',
  },
  {
    id: 4,
    title: 'YCMOU',
    icon: GraduationCap,
    description: 'Distance learning programs making education accessible to all.',
    image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=1024',
  },
  {
    id: 5,
    title: 'B.Voc',
    icon: Briefcase,
    description: 'Vocational education programs focused on skill development and industry readiness.',
    image: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&q=80&w=1024',
  },
];

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-blue-900 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-4">Our Departments</h1>
          <p className="text-xl text-center text-blue-100 max-w-2xl mx-auto">
            Discover our diverse range of academic departments offering quality education and excellence in research
          </p>
        </div>
      </header>

      {/* Departments Grid */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {departments.map((dept) => (
            <div
              key={dept.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={dept.image}
                  alt={dept.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <dept.icon className="w-6 h-6 text-blue-600 mr-2" />
                  <h3 className="text-xl font-semibold text-gray-800">{dept.title}</h3>
                </div>
                <p className="text-gray-600">{dept.description}</p>
                <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-100 py-8">
        <div className="container mx-auto px-4 text-center text-gray-600">
          <p>© 2024 University Departments. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
