
$(document).ready(function() {
    //$('#datatable').dataTable();
    
//    /$("[data-toggle=tooltip]").tooltip();
$("#view").hide();
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

 
 var ref = firebase.database().ref();
 ref.once('value', function(snapshot) {
  snapshot.forEach(function(childSnapshot) {
  // alert(childSnapshot.val().fname);
    
var row = '<tr>' +  '<td>'+ childSnapshot.val().fname+'</td>'
					 +'<td>' +  childSnapshot.val().lname+ '</td>'                    
                     + '<td>'+  childSnapshot.val().email+ '</td>'
                     + '<td>'+  childSnapshot.val().date + '</td>'
                  
                      + '<td>'+  childSnapshot.val().phone + '</td>'
                     + '<td>' +  childSnapshot.val().Package+ '</td>' 
                     + '<td>' +  childSnapshot.val().spackage+ '</td>'
                     + '<td>' +  childSnapshot.val().days+ '</td>' 
                     + '<td>' +  childSnapshot.val().vehicle+ '</td>'
                     + '<td>' +  childSnapshot.val().actype+ '</td>' 
                     + '<td>' +  childSnapshot.val().person+ '</td>' 
                     + '<td>' +  childSnapshot.val().address+ '</td>'
                     + '<td>' +  childSnapshot.val().comments+ '</td>'+
            	'</tr>';
                $("#datatable tbody").append(row);

  });

$('#datatable').dataTable();

                
});


    $("#login").click(function(){
      
        var user=$("#user").val();
        var pass=$("#password").val();
        
        if(user=="jjkannan444@gmail.com" && pass=="kingofkings2019@")
        {   
            swal("Good job!", "Login Successfully!", "success")
             $("#view").show();
             $("#sign").hide();
          
        }
        else{
            swal("Wrong User!", "Username && password Worng!", "error");
            $("#user").val("");
            $("#password").val("");
        }
        
      
      });
      $("#logout").click(function(){
      
        $("#view").hide();
        $("#sign").show();
     
        
      
      });

} );