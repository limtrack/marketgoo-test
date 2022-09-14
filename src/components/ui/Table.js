// React
import React from "react";
// Styles
import './table.css';
/**
 * Simple component to draw a table
 */
 const Table = ({ headers = [], children = null }) => {
    return (
      <table>
        { Array.isArray(headers) ? (
        <thead>
          <tr>
          { headers.map((h) => <th>{h}</th>) }
          </tr> 
        </thead>
          ) :  null}
        <tbody>
          { children }
        </tbody>
      </table>
  );
}

export default Table;
