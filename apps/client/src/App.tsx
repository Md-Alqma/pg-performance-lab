import { Button, Tooltip, TooltipContent, TooltipTrigger } from '@pg-performance-lab/ui'
function App() {
  return (
    <>
      <h1 className="text-5xl text-red-500">Postgres Performance Lab</h1>
      <Button variant={'danger'}>Hello</Button>
      <Tooltip>
        <TooltipTrigger>Hi</TooltipTrigger>
        <TooltipContent>Hello</TooltipContent>
      </Tooltip>
    </>
  )
}

export default App
