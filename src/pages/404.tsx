import Link from "next/link";
import React from "react";
import {
  NotFoundContainer,
  NotFoundIcon,
  NotFoundSubTitle,
  NotFoundTitle,
  TextUnderline,
} from "../styles/CommonComponents";

const NotFound = () => {
  return (
    <NotFoundContainer>
      <NotFoundTitle>Ooops...</NotFoundTitle>
      <NotFoundIcon>404</NotFoundIcon>
      <NotFoundSubTitle>Esta pagina no se encuentra</NotFoundSubTitle>
      <NotFoundSubTitle>
        Volver a la
        <Link href="/" passHref={true}>
          <TextUnderline>Página de inicio</TextUnderline>
        </Link>
      </NotFoundSubTitle>
    </NotFoundContainer>
  );
};

export default NotFound;
