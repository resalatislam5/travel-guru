import { Link, useLocation } from 'react-router-dom';
import logo from '../../../asses/logo.png'
import logoHome from '../../../asses/logo-home.png'
const Header = ({headerId}) => {
    const location = useLocation();
    const currentPath = location.pathname;
    return (
        <div className=''>
            {
               currentPath === '/' || currentPath === `/category/${headerId}`?
            <div className="navbar py-7 px-12 font-bold fixed w-full z-10 text-white">
            <div className="flex-1">
                 <Link to='/' className=" w-28"><img src={logoHome} alt="" /></Link>
            </div>
            <div className='mr-[8%]'>
                <input className='px-10 py-3 bg-inherit border-2 border-white focus:outline-none placeholder:text-white' type="text" placeholder='Search your Destination...'/>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal p-0 gap-8">
                <li><Link to='/news'>News</Link></li>
                <li >
                    <Link to='/destination'>Destination</Link>
                </li>
                <li><Link to='/blog'>Blog</Link></li>
                <li><Link to='/contact'>Contact</Link></li>
                <li><Link className='btn bg-[#F9A51A] hover:bg-[#eb9812] border-0 text-white px-10' to='/login'>Login</Link></li>
                <li><Link className='btn bg-[#F9A51A] hover:bg-[#eb9812] border-0 text-white px-10' to='/signup'>Sign Up</Link></li>
                </ul>
            </div>
            </div>
               :
               <div className="navbar py-7 px-12 font-bold w-full ">
            <div className="flex-1">
                {
                    currentPath === '/' || currentPath === '/blog'  ?
                    <Link to='/' className=" w-28"><img src={logoHome} alt="" /></Link>
                    :
                    <Link to='/' className=" w-28"><img src={logo} alt="" /></Link>
                }
            </div>
            <div className='mr-[8%]'>
                {
                    <input className='px-10 py-3 bg-inherit border-2 border-white focus:outline-none placeholder:text-white' type="text" placeholder='Search your Destination...'/>
                }
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal p-0 gap-8">
                <li><Link to='/news'>News</Link></li>
                <li >
                    <Link to='/destination'>Destination</Link>
                </li>
                <li><Link to='/blog'>Blog</Link></li>
                <li><Link to='/contact'>Contact</Link></li>
                <li><Link className='btn bg-[#F9A51A] hover:bg-[#eb9812] border-0 text-white px-10' to='/login'>Login</Link></li>
                <li><Link className='btn bg-[#F9A51A] hover:bg-[#eb9812] border-0 text-white px-10' to='/signup'>Sign Up</Link></li>
                </ul>
            </div>
            </div>

            }
        </div>
    );
};

export default Header;