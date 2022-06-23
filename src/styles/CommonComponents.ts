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

export const SecondaryButton: StyledComponent<
  "a",
  any,
  SecondaryButtonProps,
  never
> = styled.a`
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
  width: ${(p: SecondaryButtonProps) =>
    p.mobileWidth ? p.mobileWidth : "100%"};
  border: 1px solid #9168f7;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #e5d7fe;
  }

  @media (min-width: 768px) {
    font-size: 16px;
    width: ${(p: SecondaryButtonProps) =>
      p.tabletWidth ? p.mobileWidth : "100%"};
  }
`;

// No Found
export const NotFoundContainer = styled.div`
  padding: 120px 20px 0px 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-width: 768px) {
    padding: 140px 20px 0px 20px;
  }

  @media (min-width: 1280px) {
    font-size: 164px;
    margin-bottom: 16px;
  }
`;

export const NotFoundTitle = styled.h4`
  color: #6838f2;
  font-weight: 500;
  font-size: 44px;
  line-height: 50px;
  margin-bottom: 10px;
  text-align: center;

  @media (min-width: 768px) {
    font-size: 40px;
  }

  @media (min-width: 1280px) {
    font-size: 48px;
    margin-bottom: 16px;
  }
`;

export const NotFoundIcon = styled.h4`
  color: #caaffd;
  font-weight: 400;
  font-size: 116px;
  text-align: center;

  @media (min-width: 768px) {
    font-size: 124px;
  }

  @media (min-width: 1280px) {
    font-size: 136px;
    margin-bottom: 16px;
  }
`;

export const NotFoundSubTitle = styled.h4`
  font-family: "Poppins", sans-serif;
  font-size: 24px;
  font-weight: 300;
  color: #6838f2;
  text-align: center;
  margin-bottom: 20px;

  @media (min-width: 768px) {
    font-size: 30px;
  }
`;

export const TextUnderline = styled.a`
  display: block;
  color: #6838f2;
  font-weight: 500;
  font-family: "Poppins", sans-serif;
  cursor: pointer;
  position: relative;
  text-decoration: none;

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

  &:hover {
    &:before {
      transition: transform 0.3s ease;
      transform: scale(1);
    }
  }
`;
// No Found
