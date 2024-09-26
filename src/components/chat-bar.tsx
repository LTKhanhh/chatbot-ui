'use client'
import React, { useState } from 'react'
import { Input } from './ui/input'
import { Button } from './ui/button'
import { ArrowUp } from "lucide-react"
import clsx from 'clsx'
import { cn } from '@/lib/utils'
const ChatBar = ({ className, message, setMessage, onSubmit }: { className: string, message: string, setMessage: React.Dispatch<React.SetStateAction<string>>, onSubmit: () => void }) => {
    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            e.preventDefault(); // Ngăn chặn việc submit form mặc định
            onSubmit();
        }
    };
    return (
        <div
            className={clsx({
                'w-full h-[60px] p-2 flex overflow-hidden rounded-2xl border-[2px] dark:border-slate-300': true,
                [className]: className?.length != 0
            })}

        >
            <Input
                className='border-none'
                placeholder='Ask anything'
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={handleKeyDown}
            />
            <Button
                type="submit"
                variant='noOutline'
                className={clsx({
                    'rounded-full h-[40px] w-[40px] dark:bg-gray-50 bg-black p-0': true,
                    'opacity-65': message.length == 0
                })}
                onClick={onSubmit}
            >
                <ArrowUp className='h-3/5 w-3/5 dark:text-black text-[#ccc]' />
            </Button>
        </div >
    )
}

export default ChatBar

