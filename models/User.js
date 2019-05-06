const
  mongoose = require('mongoose'),
  bcrypt = require('bcrypt-nodejs');

const UserSchema = mongoose.Schema({
  email: {
    type: String,
    unique: true,
    required: true,
    lowercase: true,
    trim: true,
    match: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
  },
  password: { 
    type: String,
    validate: {
      validator: function(v) {
        return /^.{8,}$/.test(v);
      },
      message: props => `${props.value} is not long enough!`
    }
  },
  phone: {
    type: Number,
    unique: true
  },
  role: {
    type: String,
    enum: ['admin', 'user'],
    default: 'user'
  },
  activated: {
    type: Boolean,
    default: true
  }
});

// On Save Hook, encrypt password
// Before saving a model, run this function
UserSchema.pre('save', function(next) {
  // get access to the user model
  const user = this;
  // generate a salt then run callback
  bcrypt.genSalt(10, function(err, salt) {
    if (err) {
      return next(err);
    }
    // hash (encrypt) our password using the salt
    bcrypt.hash(user.password, salt, null, function(err, hash) {
      if (err) {
        return next(err);
      }
      if (!user.password) {
        return next();
      }
      // overwrite plain text password with encrypted password
      user.password = hash;
      next();
    });
  });
});

UserSchema.methods.comparePassword = function(password, callback) {
  bcrypt.compare(password, this.password, function(err, isMatch) {
    if (err) {
      return callback(err);
    }
    return callback(null, isMatch);
  });
};

const UserModel = mongoose.model('users', UserSchema);
module.exports = UserModel;