import "./styles.css";
import Counter from "./Counter";
import { CounterProvider } from "./context";
export default function App() {
  return (
    <CounterProvider>
      <Counter />
    </CounterProvider>
  );
}
