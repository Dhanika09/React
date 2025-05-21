import React from 'react';

const Badge = ({ count }) => {
  return (
    <div className="badge">
      {count >= 0 && <span className="badge-count">{count}</span>}
    </div>
  );
};

export default Badge;
