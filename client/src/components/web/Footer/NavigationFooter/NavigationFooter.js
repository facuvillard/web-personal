import React from 'react';

import { Link } from 'react-router-dom';
import { Row, Col } from 'antd';
import {
	AppstoreOutlined,
	BookOutlined,
	CodeOutlined,
	DatabaseOutlined,
	HddOutlined,
	RightOutlined,
	UserOutlined,
} from '@ant-design/icons';
import './NavigationFooter.scss';

export default function NavigationFooter() {
	return (
		<Row className="navigation-footer">
			<Col md={24}>
				<h3>Navegación</h3>
			</Col>
			<Col md={12}>
				<RenderListLeft />
			</Col>
			<Col md={12}>
				<RenderListRight />
			</Col>
		</Row>
	);
}

function RenderListLeft() {
	return (
		<ul>
			<li>
				<a href="#">
					<BookOutlined /> Cursos online
				</a>
			</li>
			<li>
				<Link to="/contact">
					<CodeOutlined /> Desarrollo web
				</Link>
			</li>
			<li>
				<a href="#">
					<DatabaseOutlined /> Base de datos
				</a>
			</li>
			<li>
				<a href="#">
					<RightOutlined /> Politica de Privacidad
				</a>
			</li>
		</ul>
	);
}

function RenderListRight() {
	return (
		<ul>
			<li>
				<a href="#">
					<HddOutlined /> Sistemas / Servidores
				</a>
			</li>
			<li>
				<Link to="/contact">
					<AppstoreOutlined /> CMS
				</Link>
			</li>
			<li>
				<a href="#">
					<UserOutlined /> Portfolio
				</a>
			</li>
			<li>
				<a href="#">
					<RightOutlined /> Politica de Cookies
				</a>
			</li>
		</ul>
	);
}
