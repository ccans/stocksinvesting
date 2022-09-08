import Header from "./Header";
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from "framer-motion";

import LeftHeaderGroup from "./LeftHeaderGroup";
import Logo from "./Logo";
import SignUpButton from "./SignUpButton";
  

export default function Layout({ children, router }) {
    
       
        return (
            <div>
                <Header className="header">
                    <LeftHeaderGroup />
                    <Logo />
                    <SignUpButton />    
                </Header>
                
                <AnimatePresence exitBeforeEnter>
                    <motion.div key = {router.route} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ opacity: { duration: .5 }} }>
                        {children}
                    </motion.div>
                </AnimatePresence>
            </div>
        )
  }