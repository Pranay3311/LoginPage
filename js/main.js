const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});

function resetpass()
{
	var temp=document.getElementById("email").value;
    if(temp != "")
    {
        alert("New Password has been sent to your Mail-Id");
	}
	else{
		return false;
	}
    
}
function valida()
{
    var id=document.getElementById("uname").value;
    var pass=document.getElementById("pass").value;
    if(id =="ppatil@gmail.com" && pass=="12345678"){
        return true;
    }
    else
    {
        alert("Invalid User or Password");
        return false;
    }
}