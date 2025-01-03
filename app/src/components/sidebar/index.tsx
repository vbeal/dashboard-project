import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Button } from '../ui/button'
import Link from 'next/link'
import { Home, Package, PanelBottom, Settings2, ShoppingBag, User } from 'lucide-react'
import { TooltipProvider, Tooltip, TooltipContent, TooltipTrigger } from '../ui/tooltip'


export function Sidebar() {
    return (
       <div className='flex w-full flex-col bg-muted/40'>

        <aside className='fixed inset-y-0 left-0 z-10 w-14 border-r bg-background sm:flex'>
            <nav className='flex flex-col items-center gap-4 px-2 py-5'>
          <TooltipProvider>
            <Link href='#'
            className='flex h-9 w-9 shrink-0 items-center justify-center bg-primary 
            text-primary-foreground rounded-full'
            >
                <Package className='h-4 w-4' />
                <span className='sr-only'>Dashboard Avatar</span>

            </Link>


            <Tooltip>
            <TooltipTrigger asChild>
            <Link href='#'
            className='flex h-9 w-9 shrink-0 items-center justify-center
            text-muted-foreground transition-colors  hover:text-foreground'
            >
                <Home className='h-5 w-5' />
                <span className='sr-only'>Início</span>

            </Link>
            </TooltipTrigger>
                    <TooltipContent side='right'>
                        <span className='sr-only'>Início</span>
                    </TooltipContent>
            </Tooltip>
          </TooltipProvider>
            </nav>

        </aside>

        {/* Div do Mobile */}
        <div className='flex flex-col sm:gap-4 sm:py-4 sm:pl-14'>
            <header className='
            sticky top-0 z-30 flex h-14 items-center justify-between border-b bg-background 
            px-4 gap-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6
            '>

                <Sheet>
                    <SheetTrigger>

                        <Button size='icon' variant='outline' className='sm:hidden'>
                            <PanelBottom className='h-6 w-6' />
                            <span className='sr-only'>Abrir / fechar Menu</span>
                        </Button>
                    </SheetTrigger>
                    
                    
                    <SheetContent side='left' className='sm:max-w-x'>
                        <nav className='grid gap-6 text-lg font-medium'>
                            <Link 
                            href="#"
                            className='flex h-10 w-10 bg-primary rounded-full 
                            text-lg items-center justify-center text-primary-foreground 
                            ms:text-base gap-2'
                            prefetch={false}
                            >
                               <Package className='h-5 w-5 transition-all' />
                                <span className='sr-only'>Logo</span>
                            </Link>

                            <Link 
                            href="#"
                            className='flex items-center gap-4 px-2.5 text-muted-foreground
                            hover:text-foreground'
                            prefetch={false}
                            >
                               <Home className='h-5 w-5 transition-all' />
                                Inicio
                            </Link>

                            <Link 
                            href="#"
                            className='flex items-center gap-4 px-2.5 text-muted-foreground
                            hover:text-foreground'
                            prefetch={false}
                            >
                               <ShoppingBag className='h-5 w-5 transition-all' />
                                Pedidos
                            </Link>

                            <Link 
                            href="#"
                            className='flex items-center gap-4 px-2.5 text-muted-foreground
                            hover:text-foreground'
                            prefetch={false}
                            >
                               <Package className='h-5 w-5 transition-all' />
                                Produtos
                            </Link>

                            <Link 
                            href="#"
                            className='flex items-center gap-4 px-2.5 text-muted-foreground
                            hover:text-foreground'
                            prefetch={false}
                            >
                               <User className='h-5 w-5 transition-all' />
                                Clientes
                            </Link>

                            <Link 
                            href="#"
                            className='flex items-center gap-4 px-2.5 text-muted-foreground
                            hover:text-foreground'
                            prefetch={false}
                            >
                               <Settings2 className='h-5 w-5 transition-all' />
                                Configurações
                            </Link>
                        </nav>
                    </SheetContent>

                </Sheet>
                <h2>Menu</h2>
            </header>
        </div>
        {/* Fim Div do Mobile */}

       </div>
    )
}
