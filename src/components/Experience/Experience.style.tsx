import styled from "styled-components";

export const ContainerExperience = styled.section`
  display: flex;
  flex-direction: column;
  padding: 100px 20px 0px 20px;
  border: 1px solid green;
`;

export const ContainerInfoExperience = styled.div``;

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
  border: 1px solid red;
  background-color: #6838f2;
`;
export const TabTextPosition = styled.h4`
  font-weight: 400;
  font-size: 20px;
`;

export const TabContentItem = styled.div`
  padding: 20px;
  color: #fcfaff;
  transform: 1s;

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
`;

export const AchievementContainer = styled.ul`
  display: flex;
  flex-direction: row;
`;
export const AchievementItem = styled.li`
  font-size: 14px;
  margin: 0px 20px;

  &:last-child {
    margin: 0;
  }
`;

export const Layer1 = styled.div`
  height: 20px;
  background-color: #9168f7;
`;
export const Layer2 = styled.div`
  height: 20px;
  background-color: #ab87fb;
`;
export const Layer3 = styled.div`
  height: 20px;
  background-color: #caaffd;
`;
export const Layer4 = styled.div`
  height: 20px;
  background-color: #e5d7fe;
`;
