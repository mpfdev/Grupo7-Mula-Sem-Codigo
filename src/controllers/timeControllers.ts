import { Request, Response } from 'express';
import prisma from '../database/db';

export const getAllTimes = async (req: Request, res: Response) => {
    try {

        const times = await prisma.time.findMany();

        res.json(times);

    } catch (e) {

        console.error(`Error: Ao buscar a lista de times ${e}`);
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