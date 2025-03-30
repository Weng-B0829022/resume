import React from 'react';

const Skills = () => {
  return (
    <section>
      <h2 className="text-2xl font-bold text-gray-800 border-b-2 border-gray-800 pb-2 mb-6">SKILLS</h2>
      
      <div className="grid grid-cols-1 gap-6">
        <div>
          <div className="flex justify-between mb-2">
            <h3 className="text-lg font-semibold text-gray-800">Python</h3>
            <span className="text-gray-600">6 years</span>
          </div>
          <p className="text-gray-700 text-sm">
            Utilized ML/DL models for training, developed data pipelines, packaged APIs, and set up AI APIs using gRPC and Flask to communicate with back-end services, with Celery managing GPU.
          </p>
          <div className="mt-2 flex flex-wrap">
            <span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#PyTorch</span>
            <span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Flask</span>
            <span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#cuda</span>
            <span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Celery</span>
          </div>
        </div>

        <div>
          <div className="flex justify-between mb-2">
            <h3 className="text-lg font-semibold text-gray-800">R</h3>
            <span className="text-gray-600">8 years</span>
          </div>
          <p className="text-gray-700 text-sm">
            Conducted data preprocessing, feature engineering, and ML model building, while visualizing data with ggplot2. Established backend services using openCPU and rapache.
          </p>
          <div className="mt-2 flex flex-wrap">
            <span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#tidyverse</span>
            <span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#openCPU</span>
            <span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#datatable</span>
            <span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#ggplot2</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <div className="flex justify-between mb-2">
              <h3 className="text-lg font-semibold text-gray-800">Docker</h3>
              <span className="text-gray-600">4 years</span>
            </div>
            <p className="text-gray-700 text-sm">
              Worked on Windows and macOS using WSL2 to maintain consistent environments by connecting to an Ubuntu server.
            </p>
          </div>

          <div>
            <div className="flex justify-between mb-2">
              <h3 className="text-lg font-semibold text-gray-800">Linux</h3>
              <span className="text-gray-600">6 years</span>
            </div>
            <p className="text-gray-700 text-sm">
              Skilled in using AWS, Azure OpenAI, and NVIDIA NIMs for cloud integration and deployment solutions.
            </p>
          </div>

          <div>
            <div className="flex justify-between mb-2">
              <h3 className="text-lg font-semibold text-gray-800">Cloud</h3>
              <span className="text-gray-600">4 years</span>
            </div>
            <p className="text-gray-700 text-sm">
              Influenced algorithm development, project setup, product packaging, and team communication.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <div className="flex justify-between mb-2">
              <h3 className="text-lg font-semibold text-gray-800">Database</h3>
              <span className="text-gray-600">4 years</span>
            </div>
            <p className="text-gray-700 text-sm">
              Data access is primarily through PostgreSQL, and for large-scale data integration and processing, Hadoop is employed.
            </p>
            <div className="mt-2 flex flex-wrap">
              <span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#MS SQL</span>
              <span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#ODBC</span>
              <span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#HIVE</span>
            </div>
          </div>

          <div>
            <div className="flex justify-between mb-2">
              <h3 className="text-lg font-semibold text-gray-800">Gen AI</h3>
              <span className="text-gray-600">2 years</span>
            </div>
            <p className="text-gray-700 text-sm">
              Stable diffusion, LLM, TTS, ASR, Llama3, RAG, RAGAs, Agents, LoRA, LangChain, llamaindex, Audio2Face, Wav2lip, Facefusion, Sadtalker, Unreal Engine, dify
            </p>
          </div>

          <div>
            <div className="flex justify-between mb-2">
              <h3 className="text-lg font-semibold text-gray-800">ML & DL</h3>
              <span className="text-gray-600">6 years</span>
            </div>
            <p className="text-gray-700 text-sm">
              Random Forest, XGBoost, lightGBM, CatBoost, LSTM, GRU, DeepAR, KNN, SVM, Transformer, Regression, Causal Inference, MMM, A/B Testing, Uplift Model, PCA, SEM, Meta-Analysis, RCT
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills; 