import { Plat } from "./plat";

export interface Specialite {
  _id: any;
  name: string;
  description: string;
  isChecked: boolean;
  specImg: any;
  plats?: Plat[];

}