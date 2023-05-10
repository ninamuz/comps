import useNavigation from "../hooks/use-navigation";

function Route({ path, children }) {
  // using our custom hook
  const { currentPath } = useNavigation();

  if (path === currentPath) {
    return children;
  }

  return null;
}

export default Route;