$( document ).ready(function() {
    console.log( "qa js ready!" );

   function showAnswer(answerId) {
        let idSelector = "#" + answerId;
        $(idSelector).show(1000);
    };

    function hideAllAnswers(answerId){
       //toto
        let idSelector = "#" + answerId;
        $(idSelector).hide("slow");
    }
/* if a page has only one question/answer */
$('#inj-yes-btn').click(function(){
    $('#inj-no-answr').hide("fast");
    $('#inj-yes-answr').show(1000);
   
});
$('#inj-no-btn').click(function(){
    $('#inj-yes-answr').hide("fast");
    $('#inj-no-answr').show(1000);
});

/* There has got to be a better way to abstract these out */
    $('#inj-one-yes-btn').click(function(){
        $('#inj-one-no-answr').hide("fast");
        $('#inj-one-yes-answr').show(1000);
       
    });
    $('#inj-one-no-btn').click(function(){
        $('#inj-one-yes-answr').hide("fast");
        $('#inj-one-no-answr').show(1000);
    });

    $('#inj-two-yes-btn').click(function(){
        $('#inj-two-no-answr').hide("fast");
        $('#inj-two-yes-answr').show(1000);
       
    });
    $('#inj-two-no-btn').click(function(){
        $('#inj-two-yes-answr').hide("fast");
        $('#inj-two-no-answr').show(1000);
    });


    $('#sidebar-toggler').click(function(){
       //console.log('toggle button clicked');
       //console.log(this);
       if($('#sidebar2').is(":visible")){
        $('#sidebar2').hide("fast");  
        $("#toggle-btn-icon").html('&DownArrowBar;')  
       }
       else{
        $('#sidebar2').show(1000);    
        $("#toggle-btn-icon").html('&UpArrowBar;') 
       }

    });
});

