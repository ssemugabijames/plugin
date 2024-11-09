import React, { useState, useEffect } from 'react';
import { fetchDocuments, createDocument, deleteDocument } from '../api';

const DocumentList = () => {
  const [documents, setDocuments] = useState([]);
  const [newDocTitle, setNewDocTitle] = useState('');

  useEffect(() => {
    fetchDocuments().then(response => setDocuments(response.data));
  }, []);

  const handleCreateDocument = () => {
    const newDocument = { title: newDocTitle, content: '' };
    createDocument(newDocument).then(response => setDocuments([...documents, response.data]));
  };

  const handleDeleteDocument = (id) => {
    deleteDocument(id).then(() => setDocuments(documents.filter(doc => doc.id !== id)));
  };

  return (
    <div>
      <h2>Documents</h2>
      <ul>
        {documents.map((doc) => (
          <li key={doc.id}>
            {doc.title}
            <button onClick={() => handleDeleteDocument(doc.id)}>Delete</button>
          </li>
        ))}
      </ul>
      <input
        type="text"
        placeholder="New Document Title"
        value={newDocTitle}
        onChange={(e) => setNewDocTitle(e.target.value)}
      />
      <button onClick={handleCreateDocument}>Create Document</button>
    </div>
  );
};

export default DocumentList;
