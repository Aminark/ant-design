import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { Checkbox } from 'antd';

function App() {
  const [showFirst, setShowFirst] = useState(true);
  const [lastChange, setLastChange] = useState(null);
  return (
    <main>
      <h1>Checkbox.Group and duplicate values</h1>
      <p>Click “Remove first option”, then check “Other”. Compare the remaining checkboxes with the callback.</p>
      <button disabled={!showFirst} onClick={() => setShowFirst(false)}>Remove first option</button>
      <Checkbox.Group defaultValue={['shared']} onChange={setLastChange}>
        {showFirst && <Checkbox value="shared">First</Checkbox>}
        <Checkbox value="shared">Second</Checkbox>
        <Checkbox value="other">Other</Checkbox>
      </Checkbox.Group>
      <p>Last onChange: <output>{JSON.stringify(lastChange)}</output></p>
    </main>
  );
}

createRoot(document.getElementById('root')).render(<App />);
