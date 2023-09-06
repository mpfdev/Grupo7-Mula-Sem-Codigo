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

export const updateJogador = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const {nome, idade, timeId} = req.body;    

    try{
        const updateJogador = await prisma.jogador.update({
            where: {
                id: id,
            },
            data: {
                Nome: nome,
                Idade: idade,
                time_id: timeId
            },
        })

        res.json(updateJogador);
    }
    catch (e) {
        console.error(e);
        res.status(500).json({message: 'Erro interno do servidor'});
    }
}