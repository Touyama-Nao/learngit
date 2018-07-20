$(function(){
    var i=0;
    var a={
        a1:"#x-slider-pannel-left-carouse",
        a2:"",
        
        fn: function(){
            if(i==3){
                i=0;
            }
            console.log(i);
            var t= this;
            for( i=0;i<3;i++){
                $("#x-slider-pannel-left-carouse").css("margin-left" ,(-i*800)+"px");
            console.log(i);
        }
            return t;
    }
    } ;
    setInterval(a.fn,1000); 
})