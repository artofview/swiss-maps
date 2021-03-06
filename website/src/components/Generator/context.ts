import { Draft } from "immer/dist/internal";
import * as React from "react";
import { Options, Shape } from "src/shared";

export interface State {
  options: Options;
  highlightedShape?: Shape;
}

export interface Value {
  state: State;
  mutate: (f: (draft: Draft<State>) => void | State) => void;
}

const Context = React.createContext<Value>({
  state: {
    options: {
      format: "topojson",
      projection: "wgs84",
      dimensions: { width: 900, height: 600 },
      year: "2020",
      simplify: 0,
      shapes: new Set(["country"] as Array<Shape>),
    },
  },
  mutate: () => {
    throw new Error("Not Implemented");
  },
});

export const Provider = Context.Provider;
export const useContext = () => React.useContext(Context);
