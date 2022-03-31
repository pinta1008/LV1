let form=document.getElementById("formSubmission");

let table=document.getElementById('data');
form.addEventListener("submit",(e)=>{
  e.preventDefault();
  submit();
})


const submit=()=>{
  let Ime = document.getElementById("Ime").value;
    let Godina = document.getElementById("Godina").value;
    let ECTS = document.getElementById("ECTS").value;


  let newArray = [Ime,Godina,ECTS];
  newArray.forEach((item)=>{
      var li = document.createElement("li");
  var text = document.createTextNode(item);
  li.appendChild(text);
  table.appendChild(li);
  })
  form.reset(); 
}