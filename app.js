var name=prompt("your Name??");
$(document).ready(function () {
  
var a=0;
$(".a1a").click(()=>{
$("#ques1").addClass("clicked1")
if($("#ques1").is('.clicked2,.clicked4,.clicked3'))
{
console.log("none")
}
else{
  $(".a1a").css({"background":"#39ff14","color":"white"})
  
a=a+1;
}

})
$(".a2a").click(()=>{

  $("#ques1").addClass("clicked2")
  if($("#ques1").is('.clicked1,.clicked4,.clicked3'))
{
console.log("none")
}
else{
  $(".a2a").css({"background":"#39ff14","color":"white"})
}
  
  })
  $(".a3a").click(()=>{

    $("#ques1").addClass("clicked3")
    if($("#ques1").is('.clicked2,.clicked4,.clicked1'))
{
console.log("none")
}
else{
  $(".a3a").css({"background":"#39ff14","color":"white"})
}
    
    })
    $(".a4a").click(()=>{

      $("#ques1").addClass("clicked4")
      if($("#ques1").is('.clicked2,.clicked1,.clicked3'))
{
console.log("none")
}
else{
  $(".a4a").css({"background":"#39ff14","color":"white"})
}
      
      })



      //for #ques2 class=["a1b","a2b","a3b",///"a4b"]


      $(".a1b").click(()=>{
        $("#ques2").addClass("clicked1")
        if($("#ques2").is('.clicked2,.clicked4,.clicked3'))
        {
        console.log("none")
        }
        else{
          $(".a1b").css({"background":"#39ff14","color":"white"})
          a=a+1;
        }
        
        })
        $(".a2b").click(()=>{
        
          $("#ques2").addClass("clicked2")
          if($("#ques2").is('.clicked1,.clicked4,.clicked3'))
        {
        console.log("none")
        }
        else{
          $(".a2b").css({"background":"#39ff14","color":"white"})
        }
          
          })
          $(".a3b").click(()=>{
        
            $("#ques2").addClass("clicked3")
            if($("#ques2").is('.clicked2,.clicked4,.clicked1'))
        {
        console.log("none")
        }
        else{
          $(".a3b").css({"background":"#39ff14","color":"white"})
        }
            
            })
            $(".a4b").click(()=>{
        
              $("#ques2").addClass("clicked4")
              if($("#ques2").is('.clicked2,.clicked1,.clicked3'))
        {
        console.log("none")
        }
        else{
          $(".a4b").css({"background":"#39ff14","color":"white"})
        }
              
              })
              //for ques3 replace all 1 by 3 //and a by c in last
        
$(".a1c").click(()=>{
  $("#ques3").addClass("clicked1")
  if($("#ques3").is('.clicked2,.clicked4,.clicked3'))
  {
  console.log("none")
  }
  else{
    $(".a1c").css({"background":"#39ff14","color":"white"})
  }
  
  })
  $(".a2c").click(()=>{
  
    $("#ques3").addClass("clicked2")
    if($("#ques3").is('.clicked1,.clicked4,.clicked3'))
  {
  console.log("none")
  }
  else{
    $(".a2c").css({"background":"#39ff14","color":"white"})
    a=a+1;
  }
    
    })
    $(".a3c").click(()=>{
  
      $("#ques3").addClass("clicked3")
      if($("#ques3").is('.clicked2,.clicked4,.clicked1'))
  {
  console.log("none")
  }
  else{
    $(".a3c").css({"background":"#39ff14","color":"white"})
  }
      
      })
      $(".a4c").click(()=>{
  
        $("#ques3").addClass("clicked4")
        if($("#ques3").is('.clicked2,.clicked1,.clicked3'))
  {
  console.log("none")
  }
  else{
    $(".a4c").css({"background":"#39ff14","color":"white"})
  }
        
        })

        //ques 4 replace all a by d
        
$(".a1d").click(()=>{
  $("#ques4").addClass("clicked1")
  if($("#ques4").is('.clicked2,.clicked4,.clicked3'))
  {
  console.log("none")
  }
  else{
    $(".a1d").css({"background":"#39ff14","color":"white"})
  }
  
  })
  $(".a2d").click(()=>{
  
    $("#ques4").addClass("clicked2")
    if($("#ques4").is('.clicked1,.clicked4,.clicked3'))
  {
  console.log("none")
  }
  else{
    $(".a2d").css({"background":"#39ff14","color":"white"})
    a=a+1;
  }
    
    })
    $(".a3d").click(()=>{
  
      $("#ques4").addClass("clicked3")
      if($("#ques4").is('.clicked2,.clicked4,.clicked1'))
  {
  console.log("none")
  }
  else{
    $(".a3d").css({"background":"#39ff14","color":"white"})
  }
      
      })
      $(".a4d").click(()=>{
  
        $("#ques4").addClass("clicked4")
        if($("#ques4").is('.clicked2,.clicked1,.clicked3'))
  {
  console.log("none")
  }
  else{
    $(".a4d").css({"background":"#39ff14","color":"white"})
  }
        
        })
        //ques 5 replace all a by e
        
$(".a1e").click(()=>{
  $("#ques5").addClass("clicked1")
  if($("#ques5").is('.clicked2,.clicked4,.clicked3'))
  {
  console.log("none")
  }
  else{
    $(".a1e").css({"background":"#39ff14","color":"white"})
    a=a+1;
  }
  
  })
  $(".a2e").click(()=>{
  
    $("#ques5").addClass("clicked2")
    if($("#ques5").is('.clicked1,.clicked4,.clicked3'))
  {
  console.log("none")
  }
  else{
    $(".a2e").css({"background":"#39ff14","color":"white"})
  }
    
    })
    $(".a3e").click(()=>{
  
      $("#ques5").addClass("clicked3")
      if($("#ques5").is('.clicked2,.clicked4,.clicked1'))
  {
  console.log("none")
  }
  else{
    $(".a3e").css({"background":"#39ff14","color":"white"})
  }
      
      })
      $(".a4e").click(()=>{
  
        $("#ques5").addClass("clicked4")
        if($("#ques5").is('.clicked2,.clicked1,.clicked3'))
  {
  console.log("none")
  }
  else{
    $(".a4e").css({"background":"#39ff14","color":"white"})
  }
        
        })
   
  $("#click").click(function (e) { 
    e.preventDefault();
    console.log(a);
    if(a===1){
      alert(`Who r u!!!  ${name}    Score:${a}`)
    }
    if(a===2){
      alert(`You don't knw me  ${name}  Score:${a}`)
    }
    if(a===3){
      alert(`We are jst frnds  ${name}  Score:${a}`)
    }
    if(a===4){
      alert(`We are good Friends  ${name}  Score:${a}`)
    }
    if(a===5){
      alert(`We are Best Buddies   ${name}  Score:${a}`)
    }

  });
  
});