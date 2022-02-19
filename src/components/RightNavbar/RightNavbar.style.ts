import styled from "styled-components";
// import HexagonBackgroundIcon from "../../assets/svgs/hexagon-background-icon.svg";
import HexagonBackgroundIcon from "../HexagonBackgroundIcon";
// HexagonBackgroundIcon

const SvgCompWrap = styled(HexagonBackgroundIcon)``;

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
      content: "${HexagonBackgroundIcon}";
      bottom: 0;
      width: 300px;
      height: 300px;
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

export const HeaderRightNavbar: any = styled.div``;
