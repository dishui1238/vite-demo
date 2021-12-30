export interface MenuSetting {
  collapsed: boolean;
}

export type ThemeType = 'dark' | 'light'

export interface MenuItem {
  path: string,
  name: string,
  orderNo: number,
  hideMenu?: boolean,
  icon?: '',
  title: string,
  children?: MenuItem[]
}