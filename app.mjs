// import express from "express";
// import cors from "cors";
// import mongoose from "mongoose";

// // mongoose.connect(
// //   "mongodb+srv://nasir:Nasir12345@cluster0.nr4e4.mongodb.net/myFirstdb?retryWrites=true&w=majority"
// // )

// mongoose.connect("mongodb+srv://nasir:Nasir12345@cluster0.s5cdy.mongodb.net/mySecondDatabase?retryWrites=true&w=majority")


// const User = mongoose.model("User", {
//     name: String,
//     email: String,
//     address: String,
// });

// const app = express();
// const port = process.env.PORT || 3000;

// app.use(cors())
// app.use(express.json())


// // GET REQUEST
// app.get('/users', (req, res) => {

//     User.find({}, (err, users) => {
//         if (!err) {
//             res.send(users)
//         } else {
//             res.status(500).send("error happened")
//         }
//     })


// })
// app.get('/user/:id', (req, res) => {

//     User.findOne({ _id: req.params.id }, (err, user) => {
//         if (!err) {
//             res.send(user)
//         } else {
//             res.status(500).send("error happened")
//         }
//     })

// })

// // POST REQUEST
// app.post('/user', (req, res) => {

//     if (!req.body.email || !req.body.pass) {
//         res.status(400).send("invalid data");
//     } else {
//         const newUser = new User({
//             email: req.body.email,
//             pass: req.body.pass
//         });
//         newUser.save().then(() => {
//             console.log('user created success')
//             res.send("users created");
//         });
//     }
// })

// // UPDATE REQUEST
// app.put('/user/:id', (req, res) => {
//     let updateObj = {}

//     if (req.body.email === "" || req.body.email) {
//         updateObj.email = req.body.email
//     }
//     if (req.body.pass === "" || req.body.pass) {
//         updateObj.pass = req.body.pass
//     }

//     User.findByIdAndUpdate(req.params.id, updateObj, { new: true },
//         (err, data) => {
//             if (!err) {
//                 res.send(data)
//             } else {
//                 res.status(500).send("error happened")
//             }
//         })
// })

// // DELETE REQUEST
// app.delete('/user/:id', (req, res) => {

//     User.findByIdAndRemove(req.params.id, (err, data) => {
//         if (!err) {
//             res.send("user deleted")
//         } else {
//             res.status(500).send("error happened")
//         }
//     })
// })


// app.listen(port, () => {
//     console.log(`Example app listening at http://localhost:${port}`)
// })


import express from "express";
import cors from "cors";
import mongoose from "mongoose";

// mongoose.connect(
//   "mongodb+srv://nasir:Nasir12345@cluster0.nr4e4.mongodb.net/myFirstdb?retryWrites=true&w=majority"
// )

mongoose.connect("mongodb+srv://nasir:Nasir12345@cluster0.s5cdy.mongodb.net/mySecondDatabase?retryWrites=true&w=majority")


const User = mongoose.model("User", {
    fname: String,
    lname: String,
    email: String,
    country: String,
    subject: String,
});

const app = express();
const port = process.env.PORT || 3000;

app.use(cors())
app.use(express.json())


// GET REQUEST
app.get('/users', (req, res) => {

    User.find({}, (err, users) => {
        if (!err) {
            res.send(users)
        } else {
            res.status(500).send("error happened")
        }
    })


})
app.get('/user/:id', (req, res) => {

    User.findOne({ _id: req.params.id }, (err, user) => {
        if (!err) {
            res.send(user)
        } else {
            res.status(500).send("error happened")
        }
    })

})

// POST REQUEST
app.post('/user', (req, res) => {

    if (!req.body.fname || !req.body.lname || !req.body.email || !req.body.country || !req.body.subject) {
        res.status(400).send("invalid data");
    } else {
        const newUser = new User({
            fname: req.body.fname,
            lname: req.body.lname,
            email: req.body.email,
            country: req.body.country,
            subject: req.body.subject
        });
        newUser.save().then(() => {
            console.log('user created success')
            res.send("users created");
        });
    }
})

// UPDATE REQUEST
app.put('/user/:id', (req, res) => {
    let updateObj = {}

    if (req.body.fname === "" || req.body.fname) {
        updateObj.fname = req.body.fname
    }
    if (req.body.lname === "" || req.body.lname) {
        updateObj.lname = req.body.lname
    }
    if (req.body.email === "" || req.body.email) {
        updateObj.email = req.body.email
    }
    if (req.body.country === "" || req.body.country) {
        updateObj.country = req.body.country
    }
    if (req.body.subject === "" || req.body.subject) {
        updateObj.subject = req.body.subject
    }

    User.findByIdAndUpdate(req.params.id, updateObj, { new: true },
        (err, data) => {
            if (!err) {
                res.send(data)
            } else {
                res.status(500).send("error happened")
            }
        })
})

// DELETE REQUEST
app.delete('/user/:id', (req, res) => {

    User.findByIdAndRemove(req.params.id, (err, data) => {
        if (!err) {
            res.send("user deleted")
        } else {
            res.status(500).send("error happened")
        }
    })
})


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
