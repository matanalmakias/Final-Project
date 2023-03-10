import { type } from "os";

export type DarkModeContextType = {
  darkMode: boolean;
  toggleDarkMode: () => void;
};

// think data structure and actions:
export type AuthContextType = {
  isLoggedIn: boolean;
  isAdminState?: boolean;
  isModerator?: boolean;
  isManager?: boolean,
  username?: string;
  email?: string;
  token?: string;
  login: (username: string, email: string, token: string) => void;
  logout: () => void;
};
// think data structure and actions:

export type ChildProps = {
  children?: React.ReactNode;
};

export type RegisterFormType = {
  username: string;
  email: string;
  password: string;
};

export type LoginFormType = {
  email: string;
  password: string;
};

export type HomeType = {
  h1: string;
  h2: string;
  description: string;
  image: string;
};

export type GatherListType = {
  _id: string;
  map: string;
  maxPlayers: number;
  __v: number;
  date: string;
  onGoing?: boolean;
  players?: string[];
};

export type UserLocalStorageType = {
  email: string;
  username: string;
  token: string;
  roles: string[];
};

export type OnGoingGatherType = {
  id?: string;
  players: string[];
  maxplayers: number;
  map: () => void;
  add: () => void;
  remove: () => void;
};

export type CreateGatherType = {
  map: string;
  maxplayers: number;
};
export type GatherAddFormType = {
  map: string;
  maxPlayers: number;
};

export type playersFrontType = {
  string: undefined;
};

export interface EditGatherModalType {
  children: React.ReactNode;
  titleOpen: string;
  titleClose?: string;
}

export type EditGatherModalFormType = {
  map: string;
  maxPlayers: number;
  status: boolean | undefined;
  players: string[] | undefined;
};

export type handleEditMapType = {
  map: string;
};
export type handleEditMaxPlayersType = {
  maxPlayers: number;
};
