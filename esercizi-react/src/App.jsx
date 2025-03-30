import Counter from "./components/Counter";
import Clock from "./components/Clock";

function App() {
  return (
    <div>
      <h1>React Counter & Clock</h1>
      <Counter initialValue={0} incrementAmount={1} />
      <Clock />
    </div>
  );
}

export default App;
