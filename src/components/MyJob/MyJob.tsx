import React from "react";
import { SectionTitle } from "../../styles/CommonComponents";
import {
  ContainerInfoMyJob,
  ContainerMyJob,
  ContainerFeacturedProjects,
  FeacturedProject,
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
      <ContainerFeacturedProjects>
        <FeacturedProject>
 
        </FeacturedProject>
      </ContainerFeacturedProjects>
    </ContainerMyJob>
  );
};
