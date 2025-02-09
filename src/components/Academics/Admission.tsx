import React from "react";
import { motion } from "framer-motion";

const admissionDocuments = [
  { id: 1, document: "Handbook_CodeofConduct.pdf", description: "Code of Conduct Guidelines", url: "https://pdearmacs.edu.in/AddAdmission/7_Handbook_CodeofConduct.pdf" },
  { id: 2, document: "MentorHandbook.pdf", description: "Mentor Guidelines", url: "https://pdearmacs.edu.in/AddAdmission/8_MentorHandbook.pdf" },
  { id: 3, document: "Government GR Reservation.pdf", description: "Reservation Policy", url: "https://pdearmacs.edu.in/AddAdmission/11_Government%20GR%20Reservation.pdf" },
  { id: 4, document: "Academic Calender2018-19 final.pdf", description: "Academic Calendar 2018-19", url: "#" },
  { id: 5, document: "Academic Calender 2019-20.pdf", description: "Academic Calendar 2019-20", url: "#" },
  { id: 6, document: "Academic Calender 2020-21.pdf", description: "Academic Calendar 2020-21", url: "#" },
  { id: 7, document: "Acedemic_Calender_2021-22.pdf", description: "Academic Calendar 2021-22", url: "#" },
  { id: 8, document: "Acedemic_Calender_2022-23.pdf", description: "Academic Calendar 2022-23", url: "#" },
];

const Admission = () => {
  return (
    <motion.div
      className="pt-16"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <div className="max-w-5xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8 text-[#9E1B32]">
          Admission Documents
        </h1>

        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <table className="min-w-full border border-[#9E1B32]">
            <thead className="bg-[#9E1B32] text-white">
              <tr>
                <th className="px-5 py-3 text-left text-sm font-semibold uppercase tracking-wider">Sr. No.</th>
                <th className="px-5 py-3 text-left text-sm font-semibold uppercase tracking-wider">Document</th>
                <th className="px-5 py-3 text-left text-sm font-semibold uppercase tracking-wider">Description</th>
                <th className="px-5 py-3 text-center text-sm font-semibold uppercase tracking-wider">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-300">
              {admissionDocuments.map((doc) => (
                <motion.tr
                  key={doc.id}
                  className="hover:bg-[#f7e0e6] transition"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <td className="px-5 py-4 text-sm border border-[#9E1B32]">{doc.id}</td>
                  <td className="px-5 py-4 text-sm border border-[#9E1B32]">{doc.document}</td>
                  <td className="px-5 py-4 text-sm border border-[#9E1B32]">{doc.description}</td>
                  <td className="px-5 py-4 text-sm text-center border border-[#9E1B32]">
                    <motion.a
                      href={doc.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[#9E1B32] text-white px-3 py-1 rounded hover:bg-[#7e1628] transition"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.2 }}
                    >
                      View PDF
                    </motion.a>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </motion.div>
  );
};

export default Admission;
