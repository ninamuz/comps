import classNames from "classnames";
import useNavigation from "../hooks/use-navigation";

// 'to' is the path we're going to navigate to
// 'children' is going to be some text inside the anchor element
export default function Link({ to, children, className, activeClassName }) {
  // using custom hooks
  const {navigate, currentPath} = useNavigation();

  const classes = classNames(
    'text-blue-500', 
    className, 
    currentPath === to && activeClassName);
 
  const handleClick = (event) => {
    if(event.metaKey || event.ctrlKey) {
      return;
    }
    event.preventDefault();

    navigate(to);
  };
 
  return <a className={classes}  href={to} onClick={handleClick}>
    {children}
    </a>
}

