import { useState } from 'react'
import { files } from '../assets/assets'
import { motion } from 'motion/react'

const ChatAi = () => {

  const API_KEY = import.meta.env.REACT_APP_OPENAI_API_KEY
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([
    { type: 'bot', text: 'Hi! im your Real Estate Assistant. How may I help you today?' }
  ])

  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)

  const ToggleChat = () => setIsOpen(!isOpen)

  const HandleSend = async () => {
    if (!input.trim()) return

    const usermessage = { type: 'user', text: input }
    setMessages((prev) => [...prev, usermessage])
    setInput('')
    setLoading(true)

    try {
      const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${API_KEY}`,
        },
        body: JSON.stringify({
          model: "gpt-3.5-turbo",
          messages: [
            { role: "system", content: "You are a helpful Ai for the Real Estate users." },
            { role: "user", content: input }
          ],
          max_tokens: 150,
          temperature: 0.7,
        }),
      })

      const data = await response.json()
      const botText = data.choices?.[0]?.message?.content || "Sorry i couldn't understand. Please try again"
      setMessages((prev) => [...prev, { type: "bot", text: botText }])
    } catch (error) {
      console.error(error)
      setMessages((prev) => [...prev, { type: "bot", text: "something went wrong. Try again later" }])
    } finally {
      setLoading(false)
    }

  }
  return (
    <>
      {!isOpen && (
        <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.5, ease: 'easeOut' }} 
        className="fixed bottom-4 right-4 z-50 flex flex-col items-center">
          <span className="mb-4 bg-white text-blue-600 text-xs px-2 py-1 rounded shadow animate-bounce">
            Chat with me
          </span>
          <button onClick={ToggleChat} className='bg-blue-600 text-white rounded-full p-1 shadow-lg transition transform duration-300 hover:-translate-y-4'>
            <img src={files.AiFace} alt="" className='w-10 rounded-full cursor-pointer ' />
          </button>
        </motion.div>
      )}

      <div
        className={`fixed bottom-4 right-4 z-50 transition-opacity duration-300 ease-in-out 
          ${isOpen ? 'opacity-100 scale-100 pointer-events-auto' : 'opacity-0 scale-95 pointer-events-none'}  w-[90vw] max-w-xs  sm:max-w-[40vw] md:max-w-md lg:max-w-[30vw] xl:max-w-[30vw] h-[70vh] max-h-[80vh]`}
      >
        {isOpen && (
          <div className="w-full h-full bg-white rounded-lg shadow-lg flex flex-col overflow-hidden">
            <div className="bg-blue-600 text-white p-3 flex justify-between items-center">
              <h4 className="font-semibold">Real Estate Chat AI</h4>
              <button onClick={ToggleChat} className='cursor-pointer'>✖</button>
            </div>

            <div className="flex-1 p-3 overflow-y-auto space-y-2 text-sm bg-gray-50">
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`p-2 rounded max-w-[90%] ${msg.type === 'bot' ? 'bg-gray-200 text-left' : 'bg-blue-100 text-right ml-auto'}`}
                >
                  {msg.text}
                </div>
              ))}
              {loading && <p className="text-xs text-gray-400">Typing...</p>}
            </div>

            <div className="p-2 border-t flex items-center">
              <input
                className="flex-1 border rounded p-2 mr-2 text-sm"
                type="text"
                placeholder="Ask about properties..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && HandleSend()}
              />
              <button onClick={HandleSend} className="bg-blue-600 text-white px-3 py-1 rounded text-sm">
                Send
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  )
}

export default ChatAi

