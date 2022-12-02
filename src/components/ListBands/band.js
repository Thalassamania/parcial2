import React from "react";

const Band = (props) => {
    return (
        <tr>
          <th scope="row">{props.id}</th>
          <td>{props.name}</td>
          <td>{props.country}</td>
          <td>{props.genre}</td>
          <td>{props.foundation_year}</td>
        </tr>
      );
}

export default Band;