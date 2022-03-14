import styled from "styled-components";

export const ContainerFeacturedProjects = styled.div`
  margin-bottom: 316px;
  position: relative;

  @media (min-width: 768px) {
    margin-bottom: 272px;
  }

  @media (min-width: 1024px) {
    margin-bottom: 124px;

    &:nth-child(3) {
      margin-bottom: 0;
    }
  }
`;

export const ContainerInfoFeacturedProject = styled.div`
  position: absolute;
  top: 80%;
  background-color: #fcfaff;
  box-shadow: 0px 0px 10px rgba(229, 215, 254, 0.5);
  margin: 0px 20px;
  padding: 20px;
  border-radius: 4px;

  @media (min-width: 768px) {
    margin: 0px 48px;
  }

  @media (min-width: 1024px) {
    box-shadow: -5px 5px 10px rgba(202, 175, 253, 0.5);
    padding: 30px;
    width: 504px;
    margin: 0px 92px;
    right: 0;
    top: -12%;
  }

  @media (min-width: 1440px) {
    width: 648px;
  }
`;

export const FeacturedProject = styled.img`
  display: block;
  width: 100%;

  @media (min-width: 1024px) {
    width: 708px;
    margin-left: 92px;
  }

  @media (min-width: 1440px) {
    width: 780px;
  }
`;

export const ContainerMyJob = styled.section`
  display: flex;
  flex-direction: column;
  max-width: 1440px;
  margin: 0 auto;
  padding: 100px 0px 0px 0px;

  & ${ContainerFeacturedProjects}:nth-child(3) {
    @media (min-width: 1024px) {
      display: flex;
      justify-content: flex-end;
      margin-right: 92px;
    }
  }

  & ${ContainerFeacturedProjects}:nth-child(3) ${ContainerInfoFeacturedProject} {
   @media (min-width: 1024px) {
      left: 0;
    } 
  }

  @media (min-width: 1440px) {
    padding: 136px 0px 0px 0px;
  }
`;

export const ContainerInfoMyJob = styled.div`
  margin: 0px 20px 36px 20px;

  @media (min-width: 768px) {
    margin: 0px 48px 36px 48px;
  }

  @media (min-width: 1024px) {
    margin: 0px 92px 64px 92px;
  }

  @media (min-width: 1280px) {
    max-width: 494px;
  }

  @media (min-width: 1440px) {
    max-width: 565px;
  }
`;

// INFO PROYECT
export const TextItem = styled.p`
  color: #6838f2;
  font-weight: 300;
  margin-bottom: 8px;

  @media (min-width: 1024px) {
    margin-bottom: 16px;
  }
`;

export const TextPosition = styled.h2`
  font-weight: 500;
  font-size: 20px;
  color: #6838f2;
  margin-bottom: 8px;
`;

export const AchievementContainer = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 12px 0px 0px 0px;
`;
export const AchievementItem = styled.li`
  font-size: 14px;
  margin: 0px 20px;
  color: #6838f2;

  @media (min-width: 1024px) {
    margin: 0px 40px 0px 20px;
  }

  &:last-child {
    margin: 0;
  }
`;

export const SecondaryButton = styled.a`
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
  width: 143px;
  border: 1px solid #9168f7;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #e5d7fe;
  }

  @media (min-width: 768px) {
    font-size: 16px;
    width: 160px;
  }
`;
// INFO PROYECT

// OTHER PROYECTS
export const ContainerOtherProyects = styled.div`
  padding: 40px 20px 20px 20px;

  @media (min-width: 768px) {
    padding: 40px 48px 20px 48px;
  }

  @media (min-width: 1024px) {
    padding: 60px 96px 40px 96px;
  }
`;

export const TitleOtherProyects = styled.h4`
  font-size: 24px;
  color: #6838f2;
  font-family: "Poppins", sans-serif;
  line-height: 30px;
  font-weight: 600;
  padding: 0 0 20px 0;
  border-bottom: 1px solid #9168f7;

  span {
    display: block;
    color: #caaffd;
    font-weight: 400;
  }

  @media (min-width: 1280px) {
    font-size: 40px;
    line-height: 50px;
  }
`;

export const OtherProyects = styled.div`
  margin: 20px auto;
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (min-width: 1024px) {
    flex-direction: row;
  }
`;

export const BgItem = styled.div`
  width: 40px;
  height: 40px;
  background-color: #e5d7fe;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: 1024px) {
    width: 48px;
    height: 48px;
  }
`;

export const OtherProyect = styled.div`
  border: 1px solid #9168f7;
  border-radius: 4px;
  padding: 20px;
  background-color: #FCFAFF;

  &:hover {
    background-color: #E5D7FE;
      & ${BgItem} {
        border: 1px solid #6838F2;
      }
    }
`;

export const ContainerButtons = styled.div`
  margin-top: 20px;
`;

export const LinkButton = styled.a`
  font-size: 14px;
  color: #6838F2;
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

  @media (min-width: 768px) {
    font-size: 16px;
  }
`;

export const MyJobItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  margin-bottom: 16px;
`;

export const ItemImage:any = styled.img`
  width: 20px;
  height: 20px;

  @media (min-width: 1024px) {
    width: 24px;
    height: 24px;
  }
`;

// OTHER PROYECTS
