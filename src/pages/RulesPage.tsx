import React, { useState } from 'react';

const RulesPage = () => {
  const [rules, setRules] = useState([
    { id: 1, name: 'High Value Orders', weight: 30, enabled: true },
    { id: 2, name: 'Long Open Duration', weight: 25, enabled: true },
  ]);

  const toggleRule = (id: number) => {
    setRules(rules.map(rule => rule.id === id ? { ...rule, enabled: !rule.enabled } : rule));
  };

  return (
    <div className="rules-page">
      <h1>Prioritization Rules</h1>
      <ul>
        {rules.map(rule => (
          <li key={rule.id} className="rule-item">
            <span>{rule.name} (Weight: {rule.weight}%)</span>
            <button onClick={() => toggleRule(rule.id)}>
              {rule.enabled ? 'Disable' : 'Enable'}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RulesPage;