'use client'
import Image from "next/image";
import ChatBar from "@/components/chat-bar"
import ChartWindow from "@/components/chat-window"
import Header from "@/components/header";

import clsx from "clsx";
import { useState, useRef, useEffect } from "react";
import chatApiRequest from "@/apiRequest/chat";

const questions = [
  "Chứng khoán là gì?",
  "Chứng khoán là các công cụ tài chính thể hiện quyền sở hữu hoặc khoản nợ trong một doanh nghiệp.",

  "Làm thế nào để đầu tư vào chứng khoán?",
  "Để đầu tư vào chứng khoán, bạn cần mở một tài khoản giao dịch tại một công ty môi giới và thực hiện các giao dịch mua bán cổ phiếu hoặc trái phiếu.",

  "Cổ phiếu khác gì với trái phiếu?",
  "Cổ phiếu là phần sở hữu của công ty, trong khi trái phiếu là khoản vay mà bạn cho công ty hoặc chính phủ mượn và nhận lãi.",

  "Lợi nhuận từ chứng khoán đến từ đâu?",
  "Lợi nhuận từ chứng khoán có thể đến từ việc tăng giá cổ phiếu hoặc từ cổ tức và lãi suất trái phiếu.",

  "Rủi ro lớn nhất khi đầu tư vào chứng khoán là gì?",
  "Rủi ro lớn nhất khi đầu tư vào chứng khoán là khả năng mất vốn khi giá trị của cổ phiếu giảm mạnh hoặc khi doanh nghiệp phá sản."

];

const wait = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));
export default function Home() {
  const [message, setMessage] = useState('')
  const [messages, setMessages] = useState<string[][]>([[]]);
  const sendMessage = async () => {
    setMessages((prevMessages) => [...prevMessages, [message]]);

    // Chờ 5 giây
    await wait(5000);

    //call api
    const response = await chatApiRequest.send(message)

    // Cập nhật lại tin nhắn cuối cùng với câu hỏi và câu trả lời
    setMessages((prevMessages) => {
      const updatedMessages = [...prevMessages];
      updatedMessages[updatedMessages.length - 1] = [message, response.payload.intent.name];
      return updatedMessages;
    });

    setMessage('')
  }
  return (
    <div className="h-screen flex-col flex ">
      {/* <div className="h-full w-full justify-center text-center"> */}
      <Header />
      {/* <div className='w-full xl:pl-[400px] xl:pr-[400px] pt-[20px] pb-[20px] overflow-y-auto custom-scrollbar' style={{ maxHeight: 'calc(100vh - 100px)' }}>
        {questions.map((question: string, idx: number) => (
          <Message text={question} isUser={idx % 2 === 0 ? true : false} />
        ))}
      </div> */}
      <ChartWindow messages={messages} />
      <div className='fixed bottom-0 w-full xl:pl-[400px] xl:pr-[400px]'>
        <ChatBar className="" message={message} setMessage={setMessage} onSubmit={sendMessage} />
      </div>
      {/* </div> */}
    </div >
  );
}
