import React from 'react';
import "../Style/Nav.scss"
import { NavLink } from "react-router-dom";

import { FiSearch, FiShoppingBag, FiUser } from "react-icons/fi";

const categories = [{

    filter: "women's clothing",
    displayName: <a href='#'>Women</a>,
},
{
    filter: "men's clothing",
    displayName: <a href='#'>Men</a>
}, {
    filter: "jewelery",
    displayName:  <a href='#'>Smart Gear</a>
}, {
    filter: "electronics",
    displayName: <a href='#'>Accessories</a>
},
]
const Navbar = ({ setCategory, selectedCategory, ...props }) => {
    return (
        <div className='nav-bar' >
            <nav className="navbar navbar-expand-lg navbar-light bg-white py-3 shadow-sm">
                <div className="container">
                    <NavLink className="navbar-brand fs-4" to="/"><span>V</span>ENIA</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0 fw-bold">
                            {
                                categories?.map(category =>
                                    <li className={`nav-link ${category.filter === selectedCategory ? 'active' : ''} `} aria-current="page" onClick={() => setCategory(category.filter)}>{category.displayName}
                                    </li>
                                )
                            }
                        </ul>
                        <div className="buttons">

                            <NavLink to="/login" className="login"> < FiSearch />Search</NavLink>
                            <NavLink to="/signin" className="signin" ><FiUser />Signin</NavLink>
                            <NavLink to="/cart" className="cart"> <FiShoppingBag />
                                {' '}
                                {props.countCartItems ? (
                                    <button className="btn btn-success">{props.countCartItems}</button>
                                ) : (
                                    ''
                                )}
                            </NavLink>{' '}
                        </div>
                    </div>
                </div>
            </nav>
        </div>

    )
}

export default Navbar