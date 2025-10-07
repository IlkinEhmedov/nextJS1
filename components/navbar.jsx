"use client"
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { BsBasket3 } from "react-icons/bs";
import styles from "../styles/navbar.module.scss";
import { Box, Drawer, List, ListItem, ListItemText } from "@mui/material";


export default function Navbar() {
    const [open, setOpen] = useState(false);
    return (
        <>
            <header className={styles.header}>
                <Box className="logo">
                    <Image src={'/logo_black.png'} width={40} height={40} alt="logo" />
                </Box>
                <Box className={styles.content}>
                    <List className={styles.links}>
                        <ListItem button="true" sx={{ borderRadius: "8px", cursor: "pointer" }}>
                            <Link href={'/'}>Home</Link>
                        </ListItem>
                        <ListItem button="true" sx={{ borderRadius: "8px", cursor: "pointer" }}>
                            <Link href={'/news'}>News</Link>
                        </ListItem>
                        <ListItem button="true" sx={{ borderRadius: "8px", cursor: "pointer" }}>
                            <Link href={'/about'}>About</Link>
                        </ListItem>
                        <ListItem button="true" sx={{ borderRadius: "8px", cursor: "pointer" }}>
                            <Link href={'/blog'}>Blog</Link>
                        </ListItem>
                        <ListItem button="true" sx={{ borderRadius: "8px", cursor: "pointer" }}>
                            <Link href={'/services'}>services</Link>
                        </ListItem>
                        <ListItem button="true" sx={{ borderRadius: "8px", cursor: "pointer" }}>
                            <Link href={'/shop'}>shop</Link>
                        </ListItem>
                        <ListItem button="true" sx={{ borderRadius: "8px", cursor: "pointer" }}>
                            <Link href={'/login'}>login</Link>
                        </ListItem>
                    </List>
                    <Box variant="contained" onClick={() => setOpen(true)} className={styles.icon}>
                        <BsBasket3 />
                        <span>2</span>
                    </Box>
                </Box>
            </header>

            <Drawer
                anchor="left"
                open={open}
                onClose={() => setOpen(false)}
            >
                <List sx={{ width: 250 }}>
                    <ListItem button="true" sx={{ cursor: 'pointer' }} onClick={() => setOpen(false)}>
                        <ListItemText primary="Home" />
                    </ListItem>
                    <ListItem button="true" sx={{ cursor: 'pointer' }} onClick={() => setOpen(false)}>
                        <ListItemText primary="Profile" />
                    </ListItem>
                    <ListItem button="true" sx={{ cursor: 'pointer' }} onClick={() => setOpen(false)}>
                        <ListItemText primary="Settings" />
                    </ListItem>
                </List>
            </Drawer>
        </>
    )
}
