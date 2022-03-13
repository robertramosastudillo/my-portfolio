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
  TitleOtherProyects,
  ContainerOtherProyects,
  OtherProyects,
  OtherProyect,
  MyJobItem,
  BgItem,
  ItemImage,
  LinkButton,
} from "./MyJob.style";

export const MyJob = () => {
  const featuredProjects = [
    {
      id: 1,
      image: "feactured-project-1.svg",
      name: "Freelance project",
      year: "2021",
      type_project: "Frontend Developer",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industries ever since the 1500s. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      tecnology_1: "Lorem Ipsum",
      tecnology_2: "Lorem Ipsum",
      link: "https://github.com/robertramosastudillo?tab=repositories",
    },
    {
      id: 2,
      image: "feactured-project-1.svg",
      name: "Freelance project 2",
      year: "2021",
      type_project: "Full Stack Developer",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industries standard dummy text ever since the 1500s. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      tecnology_1: "Lorem Ipsum",
      tecnology_2: "Lorem Ipsum",
      link: "https://github.com/robertramosastudillo?tab=repositories",
    },
  ];

  const otherProyects = [
    {
      id: 1,
      icon: "Computer.svg",
      name: "Freelance project 2",
      year: "2021",
      type_project: "Full Stack Developer",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      link: "https://github.com/robertramosastudillo?tab=repositories",
    },
    {
      id: 2,
      icon: "Computer.svg",
      name: "Freelance project 2",
      year: "2021",
      type_project: "Frontend Developer",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      link: "https://github.com/robertramosastudillo?tab=repositories",
    },
    {
      id: 3,
      icon: "Bussines.svg",
      name: "Freelance project 2",
      year: "2021",
      type_project: "Full Stack Developer",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      link: "https://github.com/robertramosastudillo?tab=repositories",
    },
  ];

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
          tecnology_1,
          tecnology_2,
          link,
        }) => (
          <ContainerFeacturedProjects key={id}>
            <FeacturedProject
              src={`projects/feactured/${image}`}
              alt="Proyecto 1"
              width="708"
              height="340"
            />

            <ContainerInfoFeacturedProject>
              <TextItem>
                {name} - {year}
              </TextItem>
              <TextPosition>{type_project}</TextPosition>
              <TextItem>{description}</TextItem>

              <AchievementContainer>
                <AchievementItem>{tecnology_1}</AchievementItem>
                <AchievementItem>{tecnology_2}</AchievementItem>
              </AchievementContainer>

              <ContainerButtons>
                <SecondaryButton href={link} target="_blank">
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
          {otherProyects.map(
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

                <TextItem>
                  {name} - {year}
                </TextItem>
                <TextPosition>{type_project}</TextPosition>
                <TextItem>{description}</TextItem>
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
