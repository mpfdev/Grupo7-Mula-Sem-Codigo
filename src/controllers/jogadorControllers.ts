import {Request, Response} from 'express';
import prisma from '../database/db';

export const getAllJogadores = async (req: Request, res: Response) => {
    
    try {

        const jogadores = prisma.jogador.findMany({
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
