

const questions = [
	//1
	{
		question: " Как реагирует кожа лица на умывание привычным очищающим средством?",
		answers: [
			"Появляется ощущение стянутости, хочется нанести увлажняющий крем, чтобы успокоить и устранить дискомфорт.",
			"Дискомфорт не ощущается, кожа матовая, без шелушения или блеска.",
			"После умывания кожа быстро становится жирной, появляется блеск на всей поверхности лица. ", 
			"В течение часа после умывания появляется незначительный блеск в Т-зоне. Чувства стянутости не ощущается, хотя щеки остаются сухими. "
		],
	},
	//2
	{
		question: "Что происходит с вашей кожей, если вовремя ее не увлажнить?",
		answers: [
			"Становится сухой и стянутой.",
			"Отлично себя чувствует без увлажнения.",
			"Без увлажняющей косметики блестят  только проблемные зоны – подбородок, нос, лоб.", 
			"Без увлажнения кожа быстро становится жирной."
		],
	},
	//3
	{
		question: "Как выглядит ваш макияж спустя 2-3 часа после нанесения тональной основы?",
		answers: [
			"Выглядит высохшим, подчеркиваются шелушения.",
			"Тональная основа остается без изменений.",
			"Макияж быстро размазывается, сквозь тон виден жирный блеск.", 
			"Макияж в нормальном состоянии, но местами может быть виден жирный блеск."
		],
	},
	//4
	{
		question: "Как выглядят поры на вашем лице?",
		answers: [
			"Поры практически незаметны.",
			"На отдельных участках лица есть мелкие поры.",
			"Очень много крупных пор, особенно в области носа и лба.", 
			"Крупные поры хорошо видны в проблемных зонах."
		],
	},
	//5
	{
		question: "Как часто на лице появляются высыпания?",
		answers: [
			"Очень редко.",
			"Редко, не чаще одного раза в месяц.",
			"Постоянно появляются высыпания, комедоны и прочие несовершенства.", 
			"Высыпания появляются иногда."
		],
	},
	//6
	{
		question: "Как ваша кожа реагирует на влияние внешних факторов (климат, неправильное питание, жаркая погода)?",
		answers: [
			"Нет связи между этими факторами и состоянием кожи.",
			"Появляются ощущения сухости, раздражения, иногда даже зуд.",
			"Обостряется акне, лицо становится более сальным.", 
			"Появляются высыпания на лице."
		],
	},
	//7
	{
		question: "Как часто на вашем лице появляются комедоны?",
		answers: [
			"Комедоны не появляются.",
			"Появляются очень редко.",
			"Постоянно приходится бороться с комедонами.", 
			"Комедоны есть, но их мало – в основном на носу и возле него."
		],
	},
	//8
	{
		question: "Какой становится ваша кожа спустя 2-3 часа после нанесения увлажняющего средства?",
		answers: [
			"Средство впитывается очень быстро, спустя время кожа снова выглядит сухой.",
			"Кожа в идеальном состоянии – гладкая и мягкая.",
			"На коже появляется заметный жирный блеск.", 
			"На лице можно заметить незначительный блеск."
		],
	},
	//9
	{
		question: " Как выглядит ваше лицо в Т-зоне?",
		answers: [
			"Не замечаю блеска на данном участке.",
			"Кожа блестит только в жару.",
			"Блеск появляется очень быстро.", 
			"Есть заметный небольшой блеск."
		],
	},

];







const quizDiv     = document.querySelector(".quiz");
const btns        = document.querySelector(".btns");
const dots        = document.querySelectorAll(".dots-purple")
let lastLevel     = 0;
let indexQuestion = 1


let finalAnswers = [];

const showQuestion = (index) => {
  const question = document.createElement("div");

  question.innerHTML = `<h1 class="number-question">№ ${indexQuestion}.</h1> 
  						<h1 class="question-center">${questions[index].question}</h1>
						`;
  question.classList.add('title-and-number');

  const answers = questions[index].answers.map((el, index) => {
    
	
	const answer = document.createElement("div");
    answer.innerHTML = `<p class="number-answer ">${index +1}.</p>
					    <p class="answer">${el}</p>`;
	
	answer.classList.add('quiz-card')
    return answer;
	
	
  });

  answers.forEach( (answer) =>{
	answer.addEventListener('click', function (event) {
		finalAnswers[index] = event.target.querySelector('.number-answer').innerText;
		

		
	});
  });
  
  

  quizDiv.appendChild(question);
  answers.forEach((answer) => {
    quizDiv.appendChild(answer);
  });

  answers.forEach((answer) => {
    answer.addEventListener("click", (event) => {
		answers.forEach((removeClass) => {
			removeClass.classList.remove('active');
		});
      finalAnswers[index] = event.target.innerText;
	  answer.classList.add('active')
      console.log(finalAnswers);
    });
  });

  

};
 

const start = () => {
  let score = [];
  let questionIndex = 0;
  let divBtns    = document.querySelector(".btns")
  let prevButton = document.querySelector(".prev");
  let nextButton = document.querySelector(".next");
  let test       = document.querySelector("#test");
 







  function occurrence(){
	return finalAnswers.sort((a,b) => 
	finalAnswers.filter(v => v===a).length - finalAnswers.filter(v => v===b).length
	).pop();
 }

  nextButton.addEventListener("click", (event) => {
	
    if (!finalAnswers[questionIndex]) return;
	if(indexQuestion == questions.length ){
		switch (occurrence()){
			case 1:
				console.log('1');
			case 2:
				console.log('2');
			case 3:
				console.log('3');
			case 4:
				console.log('4');		
		}
		btns.innerHTML = ``;
		test.classList.remove('disabled');
		divBtns.classList.remove('btns');
	}
	console.log('+')
	quizDiv.innerHTML = ``;
	indexQuestion++;
    showQuestion(++questionIndex);

		if(dots[index +1] = indexQuestion){
			dots.classList.add('active-dots')
		}

  });
  
  
  prevButton.addEventListener("click", (e) => {
	
	if(questionIndex > 0){
		prevButton.disabled = false;
		console.log('-')
		indexQuestion--;
		quizDiv.innerHTML = ``;
		showQuestion(--questionIndex)
	}else{
		prevButton.disabled = true
	}

	
	
  });
  
  showQuestion(questionIndex);
};

start();


console.log(dots.length)
