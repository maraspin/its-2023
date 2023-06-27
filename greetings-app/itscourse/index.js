
const fastify = require('fastify')({
    logger: true
  })

const config = require('./config')

  fastify.get('/', async (request, reply) => {
    return { hello: 'world' }
  })
  
  fastify.get('/printenv', async (request, reply) => {
    return { greetings: config.greetings }
  })
  
  const start = async () => {
    try {
      await fastify.listen(3000, '0.0.0.0')
    } catch (err) {
      fastify.log.error(err)
      process.exit(1)
    }
  }
  start()