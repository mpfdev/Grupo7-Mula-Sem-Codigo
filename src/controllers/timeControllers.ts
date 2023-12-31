import { Request, Response } from 'express';
import prisma from '../database/db';

//GET
export const getAllTimes = async (req: Request, res: Response) => {
    try {

        const times = await prisma.time.findMany();

        res.json(times);

    } catch (e) {

        console.error(`Error: Ao buscar a lista de times ${e}`);
        res.status(500).json({message: `Erro interno do servidor`});

    }
}

export const getTimeId = async (req: Request, res: Response) => {
    const { id } = req.body
    try {
        const TimeId = await prisma.time.findUnique({
                where: {
                    id: id,
                },
                
            })
            
            if(!TimeId === null){
                res.json(TimeId);
            }else{
                res.json('Time inexistente');
            }

    } catch (e) {

        console.error(`Error: Ao buscar a lista de jogadores ${e}`);
        res.status(500).json({message: `Erro interno do servidor`});
    }

}

export const updateTime = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const {nome, fundacao} = req.body;    

    try{
        const updateUser = await prisma.time.update({
            where: {
                id: id,
            },
            data: {
                Nome: nome,
                Fundacao: fundacao,
            },
        })

        res.json(updateUser);
    }
    catch (e) {
        console.error(e);
        res.status(500).json({message: 'Erro interno do servidor'});
    }
}

export const newTime = async (req: Request, res: Response,) =>{
    const { Nome, Fundacao } = req.body;

    try{
    const time = await prisma.time.create({
        data: {
            Nome,
            Fundacao
        },
    });

    return res.status(201).json(time);
}catch (e) {

    console.error(`Error: Ao criar time ${e}`);
    res.status(500).json({message: `Erro interno do servidor`});
}

}

export const deleteTime = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);

    try{
        const deleteUser = await prisma.time.delete({
            where: {
                id: id,
            }
        })

        res.json(deleteUser);
    }
    catch (e) {
        console.error(e);
        res.status(500).json({message: 'Erro interno do servidor'});
    }
}