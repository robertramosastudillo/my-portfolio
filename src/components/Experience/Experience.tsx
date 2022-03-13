import React, { useState } from "react";
import { SectionTitle } from "../../styles/CommonComponents";
import {
  AchievementContainer,
  AchievementItem,
  ContainerExperience,
  ContainerInfoExperience,
  ContainerLogo,
  Layer1,
  Layer2,
  Layer3,
  Layer4,
  Line,
  LogoImage,
  TabContent,
  TabContentItem,
  TabItem,
  Tabs,
  TabTextItem,
  TabTextPosition,
} from "./Experience.style";

export const Experience = () => {
  const companies = [
    {
      id: 1,
      short_name: "Sophos",
      full_name: "Sophos Solutions S.A.S",
      start_date: "Febrero 2021",
      end_date: "Actualmente",
      position: "Frontend Developer",
      description:
        "Desarrollo de interfaces para productos digitales orientado a créditos para Tuya S.A",
      achievement_1:
        "Desarrollo de Interfaces de usuario responsivas para dispositivos mobiles y desktops",
      achievement_2:
        "Enfocar la estructura del proyecto a mono repositorio e implementandole las diferentes marcas",
      logo: "logo-sophos.svg",
    },
    {
      id: 2,
      short_name: "PlayTechnologies",
      full_name: "Playtechnologies S.A.S",
      start_date: "Junio 2019",
      end_date: "Febrero 2021",
      position: "Full Stack Developer",
      description:
        "Desarrollo e integracion de soluciones informaticas a la medida para Syscasoft S.A.S",
      achievement_1:
        "Creación de Microservicios Implementando Arquitectura Hexagonal Y Multi-Tenancy",
      achievement_2:
        "Desarrollo de las Interfaces de usuario, consumo de datos y envio de peticiones HTTP",
      logo: "logo-playtech.svg",
    },
    {
      id: 3,
      short_name: "GrupoMediq",
      full_name: "Meditec S.A.S",
      start_date: "Abril 2020",
      end_date: "Junio 2020",
      position: "Backend Developer",
      description:
        "Desarrollo de API para el consumo y control de datos de pacientes e historias medicas",
      achievement_1: "Consumo y manejo de datos de APIs de terceros",
      achievement_2:
        "Alimentar la Base de Datos con la información extraida de archivos de Excel",
      logo: "logo-grupomediq.png",
    },
  ];

  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index: any) => {
    setToggleState(index);
  };

  return (
    <ContainerExperience id="experience">
      <ContainerInfoExperience>
        <SectionTitle>
          <span>02.</span>Experiencia
        </SectionTitle>
        <p>
          Llevo alrededor de <b>4 años</b> como desarrollador de software
          ofreciendo mis servicios a diferentes tipo de industrias como lo son
          las <b>Fintechs, Retailers y Salud.</b>
        </p>
      </ContainerInfoExperience>

      <Tabs>
        {companies.map(({ id, short_name }) => (
          <TabItem
            key={id}
            className={toggleState === id ? "active-tabs" : "tabs"}
            onClick={() => toggleTab(id)}
          >
            {short_name}
          </TabItem>
        ))}
      </Tabs>
      <TabContent>
        {companies.map(
          ({
            id,
            description,
            start_date,
            end_date,
            position,
            achievement_1,
            achievement_2,
            logo,
            full_name,
          }) => (
            <TabContentItem
              key={id}
              className={
                toggleState === id ? "content  active-content" : "content"
              }
            >
              <TabTextItem>
                {start_date} - {end_date}
              </TabTextItem>
              <TabTextPosition>{position}</TabTextPosition>
              <TabTextItem>{description}</TabTextItem>

              <AchievementContainer>
                <AchievementItem>{achievement_1}</AchievementItem>
                <AchievementItem>{achievement_2}</AchievementItem>
              </AchievementContainer>

              <Line></Line>

              <ContainerLogo>
                <LogoImage src={`companies/${logo}`} alt={full_name} />
              </ContainerLogo>
            </TabContentItem>
          )
        )}

        <Layer1></Layer1>
        <Layer2></Layer2>
        <Layer3></Layer3>
        <Layer4></Layer4>
      </TabContent>
    </ContainerExperience>
  );
};
