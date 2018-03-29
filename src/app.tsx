import * as React from "react";
import { Opportunity } from "@src/generated/sobs";

interface Props {
    id: string;
}

interface State {
    isLoading: boolean;
    oppName: string;
    touchCount: number;
}

export class App extends React.Component<Props, State> {
    constructor(props) {
        super(props);
        this.state = { oppName: "", isLoading: true, touchCount: 0 };
    }

    async componentDidMount() {
        try {
            const oppRetrieve = await Opportunity.retrieve(`SELECT Name, Touches__c FROM Opportunity WHERE Id = '${this.props.id}'`);
            if (oppRetrieve.length > 0) {
                this.setState({
                    isLoading: false,
                    touchCount: oppRetrieve[0].touches,
                    oppName: oppRetrieve[0].name
                });
            } else {
                this.setState({
                    isLoading: false,
                    oppName: `Couldn't find opportunity with id ${this.props.id}`
                })
            }
        } catch (err) {
            this.setState({
                isLoading: false,
                oppName: `Error loading opportunity "${err}"`
            });
        }
    }

    public render() {
        return (
            <div>
                <h1>Hello, World! Id: {this.props.id}</h1>
                <span>Name: "{this.state.oppName}"</span><br/>
                <span>Loading: "{this.state.isLoading ? 'Loading' : 'Not Loading'}"</span><br/>
                <span>Touch Count: "{this.state.touchCount}"</span>
            </div >
        );
    }
}
