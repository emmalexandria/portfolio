'use client'

import { motion } from "framer-motion";
import Diamond from "./Diamond";
import AnimatedDiamond from "./AnimatedDiamond";
import DownArrow from "./DownArrow";
import ContactButton from "./ContactButton";
import BlogButton from "./BlogButton";

export default function FirstPage() {
    return (
        <section className="min-h-screen flex justify-center bg-center bg-repeat bg-contain sm:bg-auto sm:bg-left-top bg-fixed" style={{ backgroundImage: 'url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuZGV2L3N2Z2pzIiB2aWV3Qm94PSIwIDAgODAwIDgwMCIgd2lkdGg9IjgwMCIgaGVpZ2h0PSI4MDAiPjxnIHN0cm9rZS13aWR0aD0iMy41IiBzdHJva2U9IiM2ZTY5NjciIGZpbGw9Im5vbmUiPjxjaXJjbGUgcj0iNC4yODk0NzM2ODQyMTA1MjYiIGN4PSIwIiBjeT0iMCIgZmlsbD0iIzZlNjk2NyIgc3Ryb2tlPSJub25lIj48L2NpcmNsZT48Y2lyY2xlIHI9IjQuMjg5NDczNjg0MjEwNTI2IiBjeD0iMjAwIiBjeT0iMCIgZmlsbD0iIzZlNjk2NyIgc3Ryb2tlPSJub25lIj48L2NpcmNsZT48Y2lyY2xlIHI9IjQuMjg5NDczNjg0MjEwNTI2IiBjeD0iNDAwIiBjeT0iMCIgZmlsbD0iIzZlNjk2NyIgc3Ryb2tlPSJub25lIj48L2NpcmNsZT48Y2lyY2xlIHI9IjQuMjg5NDczNjg0MjEwNTI2IiBjeD0iNjAwIiBjeT0iMCIgZmlsbD0iIzZlNjk2NyIgc3Ryb2tlPSJub25lIj48L2NpcmNsZT48Y2lyY2xlIHI9IjQuMjg5NDczNjg0MjEwNTI2IiBjeD0iODAwIiBjeT0iMCIgZmlsbD0iIzZlNjk2NyIgc3Ryb2tlPSJub25lIj48L2NpcmNsZT48Y2lyY2xlIHI9IjQuMjg5NDczNjg0MjEwNTI2IiBjeD0iMCIgY3k9IjIwMCIgZmlsbD0iIzZlNjk2NyIgc3Ryb2tlPSJub25lIj48L2NpcmNsZT48Y2lyY2xlIHI9IjQuMjg5NDczNjg0MjEwNTI2IiBjeD0iMjAwIiBjeT0iMjAwIiBmaWxsPSIjNmU2OTY3IiBzdHJva2U9Im5vbmUiPjwvY2lyY2xlPjxjaXJjbGUgcj0iNC4yODk0NzM2ODQyMTA1MjYiIGN4PSI0MDAiIGN5PSIyMDAiIGZpbGw9IiM2ZTY5NjciIHN0cm9rZT0ibm9uZSI+PC9jaXJjbGU+PGNpcmNsZSByPSI0LjI4OTQ3MzY4NDIxMDUyNiIgY3g9IjYwMCIgY3k9IjIwMCIgZmlsbD0iIzZlNjk2NyIgc3Ryb2tlPSJub25lIj48L2NpcmNsZT48Y2lyY2xlIHI9IjQuMjg5NDczNjg0MjEwNTI2IiBjeD0iODAwIiBjeT0iMjAwIiBmaWxsPSIjNmU2OTY3IiBzdHJva2U9Im5vbmUiPjwvY2lyY2xlPjxjaXJjbGUgcj0iNC4yODk0NzM2ODQyMTA1MjYiIGN4PSIwIiBjeT0iNDAwIiBmaWxsPSIjNmU2OTY3IiBzdHJva2U9Im5vbmUiPjwvY2lyY2xlPjxjaXJjbGUgcj0iNC4yODk0NzM2ODQyMTA1MjYiIGN4PSIyMDAiIGN5PSI0MDAiIGZpbGw9IiM2ZTY5NjciIHN0cm9rZT0ibm9uZSI+PC9jaXJjbGU+PGNpcmNsZSByPSI0LjI4OTQ3MzY4NDIxMDUyNiIgY3g9IjQwMCIgY3k9IjQwMCIgZmlsbD0iIzZlNjk2NyIgc3Ryb2tlPSJub25lIj48L2NpcmNsZT48Y2lyY2xlIHI9IjQuMjg5NDczNjg0MjEwNTI2IiBjeD0iNjAwIiBjeT0iNDAwIiBmaWxsPSIjNmU2OTY3IiBzdHJva2U9Im5vbmUiPjwvY2lyY2xlPjxjaXJjbGUgcj0iNC4yODk0NzM2ODQyMTA1MjYiIGN4PSI4MDAiIGN5PSI0MDAiIGZpbGw9IiM2ZTY5NjciIHN0cm9rZT0ibm9uZSI+PC9jaXJjbGU+PGNpcmNsZSByPSI0LjI4OTQ3MzY4NDIxMDUyNiIgY3g9IjAiIGN5PSI2MDAiIGZpbGw9IiM2ZTY5NjciIHN0cm9rZT0ibm9uZSI+PC9jaXJjbGU+PGNpcmNsZSByPSI0LjI4OTQ3MzY4NDIxMDUyNiIgY3g9IjIwMCIgY3k9IjYwMCIgZmlsbD0iIzZlNjk2NyIgc3Ryb2tlPSJub25lIj48L2NpcmNsZT48Y2lyY2xlIHI9IjQuMjg5NDczNjg0MjEwNTI2IiBjeD0iNDAwIiBjeT0iNjAwIiBmaWxsPSIjNmU2OTY3IiBzdHJva2U9Im5vbmUiPjwvY2lyY2xlPjxjaXJjbGUgcj0iNC4yODk0NzM2ODQyMTA1MjYiIGN4PSI2MDAiIGN5PSI2MDAiIGZpbGw9IiM2ZTY5NjciIHN0cm9rZT0ibm9uZSI+PC9jaXJjbGU+PGNpcmNsZSByPSI0LjI4OTQ3MzY4NDIxMDUyNiIgY3g9IjgwMCIgY3k9IjYwMCIgZmlsbD0iIzZlNjk2NyIgc3Ryb2tlPSJub25lIj48L2NpcmNsZT48Y2lyY2xlIHI9IjQuMjg5NDczNjg0MjEwNTI2IiBjeD0iMCIgY3k9IjgwMCIgZmlsbD0iIzZlNjk2NyIgc3Ryb2tlPSJub25lIj48L2NpcmNsZT48Y2lyY2xlIHI9IjQuMjg5NDczNjg0MjEwNTI2IiBjeD0iMjAwIiBjeT0iODAwIiBmaWxsPSIjNmU2OTY3IiBzdHJva2U9Im5vbmUiPjwvY2lyY2xlPjxjaXJjbGUgcj0iNC4yODk0NzM2ODQyMTA1MjYiIGN4PSI0MDAiIGN5PSI4MDAiIGZpbGw9IiM2ZTY5NjciIHN0cm9rZT0ibm9uZSI+PC9jaXJjbGU+PGNpcmNsZSByPSI0LjI4OTQ3MzY4NDIxMDUyNiIgY3g9IjYwMCIgY3k9IjgwMCIgZmlsbD0iIzZlNjk2NyIgc3Ryb2tlPSJub25lIj48L2NpcmNsZT48Y2lyY2xlIHI9IjQuMjg5NDczNjg0MjEwNTI2IiBjeD0iODAwIiBjeT0iODAwIiBmaWxsPSIjNmU2OTY3IiBzdHJva2U9Im5vbmUiPjwvY2lyY2xlPjwvZz48L3N2Zz4=")' }}>
            <div className="w-fit mt-20 sm:mt-80 my-auto h-fit">
                <div className="bg-light-900 p-2 rounded">
                    <h1 className='font-display font-black text-5xl sm:text-7xl mx-auto text-dark-50 mb-4 text-center w-min sm:w-fit'>Emma Alexandria
                        <sup>
                            <sup className='text-3xl'>
                                †
                            </sup>
                        </sup>
                    </h1>
                    <span className="flex flex-col sm:flex-row justify-center items-center font-body text-center space-y-1 space-x-0 sm:space-x-2 sm:space-y-0 text-xl sm:text-2xl text-accent-500 font-bold bg-gradient-to-r from-accent-500 via-accent-400 to-accent-800 bg-clip-text">
                        <h2 className='text-transparent'>Full stack developer</h2>
                        <span className="block w-2 h-2"><AnimatedDiamond /></span>
                        <h2 className='text-transparent'>Maker of stuff</h2>
                    </span>
                    <p className="font-body text-dark-300 text-sm px-4 sm:text-l sm:w-2/3 text-center mx-auto mt-8">
                        †Technically it's Emma Alexandria Jellema-Butler but thats too long for a web portfolio
                    </p>
                    <span className='flex flex-col w-max mx-auto md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4 mt-8'>
                        <ContactButton elementID='contactme'>Contact me</ContactButton>
                        <BlogButton href="https://blog.emmalexandria.dev">Blog</BlogButton>
                    </span>
                </div>
                <div className="w-4 mx-auto mb-16 mt-16 hidden sm:block">
                    <DownArrow />
                </div>

            </div>


        </section>
    )
}