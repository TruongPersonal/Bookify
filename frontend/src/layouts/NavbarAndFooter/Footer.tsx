import { Link } from "react-router-dom";

export const Footer = () => {
    return (
        <div className='main-color'>
            <footer className='container d-flex flex-wrap 
                justify-content-between align-items-center py-5 main-color'>
                {/* <p className='col-md-4 mb-0 text-white'>© 2025 Example Library App, TruongPerson</p> */}
                <p className='col-md-4 mb-0 text-white'>©2025, <strong>Bookify</strong> - <i>TruongPersonal</i></p>
                <ul className='nav navbar-dark col-md-4 justify-content-end'>
                    <li className='nav-item'>
                        <Link to='/home' className='nav-link px-2 text-white'>
                            Home
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/search' className='nav-link px-2 text-white'>
                            Search Books
                        </Link>
                    </li>
                </ul>
            </footer>
        </div>
    );
}