import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"


export default function Message({ text, isUser }: { text: string, isUser: boolean }) {
    return (
        <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-2`}>
            {
                !isUser && (
                    <div className='pt-[10px]'>
                        <Avatar>
                            {/* <AvatarImage src="https://github.com/shadcn.png" /> */}
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                    </div>
                )
            }
            <div className={`max-w-[460px] p-3 rounded-lg ${isUser ? 'bg-gray-300 text-black' : ''}`}>
                {text}
            </div>
        </div>
    )
}
