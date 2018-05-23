$(document).ready(function () {
    // $('h1').prepend('<img id="jeopardyName" src="http://www.myatltv.com/shows/jeopardy/jeopardy_logo.jpg" />')
    let total = 0
    $('#modal1').modal()
    $('#que1 input').on('change', function () {
        let ans1 = ($('input[name=group1]:checked', '#que1').val())
        if (ans1 === 'music100b') {
            total = total + 100;
        }
        else {
            total = total - 100;
        }
        $('#hide1').on('click', function () {
                $('#musicone').hide('test');
                })
        $('#score').html(total)
        // $("#modal1").modal('close')
    })

    $('#modal2').modal();
    $('#que2 input').on('change', function () {
        let ans2 = ($('input[name=group1]:checked', '#que2').val())
        if (ans2 === 'life100c') {
            total = total + 100;
        }
        else {
            total = total - 100;
        }
        $('#hide2').on('click', function () {
            $('#lifeone').hide('test');
            })
        $('#score').html(total)
    });
    $('#modal3').modal();
    // b
    $('#que3 input').on('change', function () {
        let ans3 = ($('input[name=group1]:checked', '#que3').val())
        if (ans3 === 'math100b') {
            total = total + 100;
        }
        else {
            total = total - 100;
        }
        $('#hide3').on('click', function () {
            $('#mathone').hide('test');
            })
        $('#score').html(total)
    });
    $('#modal4').modal();
    // a
    $('#que4 input').on('change', function () {
        let ans4 = ($('input[name=group1]:checked', '#que4').val())
        if (ans4 === 'society100a') {
            total = total + 100;
        }
        else {
            total = total - 100;
        }
        $('#hide4').on('click', function () {
            $('#societyone').hide('test');
            })
        $('#score').html(total)
    });
    $('#modal5').modal();
    // c
    $('#que5 input').on('change', function () {
        let ans5 = ($('input[name=group1]:checked', '#que5').val())
        if (ans5 === 'music200c') {
            total = total + 200;
        }
        else {
            total = total - 200;
        }
        $('#hide5').on('click', function () {
            $('#musictwo').hide('test');
            })
        $('#score').html(total)
    });
    $('#modal6').modal();
    // b
    $('#que6 input').on('change', function () {
        let ans6 = ($('input[name=group1]:checked', '#que6').val())
        if (ans6 === 'life200b') {
            total = total + 200;
        }
        else {
            total = total - 200;
        }
        $('#hide6').on('click', function () {
            $('#lifetwo').hide('test');
            })
        $('#score').html(total)
    });
    $('#modal7').modal();
    // b
    $('#que7 input').on('change', function () {
        let ans7 = ($('input[name=group1]:checked', '#que7').val())
        if (ans7 === 'math200b') {
            total = total + 200;
        }
        else {
            total = total - 200;
        }
        $('#hide7').on('click', function () {
            $('#mathtwo').hide('test');
            })
        $('#score').html(total)
    });
    $('#modal8').modal();
    // b
    $('#que8 input').on('change', function () {
        let ans8 = ($('input[name=group1]:checked', '#que8').val())
        if (ans8 === 'society200cb') {
            total = total + 200;
        }
        else {
            total = total - 200;
        }
        $('#hide8').on('click', function () {
            $('#societytwo').hide('test');
            })
        $('#score').html(total)
    });
    $('#modal9').modal();
    // c
    $('#que9 input').on('change', function () {
        let ans2 = ($('input[name=group1]:checked', '#que9').val())
        if (ans2 === 'music300c') {
            total = total + 300;
        }
        else {
            total = total - 300;
        }$('#hide9').on('click', function () {
            $('#musicthree').hide('test');
            })
        $('#score').html(total)
    });
    $('#modal10').modal();
    // b
    $('#que10 input').on('change', function () {
        let ans10 = ($('input[name=group1]:checked', '#que10').val())
        if (ans10 === 'life300b') {
            total = total + 300;
        }
        else {
            total = total - 300;
        }
        $('#hide10').on('click', function () {
            $('#lifethree').hide('test');
            })
        $('#score').html(total)
    });
    $('#modal11').modal();
    // b
    $('#que11 input').on('change', function () {
        let ans11 = ($('input[name=group1]:checked', '#que11').val())
        if (ans11 === 'math300b') {
            total = total + 300;
        }
        else {
            total = total - 300;
        }
        $('#hide11').on('click', function () {
            $('#maththree').hide('test');
            })
        $('#score').html(total)
    });
    $('#modal12').modal();
    // a
    $('#que12 input').on('change', function () {
        let ans12 = ($('input[name=group1]:checked', '#que12').val())
        if (ans12 === 'society300a') {
            total = total + 300;
        }
        else {
            total = total - 300;
        }
        $('#hide12').on('click', function () {
            $('#societythree').hide('test');
            })
        $('#score').html(total)
    });
    $('#modal13').modal();
    // b
    $('#que13 input').on('change', function () {
        let ans10 = ($('input[name=group1]:checked', '#que13').val())
        if (ans10 === 'music400b') {
            total = total + 400;
        }
        else {
            total = total - 400;
        }
        $('#hide13').on('click', function () {
            $('#musicfour').hide('test');
            })
        $('#score').html(total)
    });
    $('#modal14').modal();
    // b
    $('#que14 input').on('change', function () {
        let ans10 = ($('input[name=group1]:checked', '#que14').val())
        if (ans10 === 'life400b') {
            total = total + 400;
        }
        else {
            total = total - 400;
        }
        $('#hide14').on('click', function () {
            $('#lifefour').hide('test');
            })
        $('#score').html(total)
    });
    $('#modal15').modal();
    // a
    $('#que15 input').on('change', function () {
        let ans15 = ($('input[name=group1]:checked', '#que15').val())
        if (ans15 === 'math400a') {
            total = total + 400;
        }
        else {
            total = total - 400;
        }
        $('#hide15').on('click', function () {
            $('#mathfour').hide('test');
            })
        $('#score').html(total)
    });
    $('#modal16').modal();
    // b
    $('#que16 input').on('change', function () {
        let ans16 = ($('input[name=group1]:checked', '#que16').val())
        if (ans16 === 'society400b') {
            total = total + 400;
        }
        else {
            total = total - 400;
        }
        $('#hide16').on('click', function () {
            $('#societyfour').hide('test');
            })
        $('#score').html(total)
    });
    $('#modal17').modal();
    // c
    $('#que17 input').on('change', function () {
        let ans17 = ($('input[name=group1]:checked', '#que17').val())
        if (ans17 === 'music500c') {
            total = total + 500;
        }
        else {
            total = total - 500;
        }
        $('#hide17').on('click', function () {
            $('#musicfive').hide('test');
            })
        $('#score').html(total)
    });
    $('#modal18').modal();
    // b
    $('#que18 input').on('change', function () {
        let ans18 = ($('input[name=group1]:checked', '#que18').val())
        if (ans18 === 'life500b') {
            total = total + 500;
        }
        else {
            total = total - 500;
        }
        $('#hide18').on('click', function () {
            $('#lifefive').hide('test');
            })
        $('#score').html(total)
    });
    $('#modal19').modal();
    // b
    $('#que19 input').on('change', function () {
        let ans19 = ($('input[name=group1]:checked', '#que19').val())
        if (ans19 === 'math500b') {
            total = total + 500;
        }
        else {
            total = total - 500;
        }
        $('#hide19').on('click', function () {
            $('#mathfive').hide('test');
            })
        $('#score').html(total)
    });
    $('#modal20').modal();
    // c
    $('#que20 input').on('change', function () {
        let ans20 = ($('input[name=group1]:checked', '#que20').val())
        if (ans20 === 'society500c') {
            total = total + 500;
        }
        else {
            total = total - 500;
        }
        $('#hide20').on('click', function () {
            $('#societyfive').hide('test');
            })
        $('#score').html(total)
    });
    $('i').click(function () {
        window.location.href = "./"
    });
});
