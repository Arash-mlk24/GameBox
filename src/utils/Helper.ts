import { Token } from "@appTypes/ClientTypes";
import { MainStackNavigationProp, TabStackNavigationProp } from "@appTypes/NavigationTypes";

export default class Helper {

    private static instance: Helper;

    // private _logout: () => void;
    // private _dispatchToken: (token: Token) => void;
    private _tabNavigation: TabStackNavigationProp;
    private _mainNavigation: MainStackNavigationProp;

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

}