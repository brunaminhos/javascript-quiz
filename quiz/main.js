var quiz=document.getElementById("quiz");
var rques= document.getElementById("radio");
var radques= document.getElementById("question");
var opt1=document.getElementById("span1");
var opt2=document.getElementById("span2");
var opt3=document.getElementById("span3");
var img1=document.getElementById("img1");
var img2=document.getElementById("img2");
var img3=document.getElementById("img3");
var res=document.getElementById("result");
var nextbutton= document.getElementById("next");

var q=document.getElementById('quit');

var tques=questions.length;
var score=0;
var quesindex=0;
// function prevques()
// {         var selected_ans= document.querySelector('input[type=radio]:checked');
// 	      q messageIndex = (messageIndex + messages.length -1) % (messages.length);    
// 		  $("demo").text(messages[messageIndex].content);});
// }
function give_ques(quesindex) 
{
	if (quesindex < 8){
		radques.textContent=quesindex+1+". "+questions[quesindex][0];
		opt1.textContent=questions[quesindex][1];
		opt2.textContent=questions[quesindex][2];
		opt3.textContent=questions[quesindex][3];
	}
	if (quesindex == 8){
		radques.textContent=quesindex+1+". "+questions[quesindex][0];
		img1.src=questions[quesindex][1];
		img2.src=questions[quesindex][2];
		img3.src=questions[quesindex][3];
	}
	 return;// body...
};
give_ques(8);
function nextques()
{
	// var selected_ans= document.querySelector('input[type=radio]:checked');
	if (opt1.checked){
		var selected_ans = 1;
	}
	if (opt2.checked){
		var selected_ans = 2;
	}
	if (opt3.checked){
		var selected_ans = 3;
	}
	if(!selected_ans)
		{alert("SELECT AN OPTION");return;}

	if(selected_ans==questions[quesindex][4]){
		score=score+1;
	}
	console.log(score)
	selected_ans.checked = false;
	quesindex++;
	if (quesindex == tques - 1)
		nextbutton.textContent = "Finish";
	var f = score / tques;
	if (quesindex == tques) {
		//q.style.display = 'none';
		quiz.style.display='none';
		result.style.display;
		result.textContent="SCORED:"+(f*100).toFixed(2)+"%";
		return;

	}
	give_ques(quesindex);

}
