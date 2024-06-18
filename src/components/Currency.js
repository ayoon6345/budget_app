import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

function Currency() {
    const { dispatch} = useContext(AppContext);

    const [currency, setCurrency] = useState('$');
    const [name, setName] = useState('Dollar');
    const submitEvent = (event) => {
        setCurrency(event.target.value);
        setName(event.target.name);
        dispatch({
            type: 'CHG_CURRENCY',
            payload: event.target.value,
        });
     };
  return (
    <div className="dropdown">
    <button
      className="btn btn-success dropdown-toggle"
      type="button"
      id="dropdownMenuButton"
      data-bs-toggle="dropdown"
      aria-expanded="false"
    >
      Currency ({currency} {name})
    </button>
    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
      <li ><button className="dropdown-item" defaultValue value="$" name="Dollar" onClick={submitEvent} >Dollar</button></li>
      <li><button className="dropdown-item"  value="£" name="Pound" onClick={submitEvent}>Pound</button></li>
      <li><button className="dropdown-item" value="€" name="Euro"  onClick={submitEvent}>Euro</button></li>
      <li><button className="dropdown-item" value="₹" name="Ruppee" onClick={submitEvent}>Ruppee</button></li>
    </ul>
  </div>

  );
}

export default Currency;