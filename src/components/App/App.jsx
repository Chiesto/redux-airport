import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Form from '../Form/Form';
import Table from '../Table/Table';

function App() {
  const dispatch = useDispatch();
  const airlineList = useSelector(store =>store.airlineList);
  const [airlineName, setAirlineName] = useState('');
  const [airlineNumber, setAirlineNumber] = useState('');

  const handleClick = (event)=>{
    event.preventDefault();

    dispatch({type: 'ADD', data: {airlineName, airlineNumber}})
    setAirlineNumber('')
    setAirlineName('');
  }

  return (
    <div>
      <h1>Redux Airport</h1>
      <Form 
      handleClick={handleClick} 
      setAirlineNumber={setAirlineNumber} airlineNumber={airlineNumber} 
      setAirlineName={setAirlineName} airlineName={airlineName}
      />
      <Table 
      airlineList={airlineList}
      airlineNumber={airlineNumber}/>
    </div>
  );
}

export default App;
