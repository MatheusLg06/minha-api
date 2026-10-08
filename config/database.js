import mongoose from "mongoose";

export async function connectToDatabase() {
    try {
        console.log("se conectando ao banco de dados!")
        await mongoose.connect(process.env.MONGODB_URI, {
            dbName: process.env.MONGODB_NAME
        })
        console.log("Banco de dados conectado com sucesso!")
    } catch (error) {
        console.log("Erro ao conectar no banco", error.message)
        throw error
    }
}