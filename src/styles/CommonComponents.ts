import styled, { StyledComponent } from "styled-components";

export const SectionContainer = styled.div`
  padding: 80px 20px 0px 20px;
`;

export const SectionTitle = styled.h2`
  color: #6838f2;
  font-weight: 600;
  font-size: 24px;
  line-height: 50px;
  margin-bottom: 10px;

  span {
    display: block;
    color: #6838f2;
    font-size: 14px;
    font-weight: 300;
  }

  @media (min-width: 768px) {
    font-size: 24px;

    span {
      font-size: 16px;
    }
  }

  @media (min-width: 1280px) {
    font-size: 40px;
    margin-bottom: 16px;

    span {
      font-size: 16px;
    }
  }
`;

export interface SecondaryButtonProps {
  mobileWidth?: string;
  tabletWidth?: string;
  href?: string;
  target?: string;
}

export const SecondaryButton: StyledComponent<"a", any, SecondaryButtonProps, never> = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  background-color: #fcfaff;
  font-size: 14px;
  color: #9168f7;
  font-weight: 400;
  font-family: "Poppins", sans-serif;
  height: 45px;
  width: ${(p: SecondaryButtonProps) => (p.mobileWidth ? p.mobileWidth : "100%")};
  border: 1px solid #9168f7;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #e5d7fe;
  }

  @media (min-width: 768px) {
    font-size: 16px;
    width: ${(p: SecondaryButtonProps) => (p.tabletWidth ? p.mobileWidth : "100%")};
  }
`;
