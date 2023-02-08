export type IThemePayload = "light" | "dark";

export interface ILoginPayload {
  email: string;
  isAdmin: boolean;
  uid: string;
}

export interface IState extends ILoginPayload {
  theme: IThemePayload;
  loggedIn: boolean;
  loading: boolean;
}
