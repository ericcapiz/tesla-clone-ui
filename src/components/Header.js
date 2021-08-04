import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import { selectCars } from '../features/car/carSlice';
import styled from 'styled-components';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';

const Header = () => {
    const [menuStatus, setMenuStatus] = useState(false);
    const cars = useSelector(selectCars);
    console.log(cars)
    return (
        <Container>
            <a href="/">
                <img src="/images/logo.svg" alt="tesla" />
            </a>
            <Menu>
                {cars && cars.map((car, index)=> (
                <a key={index} href="/">{car}</a>
                ))}
                <a href="/">Solar Roof</a>
                <a href="/">Solar Panels</a>
            </Menu>
            <RightMenu>
                <a href="/">Shop</a>
                <a href="/">Account</a>
                <CustomMenu onClick={()=>setMenuStatus(true)} />
            </RightMenu>
            <BurgerNav show={menuStatus}>
                <CloseWrapper>
                    <CustomClose onClick={()=>setMenuStatus(false)} />
                </CloseWrapper>
                <li><a href="/">Existing Inventory</a></li>
                <li><a href="/">Used Inventory</a></li>
                <li><a href="/">Trade-In</a></li>
                <li><a href="/">Test Drive</a></li>
                <li><a href="/">Cybertruck</a></li>
                <li><a href="/">Roadster</a></li>
                <li><a href="/">Semi</a></li>
                <li><a href="/">Charging</a></li>
                <li><a href="/">Powerwall</a></li>
                <li><a href="/">Commercial Energy</a></li>
                <li><a href="/">Utilities</a></li>
                <li><a href="/">Find Us</a></li>
                <li><a href="/">Support</a></li>
                <li><a href="/">Investor Relations</a></li>
            </BurgerNav>
        </Container>
    )
}

export default Header

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    min-height: 60px;
    width: 100%;
    padding: 0 20px;
    z-index:1;
    
`

const Menu = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
    a{
        flex-wrap: nowrap;
        font-size: 16px;
        font-weight: 600;
        text-transform: uppercase;
        margin: 0 10px;
    }
    @media(max-width: 768px){
        display: none;
    }
`

const RightMenu = styled.div`
        display: flex;
        align-items: center;
        a{
        font-size: 16px;
        font-weight: 400;
        margin-right: 50px;
        text-transform: uppercase;
        
    }
`

const CustomMenu = styled(MenuIcon)`
       cursor: pointer;
`

const CustomClose = styled(CloseIcon)`
       cursor: pointer;
`
const CloseWrapper = styled.div`
       display: flex;
       justify-content: flex-end;
`

const BurgerNav = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    background-color:white;
    width: 300px;
    list-style: none;
    z-index: 16;
    display: flex;
    padding: 60px;
    text-align:start;
    flex-direction: column;
    transform:${props => props.show ? 'translateX(0)' : 'translateX(100%)'};
    transition: transform 0.95s ease-in-out;

    li{
        margin: 20px 0;
        border-bottom: 1px solid grey;
        font-weight: 600;
    }

`