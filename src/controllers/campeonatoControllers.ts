import {Request, Response} from 'express';
import prisma from '../database/db';

export const getAllCampeonatos = async (req: Request, res: Response) => {
    
    try {

        const campeonatos = await prisma.campeonato.findMany();

        return res.status(201).json(campeonatos);
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

        console.error(`Error: Ao criar campeonato ${e}`);
        res.status(500).json({message: `Erro interno do servidor`});
    }

}
}
//Rota 
export class timeOnCampeonato{
    async handle(req: Request, res: Response){
        const { time_id, campeonato_id } = req.body;

        try{
        const campeonatoTime = await prisma.campeonatoTime.create({
            data: {
                time_id,
                campeonato_id
            },
        });

        return res.status(201).json(campeonatoTime);
    }catch (e) {

        console.error(`Error: Ao adicionar time em campeonato ${e}`);
        res.status(500).json({message: `Erro interno do servidor`});
    }

}
}
