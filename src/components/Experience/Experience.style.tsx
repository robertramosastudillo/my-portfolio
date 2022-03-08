import styled from "styled-components";

export const ContainerExperience = styled.section`
  display: flex;
  flex-direction: column;
  max-width: 1440px;
  margin: 0 auto;
  padding: 100px 20px 0px 20px;

  @media (min-width: 768px) {
    padding: 100px 48px 0px 48px;
  }

  @media (min-width: 1024px) {
    padding: 96px 92px 0px 92px;
  }

  @media (min-width: 1440px) {
    padding: 136px 92px 0px 92px;
  }
`;

export const ContainerInfoExperience = styled.div`
  @media (min-width: 1280px) {
    max-width: 494px;
  }

  @media (min-width: 1440px) {
    max-width: 565px;
  }
`;

export const Tabs = styled.div`
  display: flex;
  gap: 10px;
  overflow-y: auto;
  margin: 16px 0;

  ::-webkit-scrollbar {
    height: 0;
  }
`;

export const TabItem = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 45px;
  padding: 0px 20px;
  color: #6838f2;
  background-color: #fcfaff;
  border: 1px solid #6838f2;
  border-radius: 4px;
  cursor: pointer;

  &.active-tabs {
    background-color: #6838f2;
    color: #fcfaff;
  }
`;

export const TabContent = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #6838f2;
  margin-bottom: 20px;
  border-radius: 4px 4px 6px 6px;

  @media (min-width: 1024px) {
    flex-direction: row;
    border-radius: 4px 6px 6px 4px;
  }
`;
export const TabTextPosition = styled.h4`
  font-weight: 400;
  font-size: 20px;

  @media (min-width: 768px) {
    font-size: 24px;
    margin-bottom: 16px;
  }
`;

export const TabContentItem = styled.div`
  padding: 20px;
  color: #fcfaff;
  width: 100%;

  @media (min-width: 1024px) {
    padding: 40px;
  }
  &.content {
    display: none;
  }

  &.active-content {
    display: block;
  }
`;

export const TabTextItem = styled.p`
  color: #fcfaff;
  font-weight: 300;
  margin-bottom: 16px;

  @media (min-width: 768px) {
    margin-bottom: 24px;
  }
`;

export const AchievementContainer = styled.ul`
  display: flex;
  flex-direction: row;
`;
export const AchievementItem = styled.li`
  font-size: 14px;
  margin: 0px 20px;

  @media (min-width: 1024px) {
    margin: 0px 40px 0px 20px;
  }

  &:last-child {
    margin: 0;
  }
`;

export const Line = styled.div`
  height: 1px;
  margin: 20px auto auto auto;
  background-color: #fcfaff;
`;

export const ContainerLogo = styled.div`
  width: 120px;
  height: auto;
  margin: 20px 0px 0px 0px;
`;
export const LogoImage = styled.img`
  width: 100%;
  height: 100%;
`;

export const Layer1 = styled.div`
  height: 24px;
  background-color: #9168f7;

  @media (min-width: 768px) {
    height: 30px;
  }

  @media (min-width: 1024px) {
    width: 64px;
    height: inherit;
  }
`;
export const Layer2 = styled.div`
  height: 24px;
  background-color: #ab87fb;

  @media (min-width: 768px) {
    height: 30px;
  }

  @media (min-width: 1024px) {
    width: 64px;
    height: inherit;
  }
`;
export const Layer3 = styled.div`
  height: 24px;
  background-color: #caaffd;

  @media (min-width: 768px) {
    height: 30px;
  }

  @media (min-width: 1024px) {
    width: 64px;
    height: inherit;
  }
`;
export const Layer4 = styled.div`
  height: 24px;
  background-color: #e5d7fe;
  border-radius: 0px 0px 4px 4px;

  @media (min-width: 768px) {
    height: 30px;
  }

  @media (min-width: 1024px) {
    width: 64px;
    height: inherit;
    border-radius: 0px 4px 4px 0px;
  }
`;
