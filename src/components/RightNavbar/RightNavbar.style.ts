import styled from "styled-components";

export const Ul: any = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  color: #6838F2;

  li {
    padding: 18px 10px;
  }

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #6838F2;
    position: fixed;
    transform: ${({ open }: any) =>
      open ? "translateX(0)" : "translateX(100%)"};
    top: 0;
    right: 0;
    height: 100vh;
    width: 100%;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;

    li {
      color: #fff;
    }
  }
`;
