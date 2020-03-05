# Basic Validator

Validate user input from the backend.

**_Usage_**

```
const body = {
  username: "fadel",
  email: "test@test.com",
  password: "123456"
};

const validator = new validate(body);
const { errors } = validator.isPassword("password").isEmail("email");
console.log(errors);
```

Output:

```
[ { password: 'Password Should contain numbers and characters' } ]
```

**Other example:**

```
module.exports = middleware = {
  login: function(req, res, next) {
    const loginValidator = new validate(req.body);
    let { errors } = loginValidator.required("email").required("password");
    if (errors.length > 0)
      return res.status(400).json({ errors });
    next();
  }
}

router.post('/', middleware.login, (req, res) => {
  // Your login logic
})
```
