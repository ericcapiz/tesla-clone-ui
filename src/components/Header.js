import React from 'react';
import styled from 'styled-components';
import MenuIcon from '@material-ui/icons/Menu';

const Header = () => {
    return (
        <Container>
            <button href="#">
                <img src="/images/logo.svg" alt="tesla" />
            </button>
            <Menu>
                <button href="#">Model S</button>
                <button href="#">Model 3</button>
                <button href="#">Model X</button>
                <button href="#">Model Y</button>
                <button href="#">Solar Roof</button>
                <button href="#">Solar Panels</button>
            </Menu>
            <RightMenu>
                <button href="#">Shop</button>
                <button href="#">Account</button>
                <CustomMenu>

                </CustomMenu>
            </RightMenu>
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
    
`

const Menu = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
    button{
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
        button{
        font-size: 16px;
        font-weight: 400;
        margin-right: 50px;
        text-transform: uppercase;
        
    }
`

const CustomMenu = styled(MenuIcon)`
       cursor: pointer;

`