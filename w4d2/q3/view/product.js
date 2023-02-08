$(function(){

    $("input[type='button']").click((e)=>{

        let data = {
            name : $(e.currentTarget).parent().parent().find("input[name='name']").val(),
            price : $(e.currentTarget).parent().parent().find("input[name='price']").val()
        };

        $.ajax({
            url: "/addToCart",
            type:"post",
            data : data
        }).done(onSuccess);
    });

    function onSuccess(res){
        $("#cartCount").text(res.totalCart);
        alert("Successfully Carted");
    }
});