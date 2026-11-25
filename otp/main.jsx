import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { Input } from 'antd';

const digitsOnly = (text) => text.replace(/\D/g, '');
const initialValue = '12-3456';

function App() {
  const [value, setValue] = useState(initialValue);
  return (
    <main>
      <h1>Input.OTP formatter with value and defaultValue</h1>
      <p>Both examples have six cells, the same initial string and the same digits-only formatter.</p>
      <section aria-label="Uncontrolled example">
        <h2>defaultValue = {JSON.stringify(initialValue)}</h2>
        <Input.OTP defaultValue={initialValue} formatter={digitsOnly} />
      </section>
      <section aria-label="Controlled example">
        <h2>value = {JSON.stringify(value)}</h2>
        <Input.OTP value={value} formatter={digitsOnly} onChange={setValue} />
        <button onClick={() => setValue('98 7654')}>Set external value to “98 7654”</button>
      </section>
    </main>
  );
}

createRoot(document.getElementById('root')).render(<App />);
