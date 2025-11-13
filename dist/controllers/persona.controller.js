"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.putPersona = exports.postPersona = exports.deletePersona = exports.getPersona = exports.getPersonas = void 0;
var connection_1 = __importDefault(require("../db/connection"));
var getPersonas = function (req, res) {
    connection_1.default.query('SELECT * FROM persona', function (err, data) {
        if (err)
            throw err;
        res.json(data);
    });
};
exports.getPersonas = getPersonas;
var getPersona = function (req, res) {
    var dni = req.params.dni;
    connection_1.default.query('SELECT * FROM persona WHERE dni = ?', dni, function (err, data) {
        if (err) {
            return res.status(500).json({ error: err });
        }
        // ⚠️ IMPORTANTE: Si no encuentra, devolver 404
        if (!data || data.length === 0) {
            return res.status(404).json({ message: 'Persona no encontrada' });
        }
        res.json(data[0]);
    });
};
exports.getPersona = getPersona;
var deletePersona = function (req, res) {
    var dni = req.params.dni;
    connection_1.default.query('DELETE FROM persona WHERE dni = ?', dni, function (err, data) {
        if (err)
            throw err;
        res.json({
            msg: 'Persona eliminada con exito'
        });
    });
};
exports.deletePersona = deletePersona;
var postPersona = function (req, res) {
    var body = req.body;
    connection_1.default.query('INSERT INTO persona set ?', [body], function (err, data) {
        if (err)
            throw err;
        res.json({
            msg: 'Persona agregada con exito'
        });
    });
};
exports.postPersona = postPersona;
var putPersona = function (req, res) {
    var body = req.body;
    var dni = req.params.dni;
    console.log(body);
    var nombre = body.nombre;
    var apellidos = body.apellidos;
    var email = body.email;
    var telefono = body.telefono;
    var fechaNacimiento = body.fechaNacimiento;
    console.log(nombre, apellidos, email, telefono, fechaNacimiento, dni);
    connection_1.default.query("UPDATE persona SET nombre=?, apellidos=?, email=?, telefono=?, fechaNacimiento=? WHERE dni = ?", [nombre, apellidos, email, telefono, fechaNacimiento, dni], function (err, data) {
        if (err) {
            console.error('Error en UPDATE:', err);
            return res.status(500).json({
                msg: 'Error al actualizar persona',
                error: err
            });
        }
        res.json({
            msg: 'Persona actualizada con exito'
        });
    });
};
exports.putPersona = putPersona;
