console.log("This is my script");
let result={
  
    "email": "mishra.parth04@gmail.com",
    "user": "mishra.parth04",
    "tag": "",
    "domain": "gmail.com",
    "smtp_check": true,
    "mx_found": true,
    "did_you_mean": "",
    "role": false,
    "disposable": false,
    "score": 0.64,
    "state": "deliverable",
    "reason": "valid_mailbox",
    "free": true,
    "format_valid": true,
    "catch_all": null
  
  }
submitBtn.addEventListener("click", async(e)=>{
    e.preventDefault()
    console.log("Clicked!")
    let key="ema_live_bq2CpeFR69VCaKl9MVv5w4IQHU4qB91ilD3vpBk1"
    let email=document.getElementById("username").value
    let url=`https://api.emailvalidation.io/v1/info?apikey=${key}&email=${email}`
    let res=await fetch(url)
    let result=await res.json()
    let str=``
    for(key of Object.keys(result)){
        if(result[key]!=="" && result[key]!==" ")
      str = str + `<div>${key}: ${result[key]}</div>`
    }
    console.log(str)
    resultCont.innerHTML=str
})



