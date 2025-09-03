import Logo from '../assets/logo.png'
import Mypage from '../assets/ico_mypage.svg'
import Wishlist from '../assets/ico_wishlist.svg'
import Cart from '../assets/ico_cart.svg'


const Header=()=>{
    return (
        <>
        <header id="header">
            <div className="inner">
                <h1><a href="#"><img src={Logo} alt="NOL" /></a></h1>
                <div className="util">
                    <a href="#"><img src={Mypage} alt="마이페이지" /></a>
                    <a href="#"><img src={Wishlist} alt="위시리스트" /></a>
                    <a href="#"><img src={Cart} alt="장바구니" /></a>
                </div>
            </div>
        </header>
        </>
    )
} 

export default Header