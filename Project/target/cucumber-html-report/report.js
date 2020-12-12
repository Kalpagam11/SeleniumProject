$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/Selenium.feature");
formatter.feature({
  "name": "To signup in the application and send mail",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "To register in the application",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "navigate to \"http://elearningm1.upskills.in/\"",
  "keyword": "Given "
});
formatter.step({
  "name": "Signup link is available",
  "keyword": "When "
});
formatter.step({
  "name": "we click on signup link",
  "keyword": "And "
});
formatter.step({
  "name": "Registration page appears",
  "keyword": "When "
});
formatter.step({
  "name": "we pass \"\u003cFirstName\u003e\" in first name field",
  "keyword": "Then "
});
formatter.step({
  "name": "pass \"\u003cLastname\u003e\" in last name field",
  "keyword": "And "
});
formatter.step({
  "name": "enter \"\u003cemail\u003e\" in email field",
  "keyword": "And "
});
formatter.step({
  "name": "pass valid \"\u003cusername\u003e\" in username field",
  "keyword": "And "
});
formatter.step({
  "name": "we give a valid \"\u003cpassword\u003e\" in password field",
  "keyword": "And "
});
formatter.step({
  "name": "we confirm the \"\u003cconfirmpassword\u003e\" in confirm password field",
  "keyword": "And "
});
formatter.step({
  "name": "click register",
  "keyword": "Then "
});
formatter.step({
  "name": "we are in confirmation page",
  "keyword": "When "
});
formatter.step({
  "name": "we click on Profile button",
  "keyword": "And "
});
formatter.step({
  "name": "validate if profile name is \"\u003cName\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "click on Homepage",
  "keyword": "Then "
});
formatter.step({
  "name": "once Profile menu appears",
  "keyword": "And "
});
formatter.step({
  "name": "click on Compose",
  "keyword": "Then "
});
formatter.step({
  "name": "we are on compose message page",
  "keyword": "Given "
});
formatter.step({
  "name": "enter the \"\u003cReceiverName\u003e\" in send to field",
  "keyword": "Then "
});
formatter.step({
  "name": "type a \"\u003csubject\u003e\" in subject field",
  "keyword": "And "
});
formatter.step({
  "name": "type the \"\u003cmailmessage\u003e\" in message field",
  "keyword": "And "
});
formatter.step({
  "name": "click send message button",
  "keyword": "And "
});
formatter.step({
  "name": "check if confirmation message is displayed",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "FirstName",
        "Lastname",
        "email",
        "username",
        "password",
        "confirmpassword",
        "Name",
        "ReceiverName",
        "subject",
        "mailmessage"
      ]
    },
    {
      "cells": [
        "Anu",
        "Suresh",
        "test5@gmail.com",
        "AnuAnu5",
        "Dec@2020",
        "Dec@2020",
        "Anu Suresh",
        "naveen",
        "test only",
        "mailmessage"
      ]
    }
  ]
});
formatter.scenario({
  "name": "To register in the application",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "navigate to \"http://elearningm1.upskills.in/\"",
  "keyword": "Given "
});
formatter.match({
  "location": "seleniumSteps.navigate_to(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Signup link is available",
  "keyword": "When "
});
formatter.match({
  "location": "seleniumSteps.signup_link_is_available()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "we click on signup link",
  "keyword": "And "
});
formatter.match({
  "location": "seleniumSteps.we_click_on_Signup_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Registration page appears",
  "keyword": "When "
});
formatter.match({
  "location": "seleniumSteps.registration_page_appears()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "we pass \"Anu\" in first name field",
  "keyword": "Then "
});
formatter.match({
  "location": "seleniumSteps.we_pass_in_first_name_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "pass \"Suresh\" in last name field",
  "keyword": "And "
});
formatter.match({
  "location": "seleniumSteps.pass_in_last_name_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enter \"test5@gmail.com\" in email field",
  "keyword": "And "
});
formatter.match({
  "location": "seleniumSteps.enter_in_email_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "pass valid \"AnuAnu5\" in username field",
  "keyword": "And "
});
formatter.match({
  "location": "seleniumSteps.pass_valid_in_username_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "we give a valid \"Dec@2020\" in password field",
  "keyword": "And "
});
formatter.match({
  "location": "seleniumSteps.we_give_a_valid_in_password_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "we confirm the \"Dec@2020\" in confirm password field",
  "keyword": "And "
});
formatter.match({
  "location": "seleniumSteps.we_confirm_the_in_confirm_password_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click register",
  "keyword": "Then "
});
formatter.match({
  "location": "seleniumSteps.click_register()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "we are in confirmation page",
  "keyword": "When "
});
formatter.match({
  "location": "seleniumSteps.we_are_in_confirmation_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "we click on Profile button",
  "keyword": "And "
});
formatter.match({
  "location": "seleniumSteps.we_click_on_Profile_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "validate if profile name is \"Anu Suresh\"",
  "keyword": "Then "
});
formatter.match({
  "location": "seleniumSteps.we_validate_the(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on Homepage",
  "keyword": "Then "
});
formatter.match({
  "location": "seleniumSteps.click_on_Homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "once Profile menu appears",
  "keyword": "And "
});
formatter.match({
  "location": "seleniumSteps.once_Profile_menu_appears()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on Compose",
  "keyword": "Then "
});
formatter.match({
  "location": "seleniumSteps.click_on_Compose()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "we are on compose message page",
  "keyword": "Given "
});
formatter.match({
  "location": "seleniumSteps.we_are_on_compose_message_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enter the \"naveen\" in send to field",
  "keyword": "Then "
});
formatter.match({
  "location": "seleniumSteps.enter_the_receiver_name_in_send_to_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "type a \"test only\" in subject field",
  "keyword": "And "
});
formatter.match({
  "location": "seleniumSteps.type_a_subject_in_subject_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "type the \"mailmessage\" in message field",
  "keyword": "And "
});
formatter.match({
  "location": "seleniumSteps.type_the_in_message_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click send message button",
  "keyword": "And "
});
formatter.match({
  "location": "seleniumSteps.click_send_message_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "check if confirmation message is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "seleniumSteps.check_if_confirmation_message_is_displayed()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});