 let getOutput = (output)=>{
  document.getElementById("output").innerHTML = output
 }

 let whereAt = ()=>{
     getOutput(location.href);
 }

 let goToGoogle = ()=>{
   location.href = "http://google.com";
}

let goToreplace = ()=>{
  location.replace("http://google.com");
}

let popupWindow;

let newPopwindow = ()=>{
  popupWindow = window.open("", "myWindow" ,"width=500, height=500 , top=100 , buttom-100")
}

let writePopup = ()=>{
  popupWindow.document.write("<h1>hello tahir </h1>")
}

let assignPopup = ()=>{
  popupWindow.location.assign("https://getbootstrap.com/docs/5.2/content/tables/#always-responsive");
}

let closePopup = ()=>{
  popupWindow.close();
}