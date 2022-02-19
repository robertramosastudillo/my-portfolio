import { useState } from "react";
import { RightNavbar } from "../RightNavbar/RightNavbar";
import { StyledBurger } from "./BurgerMenu.style";

export const BurgerMenu = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <StyledBurger open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </StyledBurger>
      <RightNavbar open={open} />
    </>
  );
};
