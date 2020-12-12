Feature:	To signup in the application and send mail 

Scenario Outline:	To register in the application
Given navigate to "http://elearningm1.upskills.in/"
When Signup link is available
And we click on signup link
When Registration page appears
Then we pass "<FirstName>" in first name field
And pass "<Lastname>" in last name field
And enter "<email>" in email field
And pass valid "<username>" in username field
And we give a valid "<password>" in password field
And we confirm the "<confirmpassword>" in confirm password field
Then click register
When we are in confirmation page
And we click on Profile button
Then validate if profile name is "<Name>"
Then click on Homepage
And once Profile menu appears
Then click on Compose
Given we are on compose message page
Then enter the "<ReceiverName>" in send to field
And type a "<subject>" in subject field
And type the "<mailmessage>" in message field
And click send message button
Then check if confirmation message is displayed

Examples:
|FirstName|Lastname|email|username|password|confirmpassword|Name|ReceiverName|subject|mailmessage|
|Anu|Suresh|test5@gmail.com|AnuAnu5|Dec@2020|Dec@2020|Anu Suresh|naveen|test only|mailmessage|

