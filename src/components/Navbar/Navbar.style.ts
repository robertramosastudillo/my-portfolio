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
