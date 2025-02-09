

// Data for program outcome documents
const programOutcomeDocuments = [
    { id: 1, title: 'Graduate Attributes', document: 'Graduate Attributes.pdf', url: 'https://pdearmacs.edu.in/academic_calender/5/Graduate%20Attributes.pdf' },
    { id: 2, title: 'Department of Physics', document: 'CO-PO physics.pdf', url: 'https://pdearmacs.edu.in/academic_calender/6/CO-PO%20physics.pdf' },
    { id: 3, title: 'Department of Chemistry', document: 'CO-PO chemistry.pdf', url: 'https://pdearmacs.edu.in/academic_calender/7/CO-PO%20chemistrys.pdf' },
    { id: 4, title: 'Department of Botany', document: 'CO-PO Botany.pdf', url: 'https://pdearmacs.edu.in/academic_calender/8/CO-PO%20Botany.pdf' },
    { id: 5, title: 'Department of Psychology', document: 'CO-PO Psychology.pdf', url: 'https://pdearmacs.edu.in/academic_calender/9/CO-PO%20Psychology.pdf' },
    { id: 6, title: 'Department of Commerce', document: 'CO-PO Commerce.pdf', url: 'https://pdearmacs.edu.in/academic_calender/10/CO-PO%20Commerce.pdf' },
    { id: 7, title: 'Department of Politics', document: 'CO-PO Politics.pdf', url: 'https://pdearmacs.edu.in/academic_calender/11/CO-PO%20Politics.pdf' },
    { id: 8, title: 'Department of Computer Science', document: 'CO-PO Computer Science.pdf', url: 'https://pdearmacs.edu.in/academic_calender/12/CO-PO%20Computer%20Science.pdf' },
    { id: 9, title: 'Department of Computer Applications (BCA)', document: 'CO-PO BCA(Science).pdf', url: 'https://pdearmacs.edu.in/academic_calender/13/CO-PO%20BCA(Science).pdf' },
    { id: 10, title: 'Department of English', document: 'CO-PO English.pdf', url: 'https://pdearmacs.edu.in/academic_calender/17/CO-PO%20%20English.pdf' },
    { id: 11, title: 'Department of Geography', document: 'CO PO Geography.pdf', url: 'https://pdearmacs.edu.in/academic_calender/18/CO%20PO%20Geography.pdf' },
    { id: 12, title: 'Department of Software Development', document: 'CO-PO Soft. Dev..pdf', url: 'https://pdearmacs.edu.in/academic_calender/19/CO-PO%20Soft.%20Dev..pdf' },
    { id: 13, title: 'Food Science and Technology', document: 'C0-PO Food Science & Tech.pdf', url: 'https://pdearmacs.edu.in/academic_calender/20/C0-PO%20Food%20Science%20&%20Tech.pdf' },
    { id: 14, title: 'Department of Mathematics', document: 'CO_PO_PSO_mathematics.pdf', url: 'https://pdearmacs.edu.in/academic_calender/21/CO_PO_PSO_mathematics.pdf' },
    { id: 15, title: 'Department of Marathi', document: 'CO_PO_Marathi.pdf', url: 'https://pdearmacs.edu.in/academic_calender/22/CO_PO_Marathi.pdf' },
    { id: 16, title: 'Department of Hindi', document: 'CO-PO-Hindi.pdf', url: 'https://pdearmacs.edu.in/academic_calender/23/CO-PO-Hindi.pdf' },
    { id: 17, title: 'Department of Economics', document: 'CO-PO Outcomes new format Dept of Economics1 (1).pdf', url: 'https://pdearmacs.edu.in/academic_calender/24/CO-PO%20Outcomes%20new%20format%20Dept%20of%20%20Economics1%20(1).pdf' },
    { id: 18, title: 'Department of Zoology', document: 'Department of Zoology PSO PO CO.pdf', url: 'https://pdearmacs.edu.in/academic_calender/25/Department%20of%20Zoology%20PSO%20PO%20CO.pdf' },
  ];
  
  const ProgramOutcomeDocumentsComponent = () => {
    return (
      <div className="pt-16">
        <div className="max-w-5xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-8 text-[#9E1B32]">Program Outcome Documents</h1>
          
          <div className="bg-white shadow rounded-lg overflow-hidden min-w-full bg-white border border-gray-200 shadow-lg">
            <table className="min-w-full">
              <thead className="bg-[#9E1B32] text-white">
                <tr>
                  <th className="px-5 py-3 text-left text-sm font-semibold uppercase tracking-wider">Sr. No.</th>
                  <th className="px-5 py-3 text-left text-sm font-semibold uppercase tracking-wider">Title</th>
                  <th className="px-5 py-3 text-left text-sm font-semibold uppercase tracking-wider">Document</th>
                  <th className="px-5 py-3 text-center text-sm font-semibold uppercase tracking-wider">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {programOutcomeDocuments.map((doc) => (
                  <tr key={doc.id} className="hover:bg-red transition">
                    <td className="px-5 py-4 text-sm">{doc.id}</td>
                    <td className="px-5 py-4 text-sm">{doc.title}</td>
                    <td className="px-5 py-4 text-sm">{doc.document}</td>
                    <td className="px-5 py-4 text-sm text-center">
                      <a
                        href={doc.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-[#9E1B32] text-white px-3 py-1 rounded hover:bg-[#7E1425]"
                      >
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
  
  export default ProgramOutcomeDocumentsComponent;
  