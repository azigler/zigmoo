import { useClientContext } from "../Context/Context"
import { Button } from "zigbits"

function Home() {
  const { state } = useClientContext()

  return (
    <div>
      <p>This is Home.</p>
      <Button>ok</Button>
      <button
        onClick={() => {
          state.socket.send(
            "5:1+::" + JSON.stringify({ name: "input", args: ["?"] })
          )
        }}
      >
        WOA
      </button>
      <div>{state.log}</div>
    </div>
  )
}

export { Home }
