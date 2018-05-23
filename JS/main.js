$(document).ready(function () {
    $('#modal1').modal()
        $('#que1 input').on('change', function () {
            let ans1 = ($('input[name=group1]:checked', '#que1').val())
            if (ans1 === 'michaeljackson')
            console.log(true)
            else console.log (false);
        })
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
