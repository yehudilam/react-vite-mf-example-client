import { useState } from "react";

export const Button = () => {
  const [state, setState] = useState(0);
  return (
    <div style={{
      border: '2px solid white',
      background: '#444',
    }}>
      <button
        id="click-btn"
        className="shared-btn"
        onClick={() => setState((s) => s + 1)}
      >
        Click me: {state}
      </button>

      <p>client-app button</p>
    </div>
  );
};

export default Button;
