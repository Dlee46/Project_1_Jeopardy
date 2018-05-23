$(document).ready(function () {
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
            $('#score').html(total)
        });
        $('#modal2').modal();
        $('#modal3').modal();
        $('#modal4').modal();
        $('#modal5').modal();
        $('#modal6').modal();
        $('#modal7').modal();
        $('#modal8').modal();
        $('#modal9').modal();
        $('#modal10').modal();
        $('#modal11').modal();
        $('#modal12').modal();
        $('#modal13').modal();
        $('#modal14').modal();
        $('#modal15').modal();
        $('#modal16').modal();
        $('#modal17').modal();
        $('#modal18').modal();
        $('#modal19').modal();
        $('#modal20').modal();
    });
