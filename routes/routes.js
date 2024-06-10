import express from "express";
const router = express.Router();

const autores = [
    {
        id: 1,
        name: "Machado de Assis"
    },
    {
        id: 2,
        name: "Monteiro Lobato"
    },
    {
        id: 3,
        name: "Dan Brown"
    },
    {
        id: 4,
        name: "Mauricio de Sousa"
    }
]

router.get("/", (req, res) => {
    res.status(200).json({message: "bah...", status: 200});
});

router.get("/autores", (req, res) => {
    res.status(200).json({autores});
});

router.get("/autores/:id", (req, res) => {
    const id= Number(req.params.id);

    const autor = autores.filter((aut) => aut.id === id);

    if (!(autor.length === 0)){
        res.status(200).json({autor})
    } else {
        res.status(400).json({message: "Autor não encontrado!", status: 400})
    }

})

export { router as default };