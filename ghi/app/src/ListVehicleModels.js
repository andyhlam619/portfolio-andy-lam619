import React, {useEffect, useState} from 'react'

function VehicleModelList(props) {

//Our JSX that renders our table
    return (
        <table className="table table-striped">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Manufacturer</th>
                    <th>Picture</th>
                </tr>
            </thead>
            <tbody>
                {props.models.map(model => {
                return (
                    <tr key={model.id}>
                        <td>{ model.name }</td>
                        <td>{ model.manufacturer.name }</td>
                        <td>
                            <img
                                src={ model.picture_url }
                                height="70"
                                />
                        </td>
                    </tr>
                    );
                })}
            </tbody>
        </table>
    );
  }

export default VehicleModelList;
