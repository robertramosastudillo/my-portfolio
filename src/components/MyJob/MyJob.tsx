import React from "react";
import { SectionTitle } from "../../styles/CommonComponents";
import {
  ContainerInfoMyJob,
  ContainerMyJob,
  ContainerFeacturedProjects,
  FeacturedProject,
  ContainerInfoFeacturedProject,
  TextPosition,
  TextItem,
  AchievementContainer,
  AchievementItem,
  ContainerButtons,
  SecondaryButton,
} from "./MyJob.style";

export const MyJob = () => {
  return (
    <ContainerMyJob id="my-job">
      <ContainerInfoMyJob>
        <SectionTitle>
          <span>03.</span>Mi trabajo
        </SectionTitle>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industries standard dummy text ever
          since the 1500s.
        </p>
      </ContainerInfoMyJob>
      {/* 1 */}
      <ContainerFeacturedProjects>
        <FeacturedProject
          src="projects/feactured-project-1.svg"
          alt="Proyecto 1"
        />

        <ContainerInfoFeacturedProject>
          <TextItem>Freelance project - 2021</TextItem>
          <TextPosition>Frontend Developer</TextPosition>
          <TextItem>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industries standard dummy text
            ever since the 1500s. Lorem Ipsum is simply dummy text of the
            printing and typesetting industry.
          </TextItem>

          <AchievementContainer>
            <AchievementItem>Lorem Ipsum</AchievementItem>
            <AchievementItem>Lorem Ipsum</AchievementItem>
          </AchievementContainer>

          <ContainerButtons>
            <SecondaryButton>Link al proyecto</SecondaryButton>
          </ContainerButtons>
        </ContainerInfoFeacturedProject>
      </ContainerFeacturedProjects>
      {/* 2 */}
      <ContainerFeacturedProjects>
        <FeacturedProject
          src="projects/feactured-project-1.svg"
          alt="Proyecto 1"
        />
        <ContainerInfoFeacturedProject>
          <TextItem>Freelance project - 2021</TextItem>
          <TextPosition>Frontend Developer</TextPosition>
          <TextItem>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industries standard dummy text
            ever since the 1500s. Lorem Ipsum is simply dummy text of the
            printing and typesetting industry.
          </TextItem>

          <AchievementContainer>
            <AchievementItem>Lorem Ipsum</AchievementItem>
            <AchievementItem>Lorem Ipsum</AchievementItem>
          </AchievementContainer>

          <ContainerButtons>
            <SecondaryButton>Link al proyecto</SecondaryButton>
          </ContainerButtons>
        </ContainerInfoFeacturedProject>
      </ContainerFeacturedProjects>
    </ContainerMyJob>
  );
};
