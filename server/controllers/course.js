const Course = require('../models/course');

function addCourse(req, res) {
	const body = req.body;
	const course = new Course(body);

	course.order = 1000;
	course.save((err, courseStored) => {
		if (err) {
			res.status(400).send({ code: 400, message: 'El curso que estas creando ya existe!' });
		} else {
			if (!courseStored) {
				res.status(400).send({ code: 400, message: 'No se ha podido creare l curso' });
			} else {
				res.status(200).send({ code: 200, message: 'Curso creado correctamente.' });
			}
		}
	});
}

function getCourses(req, res) {
	Course.find()
		.sort({ order: 'asc' })
		.exec((err, coursesStored) => {
			if (err) {
				res.status(500).send({ code: 500, message: 'Error del servidor' });
			} else {
				if (!coursesStored) {
					res.status(404).send({ code: 404, message: 'No se ha encontrado ningun curso' });
				} else {
					res.status(200).send({ code: 200, courses: coursesStored });
				}
			}
		});
}

function deleteCourse(req, res) {
	const { id } = req.params;

	Course.findByIdAndRemove(id, (err, courseDeleted) => {
		if (err) {
			res.status(500).send({ code: 500, message: 'Error del servidori' });
		} else {
			if (!courseDeleted) {
				res.status(404).send({ code: 404, message: 'El curso no se ha encontrado' });
			} else {
				res.status(200).send({ code: 200, message: 'Curso eliminado correctamente' });
			}
		}
	});
}

function updateCourse(req, res) {
	const courseData = req.body;
	const { id } = req.params;

	Course.findByIdAndUpdate(id, courseData, (err, courseUpdated) => {
		if (err) {
			res.status(500).send({ code: 500, message: 'Error del servidori' });
		} else {
			if (!courseUpdated) {
				res.status(404).send({ code: 404, message: 'El curso no se ha encontrado' });
			} else {
				res.status(200).send({ code: 200, message: 'Curso editado correctamente' });
			}
		}
	});
}

module.exports = { addCourse, getCourses, deleteCourse, updateCourse };
