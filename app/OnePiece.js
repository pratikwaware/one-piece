import React from 'react'
import Head from 'next/head'
import Dropdown from './Dropdown'

function OnePiece() {
  return (
    <div>
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
        <Head>
            <title>Create Next App</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
            <Dropdown />
        </main>

        <footer className="flex h-24 w-full items-center justify-center border-t">
            <p
                className="flex items-center justify-center gap-2"
                rel="noopener noreferrer"
            >
                Powered by 
            </p>
            <p className="text-blue-600 font-bold px-1"> PROWAVE </p>
        </footer>
    </div>
    </div>
  )
}

export default OnePiece