import React, { useEffect, useState } from 'react';
import { getCoursesApi } from '../../api/courses';

export default function Courses() {
	const [courses, setCourses] = useState([]);
	const [reloadCourses, setReloadCourses] = useState(false);

	useEffect(() => {
		getCoursesApi().then((response) => {
			console.log(response);
		});
	}, [reloadCourses]);
	return (
		<div className="courses">
			<h1>Administrar Cursos</h1>
		</div>
	);
}
