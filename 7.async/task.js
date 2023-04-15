class AlarmClock {
	constructor() {
		this.alarmCollection = [];
		this.intervalId
	}

	addClock(callback, time, canCall = true) {
		if (!callback || !time) {
			throw new Error("Отсутствуют обязательные аргументы");
		}
		for (i in this.alarmCollection) {
			if (this.alarmCollection[i].time === time) {
				console.warn('Уже присутствует звонок на это же время');
				return;
			}
		}
		this.alarmCollection.push({ callback: callback, time: time, canCall: canCall });
	}

	removeClock(time) {
		for (i in this.alarmCollection) {
			if (this.alarmCollection[i].time === time) {
				this.alarmCollection.splice(i, 1)
			}
		}
	}

	getCurrentFormattedDate() {
		let Data = new Date();
		let Hour = Data.getHours();
		let Minutes = Data.getMinutes();
		let Time = `${Hour}:${Minutes}`;
		return Time;
	}

	start() {
		if (this.intervalId) {
			return
		}
		else {
			intervalId = setInterval(() => {
				this.alarmCollection.forEach(i => {
					if (i.time === Time & i.canCall === true) {
						i.canCall = false;
						return i.callback;
					}
				})
			})
		}
	}

	stop() {
		clearInterval(intervalId);
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