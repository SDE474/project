import { FC } from "react";
import { BookOpen, Trophy, Users, Star, Calendar } from "lucide-react";
import { motion } from "framer-motion";

const stats = [
  { label: "Students", value: "5,000+" },
  { label: "Events Annually", value: "50+" },
  { label: "Clubs", value: "20+" },
  { label: "Awards Won", value: "100+" },
];

const sections = [
  {
    title: "Cultural Activities",
    description: "Experience vibrant cultural events and showcases.",
    icon: BookOpen,
    img: "https://source.unsplash.com/400x300/?culture,festival",
  },
  {
    title: "Sports",
    description: "Engage in competitive and recreational sports.",
    icon: Trophy,
    img: "https://source.unsplash.com/400x300/?sports,stadium",
  },
  {
    title: "College Activities",
    description: "Participate in diverse academic and fun activities.",
    icon: Users,
    img: "https://source.unsplash.com/400x300/?students,college",
  },
  {
    title: "Distinguished Guests",
    description: "Meet and interact with renowned personalities.",
    icon: Star,
    img: "https://source.unsplash.com/400x300/?guest,speaker",
  },
  {
    title: "Annual Prize Distribution",
    description: "Celebrate achievements and academic excellence.",
    icon: Calendar,
    img: "https://source.unsplash.com/400x300/?award,celebration",
  },
];

const CampusLife: FC = () => {
  return (
    <div className="bg-gradient-to-b from-indigo-600 to-purple-700 text-white py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4">Campus Life</h1>
        <p className="text-lg mb-10">Discover the vibrant experiences and opportunities available at our campus.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {sections.map(({ title, description, icon: Icon, img }, index) => (
          <motion.div
            key={index}
            className="bg-white text-black rounded-2xl shadow-lg overflow-hidden transform hover:scale-105 transition duration-300"
          >
            <img src={img} alt={title} className="w-full h-40 object-cover" />
            <div className="p-5">
              <Icon className="w-10 h-10 text-indigo-600 mb-3" />
              <h3 className="text-xl font-semibold mb-2">{title}</h3>
              <p className="text-gray-700">{description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-16 flex flex-wrap justify-center gap-10">
        {stats.map(({ label, value }) => (
          <div key={label} className="text-center">
            <h3 className="text-4xl font-bold">{value}</h3>
            <p className="text-lg">{label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CampusLife;
