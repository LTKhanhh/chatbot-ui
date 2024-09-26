'use client'
import React from 'react'
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

export default function LoginForm() {
    const [phoneNumber, setPhoneNumber] = useState("");
    const [showOtpInput, setShowOtpInput] = useState(false);
    const { toast } = useToast();
    const handlePhoneNumber = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPhoneNumber(event.target.value);
    };

    const handlePhoneSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // phone validations
        const regex = /[^0-9]/g;
        if (phoneNumber.length != 10 || regex.test(phoneNumber)) {
            toast({
                variant: "destructive",
                description: "Invalid Phone Number.",
            })
            return;
        }

        // Call BE API
        // show OTP Field
        setShowOtpInput(true);
    };
    return (
        <div>
            <form onSubmit={handlePhoneSubmit}>
                <input
                    type="text"
                    value={phoneNumber}
                    onChange={handlePhoneNumber}
                    placeholder="Enter Phone Number"
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}
