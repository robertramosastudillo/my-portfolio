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
      short_name: "Playtech",
      full_name: "Playtechnologies S.A.S",
      start_date: "Febrero 2019",
      end_date: "Febrero 2020",
      position: "Frontend Developer",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio dolorum iste similique beatae dicta non, ducimus quae inventore ab nisi voluptate error quidem voluptatem explicabo repellendus laborum excepturi recusandae aperiamddddd!",
      achievement_1:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      achievement_2:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
      logo: "logo-playtech.svg",
    },
    {
      id: 2,
      short_name: "Sophos",
      full_name: "Sophos Solutions S.A.S",
      start_date: "Febrero 2020",
      end_date: "Actualmente",
      position: "Full Stack Developer",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio dolorum iste similique beatae dicta non, ducimus quae inventore ab nisi voluptate error quidem voluptatem explicabo repellendus.",
      achievement_1:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      achievement_2:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
      logo: "logo-sophos.svg",
    },
    {
      id: 3,
      short_name: "Meditec",
      full_name: "Meditec S.A.S",
      start_date: "Febrero 2020",
      end_date: "Actualmente",
      position: "Full Stack Developer",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio dolorum iste similique beatae dicta non, ducimus quae inventore ab nisi voluptate error quidem voluptato repellendus.",
      achievement_1:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      achievement_2:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
      logo: "logo-playtech.svg",
    },
    {
      id: 4,
      short_name: "Medex",
      full_name: "Medicamentos Especializados S.A.S",
      start_date: "Febrero 2020",
      end_date: "Actualmente",
      position: "Full Stack Developer",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio dolorum iste similique beatae dicta non, ducimus quae inventore ab nisi voluptate error quidem voluptatem explicabo repellendus.ddddddddddddddddddd",
      achievement_1:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      achievement_2:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
      logo: "logo-playtech.svg",
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
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industries standard dummy text ever
          since the 1500s.
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
                <LogoImage src={`companies/${logo}`} />
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
