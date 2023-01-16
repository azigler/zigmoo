import React from "react"
import { useClientContext } from "../Context/Context"

export function Socket() {
  const { state, dispatch } = useClientContext()

  React.useEffect(() => {
    if (state.me && !state.socket) {
      console.log("ok socket would go now")
      fetch(
        "https://zigmoo.net:8001/socket.io/1/?host=moo.zigmoo.net&port=4848&t=1671344194066"
      ).then(async (res) => {
        const socket = new WebSocket(
          `wss://zigmoo.net:8001/socket.io/1/websocket/${await (
            await res.text()
          ).split(":")[0]}?host=moo.zigmoo.net&port=4848`
        )

        socket.onmessage = (event) => {
          console.log(event)

          const parsedEvent = JSON.parse(event.data.split(":::")[1])
          if (parsedEvent.name === "data") {
            parsedEvent.args[0].split("\r\n").forEach((line: string) => {
              dispatch({
                type: "update_log",
                msg: line,
              })
            })
          }
        }

        dispatch({
          type: "save_socket",
          socket,
        })
      })
    }
  }, [state.me, dispatch, state.socket])

  return <h1>socket</h1>
}
