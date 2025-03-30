import React from 'react';

const AdditionalExperience = () => {
  return (
    <section>
      <h2 className="text-2xl font-bold text-gray-800 border-b-2 border-gray-800 pb-2 mb-6">ADDITIONAL EXPERIENCE</h2>
      <div className="space-y-6">
        <div>
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
            <h3 className="text-lg font-semibold text-gray-800">Technical Blog Writer | Medium</h3>
            <span className="text-gray-600 md:text-right">2023.12 – Present</span>
          </div>
          <ol className="list-decimal pl-6 text-gray-700 space-y-2">
            <li>Authored nearly 30 articles on topics including advancements and optimization strategies in RAG research, guides on Prompt Engineering, GraphRAG and tutorials on LangChain and Llama implementations.</li>
            <li>Accumulated over 600k reads, successfully attracted 840+ followers, with a steadily increasing audience.</li>
            <li>Personal website: https://chichieh-huang.com/ Medium: https://medium.com/@cch.chichieh</li>
          </ol>
        </div>
        
        <div>
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
            <h3 className="text-lg font-semibold text-gray-800">Side Project</h3>
            <span className="text-gray-600 md:text-right">2023.01 – Present</span>
          </div>
          <ol className="list-decimal pl-6 text-gray-700 space-y-2">
            <li>Developed and open-sourced projects on GitHub, including tutorials on LLM, RAG with Streamlit, and GraphRAG visualization.</li>
            <li>Employed a stable diffusion model to create animation material for puppetry characters, developing an MVP through a web interface.</li>
          </ol>
        </div>
      </div>
    </section>
  );
};

export default AdditionalExperience; 