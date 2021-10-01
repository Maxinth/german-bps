import { TableDataCell } from "../styled";
import PropTypes from "prop-types";

const IsSystemLogRowItems = ({ name, branch, loggedInAt, loggedOutAt }) => {
  const items = [name, branch, loggedInAt, loggedOutAt];
  return (
    <>
      {items.map((item) => (
        <TableDataCell key={item}>{item}</TableDataCell>
      ))}
    </>
  );
};

IsSystemLogRowItems.propType = {
  name: PropTypes.string,
  branch: PropTypes.string,
  loggedInAt: PropTypes.string,
  loggedOutAt: PropTypes.string,
};
export default IsSystemLogRowItems;

/* 
  items when mapped spits this out = 
  
      <TableDataCell>{name}</TableDataCell>
      <TableDataCell>{branch}</TableDataCell>
      <TableDataCell>{loggedInAt}</TableDataCell>
      <TableDataCell>{loggedOutAt}</TableDataCell>
      
 */
