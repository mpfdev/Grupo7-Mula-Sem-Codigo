import { Request, Response } from 'express';
import prisma from '../database/db';

export const getAllTimes = async (req: Request, res: Response) => {
    try {

        const times = prisma.time.findMany();

        res.json(times);

    } catch (e) {

        console.error(`Error: Ao buscar a lista de times ${e}`);
        res.status(500).json({message: `Erro interno do servidor`});

    }
}

export class newTime{
    async handle(req: Request, res: Response){
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

        console.error(`Error: Ao buscar a lista de jogadores ${e}`);
        res.status(500).json({message: `Erro interno do servidor`});
    }

}
}