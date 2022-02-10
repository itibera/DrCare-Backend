// exports.helloworld = (req, res) => {
//     res.status(200).send({ message: "Hello World!" });
// }

var model = require('./model');

//create and save new appointments

exports.create = (req, res) => {
    //validate request
    if (!req.body) {
        res.status(400).send({ message: "Content can not be empty!" });
        return;
    }
    //new appointments
    const appointments = new model.Appointmentsdb({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        selectYourService: req.body.selectYourService,
        phone: req.body.phone,
        date: req.body.date,
        time: req.body.time
    })
    //save appointments in the database
    appointments
        .save(appointments)
        .then(data => {
            res.send(data)
                })
                .catch(err => {
                    res.status(500).send({
                        message: err.message || 'Some error occurred while creating a create operation'
                    });
                });
        }

//retrieve and return all appointments/ retrive and return a single appointment

exports.find = (req, res) => {
    if (req.query.id) {
        const id = req.query.id;
        model.Appointmentsdb.findById(id)
            .then(data => {
                if (!data) {
                    res.status(404).send({ message: "Not found appointment with id " + id })
                } else {
                    res.send(data)
                }
            })
            .catch(err => {
                res.status(500).send({ message: "Error retrieving appointment with id " + id })
            })

    } else {
        model.Appointmentsdb.find()
            .then(appointments => {
                res.send(appointments)
            })
            .catch(err => {
                res.status(500).send({ message: err.message || "Error occured while retriving appointment information" })
            })
    }

}

//create and save new doctors

exports.createDoctors = (req, res) => {
    //validate request
    if (!req.body) {
        res.status(400).send({ message: "Content can not be empty!" });
        return;
    }
    //new doctors
    const doctors = new model.Doctorsdb({
        image: req.body.image,
        name: req.body.name,
        department: req.body.department,
        socialLink: req.body.socialLink,
        description: req.body.description
    })
    //save doctors in the database
    doctors
        .save(doctors)
        .then(data => {
            res.send(data)
                })
                .catch(err => {
                    res.status(500).send({
                        message: err.message || 'Some error occurred while creating a create operation'
                    });
                });
        }

//retrieve and return all doctors/ retrive and return a single doctor

exports.findDoctors = (req, res) => {
                if (req.query.id) {
                    const id = req.query.id;
                    model.Doctorsdb.findById(id)
                        .then(data => {
                            if (!data) {
                                res.status(404).send({ message: "Not found doctor with id " + id })
                            } else {
                                res.send(data)
                            }
                        })
                        .catch(err => {
                            res.status(500).send({ message: "Error retrieving doctor with id " + id })
                        })

                } else {
                    model.Doctorsdb.find()
                        .then(doctors => {
                            res.send(doctors)
                        })
                        .catch(err => {
                            res.status(500).send({ message: err.message || "Error occured while retriving doctor information" })
                        })
                }

            }