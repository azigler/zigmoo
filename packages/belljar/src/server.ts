import Hapi from "@hapi/hapi"

const server = Hapi.server({
  port: 8005,
  host: "0.0.0.0",
})

export const init = async () => {
  // Routes will go here

  server.route({
    method: "GET",
    path: "/",
    handler: () => {
      return "Hello World!"
    },
  })

  return server
}

export const start = async function (): Promise<void> {
  console.log(`Listening on ${server.settings.host}:${server.settings.port}`)
  return server.start()
}

process.on("unhandledRejection", (err) => {
  console.error("unhandledRejection")
  console.error(err)
  process.exit(1)
})
