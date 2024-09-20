import { ReactNode } from "react";

export interface BurgerButtonProps {
  onClick: () => void;
}

export interface BurgerListProps {
  children: ReactNode;
}

export interface BurgerMenuState {
  items: BurgerMenuItem[];
}

export interface BurgerMenuProps extends BurgerMenuState {
  status: boolean;
  onClose: () => void;
}

export interface BurgerMenuItem {
  id: number;
  name: string;
}

export interface BurgerMenuCloseProps {
  onClose: () => void;
}
