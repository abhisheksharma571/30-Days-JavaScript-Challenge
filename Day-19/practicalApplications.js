// Task - 09: Write a regular expression to validate a simple password (must include at least one uppercase letter, one lowercase letter, one digit, and one special character). Log whether the password is valid.
function validatePassword(password) {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
    const isValid = regex.test(password);
    return isValid;
}
  
const password1 = "Password123!";
const password2 = "pass123";
console.log(`Password '${password1}' is valid:`, validatePassword(password1));
console.log(`Password '${password2}' is valid:`, validatePassword(password2));
  
// ^ asserts the position at the start of the string.
// (?=.*[a-z]) ensures there is at least one lowercase letter.
// (?=.*[A-Z]) ensures there is at least one uppercase letter.
// (?=.*\d) ensures there is at least one digit.
// (?=.*[\W_]) ensures there is at least one special character (non-word character).
// .{8,} ensures the password is at least 8 characters long.
// $ asserts the position at the end of the string.

//Task 10: Write a regular expression to validate an URL. Log whether the URL is valid.
function validateURL(url) {
    const regex = /^(https?:\/\/)?([\w-]+\.)+[\w-]+(\/[\w-./?%&=]*)?$/;
    const isValid = regex.test(url);
    return isValid;
}
  
const url1 = "https://www.example.com";
const url2 = "invalid-url";
console.log(`URL '${url1}' is valid:`, validateURL(url1));
console.log(`URL '${url2}' is valid:`, validateURL(url2));

// ^ asserts the position at the start of the string.
// (https?:\/\/)? optionally matches the protocol part (http or https).
// ([\w-]+\.)+ matches the domain name part (e.g., www., subdomain.).
// [\w-]+ matches the top-level domain (e.g., com, org).
// (\/[\w-./?%&=]*)? optionally matches the path, query parameters, and fragment.
// $ asserts the position at the end of the string.
  