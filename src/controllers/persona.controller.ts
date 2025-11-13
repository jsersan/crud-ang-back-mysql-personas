import { Request, Response } from 'express';
import connection from '../db/connection';

export const getPersonas = (req: Request, res: Response) => {
    
    connection.query('SELECT * FROM persona', (err, data) => {
        if(err) throw err;
        res.json(data)
    })
}

export const getPersona = (req: Request, res: Response) => {
    const { dni } = req.params;

    connection.query('SELECT * FROM persona WHERE dni = ?', dni, (err, data: any) => {
        if(err) {
            return res.status(500).json({ error: err });
        }
        
        // ⚠️ IMPORTANTE: Si no encuentra, devolver 404
        if (!data || data.length === 0) {
            return res.status(404).json({ message: 'Persona no encontrada' });
        }
        
        res.json(data[0]);
    })
}

export const deletePersona = (req: Request, res: Response) => {
    
    const { dni } = req.params;

    connection.query('DELETE FROM persona WHERE dni = ?', dni, (err, data) => {
        if(err) throw err;
        res.json({
            msg: 'Persona eliminada con exito'
        })
    })
}

export const postPersona = (req: Request, res: Response) => {
    
    const { body } = req;   

    connection.query('INSERT INTO persona set ?',[body], (err, data) => {
        if(err) throw err;
        res.json({
            msg: 'Persona agregada con exito'
        })
    })
}

export const putPersona = (req: Request, res: Response) => {
    const { body } = req; 
    const { dni } = req.params; 

    console.log(body);

    let nombre = body.nombre;
    let apellidos = body.apellidos;
    let email = body.email;
    let telefono = body.telefono;
    let fechaNacimiento = body.fechaNacimiento;

    console.log(nombre, apellidos, email, telefono, fechaNacimiento, dni)
       
    connection.query(`UPDATE persona SET nombre=?, apellidos=?, email=?, telefono=?, fechaNacimiento=? WHERE dni = ?`, 
        [nombre, apellidos, email, telefono, fechaNacimiento, dni], 
        (err, data) => {
            if(err) {
                console.error('Error en UPDATE:', err);
                return res.status(500).json({
                    msg: 'Error al actualizar persona',
                    error: err
                });
            }

            res.json({
                msg: 'Persona actualizada con exito'
            })
        })
}