{/* <html>
    <head>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
<!-- Latest compiled and minified CSS -->
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">

<!-- jQuery library -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script src="https://www.gstatic.com/firebasejs/5.7.1/firebase.js"></script>
<!-- Latest compiled JavaScript -->
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
<body>
<form>
<input id="sno" type="text" placeholder="serial number">
<input id="name" type="text" placeholder="name">
<input id="role" type="text" placeholder="role">
<button id="add">Add</button>  
</form>
<b>S.no</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>Name</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>Role</b><br>
<div>
</div> */}

$(document).ready(function(){
    $("#q1").hide();
  
    var one = ['Temple Package 1', 'Temple Package 2','Valparai Package 3',
                'Topslip Package 4','Bannari Package 5','Palani Package 6','Ooty Package 7'
                ,'Monkey falls Package 8','Kodaikanal Package 9','Black Thunder Package 10'];
    var two=['Ooty Package 1','Munnar Package 2','Kutralam Package 3',
              'Topslip Package 4','Kodaikanal Package 5','Mysore Package 6','Yercaud Package 7','Veega land Package 8'];            
    var three=['Hill station Package 1','Ooty Package 2','Kodaikanal Package 3','Mysore Package 4','Munnar Package 5',
                'Tiruchendur Package 6','Kumbakonam Package 7','Kanniyakumari Package 8'];
    var five=['Munnar Package 1','Wildlife Package 2','Hill station Package 3','Kaniyakumari Package 4','Thiruvannamalai Package 5'
               ,'Goa Package 6','Historical Temple Package 7','Trichy Package 8','Temple Package 9'];            
  $("#Package").change(function(){
    $("#q1").hide();
    var value=$("#Package").val();

      if(value=="own"){
          
               $("#q2").hide();
             $("#q1").show();       
      }else{                
          $("#q2").show();
          $("#q1").hide();
      }

      $("#one").empty();
     

     if(value=="one")
     {
         var option = '';
         for(var i = 0; i < one.length; i++){
        
               option += '<option value="' + one[i] + '">' + one[i] + '</option>';
             }
         $("#one").append(option);

     }
     if(value=="two")
     {
         var option = '';
         for(var i = 0; i < two.length; i++){
        
               option += '<option value="' + two[i] + '">' + two[i] + '</option>';
             }
         $("#one").append(option);

     }
     if(value=="three")
     {
         var option = '';
         for(var i = 0; i < three.length; i++){
        
               option += '<option value="' + three[i] + '">' + three[i] + '</option>';
             }
         $("#one").append(option);

     }
     if(value=="five")
     {
         var option = '';
         for(var i = 0; i < five.length; i++){
        
               option += '<option value="' + five[i] + '">' + five[i] + '</option>';
             }
         $("#one").append(option);

     }
});


var config = {
    apiKey: "AIzaSyBMX_UCiEZsCpW6IUHbBN8T8OMkhvaVqZQ",
    authDomain: "kingofkings-f2aa6.firebaseapp.com",
    databaseURL: "https://kingofkings-f2aa6.firebaseio.com",
    projectId: "kingofkings-f2aa6",
    storageBucket: "kingofkings-f2aa6.appspot.com",
    messagingSenderId: "535924855738"
  };
  firebase.initializeApp(config);
// Reference messages collection
var messagesRef = firebase.database().ref('messages');


var ref = firebase.database().ref();

$("#add").click(function(){
   //alert('s');
   var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1; //January is 0!
var yyyy = today.getFullYear();

if(dd<10) {
    dd = '0'+dd
} 

if(mm<10) {
    mm = '0'+mm
} 

today = dd + '/' + mm + '/' + yyyy;
//document.write(today);
   
   var fname =  $("#fname").val();
   var lname = $("#lname").val();
   var email=$("#email").val();
   var phone=$("#phone").val();
   var Package=$("#Package").val();
   var spackage=$("#one").val();
   var days=$("#days").val();
   var vehicle=$("#vehicle").val();
   var actype=$("#ac").val();
   var person=$("#person").val();
   var  address=$("#address").val();
   var comments=$("#comments").val();
   var obj = {'fname':fname,'lname':lname,'email':email,'phone':phone,'Package':Package,'spackage':spackage
                 ,'days':days,'vehicle':vehicle,'actype':actype,'person':person,'address':address,'comments':comments,'date':today};
    ref.push(obj); 
window.location.reload();
});  



});

