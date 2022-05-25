import React from 'react';
import { toast } from 'react-toastify';

const OrderRow = ({order, index, refetch, setCancelOrder}) => {

    const {_id, name, email, product} = order;


    return (
        <tr>
            <th>{index + 1}</th>
            <td>{name}</td>
            <td>{email}</td>
            <td>{product}</td>
            <td>
                <label onClick={() => setCancelOrder(order)} for="delete-confirm-modal" class="btn btn-xs btn-error">Cancel</label>
            </td>
        </tr>
    );
};

export default OrderRow;