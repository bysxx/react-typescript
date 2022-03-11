import { Layout } from "antd";

const { Header, Footer, Sider, Content } = Layout;

const Antd = () => {
  return (
    <Layout>
      <Header style={{ padding: "0 50px" }}>Header</Header>
      <Layout>
        <Sider>Sider</Sider>
        <Content>Content</Content>
      </Layout>
      <Footer>Footer</Footer>
    </Layout>
  );
};

export default Antd;
