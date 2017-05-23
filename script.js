
    var breakt=document.getElementById('break').value;
    function start(){
      var pomt=parseInt(document.getElementById('pom').value);
      var por = pomt*60
      var t=setInterval(function(){
        document.getElementById('time').innerHTML=por+' seconds remaining!' ;
        por=por-1;
        if(por<0){
          //clearInterval(t);
          document.getElementById('xyz').play();
          // alert("time out!");
          stbreak();
          clearInterval(t);
        }
      },1000)
    }
    function stbreak(){
      var brk=parseInt(document.getElementById('break').value)*60;
      var s = setInterval(function() {
        document.getElementById('time').innerHTML=brk+' seconds remaining in break';
        brk=brk-1;
        if(brk<0){
          clearInterval(s);
          alert("break has ended!!");

        }
      },1000)
    }
