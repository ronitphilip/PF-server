const express = require('express')
const userController = require('../controller/userController')
const projectController = require('../controller/projectController')
const jwtMiddleware = require('../middleWares/jwtMiddleware')
const multerMiddleware = require('../middleWares/multerMiddleware')

const router = new express.Router()

// register post
router.post('/register',userController.registerController)

// login post
router.post('/login',userController.loginController)

// add-project post
router.post('/add-project',jwtMiddleware,multerMiddleware.single('projectImage'),projectController.addProjectController)

// home-project post
router.get('/home-projects',projectController.getHomeProjectsController)

// user-project post
router.get('/user-projects',jwtMiddleware,projectController.getUserProjectsController)

// all-project post
router.get('/all-projects',jwtMiddleware,projectController.getAllProjectsController)

// edit-project put
router.put('/projects/:id/edit',jwtMiddleware,multerMiddleware.single("projectImage"),projectController.editProjectController)

// remove-project delete
router.delete('/projects/:id/remove',jwtMiddleware,projectController.removeProjectController)

// edit user - put
router.put('/user/edit',jwtMiddleware,multerMiddleware.single("profilePic"),userController.editUserController)

module.exports = router