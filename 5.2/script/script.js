window.onload = function () 
{
	callForm("writeMe","blackForm","cross","formWriteMe");
	callForm("createNewFilm","shadow_block_new_film","closeFormNewFilm","block_add_film");	
	sendValueForm();
	showHiddenFilm();
	sendValueForm();
	checkInputInfo();
	mobileMenuClose();
}

/* вызовать/закрыть форму "Напиши мне"/"добавить фильм" */
function callForm(first, second, third, four) 
{

	document.getElementById(first).addEventListener
	("click",function (){clearInput();openCloseWriteMe(second, four);},	false);

	document.getElementById(second).addEventListener
	("click",function () {openCloseWriteMe(second, four);},false);

	document.getElementById(third).addEventListener
	("click",function (){openCloseWriteMe(second, four);},false);
	
	/* закрыть форму "Напиши мне" */
	function openCloseWriteMe(second, four) 
	{
		document.getElementById(second).classList.toggle("show");	
		document.getElementById(four).classList.toggle("show");	
		$("#urlNewFilm").val("");
        $("#nameNewFIlm").val("");
        $("#descriptionFilm").val("");
		event.preventDefault();

	}
}

function mobileMenuClose() 
{	
	$("#createNewFilm").click(function(e){
		e.preventDefault();
		$(".mobile-menu").removeClass('open');
	});
	$("#createNewFilm").click(function(e){
		e.preventDefault();
		$(".open-button").removeClass('open');
	});
	$(".main-menu__link").click(function(e){
		e.preventDefault();
		$(".mobile-menu").removeClass('open');
	});
	$(".main-menu__link").click(function(e){
		e.preventDefault();
		$(".open-button").removeClass('open');
	});
}

function clearInput() 
{
	for (let index = 0; index < document.getElementsByClassName("control").length; index++) 
		{
			document.getElementsByClassName("control")[index].classList.remove("error");
		}
}
/* проверка заполненных форм */
function checkInputInfo()
{
	for (let index = 0; index < document.getElementsByClassName("control").length; index++) 
	{
		document.getElementsByClassName("control")[index].onblur = function()
		{
			if (!this.value)
			{
				this.classList.add("error");
			}
			else
			{
				this.classList.remove("error");				
			}
		}

		document.getElementsByClassName("control")[index].onfocus = function()
		{
			this.classList.remove("error");
		}
	}
	event.preventDefault();
}

/* новые фильмы */
function showHiddenFilm() 
{
	document.getElementById("allFilm").addEventListener
	(
		"click",
		function() 
		{
			document.getElementById("allFilmHidden").style.display = "block";	
			document.getElementsByClassName("button_all_film")[0].style.display = "none";
			event.preventDefault();
		},
		false
	);
	
}
function sendValueForm() 
{
	let formNewFilm = document.getElementById("addNewFIlm"),
	formSendMail = document.getElementById("send"),
	controlFilmValue = document.getElementsByClassName("control_film_value");
	sendForm = document.getElementsByClassName("control_send");
	
	formNewFilm.addEventListener(
		"click",
		readValueFilm,
		false
	);
	
	formSendMail.addEventListener(
		"click",
		readValue,
		false	
	);
	event.preventDefault();

	function readValue() 
	{
		let count;
		count=0;
		for (let index = 0; index < sendForm.length; index++)
		{
			if (!sendForm[index].value) 
			{
				sendForm[index].classList.add("error");	
			}
			else
			{
				count++;
			}	
		}	
		if (count != 3) 
		{
			event.preventDefault();
		}
	}

	function readValueFilm() 
	{
		let count;
		count=0;
		for (let index = 0; index < controlFilmValue.length; index++)
		{
			if (!controlFilmValue[index].value) 
			{
				controlFilmValue[index].classList.add("error");	
			}
			else
			{
				count++;
			}	
		}	
		if (count != 3) 
		{
			event.preventDefault();
		}
	}

}