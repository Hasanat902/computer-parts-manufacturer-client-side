import React from 'react';
import { Link } from 'react-router-dom';

const OrderRow = ({order, index, refetch, setCancelOrder}) => {

    const {_id, name, email, product, price} = order;


    return (
        <tr>
            <th>{index + 1}</th>
            <td>{name}</td>
            <td>{email}</td>
            <td>{product}</td>
            <td>
                {(price && !order.paid) && <Link to={`/dashboard/payment/${_id}`}><button className='btn btn-xs btn-success'>Pay</button></Link>}
                {(price && order.paid) && <div>
                    <p><span className='text-success'>Paid</span></p>
                    <p>Transaction Id: <span className='text-success'>{order.transactionId}</span></p>
                </div>}
            </td>
            <td>
                {!order.paid && <label onClick={() => setCancelOrder(order)} for="delete-confirm-modal" class="btn btn-xs btn-error">Cancel</label>}
            </td>
        </tr>
    );
};

export default OrderRow;