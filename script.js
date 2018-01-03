$( document ).ready(function() {
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDvf1BkIw-IZ_NFFd1g_QI6qMLMrVFuXOk",
    authDomain: "form-submit-44689.firebaseapp.com",
    databaseURL: "https://form-submit-44689.firebaseio.com",
    projectId: "form-submit-44689",
    storageBucket: "",
    messagingSenderId: "559169214737"
    };
  
    firebase.initializeApp(config);

    // Reference messages collection
    
    var messagesRef = firebase.database().ref('messages');

  $( ".button" ).click(function(e) {
    e.preventDefault();
    var $name = $('#name').val();
    var $email = $('#email').val();
    var $message = $('#msg').val();
    saveMessage($name, $email, $message);
    setTimeout(function() {
      $("h2").removeClass("hide")  
      }, 1500);
    }
  );

  function saveMessage(name, email, message){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
      name: name,
      email:email,
      message:message
    });
  }
  // Input Lock
$('textarea').blur(function () {
  $('#hire textarea').each(function () {
      $this = $(this);
      if ( this.value != '' ) {
        $this.addClass('focused');
        $('textarea + label + span').css({'opacity': 1});
      }
      else {
        $this.removeClass('focused');
        $('textarea + label + span').css({'opacity': 0});
      }
  });
});

$('#hire .field:first-child input').blur(function () {
  $('#hire .field:first-child input').each(function () {
      $this = $(this);
      if ( this.value != '' ) {
        $this.addClass('focused');
        $('.field:first-child input + label + span').css({'opacity': 1});
      }
      else {
        $this.removeClass('focused');
        $('.field:first-child input + label + span').css({'opacity': 0});
      }
  });
});

$('#hire .field:nth-child(2) input').blur(function () {
  $('#hire .field:nth-child(2) input').each(function () {
      $this = $(this);
      if ( this.value != '' ) {
        $this.addClass('focused');
        $('.field:nth-child(2) input + label + span').css({'opacity': 1});
      }
      else {
        $this.removeClass('focused');
        $('.field:nth-child(2) input + label + span').css({'opacity': 0});
      }
  });
});
});
