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

export class newCampeonato{
    async handle(req: Request, res: Response){
        const { Nome, DataInicio, DataFim } = req.body;

        try{
        const campeonato = await prisma.campeonato.create({
            data: {
                Nome,
                DataInicio,
                DataFim
            },
        });

        return res.status(201).json(campeonato);
    }catch (e) {

        console.error(`Error: Ao buscar a lista de jogadores ${e}`);
        res.status(500).json({message: `Erro interno do servidor`});
    }

}
}
