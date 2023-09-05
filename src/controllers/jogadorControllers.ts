import {Request, Response} from 'express';
import prisma from '../database/db';
import { PrismaClient } from '@prisma/client';

export const getAllJogadores = async (req: Request, res: Response) => {
    
    try {

        const jogadores = await prisma.jogador.findMany({
            include: {
                time: true
            }
        });

        res.json(jogadores);

    } catch (e) {

        console.error(`Error: Ao buscar a lista de jogadores ${e}`);
        res.status(500).json({message: `Erro interno do servidor`});
    }
}

export class newJogador{
    async handle(req: Request, res: Response){
        const { Nome, Idade, time_id } = req.body;

        try{
        const createjogador = await prisma.jogador.create({
            data: {
                Nome,
                Idade,
                time_id
            },
        });

        return res.status(201).json(createjogador);
    }catch (e) {

        console.error(`Error: Ao criar jogador ${e}`);
        res.status(500).json({message: `Erro interno do servidor`});
    }

}
}