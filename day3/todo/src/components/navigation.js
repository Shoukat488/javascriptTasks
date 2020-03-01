import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <div>
            <ul>
                <li>
                    <Link to="/about">Add</Link>
                </li>
            </ul>

            <hr />
        </div>
    );
}
export default Navigation