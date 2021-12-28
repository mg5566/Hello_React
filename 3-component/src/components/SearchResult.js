import React from "react";

const SearchResult = ({ data = [] }) => {
  if (data.length <= 0) {
    return (
      <div className="empty-box">검색결과가 없네요...</div>
    );
  }

  return (
    <div className="result">검색결과란다...</div>
  );
};

export default SearchResult;
