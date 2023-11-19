import Image from "next/image"
import AboutMeGrid from "./AboutMeGrid"
import Timeline from "./Timeline"


export default function AboutPage() {
    return (
        <div className="bg-center bg-repeat bg-contain sm:bg-auto sm:bg-left-top bg-fixed" style={{ backgroundImage: 'url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuZGV2L3N2Z2pzIiB2aWV3Qm94PSIwIDAgODAwIDgwMCIgd2lkdGg9IjgwMCIgaGVpZ2h0PSI4MDAiPjxnIHN0cm9rZS13aWR0aD0iMy41IiBzdHJva2U9IiM2ZTY5NjciIGZpbGw9Im5vbmUiPjxjaXJjbGUgcj0iNC4yODk0NzM2ODQyMTA1MjYiIGN4PSIwIiBjeT0iMCIgZmlsbD0iIzZlNjk2NyIgc3Ryb2tlPSJub25lIj48L2NpcmNsZT48Y2lyY2xlIHI9IjQuMjg5NDczNjg0MjEwNTI2IiBjeD0iMjAwIiBjeT0iMCIgZmlsbD0iIzZlNjk2NyIgc3Ryb2tlPSJub25lIj48L2NpcmNsZT48Y2lyY2xlIHI9IjQuMjg5NDczNjg0MjEwNTI2IiBjeD0iNDAwIiBjeT0iMCIgZmlsbD0iIzZlNjk2NyIgc3Ryb2tlPSJub25lIj48L2NpcmNsZT48Y2lyY2xlIHI9IjQuMjg5NDczNjg0MjEwNTI2IiBjeD0iNjAwIiBjeT0iMCIgZmlsbD0iIzZlNjk2NyIgc3Ryb2tlPSJub25lIj48L2NpcmNsZT48Y2lyY2xlIHI9IjQuMjg5NDczNjg0MjEwNTI2IiBjeD0iODAwIiBjeT0iMCIgZmlsbD0iIzZlNjk2NyIgc3Ryb2tlPSJub25lIj48L2NpcmNsZT48Y2lyY2xlIHI9IjQuMjg5NDczNjg0MjEwNTI2IiBjeD0iMCIgY3k9IjIwMCIgZmlsbD0iIzZlNjk2NyIgc3Ryb2tlPSJub25lIj48L2NpcmNsZT48Y2lyY2xlIHI9IjQuMjg5NDczNjg0MjEwNTI2IiBjeD0iMjAwIiBjeT0iMjAwIiBmaWxsPSIjNmU2OTY3IiBzdHJva2U9Im5vbmUiPjwvY2lyY2xlPjxjaXJjbGUgcj0iNC4yODk0NzM2ODQyMTA1MjYiIGN4PSI0MDAiIGN5PSIyMDAiIGZpbGw9IiM2ZTY5NjciIHN0cm9rZT0ibm9uZSI+PC9jaXJjbGU+PGNpcmNsZSByPSI0LjI4OTQ3MzY4NDIxMDUyNiIgY3g9IjYwMCIgY3k9IjIwMCIgZmlsbD0iIzZlNjk2NyIgc3Ryb2tlPSJub25lIj48L2NpcmNsZT48Y2lyY2xlIHI9IjQuMjg5NDczNjg0MjEwNTI2IiBjeD0iODAwIiBjeT0iMjAwIiBmaWxsPSIjNmU2OTY3IiBzdHJva2U9Im5vbmUiPjwvY2lyY2xlPjxjaXJjbGUgcj0iNC4yODk0NzM2ODQyMTA1MjYiIGN4PSIwIiBjeT0iNDAwIiBmaWxsPSIjNmU2OTY3IiBzdHJva2U9Im5vbmUiPjwvY2lyY2xlPjxjaXJjbGUgcj0iNC4yODk0NzM2ODQyMTA1MjYiIGN4PSIyMDAiIGN5PSI0MDAiIGZpbGw9IiM2ZTY5NjciIHN0cm9rZT0ibm9uZSI+PC9jaXJjbGU+PGNpcmNsZSByPSI0LjI4OTQ3MzY4NDIxMDUyNiIgY3g9IjQwMCIgY3k9IjQwMCIgZmlsbD0iIzZlNjk2NyIgc3Ryb2tlPSJub25lIj48L2NpcmNsZT48Y2lyY2xlIHI9IjQuMjg5NDczNjg0MjEwNTI2IiBjeD0iNjAwIiBjeT0iNDAwIiBmaWxsPSIjNmU2OTY3IiBzdHJva2U9Im5vbmUiPjwvY2lyY2xlPjxjaXJjbGUgcj0iNC4yODk0NzM2ODQyMTA1MjYiIGN4PSI4MDAiIGN5PSI0MDAiIGZpbGw9IiM2ZTY5NjciIHN0cm9rZT0ibm9uZSI+PC9jaXJjbGU+PGNpcmNsZSByPSI0LjI4OTQ3MzY4NDIxMDUyNiIgY3g9IjAiIGN5PSI2MDAiIGZpbGw9IiM2ZTY5NjciIHN0cm9rZT0ibm9uZSI+PC9jaXJjbGU+PGNpcmNsZSByPSI0LjI4OTQ3MzY4NDIxMDUyNiIgY3g9IjIwMCIgY3k9IjYwMCIgZmlsbD0iIzZlNjk2NyIgc3Ryb2tlPSJub25lIj48L2NpcmNsZT48Y2lyY2xlIHI9IjQuMjg5NDczNjg0MjEwNTI2IiBjeD0iNDAwIiBjeT0iNjAwIiBmaWxsPSIjNmU2OTY3IiBzdHJva2U9Im5vbmUiPjwvY2lyY2xlPjxjaXJjbGUgcj0iNC4yODk0NzM2ODQyMTA1MjYiIGN4PSI2MDAiIGN5PSI2MDAiIGZpbGw9IiM2ZTY5NjciIHN0cm9rZT0ibm9uZSI+PC9jaXJjbGU+PGNpcmNsZSByPSI0LjI4OTQ3MzY4NDIxMDUyNiIgY3g9IjgwMCIgY3k9IjYwMCIgZmlsbD0iIzZlNjk2NyIgc3Ryb2tlPSJub25lIj48L2NpcmNsZT48Y2lyY2xlIHI9IjQuMjg5NDczNjg0MjEwNTI2IiBjeD0iMCIgY3k9IjgwMCIgZmlsbD0iIzZlNjk2NyIgc3Ryb2tlPSJub25lIj48L2NpcmNsZT48Y2lyY2xlIHI9IjQuMjg5NDczNjg0MjEwNTI2IiBjeD0iMjAwIiBjeT0iODAwIiBmaWxsPSIjNmU2OTY3IiBzdHJva2U9Im5vbmUiPjwvY2lyY2xlPjxjaXJjbGUgcj0iNC4yODk0NzM2ODQyMTA1MjYiIGN4PSI0MDAiIGN5PSI4MDAiIGZpbGw9IiM2ZTY5NjciIHN0cm9rZT0ibm9uZSI+PC9jaXJjbGU+PGNpcmNsZSByPSI0LjI4OTQ3MzY4NDIxMDUyNiIgY3g9IjYwMCIgY3k9IjgwMCIgZmlsbD0iIzZlNjk2NyIgc3Ryb2tlPSJub25lIj48L2NpcmNsZT48Y2lyY2xlIHI9IjQuMjg5NDczNjg0MjEwNTI2IiBjeD0iODAwIiBjeT0iODAwIiBmaWxsPSIjNmU2OTY3IiBzdHJva2U9Im5vbmUiPjwvY2lyY2xlPjwvZz48L3N2Zz4=")' }}>
                <AboutMeGrid/>  
               {/*  <Timeline/> */}
        </div>
    )
}

