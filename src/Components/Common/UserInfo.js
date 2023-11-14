import React from 'react'
import { useSelector } from 'react-redux';

export default function UserInfo() {
    const user = useSelector(state => state.users);
    return (
        <div className='d-flex align-items-center gap-2'>
            <img src={user.data.picture} alt="" className="rounded-pill img-fluid" referrerPolicy="no-referrer" />
            <div className="ps-1">
                <h6 className="fw-bold text-white mb-0">{user.data.name}</h6>
                {user.data.phone && <p className="text-white-50 small m-0">{user.data.phone}</p>}

            </div>
        </div>
    )
}
