import { dataBase } from './dataBase'
export const store = {
    state: {
        dataBase
    },
    getActiveDay() {
        return this.state.dataBase.find((day) => day.active);
    },
    setActiveDay(dayId) {
        this.state.dataBase.map((dayObj) => {
            dayObj.id === dayId ? dayObj.active = true : dayObj.active = false;
        })
    },
    submitEvent(eventDetails) {
        let dayObj = this.getActiveDay();
        dayObj.events.push({ "details": eventDetails, "edit": false });
    },
    errorSubmittingEvent(n) {
        if (n === '') return this.error = true;
    },
    editEvent(dayId, eventDescription) {
        this.resetEditOfAllEvents();
        const eventTarget = this.getEventObj(dayId, eventDescription)
        eventTarget.edit = true
    },
    resetEditOfAllEvents() {
        this.state.dataBase.map((dayObj) => {
            dayObj.events.map((event) => {
                event.edit = false
            });
        });
    },
    updateEvent(dayId, eventDescription, newEventDetails) {
        const eventTarget = this.getEventObj(dayId, eventDescription)
        if (newEventDetails === '') newEventDetails = eventDescription
        eventTarget.details = newEventDetails;
        eventTarget.edit = false;
    },
    getEventObj(d, e) {
        const dayTarget = this.state.dataBase.find(
            day => day.id === d
        );
        return dayTarget.events.find(
            event => event.details === e
        );
    },
    deleteEvent(d, e) {
        const dayTarget = this.state.dataBase.find(
            day => day.id === d
        );
        const indexEventToRemove = dayTarget.events.findIndex(
            event => event.details === e
        );
        dayTarget.events.splice(indexEventToRemove, 1)
    }
}