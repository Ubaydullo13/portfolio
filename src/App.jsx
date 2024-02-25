import useLocalStorage from "use-local-storage";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Toggle from "./components/Toggle";


function App() {
  const preference = typeof window !== 'undefined' && window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [isDark, setIsDark] = useLocalStorage("isDark", preference);

  return (
    <div className="appWrapper" data-theme={isDark ? "dark" : "light"}>
      <div className="toggle-wrapper">
        <Toggle isChecked={isDark} handleChange={() => setIsDark(!isDark)}/>
      </div>
      <Header></Header>
      <Hero></Hero>
    </div>
  );
}

export default App;
