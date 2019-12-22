let validate = function(input) {
  this.input = input;
  this.errors = [];
};

validate.prototype.required = function(column) {
  if (
    this.input[column] === "" ||
    this.input[column] === null ||
    this.input[column] === undefined
  )
    this.errors.push({ [column]: "Input is Required" });
  return this;
};

validate.prototype.exists = function(column) {
  if (this.input[column] === undefined)
    this.errors.push({ [column]: "Input Not exists" });
  return this;
};

validate.prototype.isString = function(column) {
  if (typeof this.input[column] !== "string")
    this.errors.push({ [column]: "Input should be String" });
  return this;
};

validate.prototype.isNumber = function(column) {
  if (typeof this.input[column] !== "number")
    this.errors.push({ [column]: "Input should be Number" });
  return this;
};

validate.prototype.isPhone = function(column) {
  const regex = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;
  if (!regex.test(this.input[column]))
    this.errors.push({ [column]: "Please enter valide Phone Number" });
  return this;
};

validate.prototype.isEmail = function(column) {
  const regex = /\S+@\S+\.\S+/;
  if (!regex.test(this.input[column]) || this.input[column].length >= 256)
    this.errors.push({ [column]: "Please enter valide Email" });
  return this;
};

validate.prototype.isPassword = function(column) {
  const regex = /(?=.*[a-zA-Z])(?=.*[0-9]).{8,30}/i;
  if (!regex.test(this.input[column]))
    this.errors.push({
      [column]: "Password Should contain numbers and characters"
    });
  return this;
};

validate.prototype.isUserName = function(column) {
  const regex = /^[a-z0-9]{3,20}$/;
  if (!regex.test(this.input[column]))
    this.errors.push({ [column]: "Input should be valid Username" });
  return this;
};

validate.prototype.isName = function(column) {
  const regex = /^[A-Za-z]{3,30}$/;
  if (!regex.test(this.input[column]))
    this.errors.push({ [column]: "Please enter valid Name" });
  return this;
};

validate.prototype.len = function(column, min, max) {
  if (this.input[column].length < min || this.input[column].length > max)
    this.errors.push({ [column]: "Please enter valid Input length" });
  return this;
};

module.exports = validate;
