// tslint:disable-next-line:no-implicit-dependencies
import { touch, touched } from "@src/actions";
// tslint:disable-next-line:no-implicit-dependencies
import { Opportunity } from "@src/generated/sobs";
// tslint:disable-next-line:no-implicit-dependencies
import { GlobalState } from "@src/reducers";
import { Affix, Button, Col, Icon, Layout, Row, Spin } from "antd";
import * as React from "react";
import { connect } from "react-redux";

interface Props {
    id: string;
    isOpptyLoading: boolean;
    isTouchSaving: boolean;
    oppName: string;
    touchCount: number;
    touchOppty: (id: string, currentTouches: number) => void;
    touchedOppty: (newTouches: number) => void;
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

class InnerApp extends React.Component<Props, {}> {
    constructor(props) {
        super(props);
        this.touchOppty = this.touchOppty.bind(this);
        this.touchedOppty = this.touchedOppty.bind(this);
    }

    // TEMP
    public touchedOppty() {
        this.props.touchedOppty(this.props.touchCount + 1);
    }

    public touchOppty() {
        this.props.touchOppty(this.props.id, this.props.touchCount);
        setTimeout(this.touchedOppty, 2000);
    }

    // public async touchOppty() {
    //     const newCount = this.state.touchCount + 1;
    //     this.setState({ isTouchSaving: true });
    //     const oppty = new Opportunity(); // ts-lint likes const, but we're still mutating?
    //     oppty.id = this.props.id;
    //     oppty.touches = newCount;
    //     try {
    //         await oppty.update(true);
    //         this.setState({
    //             isTouchSaving: false,
    //             touchCount: oppty.touches,
    //         });
    //     } catch (err) {
    //         alert(`Error touching oppty: ${err}`);
    //     }
    // }

    // public async componentDidMount() {
    //     try {
    //         const oppRetrieve = await Opportunity.retrieve(
    //             `SELECT Name, Touches__c FROM Opportunity WHERE Id = '${this.props.id}'`);
    //         if (oppRetrieve.length > 0) {
    //             this.setState({
    //                 isOpptyLoading: false,
    //                 touchCount: oppRetrieve[0].touches,
    //                 oppName: oppRetrieve[0].name,
    //             });
    //         } else {
    //             this.setState({
    //                 isOpptyLoading: false,
    //                 oppName: `Couldn't find opportunity with id ${this.props.id}`,
    //             });
    //         }
    //     } catch (err) {
    //         this.setState({
    //             isOpptyLoading: false,
    //             oppName: `Error loading opportunity "${err}"`,
    //         });
    //     }
    // }

    public render() {
        return (
            <Layout>
                <Spin indicator={loadingIndicator} spinning={this.props.isOpptyLoading}>
                    <Layout.Header>
                        <h1>Opportunity Toucher: "{this.props.oppName}"</h1>
                    </Layout.Header>
                    <Layout.Content>
                        <h1 style={{marginLeft: "50px", marginTop: "0.67em"}}>
                            Touches: {this.props.touchCount}
                        </h1>
                    </Layout.Content>
                    <Layout.Footer>
                        <Button
                            type="primary"
                            onClick={this.touchOppty}
                            loading={this.props.isTouchSaving}
                        >
                                Touch Opportunity
                        </Button>
                    </Layout.Footer>
                </Spin>
            </Layout>
        );
    }
}

const mapStateToProps = (state: GlobalState) => ({
    id: state.id,
    isOpptyLoading: state.isOpptyLoading,
    isTouchSaving: state.isTouchSaving,
    oppName: state.oppName,
    touchCount: state.touchCount,
});

const mapDispatchToProps = (dispatch: any) => ({
    touchOppty: (id: string, currentTouches: number) => dispatch(touch(id, currentTouches)),
    touchedOppty: (newTouches: number) => dispatch(touched(newTouches)), // TEMP UNTIL THUNK
});

export const App = connect(
    mapStateToProps,
    mapDispatchToProps,
)(InnerApp);
