import {Request, Response} from 'express';
import prisma from '../database/db';

//GET
export const getAllCampeonatos = async (req: Request, res: Response) => {
    
    try {

        const campeonatos = await prisma.campeonato.findMany();

        return res.status(201).json(campeonatos);
    } catch (e) {

        console.error(`Error: Ao buscar a lista de campeonatos ${e}`);
        res.status(500).json({message: `Erro interno do servidor`});
    }
}

export const getCampeonatoId = async (req: Request, res: Response) => {
    const { id } = req.body
    try {
        const campeonatoId = await prisma.campeonato.findUnique({
                where: {
                    id: id,
                },
                
            })
            
            if(!campeonatoId === null){
                res.json(campeonatoId);
            }else{
                res.json('Campeonato inexistente');
            }

    } catch (e) {

        console.error(`Error: Ao buscar a lista de jogadores ${e}`);
        res.status(500).json({message: `Erro interno do servidor`});
    }

}

export const updateCampeonato = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const {nome, DataInicio, DataFim} = req.body;    

    try{
        const updateCampeonato = await prisma.campeonato.update({
            where: {
                id: id,
            },
            data: {
                Nome: nome,
                DataInicio: DataInicio,
                DataFim: DataFim
            },
        })

        res.json(updateCampeonato);
    }
    catch (e) {
        console.error(e);
        res.status(500).json({message: 'Erro interno do servidor'});
    }
}

export const newCampeonato = async (req: Request, res: Response) =>{
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

export const newTimeOnCampeonato = async (req: Request, res: Response) =>{
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

export const deleteCampeonato = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);

    try{
        const deleteCampeonato = await prisma.campeonato.delete({
            where: {
                id: id,
            }
        })

        res.json(deleteCampeonato);
    }
    catch (e) {
        console.error(e);
        res.status(500).json({message: 'Erro interno do servidor'});
    }
}