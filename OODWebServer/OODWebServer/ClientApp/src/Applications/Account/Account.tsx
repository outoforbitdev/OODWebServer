import * as React from 'react';
import { Component } from 'react';
import { IComponentProps } from '../Core/Core01/Components';
import { StyleThemes } from '../Core/Core01/Components/IComponentProps';
import { Creation } from './Components/Creation';
import { Login } from './Components/Login';
import { Profile } from './Components/Profile';

interface IAppProps {

}

interface IAppState {
    theme: StyleThemes;
    screen: Screens;
    userKey: string;
}

export enum Screens {
    Login = "Login",
    Create = "Create",
    Profile = "Profile",
}

export type screenChanger = (screen: Screens) => void;

export interface IScreenProps extends IComponentProps {
    changeScreen: screenChanger;
}

export default class Account extends Component<IAppProps, IAppState> {
    static displayName = Account.name;

    constructor(props: IAppProps) {
        super(props);
        this.state = {
            theme: StyleThemes.Light,
            screen: Screens.Profile,
            userKey: "",
        };
    }

    changeTheme(theme: StyleThemes) {
        this.setState({ theme: theme });
    }

    changeScreen(screen: Screens) {
        this.setState({ screen: screen });
    }

    changeUserKey(userKey: string) {
        this.setState({ userKey: userKey });
    }

    createScreen(screen: Screens) {
        const themer = this.changeTheme.bind(this);
        const screener = this.changeScreen.bind(this);
        const userKeyer = this.changeUserKey.bind(this);
        switch (screen) {
            case Screens.Login:
                return <Login changeTheme={themer} changeScreen={screener} setUserKey={userKeyer} />
            case Screens.Create:
                return <Creation changeTheme={themer} changeScreen={screener} setUserKey={userKeyer} />
            case Screens.Profile:
                return <Profile changeTheme={themer} changeScreen={screener} userKey={this.state.userKey} />
        }
    }

    render() {
        return (
            <div className={this.state.theme}>
                {this.createScreen(this.state.screen)}
            </div>
    );
  }
}
