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
            
            var t= this;
            if(i<=3){
                $("#x-slider-pannel-left-carouse").animate({"margin-left":(-i*800)+"px"});
                i++;
                $(".slider-dot").eq(i-2).css("background-color","white");
                $(".slider-dot").eq(i-1).css("background-color","yellow");
            }else if(i==4){
                $(".slider-dot").eq(0).css("background-color","yellow");
                i=0;
                $("#x-slider-pannel-left-carouse").css("margin-left",(-i*800)+"px");

              
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
            var t= this;
            if(m<=3){
                $("#x-slider-pannel-center1-carouse").animate({"margin-top":(-m*600)+"px"});
                m++;
                $(".slider-dot").eq(m-2).css("background-color","white");
                $(".slider-dot").eq(m-1).css("background-color","yellow")
            }else if(m==4){
                m=0;
                $("#x-slider-pannel-center1-carouse").css("margin-top",(-m*600)+"px");
                $(".slider-dot").eq(0).css("background-color","yellow");
            }
            return t;
    }
    } ;
     settime2=setInterval(b.fn,3000); 
    
    var c={
        a1:"#x-slider-pannel-center2-carouse",
        a2:"",
        
        fn: function(){
            var t= this;
            if(n<=3){
                $("#x-slider-pannel-center2-carouse").animate({"margin-top":(n*600-1800)+"px"});
                n++;
                $(".slider-dot").eq(n-2).css("background-color","white");
                $(".slider-dot").eq(n-1).css("background-color","white");
            }else if(n==4){
                $(".slider-dot").eq(0).css("background-color","yellow");
                n=0;
                $("#x-slider-pannel-center2-carouse").css("margin-top",(n*600-1800)+"px");
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
            var t= this;
            if(h<=3){
                $("#x-slider-pannel-right-carouse").animate({"margin-left":(h*800-3000)+"px"});
                h++;
                $(".slider-dot").eq(h-2).css("background-color","white");
                $(".slider-dot").eq(h-1).css("background-color","yellow");
            }else if(h==4){
                $(".slider-dot").eq(0).css("background-color","yellow");
                h=0;
                $("#x-slider-pannel-right-carouse").css("margin-left",(h*800-3000)+"px");
                
            }
            return t;
    }
    } ;
    settime4= setInterval(d.fn,3000); 

    var e={
        b1: ".slider-dot",
        b2: ".x-slider-pannel",
        b3: "#x-slider-pannels-next",
        b4: "#x-slider-pannels-previous",
        b5: ".x-slider-pannel,#x-slider-pannels-next,#x-slider-pannels-previous",
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
            $(t.b5).mouseover(function(){
                console.log(1);
                $(t.b3).css({"display":"block","background":"red"});
                $(t.b4).css({"display":"block","background":"red"});
                
            })
            $(t.b5).mouseout(function(){
                $(t.b3).css({"display":"none","background":"blue"});
                $(t.b4).css({"display":"none","background":"blue"});
                
            })
            $(t.b3).click(function(){
                if(i<3){
                    i++;
                    m++;
                    n++;
                    h++;
                }else if(i==3){
                    i=0;
                    m=0;
                    n=0;
                    h=0;
                }
                
                $("#x-slider-pannel-left-carouse").css("margin-left",(-i*800)+"px");
               
                $("#x-slider-pannel-center1-carouse").css("margin-top",(-m*600)+"px");
                
                $("#x-slider-pannel-right-carouse").css("margin-left",(h*800-2200)+"px");
               
                $("#x-slider-pannel-center2-carouse").css("margin-top",(n*600-1200)+"px");
                $(".slider-dot").eq(i-2).css("background-color","white");
                $(".slider-dot").eq(i-1).css("background-color","yellow");
            })
            $(t.b4).click(function(){
                if(i>0){
                    i--;
                    m--;
                    n--;
                    h--;
                }else if(i==0){
                    i=3;
                    m=3;
                    n=3;
                    h=3;
                }
                
                $("#x-slider-pannel-left-carouse").css("margin-left",(-i*800)+"px");
               
                $("#x-slider-pannel-center1-carouse").css("margin-top",(-m*600)+"px");
                
                $("#x-slider-pannel-right-carouse").css("margin-left",(h*800-2200)+"px");
               
                $("#x-slider-pannel-center2-carouse").css("margin-top",(n*600-1200)+"px");
                $(".slider-dot").eq(i-2).css("background-color","white");
                $(".slider-dot").eq(i-1).css("background-color","yellow");
            })

        }
    }.fn2();
})
    