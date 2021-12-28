import React from "react";

const SearchResult = ({ data = [] }) => {
  if (data.length <= 0) {
    return (
      <div className="empty-box">검색결과가 없네요...</div>
    );
  }

  return (
    <div className="result">
      <ul className="result">
        {data.map((item) => {
          return (
            <li key={item.id}>
              <img src={item.imageUrl} alt={item.name} />
              <p>{item.name}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SearchResult;
