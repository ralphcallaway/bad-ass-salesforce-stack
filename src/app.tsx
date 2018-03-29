// tslint:disable-next-line:no-implicit-dependencies
import { Opportunity } from "@src/generated/sobs";
import { Affix, Button, Col, Icon, Layout, Row, Spin } from "antd";
import * as React from "react";

interface Props {
    id: string;
}

interface State {
    isOpptyLoading: boolean;
    isTouchSaving: boolean;
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
        this.state = {
            oppName: "Loading",
            isOpptyLoading: true,
            isTouchSaving: false,
            touchCount: 0,
        };
        this.touchOppty = this.touchOppty.bind(this);
    }

    public async touchOppty() {
        const newCount = this.state.touchCount + 1;
        this.setState({ isTouchSaving: true });
        const oppty = new Opportunity(); // ts-lint likes const, but we're still mutating?
        oppty.id = this.props.id;
        oppty.touches = newCount;
        try {
            await oppty.update(true);
            this.setState({
                isTouchSaving: false,
                touchCount: oppty.touches,
            });
        } catch (err) {
            alert(`Error touching oppty: ${err}`);
        }
    }

    public async componentDidMount() {
        try {
            const oppRetrieve = await Opportunity.retrieve(
                `SELECT Name, Touches__c FROM Opportunity WHERE Id = '${this.props.id}'`);
            if (oppRetrieve.length > 0) {
                this.setState({
                    isOpptyLoading: false,
                    touchCount: oppRetrieve[0].touches,
                    oppName: oppRetrieve[0].name,
                });
            } else {
                this.setState({
                    isOpptyLoading: false,
                    oppName: `Couldn't find opportunity with id ${this.props.id}`,
                });
            }
        } catch (err) {
            this.setState({
                isOpptyLoading: false,
                oppName: `Error loading opportunity "${err}"`,
            });
        }
    }

    public render() {
        return (
            <Layout>
                <Spin indicator={loadingIndicator} spinning={this.state.isOpptyLoading}>
                    <Layout.Header>
                        <h1>Opportunity Toucher: "{this.state.oppName}"</h1>
                    </Layout.Header>
                    <Layout.Content>
                        <h1 style={{marginLeft: "50px", marginTop: "0.67em"}}>
                            Touches: {this.state.touchCount}
                        </h1>
                    </Layout.Content>
                    <Layout.Footer>
                        <Button
                            type="primary"
                            onClick={this.touchOppty}
                            loading={this.state.isTouchSaving}
                        >
                                Touch Opportunity
                        </Button>
                    </Layout.Footer>
                </Spin>
            </Layout>
        );
    }
}
