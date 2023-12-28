import Image from 'next/image'
import TextField from './_components/textfield'
import Grid from './_components/grid'
export default function Page() {
  return (
    <main className="min-h-screen justify-between p-24">
        <TextField />
        <Grid />
    </main>
  )
}
