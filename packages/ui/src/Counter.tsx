import { useState } from "react";

export function Counter() {
  const [count, setCount] = useState(0);

  return (
    <button
      className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 active:scale-95 transition"
      onClick={() => setCount((c) => c + 1)}
      type="button"
    >
      Count is {count}
    </button>
  );
}
