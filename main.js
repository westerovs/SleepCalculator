class SleepCalculator {
  constructor() {
    this.button = document.querySelector('.btn')
    this.output = document.querySelector('.output')

    this.data = {}
    this.birthDate = null
    this.averageSleepHours = null

    this.button.addEventListener('pointerdown', this.onHandlerClick)
  }

  onHandlerClick = () => {
    const {birthYear, averageSleepHours} = this.getInputValue()

    this.birthDate = new Date(birthYear)
    this.averageSleepHours = averageSleepHours

    this.calculate()
    this.print()
  }

  getInputValue = () => {
    return {
      birthYear: document.getElementById('birthYear').value,
      averageSleepHours: document.getElementById('averageSleepHours').value,
    }
  }

  calculate = () => {
    const ageMilliseconds = new Date() - this.birthDate
    const ageDays = ageMilliseconds / (1000 * 60 * 60 * 24)

    const yourAge = Math.trunc(ageDays / 365)
    const sleepDays = (ageDays * this.averageSleepHours / 24).toFixed(2)
    const sleepHours = (sleepDays * this.averageSleepHours).toFixed(2)
    const sleepYears = (sleepDays / 365.25).toFixed(2)

    this.data = {
      yourAge,
      sleepDays,
      sleepHours,
      sleepYears,
    }
  }

  print = () => {
    const {yourAge, sleepDays, sleepHours, sleepYears} = this.data

    this.output.innerText = `
      Вам ${yourAge}
      - За свою жизнь вы проспали ${sleepYears} лет!
      - Это составляет ${sleepDays} дней.
      - Или ${sleepHours} часов сна.`
  }
}

new SleepCalculator()
