export interface DropMenu {
  onClick?: Function;
  to?: string;
  icon?: string;
  event: string | number;
  text: string;
  disabled?: boolean;
  divider?: boolean;
}

export enum MenuEventEnum {
  REFRESH_PAGE,
  CLOSE_CURRENT,
  CLOSE_LEFT,
  CLOSE_RIGHT,
  CLOSE_OTHER,
  CLOSE_ALL,
  SCALE,
}