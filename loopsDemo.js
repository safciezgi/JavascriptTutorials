var users = [
    {mail:"ezgi@mail.com", passwd="12345"},
    {mail:"elif@mail.com", passwd="12345"},
    {mail:"ayse@mail.com", passwd="54321"}
]

var tweets = [
    {mail:"ezgi@mail.com", tweet="I need to drink some coffee!"},
    {mail:"elif@mail.com", tweet="Let's go to the partyy!"},
    {mail:"ayse@mail.com", tweet="What a lovely day!"}
]

var user_mail = prompt("Mail:")
var user_pass = prompt("Password:")

function UserCheck(user_mail, user_pass){
    for (let i = 0; i < users.length; i++) {
        if (users[i].mail == user_mail && users[i].passwd == user_pass) {
            return true;
        }
        
    }
    return false;
}

function Login(user_mail, user_pass) {
    if (UserCheck(user_mail, user_pass) == true) {
        console.log(tweets);
    }else{
        console.log("Password or user name are incorrect!")
    }
}
Login(user_mail,user_pass);