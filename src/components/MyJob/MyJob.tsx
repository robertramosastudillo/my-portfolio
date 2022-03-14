import React from "react";

import otherProjects from "../../mocks/otherProjects.json";
import featuredProjects from "../../mocks/featuredProjects.json";

import { SecondaryButton, SectionTitle } from "../../styles/CommonComponents";
import {
  ContainerInfoMyJob,
  ContainerMyJob,
  ContainerFeacturedProjects,
  FeacturedProject,
  ContainerInfoFeacturedProject,
  TextPosition,
  TextItem,
  AchievementContainer,
  ContainerButtons,
  TitleOtherProyects,
  ContainerOtherProyects,
  OtherProyects,
  OtherProyect,
  MyJobItem,
  BgItem,
  ItemImage,
  LinkButton,
  MyJobContentTextItem,
} from "./MyJob.style";

export const MyJob = () => {
  return (
    <ContainerMyJob id="my-job">
      <ContainerInfoMyJob>
        <SectionTitle>
          <span>03.</span>Mi trabajo
        </SectionTitle>
        <p>
          A lo largo del tiempo he aprendido una gran cantidad de
          <b> habilidades técnicas</b> en cada proyecto que he realizado, esto
          me ha ayudado a mejorar cada vez mas en el desarrollo de productos
          digitales, <b>estos son algunos de ellos.</b>
        </p>
      </ContainerInfoMyJob>
      {featuredProjects.map(
        ({
          id,
          name,
          image,
          year,
          type_project,
          description,
          tecnologies,
          link,
        }) => (
          <ContainerFeacturedProjects key={id}>
            <FeacturedProject
              src={`projects/feactured/${image}`}
              alt={`${image} - ${type_project}`}
              width="auto"
              height="auto"
            />
            <ContainerInfoFeacturedProject>
              <TextItem>
                {name} - {year}
              </TextItem>
              <TextPosition>{type_project}</TextPosition>
              <TextItem>{description}</TextItem>

              <AchievementContainer>
                {tecnologies?.map(({ techId, tech_title, tech_image }) => (
                  <MyJobItem key={techId}>
                    <BgItem>
                      <ItemImage
                        src={`tecnologies/${tech_image}`}
                        alt={tech_title}
                      />
                    </BgItem>
                    <p>{tech_title}</p>
                  </MyJobItem>
                ))}
              </AchievementContainer>

              <ContainerButtons>
                <SecondaryButton
                  mobileWidth="143px"
                  tabletWidth="160px"
                  href={link}
                  target="_blank"
                >
                  Link al proyecto
                </SecondaryButton>
              </ContainerButtons>
            </ContainerInfoFeacturedProject>
          </ContainerFeacturedProjects>
        )
      )}

      <ContainerOtherProyects>
        <TitleOtherProyects>
          Otros proyectos <span>en los que he trabajado</span>
        </TitleOtherProyects>

        <OtherProyects>
          {otherProjects.map(
            ({ id, name, year, type_project, description, icon, link }) => (
              <OtherProyect key={id}>
                <MyJobItem>
                  <BgItem>
                    <ItemImage
                      src={`projects/others/${icon}`}
                      alt={type_project}
                    />
                  </BgItem>
                </MyJobItem>

                <MyJobContentTextItem>
                  <TextItem>
                    {name} - {year}
                  </TextItem>
                  <TextPosition>{type_project}</TextPosition>
                  <TextItem>{description}</TextItem>
                </MyJobContentTextItem>
                <ContainerButtons>
                  <LinkButton href={link} target="_blank">
                    Link al proyecto
                  </LinkButton>
                </ContainerButtons>
              </OtherProyect>
            )
          )}
        </OtherProyects>
      </ContainerOtherProyects>
    </ContainerMyJob>
  );
};
