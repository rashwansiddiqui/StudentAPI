const Student = require('../model/studentModel')

exports.test=(req,res)=>{
    res.send('Greetings from test controller')
}

exports.Create_Student=(req,res)=>{
    let student=new Student({
        name:req.body.name,
        age:req.body.age,
        class_no:req.body.class_no
    })
    student.save((err)=>{
        if (err){
            return next(err)
        }
        res.send('Student added successfully')
    })}

exports.Update_Student=(req,res)=>{
    Student.findByIdAndUpdate(req.params.id,{$set: req.body},(err,student)=>{
        if (err) return next(err)
        res.send('Student profile is updated')
    })}

exports.Remove_Student=(req,res)=>{
    Student.findByIdAndRemove(req.params.id,(err)=>{
        if (err) return next(err)
        res.send('Student profile is deleted') 
    })}

exports.Show_Details=(req,res)=>{
    Student.findById(req.params.id,(err, student)=>{
        if (err) return next(err)
        res.send(student)
    })}