import Link from 'next/link';
import React from 'react';
import { Button } from '~/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '~/components/ui/dropdown-menu';
import { Sheet, SheetContent, SheetTrigger } from '~/components/ui/sheet';
import {Castle, Menu } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from '~/components/ui/avatar';
import { getServerAuthSession } from '~/server/auth';
import { routes } from '~/configs/routes';

export const Header = async () => {
  const session = await getServerAuthSession();

  if (!session?.user) {
    return null;
  }

  return (
    <header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
      <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
        <Link
          href="#"
          className="flex items-center gap-2 text-lg font-semibold md:text-base"
        >
          <Castle className="h-6 w-6" />
          <span className="sr-only">Staff Central</span>
        </Link>
        {Object.values(routes).map(({title, href}) => (
          <Link
            key={title}
            href={href}
            className="text-foreground transition-colors hover:text-foreground"
          >
            {title}
          </Link>
        ))}
      </nav>
      <Sheet>
        <SheetTrigger asChild>
          <Button
            variant="outline"
            size="icon"
            className="shrink-0 md:hidden"
          >
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <nav className="grid gap-6 text-lg font-medium">
            <Link
              href="#"
              className="flex items-center gap-2 text-lg font-semibold"
            >
              <Castle className="h-6 w-6" />
              <span className="sr-only">Staff Central</span>
            </Link>
            {Object.values(routes).map(({title, href}) => (
              <Link
                key={title}
                href={href}
                className="text-muted-foreground hover:text-foreground"
              >
                {title}
              </Link>
            ))}
          </nav>
        </SheetContent>
      </Sheet>
      <div className="flex w-full items-center justify-end gap-4 md:ml-auto md:gap-2 lg:gap-4">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="secondary" size="icon" className="rounded-full">
              <Avatar className="h-5 w-5">
                <AvatarImage src={session.user.image ?? ''} />
                <AvatarFallback>{session.user.name}</AvatarFallback>
              </Avatar>
              <span className="sr-only">Toggle user menu</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>
              <Link
                href={routes.profile.href}
                className="text-muted-foreground hover:text-foreground"
              >
                {routes.profile.title}
              </Link>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Настройки</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Link href={routes.signOut.href}>
                {routes.signOut.title}
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};