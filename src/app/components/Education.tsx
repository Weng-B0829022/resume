import React from 'react';

const Education = () => {
  return (
    <section>
      <h2 className="text-2xl font-bold text-gray-800 border-b-2 border-gray-800 pb-2 mb-6">EDUCATION</h2>
      <div className="mb-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
          <h3 className="text-xl font-semibold text-gray-800">長庚大學資訊工程學系</h3>
          <span className="text-gray-600 md:text-right">2020.09 – 2023.06</span>
        </div>
        <p className="text-gray-700">資訊工程研究所</p>
        <p className="text-gray-700 mt-2">
          <span className="font-medium">論文:</span> "複雜網路分析"
        </p>
        {/* <p className="text-gray-700 mt-2">
          <span className="font-medium">GPA:</span> 4.1 / 4.3
        </p> */}
      </div>
    </section>
  );
};

export default Education; 