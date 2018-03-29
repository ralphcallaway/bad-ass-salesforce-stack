// tslint:disable-next-line:no-implicit-dependencies
import { Opportunity } from "@src/generated/sobs";
import { Affix, Col, Icon, Layout, Row, Spin } from "antd";
import * as React from "react";

interface Props {
    id: string;
}

interface State {
    isLoading: boolean;
    oppName: string;
    touchCount: number;
}

const loadingIndicator = (
    <Affix offsetTop={300}>
        <Row type="flex" justify="center">
            <Col span={1}>
                <Icon spin={true} style={{ fontSize: 56 }} type="loading" />
            </Col>
        </Row>
    </Affix>
);

export class App extends React.Component<Props, State> {
    constructor(props) {
        super(props);
        this.state = { oppName: "Loading", isLoading: true, touchCount: 0 };
    }

    public async componentDidMount() {
        try {
            const oppRetrieve = await Opportunity.retrieve(
                `SELECT Name, Touches__c FROM Opportunity WHERE Id = '${this.props.id}'`);
            if (oppRetrieve.length > 0) {
                this.setState({
                    isLoading: false,
                    touchCount: oppRetrieve[0].touches,
                    oppName: oppRetrieve[0].name,
                });
            } else {
                this.setState({
                    isLoading: false,
                    oppName: `Couldn't find opportunity with id ${this.props.id}`,
                });
            }
        } catch (err) {
            this.setState({
                isLoading: false,
                oppName: `Error loading opportunity "${err}"`,
            });
        }
    }

    public render() {
        return (
            <Layout>
                <Spin indicator={loadingIndicator} spinning={this.state.isLoading}>
                    <Layout.Header>
                        <h1>Opportunity Toucher: "{this.state.oppName}"</h1>
                    </Layout.Header>
                    <Layout.Content>
                        Touches: {this.state.touchCount}
                    </Layout.Content>
                    <Layout.Footer>
                        Button Here
                    </Layout.Footer>
                </Spin>
            </Layout>
        );
    }
}
