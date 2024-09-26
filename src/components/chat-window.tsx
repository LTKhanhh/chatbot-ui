'use client'
import React from 'react'
import { useEffect, useRef } from 'react';

import Message from './message';
interface ChatProps {
    messages: string[][];
}

const ChatWindow: React.FC<ChatProps> = ({ messages }) => {
    const chatContainerRef = useRef<HTMLDivElement | null>(null);

    // Mỗi khi messages thay đổi, tự động scroll xuống cuối cùng


    useEffect(() => {
        if (chatContainerRef.current) {
            chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
        }
    }, [messages]);

    return (
        <div
            className='w-full xl:pl-[400px] xl:pr-[400px] pt-[20px] pb-[20px] overflow-y-auto custom-scrollbar'
            style={{ maxHeight: 'calc(100vh - 100px)' }}
            ref={chatContainerRef}
        >
            {messages.map((message: string[], idx: number) => (
                message.map((mess: string, idx: number) => (
                    < Message text={mess} isUser={idx % 2 === 0 ? true : false} />
                ))
            ))}
        </div>

    );
};

export default ChatWindow
