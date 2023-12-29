import React from 'react'
import { PaperClipIcon, ArrowUpIcon } from '@heroicons/react/24/solid'

function InputBar(props) {
    
  return (
    <div className="w-full flex flex-col px-6" >
        <div className="flex justify-start border p-4 rounded-2xl items-center ">
            <PaperClipIcon className="mr-5 w-6 h-6 text-gray-400" />
            <input
                className="w-full bg-transparent focus:outline-none text-white"
                value={props.input}
                onChange={(e) => props.setInput(e.target.value)}        
                type="text"
                placeholder="Message ChatGPT..." />
            <ArrowUpIcon onClick={() => props.handleSendMessage()} className="rounded-lg w-7 h-7 text-black bg-white p-1" />
        </div>
        <p className="font-extralight text-[12px] flex self-center text-white">ChatGPT can make mistakes. Consider checking important information.</p>
    </div>
  )
}

export default InputBar