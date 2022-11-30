document.querySelector("form").addEventListener("submit", getOtp);
var users=JSON.parse(localStorage.getItem("users"))|| [] ;
function getOtp(){
    event.preventDefault();
    var checknum = document.getElementById("phone").value.toString();
    console.log(checknum);
    for(let i=0; i<users.length; i++){
        if(users[i].number===checknum){
            var otpmsg = document.createElement("P");
            otpmsg.textContent="Enter 6 Digit OTP";
            var otp = document.createElement("INPUT");
            otp.setAttribute("type", "text");
            otp.setAttribute("id", "otplogin");
            var newbtn = document.createElement("button");
            newbtn.setAttribute("id", "verify");
            newbtn.innerHTML="Verify OTP";
           document.querySelector("#otpbox").append(otpmsg,otp,newbtn);
            var btn = document.getElementById("loginbtn");
            btn.remove();
            document.querySelector("#verify").addEventListener("click", visitHome);
            function visitHome(){
                if(document.querySelector("#otplogin").value==123456){
                    window.location.href="home.html";

                } else{
                    alert("You have Entered Wrong OTP");
                    window.location.href="login.html"
                }
                
            }
        } 
        else if(checknum.length!=10){
            alert("Please Enter 10 Digit Mobile Number");
        } 
        else if(checknum.length==10){
            window.location.href="signup.html"
        }
    }
}
