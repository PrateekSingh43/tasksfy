// Import the new components with the correct export paths
import { Header } from "@repo/ui/Header";
import { Counter } from "@repo/ui/Counter";
import "./index.css";

function App() {
  return (
    <>
      <div>
        <p className="text-xl font-bold p-5 bg-red-500">hello world</p>
        <Header title="Web App" />
        <Counter />
      </div>
    </>
  );
}

export default App;
