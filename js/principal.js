$(function(){
    $("#hazlo").on("click",function(){
        $(this).hide();
        $("#usuarios").show();
        var jqxhr=$.ajax({
            method:"GET",
            url:"https://randomuser.me/api",
            data:{results:"50"},
            dataType:"json"
        });
        jqxhr.done(function(json){
            for(var i=0;i<50;i++){
                var nombre=json.results[i].name.first+" ";
                nombre+=json.results[i].name.last;
                var email=json.results[i].email;
                var direccion=json.results[i].location.street+", ";
                direccion+=json.results[i].location.postcode+", ";
                direccion+=json.results[i].location.city+" (";
                direccion+=json.results[i].location.state+")";
                var foto=json.results[i].picture.large;
                if(i%2==0){
                    var color='white';
                }else{
                    var color='lightgray';
                }
                $("#usuarios").append(
                    "<div id='u"+i+"' style='background-image:url("+foto+");background-color:"+color+"'>"+
                    "<p>"+nombre+"</p>"+
                    "<p>"+email+"</p>"+
                    "<p>"+direccion+"</p>"+
                    "</div>"
                );

            }
        })
    })
});