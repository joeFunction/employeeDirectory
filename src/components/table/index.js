
import React from 'react';
import { Table } from 'reactstrap';
// props{
//   results
// }
const TableRow = (props) => {
  return (
    <Table hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Picture</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>

          <th>Phone</th>

        </tr>
      </thead>
      <tbody>
          {props.results.length > 0 ? props.results.map((person, index) => {
            return (
<tr>
            <th scope="row">{index +1}</th>
          <td><img src = {person.picture.thumbnail}/></td>
            <td>{person.name.first}</td>
            <td>{person.name.last}</td>
            <td>{person.email}</td>
          <td>{person.phone}</td>
        </tr>
            )
          }): (<tr>
            <th></th>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            
            
            </tr>)}

        
        
        
      </tbody>
    </Table>
  );
}

export default TableRow;