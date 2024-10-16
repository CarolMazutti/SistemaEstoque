// import { createServer} from 'node:http'

// const server = createServer((request, response) => {    
//     response.write('Hello World')

//     return response.end()
// })

// server.listen(3333)

import { fastify } from "fastify";

const server = fastify()

// CRIAR AS ROTAS AQUI *****
server.get('/', () => {
    return 'hello world'
})

server.listen({
    port: 3333,
})