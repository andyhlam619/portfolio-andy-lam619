import React, {useEffect, useState} from 'react'

function ManufacturerList(props) {

//Our JSX that renders our table
    return (
        <table className="table table-striped">
            <thead>
                <tr>
                    <th>Name</th>
                </tr>
            </thead>
            <tbody>
                {props.manufacturers.map(man => {
                return (
                    <tr key={man.name}>
                        <td>{ man.name }</td>
                    </tr>
                    );
                })}
            </tbody>
        </table>
    );
  }

export default ManufacturerList;
