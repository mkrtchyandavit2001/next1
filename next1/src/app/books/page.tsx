"use client"

import Image from "next/image"
import { IBook } from "../lib/types"

interface Props{
    books:IBook
}

export default function Page ({books}:Props){
    return <div>
        <Image src={books.photo}  alt="Picture of the book" />
        <p>{books.title}</p>
        <strong>{books.price} AMD</strong>
        <p>{books.author}</p>
    </div>
            
}