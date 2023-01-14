//alert("hello")
function chcekform(){
    var name = document.getElementById("name").value
    var Profession = document.getElementById("Profession").value
    var age = document.getElementById("Age").value
    var flag = false;
    if(name !="" && Profession !="" && age !=""){
        document.getElementById("success-msg").classList.remove("succuss")
        document.getElementById("error-msg").classList.add("error")
        flag=true;
    }else{
        document.getElementById("error-msg").classList.remove("error")
    }
    let table=document.getElementById('data');
    if(flag){
        document.getElementById("tab").classList.add("success")
        document.getElementById("data").classList.remove("success")
    }
        let newArray = ["Name :"+" "+name,"Profession"+" "+Profession,"Age"+" "+age,"Delete User"];
        newArray.forEach((item)=>{
            var li = document.createElement("li");
        var text = document.createTextNode(item);
        li.appendChild(text);
        table.appendChild(li);
        })
       // form.reset(); 
      }
