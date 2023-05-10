import { createContext, useState, useEffect } from "react";

const NavigationContext = createContext();

function NavigationProvider({ children }) {
  // The only reason we have the state is to cause a re render whenever 
  // a user clicks the forward and back buttons.
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(()=>{
    const handler = () => {
      setCurrentPath(window.location.pathname);
    };
    window.addEventListener('popstate', handler);

    return() => {
      window.removeEventListener('popstate', handler);
    }
  }, []);

  const navigate = (to) => {
    window.history.pushState({}, '', to);
    setCurrentPath(to);
  }
  // share the navigate function and the currentPatrh state with the whole app
  return <NavigationContext.Provider value={{ currentPath, navigate }}>
    {/* <div>
      <button onClick={() => navigate('/accordion')}>Go to accordion</button>
      <br />
      <button onClick={() => navigate('/dropdown')}>Go to dropdown</button>
    </div>
    {currentPath} */}
    {children}
  </NavigationContext.Provider>
}

export { NavigationProvider};
export default NavigationContext;