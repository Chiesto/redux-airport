
function Table ({airlineList}){

    return(
        <table>
        <thead>
          <tr>
            <th>Airline Name</th>
            <th>Number of planes</th>
          </tr>
        </thead>
        <tbody>
         
          {airlineList.map((airline, i)=>(
            <tr key={i}>
              <td>{airline.airlineName}</td>
              <td>{airline.airlineNumber}</td>
            </tr>
          ))}
        </tbody>
      </table>
    )
}
export default Table;