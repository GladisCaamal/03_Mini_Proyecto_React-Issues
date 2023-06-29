import React, { useState, useEffect } from 'react';

const IssueList = () => {
  const [issues, setIssues] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    fetch('https://api.github.com/repos/facebook/react/issues')
      .then(response => response.json())
      .then(data => setIssues(data));
  }, []);

  const handleFilterChange = event => {
    setFilter(event.target.value);
  };

  const filteredIssues = issues.filter(issue =>
    issue.title.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        value={filter}
        onChange={handleFilterChange}
        placeholder="Search issues"
        className="search-bar"
      />
      <ul>
        {filteredIssues.map(issue => (
          <li key={issue.id}>
            <a href={issue.html_url} target="_blank" rel="noopener noreferrer">
              <span className="issue-title">#{issue.number}: {issue.title}</span>
            </a>
            <p>Opened by: {issue.user.login}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default IssueList;