addEventListener("load",app);
function app() {
	class Fortune {
		constructor(fortuneList) {
			this.text = !fortuneList ? "No fortune" : fortuneList[~~(Math.random() * fortuneList.length)];
			this.luckyNumbers = [];
			this.drawLuckyNumbers();
		}
		drawLuckyNumbers() {
			let maxDraws = 6,
				draws = maxDraws,
				maxNumber = 99,
				numberPool = [];

			// create number pool
			while (maxNumber--) {
				numberPool.unshift(maxNumber + 1);
			}
			// draw from pool, populate the lucky numbers
			while (draws--) {
				let drawn = ~~(Math.random() * numberPool.length);
				this.luckyNumbers.push(numberPool[drawn]);
				numberPool.splice(drawn,1);
			}
		}
	}

	var fcBtn = document.querySelector("button"),
		fortuneText = document.querySelector(".fc-fortune-text"),
		fortuneLuckyNumbers = document.querySelector(".fc-lucky-numbers span"),
		fortuneList = [
			"How are you doing?",
			"How have you been these days?",
			"What do you like to do?",
			"What is your new years resolution?",
			"What brings you here?",
			"Where did you go for your last trip?",
			"When did you have the last vacation? What did you do?",
			"You’re now in you winter break. What will you do? Think about it!",
			"What was your dream as a child?",
			"What is your hobby?",
			"What do you like to do?",
			"What do you do?"
		],
		fortune = new Fortune(),

		getFortune = function(){
			fortune = new Fortune(fortuneList);
			fortuneText.innerHTML = fortune.text;
			fortuneLuckyNumbers.innerHTML = fortune.luckyNumbers.join(", ");
		},
		nextState = function(){
			let elClass = this.classList,
				spawned = "spawned",
				opened = "opened";

			// open cookie
			if (elClass.contains(spawned)) {
				elClass.remove(spawned);
				elClass.add(opened);

			// new cookie
			} else {
				elClass.remove(opened);
				elClass.add(spawned);
				getFortune();
			}
		};
	
	getFortune();
	fcBtn.addEventListener("click",nextState);
}