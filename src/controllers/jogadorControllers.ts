import {Request, Response} from 'express';
import prisma from '../database/db';
import { PrismaClient } from '@prisma/client';

//GET
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

export const getJogadorId = async (req: Request, res: Response) => {
    const { id } = req.body
    try {
        const jogadorId = await prisma.jogador.findUnique({
                where: {
                    id: id,
                },
                
            })
            
            if(!jogadorId === null){
                res.json(jogadorId);
            }else{
                res.json('Usuário inexistente');
            }

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

//POST
export const newJogador = async (req: Request, res: Response) =>{
    const { Nome, Idade, time_id } = req.body;

    try{
    const createjogador = await prisma.jogador.create({
        data: {
            Nome,
            Idade,
            time_id
        },
         include:{
            time: true
        }
    });

    return res.status(201).json(createjogador);
}catch (e) {

    console.error(`Error: Ao criar jogador ${e}`);
    res.status(500).json({message: `Erro interno do servidor`});
}
}

export const deleteJogador = async(req: Request, res: Response) => {
    const { Nome } = req.body;

    try{
    const deleteJogador = await prisma.jogador.deleteMany({
        where: {
            Nome
        },
    });
    res.json(deleteJogador);
}catch (e) {

    console.error(`Error: Ao deletar jogador ${e}`);
    res.status(500).json({message: `Erro interno do servidor`});
}

}