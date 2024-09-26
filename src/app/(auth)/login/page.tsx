'use client'
import React from 'react'
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import LoginForm from './LoginForm';
import Header from '@/components/header';

export default function LoginPage() {
    return (
        <>
            <Header />
            <div className='space-y-5'>
                <h1 className='text-center font-bold text-[30px]'>Đăng nhập</h1>
                <div className='flex justify-center'>
                    <LoginForm />
                </div>
            </div>
        </>

    )
}
