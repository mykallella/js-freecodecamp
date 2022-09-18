const LOCAL_FORECAST = {
  yesterday: { low: 61, high: 75 },
  today: { low: 64, high: 77 },
  tomorrow: { low: 68, high: 80 }
};
 
// const lowToday = LOCAL_FORECAST.today.low;
// const highToday = LOCAL_FORECAST.today.high;

const { today: { low:lowToday, high:highToday } } = LOCAL_FORECAST; // Substitui as duas linhas acima
// Traz os valores das PROPRIEDADES "low" e "high" do OBJETO LOCAL_FORECAST
// O valor de 'low' vai para 'lowToday' 
// O valor de 'high' vai para 'highToday'


console.log(`Today: Low: ${lowToday}, High: HighToday: ${highToday}`)

