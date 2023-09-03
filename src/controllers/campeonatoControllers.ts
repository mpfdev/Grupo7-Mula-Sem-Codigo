import {Request, Response} from 'express';
import prisma from '../database/db';

export const getAllCampeonatos = async (req: Request, res: Response) => {
    
    try {

        const campeonatos = prisma.campeonato.findMany();

        res.json(campeonatos);

    } catch (e) {

        console.error(`Error: Ao buscar a lista de campeonatos ${e}`);
        res.status(500).json({message: `Erro interno do servidor`});
    }
}
