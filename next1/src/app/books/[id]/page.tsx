import { notFound } from "next/navigation"

interface IProps{
    params: {id:number}
}

export default function Page(props:IProps) {

  return <>
    <div className='is-size-2'>Hello Books NO.{props.params.id}</div>
    {

    }
  </>
}
