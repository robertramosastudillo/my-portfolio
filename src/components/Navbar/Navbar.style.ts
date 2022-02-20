import styled from "styled-components";

export const NavbarStyle = styled.nav`
  width: 100%;
  height: 55px;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* background-color: rgba(252, 250, 255, 0.1); */
  background-color: rgba(252, 250, 255, 1);
  backdrop-filter: blur(10px);
  box-shadow: 0 0 10px rgb(0 0 0 / 10%);
  position: fixed;

  @media (min-width: 768px) {
    height: 72px;
    padding: 0 48px;
  }

  @media (min-width: 1024px) {
    padding: 0 92px;
  }
`;

export const Logo = styled.img`
  width: 54px;
  height: 18px;

  @media (min-width: 768px) {
    width: 66px;
    height: 22px;
  }
`;

// BURGER MENU
export const StyledBurger: any = styled.div`
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
    background-color: ${({ open }: any) => (open ? "#fff" : "#6838F2")};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;

    &:nth-child(1) {
      transform: ${({ open }: any) => (open ? "rotate(45deg)" : "rotate(0)")};
      top: 0;
    }

    &:nth-child(2) {
      transform: ${({ open }: any) =>
        open ? "translateX(100%)" : "translateX(0)"};
      opacity: ${({ open }: any) => (open ? 0 : 1)};
    }

    &:nth-child(3) {
      transform: ${({ open }: any) => (open ? "rotate(-45deg)" : "rotate(0)")};
      bottom: 0;
    }
  }
`;
// BURGER MENU

// RIGHT NAVBAR

export const Ul: any = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  color: #6838f2;

  li {
    font-family: "Poppins", sans-serif;
    font-weight: 400;
    font-size: 16px;
    padding: 18px 10px;
    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }

    &:last-of-type {
      padding-right: 0;
    }
  }

  div {
    display: none;
  }

  @media (max-width: 768px) {
    div {
      display: block;
      padding: 40px 20px 10px 20px;
      font-size: 20px;
      line-height: 25px;

      h4 {
        color: #ffffff;
        font-weight: 500;
      }

      p {
        color: #caaffd;
        font-weight: 400;
      }
    }

    flex-flow: column nowrap;
    background-color: #6838f2;
    position: fixed;
    transform: ${({ open }: any) =>
      open ? "translateX(0)" : "translateX(100%)"};
    top: 0;
    right: 0;
    height: 100vh;
    width: 100%;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;

    &:after {
      position: absolute;
      /* content: url("/logo-background-icon-2.svg"); */
    }

    li {
      color: #fff;
      padding: 8px 20px;
    }
  }

  @media (min-width: 1024px) {
    li {
      padding: 18px 24px;
    }
  }
`;

// RIGHT NAVBAR
