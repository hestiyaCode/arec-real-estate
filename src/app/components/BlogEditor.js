"use client";

import React, { useState, useMemo } from 'react';
import dynamic from 'next/dynamic';
import 'react-quill-new/dist/quill.snow.css'; 

const BlogEditor = () => {
  const ReactQuill = useMemo(() => dynamic(() => import('react-quill-new'), { 
    ssr: false,
    loading: () => <p style={{color: '#000'}}>Loading Editor...</p>
  }), []);

  const [content, setContent] = useState('');

  return (
    <div style={{ marginBottom: '20px' }}>
      <style>{`
        /* 1. Toolbar ko light color mein lana */
        .ql-toolbar.ql-snow {
          background-color: #f3f4f6 !important;
          border: 1px solid #ddd !important;
          border-radius: 8px 8px 0 0;
        }
        
        /* Icons ko dark rakhna */
        .ql-snow .ql-stroke {
          stroke: #444 !important;
        }
        .ql-snow .ql-fill {
          fill: #444 !important;
        }
        .ql-snow .ql-picker {
          color: #444 !important;
        }

        /* 2. Writing area ko WHITE aur text ko BLACK karna */
        .ql-container.ql-snow {
          background-color: #ffffff !important;
          border: 1px solid #ddd !important;
          border-radius: 0 0 8px 8px;
          min-height: 400px;
          font-size: 16px;
        }

        /* Text color black */
        .ql-editor {
          color: #000000 !important;
        }

        /* Placeholder color grey */
        .ql-editor.ql-blank::before {
          color: #888 !important;
          font-style: normal;
        }
      `}</style>

      {ReactQuill && (
        <ReactQuill 
          theme="snow" 
          value={content} 
          onChange={setContent}
          placeholder="Start writing your blog post here... "
        />
      )}
    </div>
  );
};

export default BlogEditor;