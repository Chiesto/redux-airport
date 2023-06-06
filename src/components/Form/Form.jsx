
function Form({handleClick, setAirlineName, airlineName, airlineNumber, setAirlineNumber}){


    return(
        <form onSubmit={handleClick}>
        <input value={airlineName} placeholder='Airline Name' onChange={(event)=>setAirlineName(event.target.value)}/>
        <input value={airlineNumber} placeholder='Airline Number' onChange={(event)=>setAirlineNumber(event.target.value)}/>
        <button type='submit'>Add Airline</button>
        </form>
    )
}
export default Form;