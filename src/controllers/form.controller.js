const { request, response } = require("express");
const database =  require('../database/connect');
const{parseInsertArray} = require('../utils/sqlParse');
const generateCode = require("../utils/generateCode");

async function createForm(req = request, res = response) {
    try {
        if (req.body.nombre === undefined) {
            return res.status(400).json({
                message:"El nombre es requerido",
            });
        }
        const insert = parseInsertArray("formulario", {id:
            generateCode(),
            nombre: req.body.nombre,
            correo: req.body.correo,
            telefono: req.body.telefono,
            preguntas: req.body.preguntas 

        });    //nombre de mi tabla
        await database.batch(insert, "write");
        return res.status(200).json({
            message: "Formulario correcto",
        });
    } catch (error) {
        return res.status(500).json({
            message: "ERROR INTERNO DEL SERVIDOR", 
            error,
        });
    }
}


async function getForm(req = request, res = response) {
    try {
        const veryfyForm = await database.execute(
            `SELECT * FROM formulario`
        );
        const form = veryfyForm.rows;
        if (form.length === 0) {
            return res.status(200).json({
                message: "No existen formularios para mostrar",
                form,
            })
        }
        return res.status(200).json({
            message: "Formularios obtenidos",
            form,
        })
        
    } catch (error) {
        return res.status(500).json({
            message: "ERROR INTERNO DEL SERVIDOR", 
            error,
        });
    }
}

async function updateForm(req = request, res = response) {
    try {

        
    } catch (error) {
        return res.status(500).json({
            message: "ERROR INTERNO DEL SERVIDOR", 
            error,
        });
    }
}


module.exports = {
    createForm,
    getForm,

}