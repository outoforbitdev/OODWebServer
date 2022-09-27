import { Component, ReactNode } from 'react';
import '../Styles/Activity.css';

interface IActivity {
    name: string;
}

interface IActivityProps {
    children?: ReactNode,
}

export class Activity<P, S> extends Component<IActivityProps, S> implements IActivity {
    constructor(props: IActivityProps) {
        super(props);
        this.name = "Activity";
    }

    public name: string;

    render() {
        return(
        <div className={"OODCoreFrameworkActivity"}>
            {this.props.children}
        </div>);
    }
}