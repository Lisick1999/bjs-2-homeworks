//Задача 1. Будильник-колыбельная
class AlarmClock {
    constructor () {
        this.alarmCollection = [];
        this.intervalId = null;
    }

    addClock (time, callback) {
        if (!time || !callback) {
            throw new Error('Отсутствуют обязательные аргументы');
        }

        if (this.alarmCollection.some((warning) => warning.time === time)) {
            console.warn('Уже присутствует звонок на это же время');
        }

        this.alarmCollection.push({ callback, time, canCall: true });
    }

    removeClock (time) {
        this.alarmCollection = this.alarmCollection.filter((bell) => bell.time !== time);
    }

    getCurrentFormattedTime () {
        const now = new Date();
        const hours = String(now.getHours()).padStart(2, "0");
        const minutes = String(now.getMinutes()).padStart(2, "0");
        return `${hours}:${minutes}`;
    }

    start() {
        if (this.intervalId) {return};

        const abilityLaunch = () => {
            const currentTime = this.getCurrentFormattedTime();
            this.alarmCollection.forEach((bell) => {
                if (bell.time === currentTime && bell.canCall) {
                    bell.canCall = false;
                    bell.callback();
                }
            });
        }

        abilityLaunch();
        this.intervalId = setInterval(abilityLaunch, 1000);
    }

    stop() {
        if (this.intervalId) {
            clearInterval(this.intervalId);
            this.intervalId = null;
        }
    }

    resetAllCalls() {
        this.alarmCollection.forEach((meaning) => meaning.canCall = true);
    }

    clearAlarms() {
        this.stop();
        this.alarmCollection = [];
    }
}