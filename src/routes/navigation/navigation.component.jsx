import { Fragment } from 'react';
import { Outlet } from 'react-router-dom';

import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropDown from '../../components/cart-dropdown/cart-dropdown.component';

import { signOutUser } from '../../utils/firebase/firebase.utils';

import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';

import {
    LogoContainer,
    NavigationContainer,
    NavLink,
    NavLinks,
} from './navigation.styles';
import { useSelector } from 'react-redux';
import { selectCurrentUser } from '../../store/user/user.selector';
import { selectIsCartOpen } from '../../store/cart/cart.selector';

const Navigation = () => {
    const currentUser = useSelector(selectCurrentUser);
    const isCartOpen = useSelector(selectIsCartOpen);

    const signOutHandler = async () => {
        await signOutUser();
    };

    return (
        <Fragment>
            <NavigationContainer>
                <LogoContainer to='/'>
                    <CrwnLogo className='logo' />
                </LogoContainer>
                <NavLinks>
                    <NavLink to='/shop'>SHOP</NavLink>
                    {currentUser ? (
                        <NavLink as='span' onClick={signOutHandler}>
                            SIGN OUT
                        </NavLink>
                    ) : (
                        <NavLink to='/auth'>SIGN IN</NavLink>
                    )}
                    <CartIcon />
                </NavLinks>
                {isCartOpen && <CartDropDown />}
            </NavigationContainer>
            <Outlet />
        </Fragment>
    );
};

//components are true

export default Navigation;
