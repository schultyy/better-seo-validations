import { Location } from "./Location";

export interface AstChild {
  type: string;
  value: string;
  raw: string;
  depth?: number;
  loc: Location;
  children?: AstChild[];
}
