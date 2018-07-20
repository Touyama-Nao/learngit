$(function(){
    var i=0;
    var a={
        a1:"#x-slider-pannel-left-carouse",
        a2:"",
        
        fn: function(){
            if(i==3){
                i=0;
            }
            var t= this;
            if(i<=3){
                $("#x-slider-pannel-left-carouse").css("margin-left",(-i*800)+"px");
                i++;
                $(".slider-dot").eq(i-1).css("background-color","yellow");
            }else if(i==4){
                i=0;
                $(".slider-dot").eq(i-1).css("background-color","white");
                $(".slider-dot").eq(i-2).css("background-color","yellow")
            }
            return t;
    }
    } ;
    var settime=setInterval(a.fn,3000); 
})
$(function(){
    var i=0;
    var a={
        a1:"#x-slider-pannel-center1-carouse",
        a2:"",
        
        fn: function(){
            if(i==3){
                i=0;
            }
            var t= this;
            if(i<=3){
                $("#x-slider-pannel-center1-carouse").css("margin-top",(-i*600)+"px");
                i++;
                $(".slider-dot").eq(i-1).css("background-color","white");
                $(".slider-dot").eq(i-2).css("background-color","yellow")
            }else if(i==4){
                i=0;
            }
            return t;
    }
    } ;
    var settime=setInterval(a.fn,3000); 
})
$(function(){
    var i=0;
    var a={
        a1:"#x-slider-pannel-center2-carouse",
        a2:"",
        
        fn: function(){
            if(i==3){
                i=0;
            }
            var t= this;
            if(i<=3){
                $("#x-slider-pannel-center2-carouse").css("margin-top",(i*600-1200)+"px");
                i++;
                $(".slider-dot").eq(i-2).css("background-color","white");
                $(".slider-dot").eq(i-1).css("background-color","white");
            }else if(i==4){
                i=0;
            }
            return t;
    }
    } ;
    var settime=setInterval(a.fn,3000); 
})
$(function(){
    var i=0;
    var a={
        a1:"#x-slider-pannel-right-carouse",
        a2:"",
        
        fn: function(){
            if(i==3){
                i=0;
            }
            var t= this;
            if(i<=3){
                $("#x-slider-pannel-right-carouse").css("margin-left",(i*800-2200)+"px");
                i++;
                $(".slider-dot").eq(i-2).css("background-color","white");
                $(".slider-dot").eq(i-1).css("background-color","yellow");
            }else if(i==4){
                i=0;
                
            }
            return t;
    }
    } ;
   var settime= setInterval(a.fn,3000); 
})
$(function(){
    var b={
        b1: ".slider-dot",
        fn2: function(){
            var t = this;
            $(t.b1).mouseover(function(){
                console.log("hello")
                clearInterval(settime);
                $(t.b1).css("background","white");
                $(this).css("background-color","yellow");

            })
        }
    }.fn2();
})