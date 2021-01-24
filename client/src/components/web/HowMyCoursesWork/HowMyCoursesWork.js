import React from 'react'
import { Row, Col, Card } from "antd"
import { CheckCircleOutlined, ClockCircleOutlined, DollarOutlined, KeyOutlined, MessageOutlined, UserOutlined } from "@ant-design/icons"
import "./HowMyCoursesWork.scss"

export default function HowMyCoursesWork() {
    return (
        <Row className="how-my-courses-work">
            <Col lg={24} className="how-my-courses-work__title">
                <h2>¿Cómo funcionan mis cursos?</h2>
                <h3>
                    Cada curso cuenta con contenido bajo la web de Udemy, activa las 24
                    horas al dia los 365 días del año.
                </h3>
            </Col>
            <Col lg={4} />
            <Col lg={16}>
                <Row className="row-cards">
                    <Col md={8}>
                        <CardInfo
                            icon={<ClockCircleOutlined className="how-my-courses-work__card_icon" />}
                            title="Cursos y clases"
                            subtitle="Cursos de entre 10 y 30 horas y cada clase del curso con duración máxima de 15 minutos, faciles de llevar en tu dia a dia de aprendizaje."
                        />
                    </Col>
                    <Col md={8}>
                        <CardInfo
                            icon={<KeyOutlined className="how-my-courses-work__card_icon" />}
                            title="Acceso 24/7"
                            subtitle="Accede a los cursos en cualquier momento, desde cualquier lugar sin importar dia y hora"
                        />
                    </Col>
                    <Col md={8}>
                        <CardInfo
                            icon={<UserOutlined className="how-my-courses-work__card_icon" />}
                            title="Mejora tu perfil"
                            subtitle="Aprende y mejora tu perfil para mantenerte informado de actualizaciones"
                        />
                    </Col>
                </Row>
                <Row className="row-cards">
                    <Col md={8}>
                        <CardInfo
                            icon={<DollarOutlined className="how-my-courses-work__card_icon" />}
                            title="Precios bajos"
                            subtitle="Obten el curso que necesitas por solo 9.99 y ten acceso a el por tiempo ilimitado"
                        />
                    </Col>
                    <Col md={8}>
                        <CardInfo
                            icon={<CheckCircleOutlined className="how-my-courses-work__card_icon" />}
                            title="Certificados de finalización"
                            subtitle="Al completar tu curso recibiras una certificación que te expedirá Udemy en PDF."
                        />
                    </Col>
                    <Col md={8}>
                        <CardInfo
                            icon={<MessageOutlined className="how-my-courses-work__card_icon" />}
                            title="Aprendizaje colaborativo"
                            subtitle="Aprende de los demás dejando tus dudas para que profesores y comapañeros te ayuden"
                        />
                    </Col>
                </Row>
            </Col>
            <Col lg={4} />
        </Row>
    )
}

function CardInfo(props) {
    const { icon, title, subtitle } = props;
    const { Meta } = Card

    return (
        <Card className="how-my-courses-work__card">
            {icon}
            <Meta title={title} description={subtitle} />
        </Card>
    )
}