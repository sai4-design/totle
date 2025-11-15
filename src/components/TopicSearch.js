import React, { useState } from 'react';
import { Search } from 'lucide-react';
import './TopicSearch.css';

const TopicSearch = () => {
  const [searchQuery, setSearchQuery] = useState('');

  // array of objects used to diplaying the data
  const topics = [
    { id: 1, name: "Thermodynamics", category: "Physics" },
    { id: 2, name: "Organic Chemistry", category: "Chemistry" },
    { id: 3, name: "Calculus", category: "Mathematics" },
    { id: 4, name: "Quantum Mechanics", category: "Physics" },
    { id: 5, name: "Data Structures", category: "Computer Science" },
    { id: 6, name: "Thermochemistry", category: "Chemistry" },
    { id: 7, name: "Linear Algebra", category: "Mathematics" },
    { id: 8, name: "Machine Learning", category: "Computer Science" }
  ];

  // Filtertopics after entering the user
  const filteredTopics = topics.filter(topic =>
    topic.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Handling to change the state on every render
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="topic-search-container">
      <div className="topic-search-wrapper">
        {/* Header */}
        <div className="topic-search-header">
          <h1 className="topic-search-title">TOTLE Topic Browser</h1>
          <p className="topic-search-subtitle">
            Search and explore topics
          </p>
        </div>

        {/* Search Input */}
        <div className="search-box-container">
          <div className="search-icon">
            <Search size={22} />
          </div>
          <input
            type="text"
            placeholder="Search topics by name..."
            value={searchQuery}
            onChange={handleSearchChange}
            className="search-input"
          />
        </div>
        {/* Results Count */}
        {searchQuery && (
          <div className="results-count">
            Found {filteredTopics.length} {filteredTopics.length === 1 ? 'topic' : 'topics'}
            {searchQuery && ` matching "${searchQuery}"`}
          </div>
        )} 

        {/* Display topic cards or "No topics found" message */}
        {filteredTopics.length > 0 ? (
          <div className="topic-grid">
            {filteredTopics.map((topic) => (
              <div key={topic.id} className="topic-card">
                <div className="topic-category">{topic.category}</div>
                <h3 className="topic-name">{topic.name}</h3>
              </div>
            ))}
          </div>
        ) : (
          <div className="empty-state">
            <div className="empty-state-icon">🔍</div>
            <h3 className="empty-state-title">No topics found</h3>
            <p className="empty-state-message">
              Try adjusting your search query to find what you're looking for
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TopicSearch;