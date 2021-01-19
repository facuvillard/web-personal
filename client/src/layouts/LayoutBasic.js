import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { Layout, Row, Col } from 'antd';
import MenuTop from "../components/web/MenuTop"
import './LayoutBasic.scss'

export default function LayaoutBasic(props) {
    const { routes } = props;
    const { Footer } = Layout;

    return (
        <>
            <Row>
                <Col lg={4} />
                <Col lg={16}>
                    <MenuTop />

                </Col>
                <Col lg={4} />
            </Row>
            <LoadRoutes routes={routes} />
            <Footer>
                Facundo Villard
                </Footer>
        </>
    )
}
function LoadRoutes({ routes }) {
    return (
        <Switch>
            {routes.map((route, index) => (
                <Route
                    key={index}
                    path={route.path}
                    exact={route.exact}
                    component={route.component}
                />
            ))}
        </Switch>
    )
}