
$(document).ready(function() {
    //$('#datatable').dataTable();
    
//    /$("[data-toggle=tooltip]").tooltip();
$("#view").hide();

var config = {
  apiKey: "AIzaSyCyQVe99-yI397SrfLC7CPPyzRSXZvK77g",
  authDomain: "kgisl-9c6c9.firebaseapp.com",
  databaseURL: "https://kgisl-9c6c9.firebaseio.com",
  projectId: "kgisl-9c6c9",
  storageBucket: "kgisl-9c6c9.appspot.com",
  messagingSenderId: "342730020406"
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