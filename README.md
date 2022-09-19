# 03 JavaScript: Password Generator

## Your Task

This week's Challenge requires you to modify starter code to create an application that enables employees to generate random passwords based on criteria that they’ve selected. This app will run in the browser and will feature dynamically updated HTML and CSS powered by JavaScript code that you write. It will have a clean and polished, responsive user interface that adapts to multiple screen sizes.

The password can include special characters. If you’re unfamiliar with these, see this [list of password special characters](https://www.owasp.org/index.php/Password_special_characters) from the OWASP Foundation.

## User Story

```
AS AN new developer
I WANT to invoke new skills learned by developing a password generator
SO THAT I can create a strong password that provides greater security
```

## Acceptance Criteria

```
GIVEN a user needs a secure password
WHEN a user clicks the button to generate a password
THEN a user is presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN a user select which criteria to include in the password
WHEN prompted for the length of the password
THEN a user choose a length of at least 8 characters and no more than 128 characters
WHEN asked for character types to include in the password
THEN a user confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
WHEN a user answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page
```

## Mock-Up

The following image shows the web application's appearance and functionality:

![The Password Generator application displays a red button to "Generate Password".](./asssets/images/Pass_generator.png)


## Use
---
- Simply click the "Generate Password" button.
- you will be prompted by a windo alert for character length, use of upper/lower/special characters.
- Click okay to accept criteria or cancel to deny.
- If you deny all options you password will be generated using only numbers as a default.
---
