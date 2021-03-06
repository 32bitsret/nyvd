const
  mongoose = require('mongoose'),
  bcrypt = require('bcrypt-nodejs');

const ProfileSchema = mongoose.Schema({
  email: {
    type: String,
    unique: true,
    required: true,
    lowercase: true,
    trim: true,
    match: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
  },
  expo_token: {
    type: String,
  },
  firstname: { 
    type: String 
  },
  middlename: { 
    type: String 
  },
  lastname: { 
    type: String 
  },
  gender: { 
    type: String 
  },
  DoB: { 
    type: String 
  },
  marital_status: { 
    type: String 
  },
  disability: { 
    type: String 
  },
  state: { 
    type: String 
  },
  lga: { 
    type: String 
  },
  phone: { 
    type: Number,
    unique: [true, 'Duplicate Phone number']
  },
  address: { 
    type: String 
  },
  education: {
    educational_qualification: { 
      type: String,
      uppercase: true,
      enum: ["O'LEVEL", "ND", "HND", "BSC", "MSC", "PHD"] 
    },
    course: {
      type: String
    },
    institution: {
      type: String
    },
    year_of_graduation: {
      type: String
    },
    certificate: {
      type: String
    }
  },
  photo: {
    type: String
  },
  resume: {
    type: String
  },
  employment_status: {
    type: String
  },
  type_of_work: {
    type: String
  }
});

const ProfileModel = mongoose.model('profiles', ProfileSchema);
module.exports = ProfileModel;