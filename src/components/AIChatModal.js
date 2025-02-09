import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { X, Send, Bot, Loader2 } from 'lucide-react';
export default function AIChatModal({ isOpen, onClose }) {
    const [messages, setMessages] = useState([
        { type: 'bot', content: 'Hello! I\'m your PRMCAS AI assistant. How can I help you today?' }
    ]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    if (!isOpen)
        return null;
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!input.trim())
            return;
        // Add user message
        const userMessage = { type: 'user', content: input.trim() };
        setMessages(prev => [...prev, userMessage]);
        setInput('');
        setIsLoading(true);
        // Simulate AI response (replace with actual AI integration)
        setTimeout(() => {
            const response = getAIResponse(input.trim());
            setMessages(prev => [...prev, { type: 'bot', content: response }]);
            setIsLoading(false);
        }, 1000);
    };
    // Simple response logic (replace with actual AI integration)
    const getAIResponse = (query) => {
        const responses = {
            'admission': 'Admissions for the academic year are open. We offer courses in Arts, Commerce, and Science streams. The admission process is online through our portal.',
            'courses': 'We offer various undergraduate and postgraduate programs in Arts, Commerce, and Science streams. Some popular courses include BBA, BCA, BSc, and MCom.',
            'fees': 'Fee structure varies by course. Please visit our admission portal for detailed fee information.',
            'campus': 'Our campus is located in Akurdi, Pune. We have state-of-the-art facilities including labs, library, sports ground, and more.',
            'default': 'I can help you with information about admissions, courses, fees, campus facilities, and more. What would you like to know?'
        };
        const query_lower = query.toLowerCase();
        for (const [key, value] of Object.entries(responses)) {
            if (query_lower.includes(key))
                return value;
        }
        return responses.default;
    };
    return (_jsx("div", { className: "fixed inset-0 z-50 overflow-y-auto", children: _jsxs("div", { className: "flex min-h-full items-center justify-center p-4", children: [_jsx("div", { className: "fixed inset-0 bg-gray-900/75 backdrop-blur-sm", onClick: onClose }), _jsxs("div", { className: "relative w-full max-w-lg bg-white dark:bg-gray-900 rounded-2xl shadow-xl", children: [_jsxs("div", { className: "flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-800", children: [_jsxs("div", { className: "flex items-center space-x-2", children: [_jsx(Bot, { className: "h-6 w-6 text-indigo-600 dark:text-indigo-400" }), _jsx("h3", { className: "text-lg font-semibold text-gray-900 dark:text-white", children: "College AI Assistant" })] }), _jsx("button", { onClick: onClose, className: "rounded-full p-1 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors", children: _jsx(X, { className: "h-5 w-5 text-gray-500" }) })] }), _jsxs("div", { className: "p-4 h-96 overflow-y-auto space-y-4", children: [messages.map((message, index) => (_jsx("div", { className: `flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`, children: _jsx("div", { className: `max-w-[80%] rounded-2xl px-4 py-2 ${message.type === 'user'
                                            ? 'bg-indigo-600 text-white'
                                            : 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white'}`, children: message.content }) }, index))), isLoading && (_jsx("div", { className: "flex justify-start", children: _jsx("div", { className: "bg-gray-100 dark:bg-gray-800 rounded-2xl px-4 py-2", children: _jsx(Loader2, { className: "h-5 w-5 animate-spin text-indigo-600" }) }) }))] }), _jsx("form", { onSubmit: handleSubmit, className: "p-4 border-t border-gray-200 dark:border-gray-800", children: _jsxs("div", { className: "flex space-x-2", children: [_jsx("input", { type: "text", value: input, onChange: (e) => setInput(e.target.value), placeholder: "Ask about admissions, courses, fees...", className: "flex-1 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 px-4 py-2 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500" }), _jsx("button", { type: "submit", className: "flex items-center justify-center rounded-lg bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2", children: _jsx(Send, { className: "h-5 w-5" }) })] }) })] })] }) }));
}
