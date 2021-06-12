$(document).ready(function () {

    //Refactor
    $(".question-button").click(function () {
        let btnId = this.id;

        let indexer = btnId.charAt(0);
        if (btnId.includes('yesq')) {
            $('#' + indexer + 'noa').hide("fast");
            $('#' + indexer + 'yesa').show(1000);
        } else {
            $('#' + indexer + 'noa').show(1000);
            $('#' + indexer + 'yesa').hide("fast");
        }
    });

    $(".question-buttont").click(function () {
        let btnId = this.id;

        let indexer = btnId.slice(0, 2);
        if (btnId.includes('yesq')) {
            $('#' + indexer + 'noa').hide("fast");
            $('#' + indexer + 'yesa').show(1000);
        } else {
            $('#' + indexer + 'noa').show(1000);
            $('#' + indexer + 'yesa').hide("fast");
        }
    });


    $("input[name*='optradio-']").click(function () {
        let rdoFamily = this.name.replace('optradio', '');
        let indexer = this.id.charAt(0);
        //Hide all, show only one answer
        $('.rdoa' + rdoFamily).hide("fast");
        $('#' + indexer + rdoFamily).show(1000);
    });

    //Final test
    $('#btn-score-dvi').click(function () {
        /* As of 2021/06/03 
1 = true
2 = false
3 = true
4 = true
5 = true
6 = true
7 = false
8 = false
9 = false */
        const corretAnswers = [true, false, true, true, true, true, false, false, false];

        let gotCorrect = [];
        let gotWrong = [];
        //Go thru each unique name group and get the user's answer
        $('.form-check-input[value="true"]').each(function (index) {
            const groupname = $(this).attr('name');
            let userAnswer = $("input:radio[name='" + groupname + "']:checked").val();

            if (typeof userAnswer === "undefined") {
                gotWrong.push(index + 1); //No answer is a wrong answer
            } else {
                if (corretAnswers[index] === (userAnswer === 'true')) {
                    gotCorrect.push(index + 1);
                } else {
                    gotWrong.push(index + 1);
                }
            }
        });

        if (gotCorrect.length > 0) {
            let qNumbersCorrect = '';
            for (let i = 0; i < gotCorrect.length; i++) {
                qNumbersCorrect += gotCorrect[i].toString() + ', ';
            }
            $('#correct-question-ids').html(qNumbersCorrect.substring(0, qNumbersCorrect.length - 1));
            $('#correct-container').show();
        }
        if (gotWrong.length > 0) {
            let qNumbersWrong = '';
            for (let i = 0; i < gotWrong.length; i++) {
                qNumbersWrong += gotWrong[i].toString() + ', ';
            }
            $('#wrong-question-ids').html(qNumbersWrong.substring(0, qNumbersWrong.length - 1));
            $('#wrong-container').show();
        }

        let score = '';
        if (gotCorrect.length === 0) {
            score = "0%";
        } else {
            const perc = ((gotCorrect.length / corretAnswers.length) * 100).toFixed(1);
            score = perc.toString() + '%';
        }
        $('#score-container').show();
        $('#score-text').html(score);

    });


    //TODO get rid of all of this below for Q&A it has been refactored
    /* if a page has only one question/answer */
    $('#inj-yes-btn').click(function () {
        $('#inj-no-answr').hide("fast");
        $('#inj-yes-answr').show(1000);

    });
    $('#inj-no-btn').click(function () {
        $('#inj-yes-answr').hide("fast");
        $('#inj-no-answr').show(1000);
    });

    /* There has got to be a better way to abstract these out */
    $('#inj-one-yes-btn').click(function () {
        $('#inj-one-no-answr').hide("fast");
        $('#inj-one-yes-answr').show(1000);

    });
    $('#inj-one-no-btn').click(function () {
        $('#inj-one-yes-answr').hide("fast");
        $('#inj-one-no-answr').show(1000);
    });

    $('#inj-two-yes-btn').click(function () {
        $('#inj-two-no-answr').hide("fast");
        $('#inj-two-yes-answr').show(1000);

    });
    $('#inj-two-no-btn').click(function () {
        $('#inj-two-yes-answr').hide("fast");
        $('#inj-two-no-answr').show(1000);
    });

    $('#inj-three-yes-btn').click(function () {
        $('#inj-three-no-answr').hide("fast");
        $('#inj-three-yes-answr').show(1000);

    });
    $('#inj-three-no-btn').click(function () {
        $('#inj-three-yes-answr').hide("fast");
        $('#inj-three-no-answr').show(1000);
    });

    $('#inj-four-yes-btn').click(function () {
        $('#inj-four-no-answr').hide("fast");
        $('#inj-four-yes-answr').show(1000);

    });
    $('#inj-four-no-btn').click(function () {
        $('#inj-four-yes-answr').hide("fast");
        $('#inj-four-no-answr').show(1000);
    });
    $('#sidebar-toggler').click(function () {
        //console.log('toggle button clicked');
        //console.log(this);
        if ($('#sidebar2').is(":visible")) {
            $('#sidebar2').hide("fast");
            $("#toggle-btn-icon").html('&DownArrowBar;')
        } else {
            $('#sidebar2').show(1000);
            $("#toggle-btn-icon").html('&UpArrowBar;')
        }

    });
});