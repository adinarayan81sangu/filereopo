// $(document).ready(
    
//     function(data){
//         $.get('http://numbersapi.com/1337/trivia?notfound=floor&fragment', function(data) {
//             $('#number').text(data);
//         });
//     }
//     ) 
$(document).ready(
    function(){
      $('#getnumber').click(function(){
                let num = $('#num').val();
                $.get(
                    'http://numbersapi.com/'+num,
                    function(data){
                        $('#numresult').text(data);
                })          
        }
      )
      $('#mathfact').click(function(){
        let num1 = $('#num').val();
        $.get(
            'http://numbersapi.com/'+num1,
            function(data){
                $('#numresult').text(data);
        })          
}
)
$('#datefact').click(function(){
    let day = $('#date').val();
    let month=$('#month').val();
    $.get(
        "http://numbersapi.com/" +day+"/"+month+"/date",
        function(data){
            $('#numresult').text(data);
    })          
}
)
      
    }
    ) 