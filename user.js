var mongoose = require('mongoose');
var bcrypt = require('bcryptjs')
var userSchema = new mongoose.Schema({
    first: String,
    email: {type:String,unique:true},
    password: String,
    image:String
},{timestamps:true})
userSchema.pre('save', function (next) {
    var user = this;
    if (!user.isModified('password')) {return next()};
    bcrypt.hash(user.password,10).then((hashedPassword) => {
        user.password = hashedPassword;
        next();
    })
}, function (err) {
    next(err)
})
userSchema.methods.comparePassword=function(candidatePassword,next){    bcrypt.compare(candidatePassword,this.password,function(err,isMatch){
        if(err) return next(err);
        next(null,isMatch)
    })
}
module.exports = mongoose.model("user", userSchema);