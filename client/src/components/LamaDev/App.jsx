import * as React from 'react';

export default function App() {
  const a = 2;
  const b = 4;
  return (
    <div>
      <a>Learn React</a>
      <ul>
        <li>Apple</li>
        <li>Banana</li>
        <li>Orange</li>
      </ul>
      <h1 data-testid="mytestid">Hello</h1>
      <span title="sum">{a + b}</span>
    </div>
  )
};