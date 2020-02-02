/* eslint no-use-before-define: 0 */ // --> OFF
export const api = [{
    getActiveDay() {
        return this.find((event) => event.active)
    },
    setActiveDay(dayId) {
        this.map((dayObj) => {
            dayObj.id === dayId ? dayObj.active = true : dayObj.active = false
        })
    },
}]