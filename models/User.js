const mongoose = require('mongoose');
const { Schema, model } = require('mongoose')

// function for validating email
var validateEmail = function(email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
};

const userSchema = new mongoose.Schema({
  username: { 
    type: String,
    required: true,
    unique: true,
    trim: true
 },
 email: {
     type: String,
    required: true,
    unique: true,
    validate: [validateEmail, 'Please use a valid email address']
 },
  thoughts: [{type: Schema.Types.ObjectId, ref: 'Thought'}],
  friends: [{type: Schema.Types.ObjectId, ref: 'User'}],
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
});
//fix the error

UserSchema.virtual('friendCount').get(function () {
    return this.friends.length;
  });


const User = mongoose.model('User', userSchema);


const reactionData = [
  { name: 'Ann', salary: 40000 },
  { name: 'Liu', salary: 50000 },
];

User.create(
  { name: 'Shoes', thoughts: thoughtData, reactions: reactionData },
  (err, data) => {
    if (err) {
      console.error(err);
    }
    console.log(data);
  }
);

module.exports = User;
