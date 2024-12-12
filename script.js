$("#registration-form").validate({
  rules: {
    username: {
      required: true,
      minlength: 3,
      maxlength: 50
    },
    usermailid: {required: true},
    userphoneno: {
        required: true,
        minlength: 10,
        maxlength: 14
    },
    userage: {
        required: true,
        min:3,
        max:120
    },
    usergender: {required: true,
        minlength: 4,
        maxlength: 15},
    useraddress: {
        maxlength:50
    },
  },
  messages: {
    username: {
      required: "Please Type your Name",
      minlength: "Required Character above 5",
      maxlength: "You have exceeded the character Limit"
    },
    usermailid: {
        required:"Please type your mail id to Procced further"
    },
    userphoneno: {
        required:"Please enter your phone no",
        minlength: "Required Character Between 10-14",
        maxlength: "Required Character Between 10-14"
    },
    userage: {
        required:"Please type your age",
        min:"Required is age above 3",
        max: "Required is age below 120"
    },
    usergender: {
        required:"Please type your gender"
    },
    useraddress: {
        maxlength:"Address should not exceed 50 character"
    },
  },
});
