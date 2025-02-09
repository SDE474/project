import React from 'react';

const FeeRefundPolicy = () => {
  const refundPolicies = [
    {
      percentage: '100%',
      timePeriod: '15 days or more, before the last date of admission has been notified'
    },
    {
      percentage: '90%',
      timePeriod: 'Less than 15 days before the last date of admission'
    },
    {
      percentage: '80%',
      timePeriod: '15 days or less, after the last date of admission'
    },
    {
      percentage: '50%',
      timePeriod: '30 days or less, but more than 15 days, after the last date of admission'
    },
    {
      percentage: '0%',
      timePeriod: 'More than 30 days after the last date of admission'
    }
  ];

  return (
    <div className="pt-16">
      <div className="container mx-auto p-8 max-w-5xl">
        <h1 className="text-4xl font-extrabold text-center text-[#9E1B32] mb-8 animate-fadeIn">
          Fee Refund Policy 2024-25
        </h1>

        <p className="mb-6">
          UGC set up the Commission and has considered the matter in its 580th meeting held on 15 May 2024. 
          After considering the relevant factors, the following fee refund policy for the academic session 2024-25 
          has been decided. The Prof Ramkrishna More Arts Commerce and Science College (Autonomous) Akurdi Pune 
          is following the same policy for fees refund:
        </p>

        <div className="overflow-x-auto">
          <table className="min-w-full bg-white shadow-lg rounded-lg min-w-full bg-white border border-gray-200 shadow-lg">
            <thead>
              <tr>
                <th className="px-6 py-4 bg-[#9E1B32] text-white">Refund of Fee (Percentage)</th>
                <th className="px-6 py-4 bg-[#9E1B32] text-white">Time Period (Withdrawal of the Application)</th>
              </tr>
            </thead>
            <tbody>
              {refundPolicies.map((policy, index) => (
                <tr key={index} className="hover:bg-[#F8D7DA] transition duration-300">
                  <td className="px-6 py-4 border border-gray-300">{policy.percentage}</td>
                  <td className="px-6 py-4 border border-gray-300">{policy.timePeriod}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mt-6">
          If any candidate decides to withdraw from the course in which they took admission, 
          then the institute shall follow the below-mentioned system of the UGC norms for fee refund.
        </p>
      </div>
    </div>
  );
};

export default FeeRefundPolicy;