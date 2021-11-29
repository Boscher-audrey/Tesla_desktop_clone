import React, { useState } from 'react'
import styled from 'styled-components'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'
import { selectCars } from '../features/car/carSlice'
import { useSelector } from 'react-redux'

function Header() {
  const [burgerStatus, setBurgerStatus] = useState(false)
  const cars = useSelector(selectCars)

  return (
    <Container>
      <a>
        <HeaderLogo src="/images/logo.svg" alt="tesla logo" />
      </a>
      <Menu>
        {cars &&
          cars.map((car, index) => (
            <a key={index} href="#">
              <span>{car}</span>
            </a>
          ))}
      </Menu>
      <RightMenu>
        <a href="#">
          <span>Shop</span>
        </a>
        <a href="#">
          <span>Account</span>
        </a>
        <CustomMenuMobile onClick={() => setBurgerStatus(true)} />
        <CustomMenuDesktop onClick={() => setBurgerStatus(true)}>
          <a href="#">
            <span>Menu</span>
          </a>
        </CustomMenuDesktop>
      </RightMenu>
      <BurgerNav show={burgerStatus}>
        <CloseWrapper>
          <CustomClose onClick={() => setBurgerStatus(false)} />
        </CloseWrapper>
        {cars &&
          cars.map((car, index) => (
            <li key={index}>
              <a href="#">{car}</a>
            </li>
          ))}
        <li>
          <a href="#">Existing Inventory</a>
        </li>
        <li>
          <a href="#">Used Inventory</a>
        </li>
        <li>
          <a href="#">Trade-in</a>
        </li>
        <li>
          <a href="#">Cybertruck</a>
        </li>
        <li>
          <a href="#">Roadaster</a>
        </li>
      </BurgerNav>
    </Container>
  )
}

export default Header

const Container = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 50px;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
`

const Menu = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  justify-content: center;

  a {
    height: 30px;
    display: flex;
    align-items: center;
    border-radius: 100px;
    font-weight: 500;
    padding: 0 8px;
    flex-wrap: nowrap;
    &:hover {
      background-color: rgba(255, 255, 255, 0.2);
      transition: background-color 0.33s ease;
    }

    span {
      margin: 0 8px;
    }
  }

  @media (max-width: 768px) {
    display: none;
  }
`

const RightMenu = styled(Menu)`
  flex: none;
`

const CustomMenuMobile = styled(MenuIcon)`
  cursor: pointer;
  @media (min-width: 768px) {
    display: none !important;
  }
`

const CustomMenuDesktop = styled.div`
  cursor: pointer;
  @media (max-width: 768px) {
    display: none !important;
  }
`

const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background-color: white;
  width: 300px;
  z-index: 10;
  list-style: none;
  padding: 20px;
  display: flex;
  flex-direction: column;
  text-align: start;
  transform: ${(props) => (props.show ? 'translateX(0)' : 'translateX(100%)')};
  transition: transform 0.2s;

  li {
    padding: 15px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);

    a {
      font-weight: 600;
    }
  }
`

const CustomClose = styled(CloseIcon)`
  cursor: pointer;
`

const CloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`

const HeaderLogo = styled.img`
  width: 120px;
  height: 12px;
`
