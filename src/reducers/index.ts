// tslint:disable-next-line:no-implicit-dependencies
import { ActionKeys, LoadAction, LoadedAction, TouchAction, TouchedAction } from "@src/actions";

export interface GlobalState {
    id: string;
    isOpptyLoading: boolean;
    isTouchSaving: boolean;
    oppName: string;
    touchCount: number;
}

const initialState: GlobalState  = {
    id: "",
    isOpptyLoading: false,
    isTouchSaving: false,
    oppName: "",
    touchCount: 0,
};

type Action = LoadAction | LoadedAction | TouchAction | TouchedAction;

export const rootReducer = (state: GlobalState, action: Action): GlobalState => {
    const newState: GlobalState = Object.assign({}, state);
    switch (action.type) {
        case ActionKeys.LOAD:
            console.log("LOAD", action);
            newState.id = action.id;
            newState.isOpptyLoading = true;
            return newState;
        case ActionKeys.LOADED:
            console.log("LOADED", action);
            newState.oppName = action.oppName;
            newState.isOpptyLoading = false;
            newState.touchCount = action.touches;
            return newState;
        case ActionKeys.TOUCH:
            console.log("TOUCH", action);
            newState.isTouchSaving = true;
            return newState;
        case ActionKeys.TOUCHED:
            console.log("TOUCHED", action);
            newState.isTouchSaving = false;
            newState.touchCount = action.newTouches;
            return newState;
        default:
            return state;
    }
};
