define({ "api": [
  {
    "type": "post",
    "url": "/pyc/message/create",
    "title": "Create a message",
    "name": "Create_Message",
    "group": "Message",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>body of message</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "lga",
            "description": "<p>lga on message</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "gender",
            "description": "<p>gender on message</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "disability",
            "description": "<p>disability on message</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "marital_status",
            "description": "<p>marital status on message</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "qualification",
            "description": "<p>qualification on message</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./message.js",
    "groupTitle": "Message",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>ID of Message</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>message saved</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "lga",
            "description": "<p>lga on Message</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "gender",
            "description": "<p>gender on Message</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "marital_status",
            "description": "<p>marital status on Message</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "disability",
            "description": "<p>Any stated Disability</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "qualification",
            "description": "<p>qualification on message</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "msg",
            "description": "<p>Error message from the api request</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/pyc/message/",
    "title": "Find all Messages",
    "name": "Find_all_Messages",
    "group": "Message",
    "version": "0.0.0",
    "filename": "./message.js",
    "groupTitle": "Message",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>ID of Message</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>message saved</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "lga",
            "description": "<p>lga on Message</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "gender",
            "description": "<p>gender on Message</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "marital_status",
            "description": "<p>marital status on Message</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "disability",
            "description": "<p>Any stated Disability</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "qualification",
            "description": "<p>qualification on message</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "msg",
            "description": "<p>Error message from the api request</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/pyc/message/",
    "title": "Find a message by ID",
    "name": "Find_message_by_ID",
    "group": "Message",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>id of message object</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./message.js",
    "groupTitle": "Message",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>ID of Message</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>message saved</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "lga",
            "description": "<p>lga on Message</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "gender",
            "description": "<p>gender on Message</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "marital_status",
            "description": "<p>marital status on Message</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "disability",
            "description": "<p>Any stated Disability</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "qualification",
            "description": "<p>qualification on message</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "msg",
            "description": "<p>Error message from the api request</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/pyc/message/query",
    "title": "Find a message by query",
    "name": "Find_message_by_query",
    "group": "Message",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "query",
            "description": "<p>query object specifying several parts of schema</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./message.js",
    "groupTitle": "Message",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>ID of Message</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>message saved</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "lga",
            "description": "<p>lga on Message</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "gender",
            "description": "<p>gender on Message</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "marital_status",
            "description": "<p>marital status on Message</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "disability",
            "description": "<p>Any stated Disability</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "qualification",
            "description": "<p>qualification on message</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "msg",
            "description": "<p>Error message from the api request</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/pyc/profile/",
    "title": "Find a User Profile by phone number",
    "name": "Find_Profile_of_a_user",
    "group": "Profile",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "phone",
            "description": "<p>phone number of user</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./profile.js",
    "groupTitle": "Profile",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>ID of Profile</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>email on profile</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "firstname",
            "description": "<p>firstname on Profile</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "middlename",
            "description": "<p>middlename on Profile</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "lastname",
            "description": "<p>lastname on Profile</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "gender",
            "description": "<p>gender on Profile</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "DoB",
            "description": "<p>Date of birth on Profile as string</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "marital_status",
            "description": "<p>marital status on Profile</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "disability",
            "description": "<p>Any Profile Disability</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "state",
            "description": "<p>State of user on profile</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "lga",
            "description": "<p>Local government area of user on profile</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "phone",
            "description": "<p>phone number on profile</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>address on profile</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "employment_status",
            "description": "<p>employment_status on profile</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "type_of_work",
            "description": "<p>type_of_work on profile</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "photo",
            "description": "<p>photo url on profile</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resume",
            "description": "<p>resume url on profile</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "education",
            "description": "<p>educational qualification on profile (contains educational_qualification(O'LEVEL, HMD, OND, BSC, MSC, PHD), course, institution, year_of_graduation, certificate)</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "msg",
            "description": "<p>Error message from the api request</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/pyc/profile/",
    "title": "Find all User Profiles",
    "name": "Find_all_Profiles",
    "group": "Profile",
    "version": "0.0.0",
    "filename": "./profile.js",
    "groupTitle": "Profile",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>ID of Profile</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>email on profile</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "firstname",
            "description": "<p>firstname on Profile</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "middlename",
            "description": "<p>middlename on Profile</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "lastname",
            "description": "<p>lastname on Profile</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "gender",
            "description": "<p>gender on Profile</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "DoB",
            "description": "<p>Date of birth on Profile as string</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "marital_status",
            "description": "<p>marital status on Profile</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "disability",
            "description": "<p>Any Profile Disability</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "state",
            "description": "<p>State of user on profile</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "lga",
            "description": "<p>Local government area of user on profile</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "phone",
            "description": "<p>phone number on profile</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>address on profile</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "employment_status",
            "description": "<p>employment_status on profile</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "type_of_work",
            "description": "<p>type_of_work on profile</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "photo",
            "description": "<p>photo url on profile</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resume",
            "description": "<p>resume url on profile</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "education",
            "description": "<p>educational qualification on profile (contains educational_qualification(O'LEVEL, HMD, OND, BSC, MSC, PHD), course, institution, year_of_graduation, certificate)</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "msg",
            "description": "<p>Error message from the api request</p>"
          }
        ]
      }
    }
  },
  {
    "type": "put",
    "url": "/pyc/profile/",
    "title": "Update a Profile",
    "name": "Update_Profile",
    "group": "Profile",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "query",
            "description": "<p>Containing query params (eg id on profile {id: '123456789})</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "update",
            "description": "<p>Containing update params (eg phone of user {phone: 12324343})</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./profile.js",
    "groupTitle": "Profile",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>ID of Profile</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>email on profile</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "firstname",
            "description": "<p>firstname on Profile</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "middlename",
            "description": "<p>middlename on Profile</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "lastname",
            "description": "<p>lastname on Profile</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "gender",
            "description": "<p>gender on Profile</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "DoB",
            "description": "<p>Date of birth on Profile as string</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "marital_status",
            "description": "<p>marital status on Profile</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "disability",
            "description": "<p>Any Profile Disability</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "state",
            "description": "<p>State of user on profile</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "lga",
            "description": "<p>Local government area of user on profile</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "phone",
            "description": "<p>phone number on profile</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>address on profile</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "employment_status",
            "description": "<p>employment_status on profile</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "type_of_work",
            "description": "<p>type_of_work on profile</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "photo",
            "description": "<p>photo url on profile</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resume",
            "description": "<p>resume url on profile</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "education",
            "description": "<p>educational qualification on profile (contains educational_qualification(O'LEVEL, HMD, OND, BSC, MSC, PHD), course, institution, year_of_graduation, certificate)</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "msg",
            "description": "<p>Error message from the api request</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/test/",
    "title": "Hit test route",
    "name": "Test_the_API",
    "group": "Test",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>msg: Welcome to test route</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./profile.js",
    "groupTitle": "Test"
  },
  {
    "type": "get",
    "url": "/pyc/upload/",
    "title": "Upload Image",
    "name": "Upload_image_to_s3",
    "group": "Upload",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "photo",
            "description": "<p>base 64 string of image after taking of &quot;data:image/jpeg;base64,&quot;</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>name of image + ext. e.g Ernest.jpg</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>content type of image gotten between : and ; in base64 string e.g in &quot;data:image/jpeg;base64,dsadasdjkhsdjkfhsdjfh&quot; type = image/jpeg</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>name of image</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "location",
            "description": "<p>url link to image on s3 (this is the link that will be used in other payloads where photo is requested)</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./profile.js",
    "groupTitle": "Upload"
  },
  {
    "type": "post",
    "url": "/pyc/loginUser",
    "title": "Login a user",
    "name": "Login_User",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>email of User</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>password of user</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>token of user logged in</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./user.js",
    "groupTitle": "User",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "msg",
            "description": "<p>Error message from the api request</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/pyc/registerUser",
    "title": "Register a user",
    "name": "Register_User",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>email of User</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>password of user</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "expo_token",
            "description": "<p>token from user device</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "role",
            "description": "<p>role of user. Either admin or user. Default is user</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "firstname",
            "description": "<p>firstname of user</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "lastname",
            "description": "<p>lastname of user</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "gender",
            "description": "<p>gender of user</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "photo",
            "description": "<p>url link to photo saved to s3</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "phone",
            "description": "<p>phone number of user</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./user.js",
    "groupTitle": "User",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>ID of User</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>email of User</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>password hash of user</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "firstname",
            "description": "<p>firstname of user</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "lastname",
            "description": "<p>lastname of user</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "photo",
            "description": "<p>url link to photo saved to s3</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "phone",
            "description": "<p>phone number of user</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "gender",
            "description": "<p>gender of user</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "role",
            "description": "<p>role of user either admin or user</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "activated",
            "description": "<p>Status of account true or false default true</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "msg",
            "description": "<p>Error message from the api request</p>"
          }
        ]
      }
    }
  }
] });
