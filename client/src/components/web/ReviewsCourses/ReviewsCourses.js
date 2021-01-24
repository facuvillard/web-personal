import React from 'react'
import "./ReviewsCourses.scss"
import { Row, Col, Card, Avatar } from "antd";
import AvatarPersona from "../../../assets/img/jpg/wordpress.jpg"

export default function ReviewsCourses() {
    return (
        <Row className="reviews-courses">
            <Row >
                <Col lg={24} className="reviews-courses__title">
                    <h2>
                        Forma parte de los +35 mil estudiantes que estanaprendiendo <br />
                    con mis cursos
                    </h2>
                </Col>
                <Col lg={4} />
                <Col lg={16} >
                    <Row className="row-cards">
                        <Col md={8}>
                            <CardReview
                                name="Alonso Campos"
                                subtitle="Alumno de Udemy"
                                avatar={AvatarPersona}
                                review="Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
                            />
                        </Col>
                        <Col md={8}>
                            <CardReview
                                name="David Ramiro"
                                subtitle="Alumno de Udemy"
                                avatar={AvatarPersona}
                                review="Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
                            />
                        </Col>
                        <Col md={8}>
                            <CardReview
                                name="Franco Villard"
                                subtitle="Alumno de Udemy"
                                avatar={AvatarPersona}
                                review="Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
                            />
                        </Col>
                        <Col md={8}>
                            <CardReview
                                name="Fernanda Ramello"
                                subtitle="Alumno de Udemy"
                                avatar={AvatarPersona}
                                review="Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
                            />
                        </Col>
                        <Col md={8}>
                            <CardReview
                                name="Alonso Campos"
                                subtitle="Alumno de Udemy"
                                avatar={AvatarPersona}
                                review="Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
                            />
                        </Col>
                        <Col md={8}>
                            <CardReview
                                name="Alonso Campos"
                                subtitle="Alumno de Udemy"
                                avatar={AvatarPersona}
                                review="Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
                            />
                        </Col>

                    </Row>
                </Col>
                <Col lg={4} />
            </Row>
        </Row>
    )
}


function CardReview(props) {
    const { name, subtitle, avatar, review } = props;
    const { Meta } = Card;
    return (
        <Card className="reviews-courses__card">
            <p>{review}</p>
            <Meta
                avatar={<Avatar src={avatar} />}
                title={name}
                description={subtitle}
            />
        </Card>
    )
}