import React from 'react'
import { styled } from "styled-components"
import Header from './Header'
import Footer from './Footer'
const LayoutWrapper = styled.div`
   background-color:#fff;
   position:relative;
`
const Layout = ({ children }) =>
{
    return (
        <LayoutWrapper>
            <Header />
            {children}
            <Footer />
        </LayoutWrapper>
    )
}

export default Layout