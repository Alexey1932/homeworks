class AlarmClock {
	constructor() {
		this.alarmCollection = [];
		this.intervalId = null;
	}

	addClock(time, callback, canCall = true) {
		if (!callback || !time) {
			throw new Error("Отсутствуют обязательные аргументы");
		}
		if (this.alarmCollection.some((elem) => elem.time === time)) {
			console.warn('Уже присутствует звонок на это же время')
		}
		this.alarmCollection.push({ callback: callback, time: time, canCall: canCall });
	}

	removeClock(time) {
		this.alarmCollection = this.alarmCollection.filter((elem) => elem.time !== time)
	}

	getCurrentFormattedTime() {
		let Data = new Date();
		let Hour = Data.getHours();
		let Minutes = Data.getMinutes();
		let Time = `${(Hour < 10 ? "0" : "") + Hour}:${(Minutes < 10 ? "0" : "") + Minutes}`;
		return Time;
	}

	start() {
		if (this.intervalId) {
			return;
		}
		this.intervalId = setInterval(() => {
			this.alarmCollection.forEach(i => {
				if (i.time === this.getCurrentFormattedTime() & i.canCall === true) {
					i.canCall = false;
					i.callback();
				}
			})
		}, 1000);
	}

	stop() {
		clearInterval(this.intervalId);
		this.intervalId = null;
	}

	resetAllCalls() {
		this.alarmCollection.forEach(i => {
			i.canCall = true
		})
	}

	clearAlarms() {
		this.stop();
		this.alarmCollection = []
	}
}

const allah = new AlarmClock();
allah.addClock('16:45', () => { });
allah.getCurrentFormattedTime();
allah.start();
