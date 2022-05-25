import React from 'react';

const OrderRow = ({order, index}) => {

    const {name, email, product} = order;

    return (
        <tr>
            <th>{index + 1}</th>
            <td>{name}</td>
            <td>{email}</td>
            <td>{product}</td>
        </tr>
    );
};

export default OrderRow;