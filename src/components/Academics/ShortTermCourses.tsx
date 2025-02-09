import React from 'react';

const courses = [
  {
    id: 1,
    department: 'Computer Science',
    title: 'Web Designing',
    details: 'HTML 5.0, CSS, Bootstrap, Wordpress',
    duration: '36 Hours',
    fees: 'Rs. 1000',
    document: '-',
  },
  {
    id: 2,
    department: 'B.Sc. Physics',
    title: 'Electrician',
    details: '-',
    duration: '3 months',
    fees: 'Rs. 1000',
    document: '-',
  },
  {
    id: 3,
    department: 'B.Sc. Chemistry',
    title: 'Basics of Pharmaceutical Analysis',
    details: 'Students of T.Y.B.Sc. appeared students can take admission to this course',
    duration: '60 hr, 3 months',
    fees: 'Rs. 1000',
    document: 'Short Term Course 2018.docx',
  },
  {
    id: 4,
    department: 'B.B.A.',
    title: 'Tally ERP 9.0 And GST',
    details: 'Tally ERP 9.0 And GST',
    duration: '3 months',
    fees: 'Rs. 1000',
    document: 'Tally short term course details.docx',
  },
  {
    id: 5,
    department: 'B.Sc. Zoology',
    title: 'Medical Laboratory Techniques',
    details: 'A Short Term Course on Medical Laboratory Techniques for UG Students to provide them skills for pathological techniques through theory and practicals. Course was conducted by Professors and Professionals (Doctors and Pathologists).',
    duration: '3 Months',
    fees: 'Rs. 1000',
    document: 'MLT Brochure 18-19.docx',
  },
];

const ShortTermCourses = () => {
  return (
    <div className="pt-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-[#9E1B32]">Short Term Courses</h2>
        
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200 shadow-lg">
            <thead className="bg-[#9E1B32] text-white">
              <tr>
                <th className="py-3 px-4 border">Sr. No.</th>
                <th className="py-3 px-4 border">Department</th>
                <th className="py-3 px-4 border">Title</th>
                <th className="py-3 px-4 border">Details</th>
                <th className="py-3 px-4 border">Duration</th>
                <th className="py-3 px-4 border">Fees</th>
                <th className="py-3 px-4 border">Document</th>
                <th className="py-3 px-4 border">Action</th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              {courses.map((course) => (
                <tr key={course.id} className="border-t hover:bg-[#f5e1e6]">
                  <td className="py-3 px-4 border text-center">{course.id}</td>
                  <td className="py-3 px-4 border">{course.department}</td>
                  <td className="py-3 px-4 border">{course.title}</td>
                  <td className="py-3 px-4 border">{course.details}</td>
                  <td className="py-3 px-4 border text-center">{course.duration}</td>
                  <td className="py-3 px-4 border text-center">{course.fees}</td>
                  <td className="py-3 px-4 border text-center">
                    {course.document !== '-' ? (
                      <a href={course.document} className="text-blue-500 hover:text-blue-700" download>
                        {course.document}
                      </a>
                    ) : (
                      '-'
                    )}
                  </td>
                  <td className="py-3 px-4 border text-center">
                    <a href="#" className="text-blue-500 hover:text-blue-700">
                      View PDF
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ShortTermCourses;