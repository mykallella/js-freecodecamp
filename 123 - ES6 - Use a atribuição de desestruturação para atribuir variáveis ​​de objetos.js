const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80
};

// const highToday = HIGH_TEMPERATURES.today;
// const highTomorrow = HIGH_TEMPERATURES.tomorrow; 

const { today:highToday, tomorrow:highTomorrow } = HIGH_TEMPERATURES; // Substitui as duas linhas acima
// Traz os valores das PROPRIEDADES "today" e "tomorrow" do OBJETO HIGH_TEMPERATURES
// O valor de 'today' vai para 'highToday' 
// O valor de 'tomorrow' vai para 'highTomorrow'

console.log(`Today: ${highToday}, Tomorrow: ${highTomorrow}`)

