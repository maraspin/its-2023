const config = {}

const envKeys = [
    'GREETINGS'
  ]
  
envKeys.forEach((key) => {
  if (!process.env[key]) {
    throw new Error(`Missing required environment variable: ${key}`)
  }
})


config.greetings = process.env.GREETINGS

module.exports = config