import React from 'react';
import './App.css';
import IssueList from './IssueList';

const App = () => {
  return (
    <div className="container">
      <h1>React GitHub Issues</h1>
      <IssueList />
    </div>
  );
};

export default App;