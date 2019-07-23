$(document).ready(function() { // on window load
	$('.question:not(:first)').hide(); // only first div called question will show 
    $('.answer:parent').hide(); // first div answer will be hiden
    $('button.startOver').hide(); // hide a button to restart the whole quiz
   var score =0;
  
 $('a').on('click', function(){
   $('.answer').hide();
   var target = $(this).attr('rel');
   var t =$("#"+target);
   t.show().siblings().hide();
});
   // on button click by id
    $("button#display1").click(function(){
		  if(!$("input[name='radioid']").is(":checked")) // check wether radio button is selected or not
		    {
			  alert("Please ensure you select at least one answer!");  // not the display error message 
		    }
		  else // yes 
		   { 
             var rvalue= $("input[name='radioid']:checked").val();  // store radio button value to new variable
             var alertMessage = confirm("Do You want to Lock your answer ?")	 // configration from user 
		     if(alertMessage == true) 
		      {
               //after show ans then button and radio button will be disable
               $("button#display1").attr("disabled",true); 
               $("input[name='radioid']").attr("disabled",true);
	           if(rvalue =='Buster Brown') // check for ans , if condition true
			    {
                 score++; //score increase
			     document.getElementById('p').innerHTML = " You select RIGHT answer"; // print line in p
			    }
			   else
                {
			     document.getElementById('p').innerHTML = "sorry your answer is WRONG";
			    }
			   $('.answer:parent').show(); // ans of first que displayed 
		      }
		     else  // if alertMessage false do nothing 
		      {
			   return false;
		      }
		    }
            document.getElementById('finalScore').innerHTML = "Final score was "+ score +" out of 6";            
       });
       // second question
    $("button#display2").click(function(){
		if(!$("input[name='radioid1']").is(":checked"))
		  {
		   alert("Please ensure you selecte one answer !"); 
		  }
		 else
		  {
           var r2value= $("input[name='radioid1']:checked").val();  // 2nd que value stored   
		   var alertMessage = confirm("Do You want to Lock your answer ?");
		   if(alertMessage == true)
           {
           //after show ans then button and radio button will be disable
             $("button#display2").attr("disabled",true); 
             $("input[name='radioid1']").attr("disabled",true);
			 if(r2value =='More than 1000')
			  {
               score++; //score increase
			   document.getElementById('p1').innerHTML = "You select RIGHT answer";
			  }
			 else
              {
			   document.getElementById('p1').innerHTML = "Sorry your answer is WRONG";
			  }
			 $('.answer:parent').show();
		    }
		  else
		   {
			 return false;
		   }
           document.getElementById('finalScore').innerHTML = "Final score was "+ score +" out of 6";
		 }
     });
    // third question fill in the blanks
    $("button#display3").click(function(){     
      //conditions 
		if(firstText =="") //no data entered
		   {
			 alert("Please put some text");
		   }
		   else // data entered then comapre
		    {
		     var alertMessage = confirm("Do You want to Lock your answer ?"); // get a configration
		      if(alertMessage == true)
              {                  
               var firstText =$("input[name='textbox1']").val();  //store textbox input to new variable
              //after show ans then button and radio button will be disable
               $("button#display3").attr("disabled",true); 
               $("input[name='textbox1']").attr("disabled",true);
		        if(firstText == "2") // check answer is equal to text
		         {
                     score++; //score increase
			      document.getElementById('p2').innerHTML = "Your answer is CORRECT"; // display message
		         }
		        else // not
		        {
			     document.getElementById('p2').innerHTML = "Sorry your answer is WRONG";
		        }
			  $('.answer:parent').show();  
		     }
		    else
			{
		      return false;
			}
            document.getElementById('finalScore').innerHTML = "Final score was "+ score +" out of 6";
		  }
});
// question 4
    $("button#display4").click(function(){
	     if(secondText =="")
		   {
			 alert(" put some text");
		   }
		 else
		  {
          var alertMessage = confirm("Do You want to Lock your answer ?"); 
          if(alertMessage == true)
          {
            var secondText=$("input[name='textbox2']").val(); // 4th que 
            //after show ans then button and radio button will be disable
            $("button#display4").attr("disabled",true); 
            $("input[name='textbox2']").attr("disabled",true);    
		     if(secondText == "15")
		      {
              score++; //score increase
			   document.getElementById('p3').innerHTML = "your answer is CORRECT";
		      }
		      else if(secondText !="15")
		      {
			   document.getElementById('p3').innerHTML = "sorry your answer was WRONG";
		      }
			 $('.answer:parent').show();  
		    } 
           else
            {
		     	return false;
			}
            document.getElementById('finalScore').innerHTML = "Final score was "+ score +" out of 6";
		  }
               
});
// question 5 true and false
    $("button#display5").click(function(){
        if(!$("input[name='radioid3']").is(":checked"))
		 {
		   alert("Please ensure you selecte one answer!");  
		 }
	     else
		  {
           var alertMessage = confirm("Do You want to Lock your answer ?")		   
		   if(alertMessage == true)
           {
             var r3value= $("input[name='radioid3']:checked").val(); // que 5th ans stored 
             //after show ans then button and radio button will be disable
             $("button#display5").attr("disabled",true); 
             $("input[name='radioid3']").attr("disabled",true);
	         if(r3value =='False') // correct ans
			  {
              score++; //score increase
			   document.getElementById('p4').innerHTML = "You select RIGHT answer";
			   }
			 else
             {
			  document.getElementById('p4').innerHTML = "Sorry your answer was WRONG";
			 }
			$('.answer:parent').show();
		   }
		   else
		   {
			   return false;
		   }
           document.getElementById('finalScore').innerHTML = "Final score was "+ score +" out of 6";
		 }
});           
// Question 6
    $("button#display6").click(function(){
         if(!$("input[name='radioid4']").is(":checked"))
		  {
		    alert("Please ensure you selecte one answer!");  
		  }
		  else
		   {
           var alertMessage = confirm("Do You want to Lock your answer ?")		   
		   if(alertMessage == true)
           {
             var r4value= $("input[name='radioid4']:checked").val(); // 6 question value stored 
            //after show ans then button and radio button will be disable
             $("button#display6").attr("disabled",true); 
             $("input[name='radioid4']").attr("disabled",true);
	       if(r4value =='True')
			{
              score++; //score increase
			 document.getElementById('p5').innerHTML = "You select RIGHT answer";
			 }
		    else
             {
			   document.getElementById('p5').innerHTML = "sorry your answer is WRONG";
			 }
			$('.answer:parent').show();
		   }
		   else
		   {
			   return false;
		   }
           document.getElementById('finalScore').innerHTML = "Final score was "+ score +" out of 6";
		 }
});           	  
// open a next que    
   $("button.next").click(function() {  // call button on click function using class
            $(this).parent(".question").hide();  // current question hide
			$(this).parent(".question").next(".question").show(); // next que will show
			$('.answer:parent').hide();  // ans of open que will hide
	});
 // open perviews que  
	$("button.preview").click(function() { // on button click function using name
			$(this).parent(".question").hide(); // current open que hide
			$(this).parent(".question").prev(".question").show(); // previous que will open
		});
    $("button.submit").click(function(){   
        $(".question").animate({height:"220px"});
		var finalSubmission = confirm("Do You want to submit all your answer ?");		   
		 if(finalSubmission == true)
		   {
            $(".next, .preview, .display, .submit, .end").hide();
            $("input[type='radio']").attr("disabled",true); 
            $("input[type='text']").attr("disabled",true);
			$(this).parent(".question").hide();
            $('.question').show();
            $('.answer').show();
            score=0;
           if([$("input[name='radioid']:checked").val()]=='Buster Brown') 
               score++;
            if([$("input[name='radioid1']:checked").val()] =='More than 1000')
               score++; //score increase
            if([$("input[name='textbox1']").val()]== "2") // check answer is equal to text
                score++; //score increase
            if([$("input[name='textbox2']").val()] == "15")
                score++; //score increase
            if([$("input[name='radioid3']:checked").val()] =='False') // correct ans
                score++; //score increase
            if([$("input[name='radioid4']:checked").val()] =='True')
                score++; //score increase
            document.getElementById('finalScore').innerHTML = "Final score was "+ score +" out of 6";
            $('button.startOver').show(); // show button to start over a quiz again
		    $('.rightAnsQue').css('background-color','#8cd98c');   //green
            $('.wrongAnsQue').css('background-color','#ff8080');   // red
           }
		   else
           {
			   return false;
           }
	});
    $('button.startOver').click(function()
    {
        location.reload();
    });
});