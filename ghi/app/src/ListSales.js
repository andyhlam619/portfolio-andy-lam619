import React from 'react'

function ListSales(props) {
  return (
    <table className="table table-striped">
        <thead>
            <tr>
                <th>Sales Person</th>
                <th>Employee Number</th>
                <th>Purchaser</th>
                <th>VIN</th>
                <th>Price</th>
            </tr>
        </thead>
        <tbody>
            {props.sales.map(sale => {
            return (
                <tr key={sale.href}>
                    <td>{sale.sales_person.name}</td>
                    <td>{sale.sales_person.employee_number}</td>
                    <td>{sale.customer.name}</td>
                    <td>{sale.automobile}</td>
                    <td>{sale.price}</td>
                </tr>
                );
            })}
        </tbody>
    </table>
  )
}

export default ListSales
