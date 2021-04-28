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

    $('#inj-one-yes-btn').click(function(){
        $('#inj-one-no-answr').hide("fast");
        $('#inj-one-yes-answr').show(1000);
       
    });

    $('#inj-one-no-btn').click(function(){
        $('#inj-one-yes-answr').hide("fast");
        $('#inj-one-no-answr').show(1000);
       
    });

    $('#sidebar-toggler').click(function(){
       //console.log('toggle button clicked');
       //console.log(this);
       if($('#sidebar').is(":visible")){
        $('#sidebar').hide("fast");    
       }
       else{
        $('#sidebar').show(1000);    
       }

    });
});

