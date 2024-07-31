// Task - 05: Write a regular expression to capture the area code, central office code, and line number from US phone number format(e.g., (123) 456-7890). Log the results.

function capturePhoneNumbers(str){
    const regex = /\((\d{3})\) (\d{3})-(\d{4})/;
    const result = str.match(regex);
    if(result){
        const areaCode = result[1];
        const centralOfficeCode = result[2];    
        const lineNumber = result[3];

        return {
            areaCode,
            centralOfficeCode,
            lineNumber
        }
    } else return null;
}

const phoneNumber = "(123) 456-7890";
const phoneParts = capturePhoneNumbers(phoneNumber);
console.log("Captured phone number parts:", phoneParts);
// \((\d{3})\) captures the area code (3 digits) enclosed in parentheses.
// (\d{3}) captures the central office code (3 digits)
// (\d{4}) captures the line number (4 digits).


//Task - 06: Write a regular expression to capture the username and domain from an email address. Log the results.
function captureEmailParts(email) {
    const regex = /^([^@]+)@([^@]+)$/;
    const matches = email.match(regex);
    
    if (matches) {
      const username = matches[1];
      const domain = matches[2];
      
      return { username, domain };
    } else {
      return null;
    }
}
  
const email = "user@example.com";
const emailParts = captureEmailParts(email);
console.log("Captured email parts:", emailParts);
// ^([^@]+) captures the username (any characters except @).
// @ matches the @ symbol.
// ([^@]+)$ captures the domain (any characters except @).
  