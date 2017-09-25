import { Card, Layout, LocaleProvider } from "antd";
import enUS from "antd/lib/locale-provider/en_US";
import * as React from "react";

export class App extends React.Component<{}, {}> {

  constructor(props) {
    super(props);
  }

  public render() {
    return (
      <LocaleProvider locale={enUS}>
          <Layout>
            <Layout.Content>
              <Card title="Blank Starter">
                I don't do anything :(
              </Card>
            </Layout.Content>
          </Layout>
      </LocaleProvider>
    );
  }
}
