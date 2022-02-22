import { Token } from "@appTypes/ClientTypes";
import { MainStackNavigationProp, TabStackNavigationProp } from "@appTypes/NavigationTypes";
import { Dispatch, SetStateAction } from "react";

export default class Helper {

    private static instance: Helper;

    // private _logout: () => void;
    // private _dispatchToken: (token: Token) => void;
    private _tabNavigation: TabStackNavigationProp;
    private _mainNavigation: MainStackNavigationProp;
    private _actOnIndicator: (indicator: [boolean, Dispatch<SetStateAction<boolean>>]) => void;
    private _sleep: (timeOut: number) => Promise<void>;

    public static getInstance() {
        if (!Helper.instance) {
            Helper.instance = new Helper();
        }
        return Helper.instance;
    }


    // public set logout(logout: () => void) {
    //     this._logout = logout;
    // }
    // public get logout(): () => void {
    //     return this._logout;
    // }

    // public get dispatchToken(): (token: Token) => void {
    //     return this._dispatchToken;
    // }
    // public set dispatchToken(value: (token: Token) => void) {
    //     this._dispatchToken = value;
    // }

    public get tabNavigation() {
        return this._tabNavigation;
    }
    public set tabNavigation(value) {
        this._tabNavigation = value;
    }

    public get mainNavigation() {
        return this._mainNavigation;
    }
    public set mainNavigation(value) {
        this._mainNavigation = value;
    }

    public get actOnIndicator(): (indicator: [boolean, Dispatch<SetStateAction<boolean>>]) => void {
        return this._actOnIndicator;
    }
    public set actOnIndicator(value: (indicator: [boolean, Dispatch<SetStateAction<boolean>>]) => void) {
        this._actOnIndicator = value;
    }

    public get sleep(): (timeOut: number) => Promise<void> {
        return this._sleep;
    }
    public set sleep(value: (timeOut: number) => Promise<void>) {
        this._sleep = value;
    }

}