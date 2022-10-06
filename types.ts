
import type * as StateJson from "./public/data/state.json";

export type IPhoto = typeof StateJson["photos"]["1a"];
export type Photos = Record<IPhoto["id"], IPhoto>;

export type IPrint = typeof StateJson["prints"]["1q"];
export type Prints = Record<IPrint["printId"], IPrint>;
