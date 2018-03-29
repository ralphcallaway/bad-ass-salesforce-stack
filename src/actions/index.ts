export enum ActionKeys {
    LOAD = "LOAD",
    LOADED = "LOADED",
    TOUCH = "TOUCH",
    TOUCHED = "TOUCHED",
}

export interface LoadAction {
    type: ActionKeys.LOAD;
    id: string;
}

export const load = (id: string): LoadAction => ({
   type: ActionKeys.LOAD,
   id,
});

export interface LoadedAction {
    type: ActionKeys.LOADED;
    oppName: string;
    touches: number;
}

export const loaded = (oppName: string, touches: number): LoadedAction => ({
    type: ActionKeys.LOADED,
    oppName,
    touches,
});

export interface TouchAction {
    type: ActionKeys.TOUCH;
    id: string;
    currentTouches: number;
}

export const touch = (id: string, currentTouches: number): TouchAction => ({
    type: ActionKeys.TOUCH,
    id,
    currentTouches,
});

export interface TouchedAction {
    type: ActionKeys.TOUCHED;
    newTouches: number;
}

export const touched = (newTouches: number): TouchedAction => ({
    type: ActionKeys.TOUCHED,
    newTouches,
});
