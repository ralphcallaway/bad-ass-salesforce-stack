import { GlobalState } from "@src/reducers";
import { ThunkAction } from "redux-thunk";

export enum TypeKeys {
  OTHER_ACTION = "__any_other_action_type__",
}

// use to prevent fallthrough on reducer?
export interface OtherAction {
    type: TypeKeys.OTHER_ACTION;
}

// Shorthand thunk to return a promise.
// adding this type here will help simplify imports and code
export type PromiseThunk<T> = ThunkAction<Promise<T>, GlobalState, void>;
