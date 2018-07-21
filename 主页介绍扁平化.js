$(function(){
    var i=0;
    var m = 0;
    var n = 0;
    var h = 0;
    var a={
        a1:"#x-slider-pannel-left-carouse",
        a2:"",
       
        fn: function(){
            console.log(i);
            if(i==3){
                i=0;
            }
            var t= this;
            if(i<=3){
                $("#x-slider-pannel-left-carouse").css("margin-left",(-i*800)+"px");
                i++;
                $(".slider-dot").eq(i-2).css("background-color","white");
                $(".slider-dot").eq(i-1).css("background-color","yellow")
            }else if(i==4){
                i=0;
              
            }
            return t;
    }
    } ;
     settime1=setInterval(a.fn,3000); 
     
    var b={
       
        a1:"#x-slider-pannel-center1-carouse",
        a2:"",
        
        fn: function(){
            console.log(m);
            if(m==3){
                m=0;
            }
            var t= this;
            if(m<=3){
                $("#x-slider-pannel-center1-carouse").css("margin-top",(-m*600)+"px");
                m++;
                $(".slider-dot").eq(m-2).css("background-color","white");
                $(".slider-dot").eq(m-1).css("background-color","yellow")
            }else if(m==4){
                m=0;
            }
            return t;
    }
    } ;
     settime2=setInterval(b.fn,3000); 
    
    var c={
        a1:"#x-slider-pannel-center2-carouse",
        a2:"",
        
        fn: function(){
            if(n==3){
                n=0;
            }
            var t= this;
            if(n<=3){
                $("#x-slider-pannel-center2-carouse").css("margin-top",(n*600-1200)+"px");
                n++;
                $(".slider-dot").eq(n-2).css("background-color","white");
                $(".slider-dot").eq(n-1).css("background-color","white");
            }else if(n==4){
                n=0;
            }
            return t;
    }
    } ;
     settime3=setInterval(c.fn,3000);
    var d={
        a1:"#x-slider-pannel-right-carouse",
        a2:"",
        
        fn: function(){
            console.log(h);
            if(h==3){
                h=0;
            }
            var t= this;
            if(h<=3){
                $("#x-slider-pannel-right-carouse").css("margin-left",(h*800-2200)+"px");
                h++;
                $(".slider-dot").eq(h-2).css("background-color","white");
                $(".slider-dot").eq(h-1).css("background-color","yellow");
            }else if(h==3){
                h=0;
                
            }
            return t;
    }
    } ;
    settime4= setInterval(d.fn,3000); 

    var e={
        b1: ".slider-dot",
        b2: ".x-slider-pannel",
        b3: "#x-slider-pannels-next"
        fn2: function(){
            var t = this;
            $(t.b1).mouseover(function(){
                clearInterval(settime1);
                clearInterval(settime2);
                clearInterval(settime3);
                clearInterval(settime4);
                $(t.b1).css("background","white");
                $(this).css("background-color","yellow");

            })
            $(t.b1).mouseout(function(){
                settime4= setInterval(d.fn,3000);
                settime3= setInterval(c.fn,3000);
                settime2= setInterval(b.fn,3000);
                settime1= setInterval(a.fn,3000);
            })
            $(t.b1).click(function(){
                var index =$(this).index();
                i=index;
                $("#x-slider-pannel-left-carouse").css("margin-left",(-i*800)+"px");
                m=index;
                $("#x-slider-pannel-center1-carouse").css("margin-top",(-m*600)+"px");
                h=index;
                $("#x-slider-pannel-right-carouse").css("margin-left",(h*800-2200)+"px");
                n=index;
                $("#x-slider-pannel-center2-carouse").css("margin-top",(n*600-1200)+"px");
                
            })
            $(t.b1).mouseover(function(){
                

            })
        }
    }.fn2();
})
    