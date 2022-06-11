const locale = {
  translation: {
    common:{
      showMore: 'Show More',
      showLess: 'Show Less',
      euros : "€"
    },
    form:{
      incorrectEmail: 'Please fill in a correct email',
      incorrectPassword: 'Please fill in a correct password',
      incorrectFirstname: 'Please fill in a correct firstname',
      incorrectLastname: 'Please fill in a correct firstname',
      fillPasswords: "Please fill the current, new password and password confirm inputs",
      blankInputs: "Please fill all the mandatory inputs (first and last name, email)",
      blankInputsWithPassword: "Please fill all the mandatory inputs (first and last name, email, password)",
      passwordPlaceholder: "Password",
      newPasswordPlaceholder: "New Password",
      currentPasswordPlaceholder: 'Current Password',
      passwordConfirmPlaceholder: "Confirm Password",
      emailPlaceholder: "Email",
      firstnamePlaceholder:"Firstname",
      lastnamePlaceholder:"Lastname",
      phonePlaceholder:'Phone number',
      incorrectPhone: 'Incorrect phone number'
    },
    tabBar:{
      sweets: "Sweets",
      recipes: "Recipes",
      events:"Events",
      cart: "Cart",
      account:"Account"
    },
    forgotPassword:{
      title: "Forgotten Password?",
      login: "Log In",
      validate: "Recover my Password"
    },
    login:{
      title: "Already registered? Sign in",
      forgotPassword: "Forgot Password?",
      signIn: "Sign In",
      dontHaveAccount: "Don't have an account? ",
      register: "Register",
      loginError : "Login failed"
    },
    register: {
      title: "Register",
      alreadyHaveAccount: "Already have an account? ",
      login: "Sign in",
      register: "Register",
      registerError: "Registration failed"
    },
    shop:{
      title: "Sweets"
    },
    details:{
      comment : "Comment",
      add: "Add"
    },
    events:{
      title: "TODO events title"
    },
    recipes:{
      title: "Recipes"
    },
    recipe:{
      minutes: "min",
      totalTime: "Total time : ",
      preparation: "Preparation",
      chill:"Chill",
      cook:"Cook",
      cost: "Cost",
      level:"Level",
      portions:"Portions",
      steps: "Steps : "
    },
    cart:{
      title: "Your Cart",
      quantity: "quantity : ",
      empty: "You have nothing in your cart yet ! ",
      checkout: "Checkout "
    },
    comment:{
      title: "Comment",
      send: 'Send',
      commentPlaceholder: 'Your comment',
      errorStar: 'Please choose a rating',
      commentError: "There was an error with publishing the comment",
      report: "Report"
    },
    account:{
      title: "Hello ",
      logout: "Logout",
      edit: "Edit info",
      firstname: "Firstname : ",
      lastname: "Lastname : ",
      email: "Email : ",
      phone: "Phone : ",
      unknown: "Unknown",
      editPassword: "Edit Password"
    },
    editAccount:{
      title: "Edit your info",
      save: "Save",
      error: "An error occurred saving your info"
    },
    editPassword:{
      title: "Edit your password"
    },
    cgu:{
      title: "Terms of service",
      content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
    errorModal:{
      title: "Oops !",
      content: "An error occurred... Check your internet connexion.",
      close: "Close"
    },
    reportModal:{
      title: "Report this comment",
      content: "Please select a reason for reporting this comment in the list below",
      send: "Send",
      cancel: "Cancel",
      reason: {
        choose: "Choose a reason",
        uncivil: "Uncivil, rude or vulgar",
        discrimination: "Discrimination",
        localBusiness: "Third party deal site",
        illegalContent: "Contains illegal content or activity",
        other: "Other..."
      },
      error: 'An error occurred, please try again later'
    }
  },
};

export default locale;
