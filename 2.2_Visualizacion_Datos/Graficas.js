let arreglo = [];
let contador = 0;
let lenguajes = [];
let porcentajes = [];
let series=[];
const txtLenguaje = document.getElementById("txtLenguaje"); 
const txtPorcentaje = document.getElementById("txtPorcentaje"); 
const canvas = document.getElementById("chart"); 
const txtSerie=document.getElementById("txtSerie");


const btn = document.getElementById("agregar");
const btnSerie = document.getElementById("agregarSerie");

btnSerie.addEventListener("click",()=>{
  let serie = txtSerie.value;
  let lenguaje = txtLenguaje.value;
  let porcentaje = txtPorcentaje.value;

  const newDataset = {
    label: serie,
    data: [porcentaje],
    backgroundColor: `rgba(${Math.floor(Math.random() * 256)}, ${Math.floor(
      Math.random() * 256
    )}, ${Math.floor(Math.random() * 256)}, 0.2)`,
    borderColor: `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(
      Math.random() * 256
    )}, ${Math.floor(Math.random() * 256)})`,
    borderWidth: 1,
  };

  data.datasets.push(newDataset);

  chart.update();
});
//``---backtik
btn.addEventListener("click", () => {
    let lenguaje = txtLenguaje.value;
    let porcentaje = txtPorcentaje.value;
    addData(chart,lenguaje,porcentaje);
    
});
function addData(chart, label, newData) {
    chart.data.labels.push(label);
    chart.data.datasets.forEach((dataset) => {
        dataset.data.push(newData);
    });
    chart.update();
}


const data = {
  labels: lenguajes,
  datasets: [
    {
      label: "Lenguajes de programación",
      data: porcentajes,
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)"
      ],
      borderColor: [
        "rgb(255, 99, 132)",
      ],
      borderWidth: 1,
    },
  ],
};
////////////configuracion
const config = {
  type: "bar",
  data: data,
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
};

const chart = new Chart(canvas, config); 
