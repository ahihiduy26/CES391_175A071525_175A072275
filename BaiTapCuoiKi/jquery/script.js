$(document).ready(function(){
    $( "#dialog" ).dialog({
      autoOpen: false,
      show: {
        effect: "blind",
        duration: 1000
      },
      hide: {
        effect: "explode",
        duration: 1000
      },
			modal : true,
			button : {
				"Log in" : function(){
					alert('Test Log in');
				},
				"Exit" : function(){
					dialog.dialog('close')
				}
			}
    });

    $( "#opener" ).on( "click", function() {
      $( "#dialog" ).dialog( "open" );
    });
  } );
