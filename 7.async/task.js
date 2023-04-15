class AlarmClock {
	constructor() {
		this.alarmCollection = [];
		this.intervalId = null;
	}

	addClock(callback, time, canCall = true) {
		if (!callback || !time) {
			throw new Error("Отсутствуют обязательные аргументы");
		}
		for (let i in this.alarmCollection) {
			if (this.alarmCollection[i].time === time) {
				console.warn('Уже присутствует звонок на это же время');
				return;
			}
		}
		this.alarmCollection.push({ callback: callback, time: time, canCall: canCall });
	}

	removeClock(time) {
		for (let i in this.alarmCollection) {
			if (this.alarmCollection[i].time === time) {
				this.alarmCollection.splice(i, 1)
			}
		}
	}

	getCurrentFormattedDate() {
		let Data = new Date();
		let Hour = Data.getHours();
		let Minutes = Data.getMinutes();
		let Time = `${(Hour < 10 ? "0" : "") + Hour}:${(Minutes < 10 ? "0" : "") + Minutes}`;
		return Time;
	}

	start() {
		if (this.intervalId) {
			return
		}
		else {
			this.intervalId = setInterval(() => {
				this.alarmCollection.forEach(i => {
					if (i.time === this.getCurrentFormattedDate() & i.canCall === true) {
						i.canCall = false;
						try {
							i.callback();
						} catch (e) {
							console.error(e);
						}
					}
				})
			}, 1000);
		}
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