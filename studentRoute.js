const express=require('express');
const router=express.Router();
const student_controller=require('../controller/studentController');

router.get('/test',student_controller.test);
router.post('/create',student_controller.Create_Student);
router.put('/:id/update',student_controller.Update_Student);
router.delete('/:id/delete',student_controller.Remove_Student);
router.get('/:id',student_controller.Show_Details);



module.exports=router;
