const express = require('express');

const app = express();
const PORT = 3000;
app.use(express.json());

const vacancies = [
    {id: 1, title: "Desarrollador Backend Jr", company: "Tech Andes", mode: "remoto", salary: 900},
    {id: 2, title: "Analista de Datos", company: "DataSur", mode: "híbrido", salary: 1100}
];

//Endpoint - Get
app.get('/vacancies', (req, res) => {
    res.json(vacancies);
});

//Endpoint - Post
app.post('/vacancies', (req, res) =>{
    const {title, company, mode, salary} = req.body;
    if(!title || !company){
        return res.status(400).json({error: 'Título y empresa son obligatorios'});
    }

    //Nuevo objeto para le arreglo
    const newVacant = {id: vacancies.length + 1, title, company, mode, salary};
    vacancies.push(newVacant);
    res.status(201).json(newVacant);
});

//Enciende el servidor
if(require.main === module){
    app.listen(PORT, () =>{
        console.log(`Servidor escuchando en http://localhost:${PORT}`);
    });
}

module.exports = app;

