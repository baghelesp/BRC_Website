import React from 'react'
import Link from 'next/link'

const Routes = () => {
  return (
    <>
    <Link href="/">Landing</Link><br />
    <Link href="/contact">Contact</Link><br />
    <Link href="/event">Event</Link><br />
    <Link href="/team">Team</Link><br />
    <Link href="/gallery">Gallery</Link><br />
    <Link href="/advocate">Advocate</Link><br />

    </>
  )
}

export default Routes