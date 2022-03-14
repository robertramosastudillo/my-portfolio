import React, { useState } from "react";
import companies from '../../mocks/companies.json'

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

  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index: number) => {
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
