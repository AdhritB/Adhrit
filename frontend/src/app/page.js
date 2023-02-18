'use client'
import { Parallax } from 'react-parallax';

import Banner from '@/components/Banner'
import { Hero } from '@/components/Hero'
import Login from '@/components/Login'
import Team from '@/components/Team'
import React from 'react'
import { Card } from '@/components/Card';

const Home = () => {
  return (
    <>
      {/* <Parallax bgImage="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimage.winudf.com%2Fv2%2Fimage1%2FY29tLmhkLnNwcmluZ3dhbGxwYXBlci5zcHJpbmdwaWN0dXJlcy5ibGFja2dyb3VuZHdhbGxwYXBlci5iZWF1dGlmdWx3YWxscGFwZXJfc2NyZWVuXzBfMTU3Mjk0NTYwOF8wNjc%2Fscreen-0.jpg%3Ffakeurl%3D1%26type%3D.jpg&f=1&nofb=1&ipt=f2d8c7306c9edf04442cba8539b1cbc7ce95b4b01bec424877ade2642380228c&ipo=images" strength={500}>
        <div className="h-screen flex justify-center items-center">
          <h1 className="text-4xl font-bold text-white">Welcome to my website</h1>
        </div> */}

      <Banner />
      <Hero />

      <Login />
      {/* <Parallax bgImage="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimage.winudf.com%2Fv2%2Fimage1%2FY29tLmhkLnNwcmluZ3dhbGxwYXBlci5zcHJpbmdwaWN0dXJlcy5ibGFja2dyb3VuZHdhbGxwYXBlci5iZWF1dGlmdWx3YWxscGFwZXJfc2NyZWVuXzBfMTU3Mjk0NTYwOF8wNjc%2Fscreen-0.jpg%3Ffakeurl%3D1%26type%3D.jpg&f=1&nofb=1&ipt=f2d8c7306c9edf04442cba8539b1cbc7ce95b4b01bec424877ade2642380228c&ipo=images" strength={500} > */}
      <Card />

      {/* </Parallax> */}
      <Team />
    </>
  )
}

export default Home