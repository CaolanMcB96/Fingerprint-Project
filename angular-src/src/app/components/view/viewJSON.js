var xmlhttp;

window.onload=function(){
  getAjaxData();
}

function getAjaxData()
{
  if (window.XMLHttpRequest)
    xmlhttp=new XMLHttpRequest();
  else
    xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");

  xmlhttp.onreadystatechange = showJSONData;
  xmlhttp.open("GET", "student.json", true);
  xmlhttp.send();
}

function showJSONData()
{
  if (xmlhttp.readyState==4 && xmlhttp.status==200)
  {
    var data = JSON.parse(xmlhttp.responseText);
    var output = '<ul>';
    for (var i = 0; i < data.students.length; i++) {
        output += '<li>' + data.students[i].Name + "<br>Student ID:" + data.students[i].Student_ID + '</li>';
    }
    output += '</ul>';
    document.getElementById("myDiv").innerHTML = output;
  }
}
