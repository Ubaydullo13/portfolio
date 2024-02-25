import { useState, useEffect } from "react";
import useLocalStorage from "use-local-storage";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Toggle from "./components/Toggle";
import { RotatingLines } from "react-loader-spinner";


function App() {
  const [loading, setLoading] = useState(true);
  const preference = typeof window !== 'undefined' && window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [isDark, setIsDark] = useLocalStorage("isDark", preference);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <>
    {loading ? (
  <div className="loader-wrapper">
    <RotatingLines />
  </div>
) : (
  <div className="appWrapper" data-theme={isDark ? "dark" : "light"}>
      <div className="toggle-wrapper">
        <Toggle isChecked={isDark} handleChange={() => setIsDark(!isDark)}/>
        
      </div>
      <Header></Header>
      <Hero></Hero>
    </div>
)}
</>
    
  );
}

export default App;


