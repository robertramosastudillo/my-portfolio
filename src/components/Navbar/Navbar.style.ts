import styled, { StyledComponent } from "styled-components";
import { MouseEventHandler } from "react";
import { Link } from "react-scroll";

export const NavbarStyle = styled.div`
  width: 100%;
  height: 55px;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgba(252, 250, 255, 1);
  backdrop-filter: blur(10px);
  box-shadow: 0 0 10px rgb(0 0 0 / 10%);
  position: fixed;
  z-index: 100;

  @media (min-width: 768px) {
    height: 72px;
    padding: 0 48px;
  }

  @media (min-width: 1024px) {
    padding: 0 92px;
  }
`;

export const Logo = styled.img`
  cursor: pointer;
  width: 54px;
  height: 18px;

  @media (min-width: 768px) {
    width: 66px;
    height: 22px;
  }
`;

export interface StyledBurgerProps {
  open: boolean;
  onClick?: MouseEventHandler<HTMLDivElement> | undefined;
}


// BURGER MENU
export const StyledBurger: StyledComponent<"div", any, StyledBurgerProps, never> = styled.div`
  width: 2rem;
  height: 2rem;
  position: fixed;
  top: 15px;
  right: 20px;
  z-index: 20;
  display: none;
  cursor: pointer;

  @media (max-width: 768px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background-color: ${({ open }: StyledBurgerProps) => (open ? "#fff" : "#6838F2")};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;

    &:nth-child(1) {
      transform: ${({ open }: StyledBurgerProps) => (open ? "rotate(45deg)" : "rotate(0)")};
      top: 0;
    }

    &:nth-child(2) {
      transform: ${({ open }: StyledBurgerProps) =>
        open ? "translateX(100%)" : "translateX(0)"};
      opacity: ${({ open }: StyledBurgerProps) => (open ? 0 : 1)};
    }

    &:nth-child(3) {
      transform: ${({ open }: StyledBurgerProps) => (open ? "rotate(-45deg)" : "rotate(0)")};
      bottom: 0;
    }
  }
`;
// BURGER MENU

// RIGHT NAVBAR

export const Ul: StyledComponent<"span", any, StyledBurgerProps, never> = styled.span`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  color: #6838f2;

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #6838f2;
    position: fixed;
    transform: ${({ open }: StyledBurgerProps) =>
      open ? "translateX(0)" : "translateX(100%)"};
    top: 0;
    right: 0;
    height: 100vh;
    width: 100%;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;

    &:after {
      position: absolute;
      content: url("navbar/hexan-bg-menu.svg");
      bottom: -6px;
      left: 0;
    }
  }
`;

export const NavLinkLogo = styled(Link)`
  text-decoration: none;
`;

export const NavLink = styled(Link)`
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  font-size: 16px;
  margin: 0px 10px;
  cursor: pointer;
  position: relative;
  text-decoration: none;
  color: #6838F2;

  &:before {
    content: "";
    width: 100%;
    height: 2px;
    background-color: #9168f7;
    position: absolute;
    bottom: 2px;
    left: 0;
    transition: transform 0.3s ease;
    transform: scale(0);
  }

  &.active,
  &:hover {
    &:before {
      transition: transform 0.3s ease;
      transform: scale(1);
    }
  }

  &:last-of-type {
    margin-right: 0;
  }

  @media (max-width: 768px) {
    color: #fff;
    margin: 8px 20px;
    width: 130px;
    &:last-of-type {
      margin-right: 20px;
    }

    &:before {
      content: "";
      width: 100%;
      height: 2px;
      background-color: #9168f7;
      position: absolute;
      bottom: 0;
      left: 0;
      transition: transform 0.3s ease;
      transform: scale(0);
    }
  }

  @media (min-width: 1024px) {
    margin: 0px 24px;
  }
`;

export const RightNavbarHeader = styled.div`
  display: none;

  @media (max-width: 768px) {
    cursor: pointer;
    display: block;
    padding: 40px 20px 10px 20px;
    font-size: 20px;
    line-height: 25px;
  }
`;

export const RightNavbarHeaderTitle = styled.h4`
  @media (max-width: 768px) {
    color: #ffffff;
    font-weight: 500;
  }
`;

export const RightNavbarHeaderSubTitle = styled.p`
  @media (max-width: 768px) {
    color: #caaffd;
    font-weight: 400;
  }
`;

// RIGHT NAVBAR
