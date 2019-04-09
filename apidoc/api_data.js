define({ "api": [
  {
    "type": "get",
    "url": "/pyc/profile/:phone",
    "title": "Find a User Profile by phone number",
    "name": "Find_Profile_of_a_user",
    "group": "Profile",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
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
            "description": "<p>Containing update params (eg location of artist {address: 'new address'})</p>"
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
            "field": "token",
            "description": "<p>token from user device</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "surname",
            "description": "<p>firstname of user</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "othernames",
            "description": "<p>lastname of user</p>"
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
            "type": "String",
            "optional": true,
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
            "field": "surname",
            "description": "<p>surname of user</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "othernames",
            "description": "<p>othernames of user</p>"
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
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>phone number of user</p>"
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
