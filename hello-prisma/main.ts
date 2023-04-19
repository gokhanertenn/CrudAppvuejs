import fastify, {FastifyInstance,FastifyPluginCallback} from "fastify";
import { FastifyRequest, FastifyReply } from "fastify"; 
import { PrismaClient } from "@prisma/client";









const prisma = new PrismaClient({log: ["error","info","warn","query"]})


const app = fastify()




app.register(require('@fastify/cors'), {
  origin: '*',
});







app.post("/user", async (req, res) => {
  
    const { firstName, lastName } = req.body as any;

    const user = await prisma.user.create({
      data: {
       
        firstName:firstName,
        lastName:lastName,
       
        
      },
      
     
    }
    
    )
    return res.send(user)
  }
  )
    
    

   
  


app.get("/users" , async (req,res) => {

    const {skip,take} = req.query as any 

    const users = await prisma.user.findMany({
         skip : +skip || undefined,
         take : +take || undefined,

    })
    return res.send(users)
})

app.get("/users/:id", async (req: FastifyRequest<{ Params: { id: number } }>, res: FastifyReply) => {
  const userId = parseInt(req.params.id.toString());
  const user = await prisma.user.findUnique({
    where: {
      id: userId,
    },
  });
  if (user) {
    return res.send(user);
  } else {
    return res.status(404).send({ message: "User not found" });
  }
});



app.put("/user/:id", async (req: FastifyRequest, res: FastifyReply) => {
  const { id } = req.params as { id: string };
  const { firstName, lastName, createdAt, updatedAt } = req.body as any;

  const user = await prisma.user.update({
    where: {
      id: parseInt(id),
    },
    data: {
      firstName,
      lastName,
      createdAt,
      updatedAt,
    },
  });
  return res.send(user);
});


interface Params {
  id: string;
}


app.delete("/user/:id", async (req, res) => {
  const { id } = req.params as Params;

  const user = await prisma.user.delete({
    where: {
      id:parseInt(id),
    },
  });

  return res.send(user);
});





  
  


  




app.listen({ port: 4545})

