

const questions = [
	//1
	{
		numberQuestion:'01',
		question: "Где вы предпочитаете бегать?",
		answers: [
			"На беговой дорожке в зале ",
			"По асфальту и другим твердым покрытиям",
			"По грунтовым дорожкам парка или лесным тропам ", 
			
		],
		image:[
			"./image/gantel.png",
			"./image/boll.png",
			"",
			"./image/botel.png"
		]
	},
	//2
	{
		numberQuestion:'02',
		question: "Вы будете использовать кроссовки только  как беговые? или также для других задач?",
		answers: [
			"Бег и пешие прогулки",
			"Бег и фитнес",
			"Только бег", 
			
		],
		image:[
			"./image/watch.png",
			"./image/box.png",
			"",
			"./image/pods.png"
		]
	},
	//3
	{
		numberQuestion:'03',
		question: "Какой стиль бега вы предпочитаете?",
		answers: [
			"Бег трусцой",
			"Бег на средние дистанции",
			"Бег на длинные дистанции", 
			
		],
		image:[
			"./image/boll.png",
			"./image/box.png",
			"./image/skakalka.png",
			"./image/pods.png"
		]
	},
	//4
	{
		numberQuestion:'04',
		question: "Для каких задач вы выбираете кроссовки?",
		answers: [
			"Для легких тренировок",
			"Для соревнований",
			"Для длительных пробежек", 
			
		],
		image:[
			"./image/botel.png",
			"./image/gantel.png",
			"",
			"./image/skakalka.png"
		]
	},
	//5
	{
		numberQuestion:'05',
		question: "Как часто вы занимаетесь?",
		answers: [
			"Бегаю 1-2 раза в неделю",
			"Бегаю 3 раза в неделю",
			"Бегаю каждый день", 
			
		],
		image:[
			"./image/pods.png",
			"./image/watch.png",
			"",
			"./image/botel.png"
		]
	},
	//6
	{
		numberQuestion:'06',
		question: "В какую погоду будете бегать?",
		answers: [
			"Лето",
			"Весна",
			"Осень/зима", 
			
		],
		image:[
			"./image/boll.png",
			"./image/skakalka.png",
			"",
			"./image/gantel.png"
		]
	},
	//7
	{
		numberQuestion:'07',
		question: "В какой обуви вам удобнее бегать?",
		answers: [
			"Без разницы, самое главное, чтобы обувь была красивой",
			"В мягкой",
			"В той, которая крепко удерживает стопу", 
			
		],
		image:[
			"./image/gantel.png",
			"./image/boll.png",
			"",
			"./image/botel.png"
		]
	},
	//8
	{
		numberQuestion:'08',
		question: "В каком темпе вы чаще всего бегаете?",
		answers: [
			"6 мин/км и медленнее",
			"быстрее 4,5 мин/км",
			"6-4,5 мин/км", 
			
		],
		image:[
			"./image/watch.png",
			"./image/box.png",
			"",
			"./image/pods.png"
		]
	},
	//9
	{
		numberQuestion:'09',
		question: " Как вы обычно ставите ногу <br> во время приземления на поверхность?",
		answers: [
			"Приземляюсь на носок",
			"Приземляюсь на пятку",
			"Опускаю носок и пятку одновременно", 
			
		],
		image:[
			"./image/botel.png",
			"./image/gantel.png",
			"./image/boll.png",
			"./image/skakalka.png"
		]
	},
	//10
	{
		numberQuestion:'10',
		question: "Какой у вас подъем?",
		answers: [
			"Нормальный",
			"Высокий",
			"Низкий", 
		],
		image:[
			"./image/botel.png",
			"./image/gantel.png",
			"",
			"./image/skakalka.png"
		]
	},

];







const quizDiv     = document.querySelector(".quiz");
const btns        = document.querySelector(".btns");
const dots        = document.querySelectorAll(".dots-purple")
let lastLevel     = 0;
let indexQuestion = 1;
let prevButton = document.querySelector(".prev");
let nextButton = document.querySelector(".next");
nextButton.disabled = true
prevButton.disabled = true


let finalAnswers = [];

const showQuestion = (index) => {
  const question = document.createElement("div");

  question.innerHTML = `<div class="svg-quiz"><img  src="./image/svg-quiz.svg" alt=""></div>
  						<h1 class="number-question"> ${questions[index].numberQuestion}</h1> 
  						<h1 class="question-center">${questions[index].question}</h1>
						<img class="quiz-element-1 index-element" src="${questions[index].image[0]}" alt="">
						<img class="quiz-element-2 index-element" src="${questions[index].image[1]}" alt="">
						<img class="quiz-element-3 index-element" src="${questions[index].image[2]}" alt="">
						<img class="quiz-element-4 index-element" src="${questions[index].image[3]}" alt="">
						`;
  question.classList.add('title-and-number');

  const answers = questions[index].answers.map((el, index) => {
    
	
	const answer = document.createElement("div");
    answer.innerHTML = `<p class="number-answer" data-value="${index + 1}">0${index +1}.</p>
					    <p class="answer" data-value="${index + 1}">${el}</p>`;
	
	answer.classList.add('quiz-card')
	answer.dataset.value = index + 1
    return answer;
	
	
  });

  answers.forEach( (answer) =>{
	answer.addEventListener('click', function (event) {
		finalAnswers[index] = event.target.dataset.value;
	});
  });
  
  

  quizDiv.appendChild(question);
  answers.forEach((answer) => {
    quizDiv.appendChild(answer);
  });

  answers.forEach((answer) => {
    answer.addEventListener("click", (event) => {
		nextButton.disabled = false
		answers.forEach((removeClass) => {
			removeClass.classList.remove('active');
		});
	  answer.classList.add('active')
    });
  });
};
 

const start = () => {
  let questionIndex = 0;
  let divBtns    = document.querySelector(".btns");

  function findMostFrequent() {
	const freq = {};
	let maxFreq = 0;
	let maxNum;
  
	for (const num of finalAnswers) {
	  freq[num] = (freq[num] || 0) + 1;
	  if (freq[num] > maxFreq) {
		maxFreq = freq[num];
		maxNum = num;
	  }
	}
	return maxNum;
  }
 nextButton.addEventListener("click", (event) => {
	findMostFrequent()
	nextButton.disabled = true
	prevButton.disabled = false
	dots.forEach(element => {
		element.classList.remove('active-dots')
	});
	if(indexQuestion == questions.length ){
		let maxNum = findMostFrequent()
		btns.innerHTML = ``;
		let test       = document.querySelector(".respons-output[data-score='" + maxNum + "']");;
		console.log(test)
		test.classList.remove('disabled');
		divBtns.classList.remove('btns');
		ym(93050216,'reachGoal','finalQuestion');
	}
	quizDiv.innerHTML = ``;
	indexQuestion++;
    showQuestion(++questionIndex);

	dots[indexQuestion - 1].classList.add('active-dots')

  });
  
  
  prevButton.addEventListener("click", (e) => {
	console.log(questionIndex)
	dots.forEach(element => {
		element.classList.remove('active-dots')
	});
	finalAnswers.pop()
	if(questionIndex > 1){
		prevButton.disabled = false;
		indexQuestion--;
		dots[indexQuestion - 1].classList.add('active-dots')
		quizDiv.innerHTML = ``;
		showQuestion(--questionIndex)
	}else{
		prevButton.disabled = true;
		indexQuestion--;
		dots[indexQuestion - 1].classList.add('active-dots')
		quizDiv.innerHTML = ``;
		showQuestion(--questionIndex)
	}

  });
  
  showQuestion(questionIndex);
};

start();


// console.log(dots.length)
