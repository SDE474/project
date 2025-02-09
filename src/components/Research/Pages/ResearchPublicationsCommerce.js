import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { BookOpen, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
const publications = [
    {
        title: "Novel Approaches in Green Synthesis: Sustainable Catalysis Methods",
        authors: "Dr. Suresh Verma, Dr. Meera Singh",
        journal: "Journal of Chemical Research (2023)",
        abstract: "This study presents innovative green synthesis methods using sustainable catalysts, demonstrating significant improvements in reaction efficiency while reducing environmental impact.",
        keywords: ["Green Chemistry", "Catalysis", "Sustainable Synthesis", "Environmental Chemistry"],
    },
    {
        title: "Advanced Materials for Next-Generation Energy Storage",
        authors: "Dr. Meera Singh, Dr. Rahul Desai",
        journal: "Chemical Science Review (2023)",
        abstract: "An investigation into novel materials for energy storage applications, focusing on improved efficiency and sustainability in battery technology.",
        keywords: ["Materials Chemistry", "Energy Storage", "Battery Technology", "Nanomaterials"],
    },
    {
        title: "Medicinal Chemistry: Novel Drug Delivery Systems",
        authors: "Dr. Rahul Desai, Dr. Suresh Verma",
        journal: "International Journal of Chemistry (2023)",
        abstract: "This research explores innovative drug delivery systems, combining organic synthesis with nanotechnology to enhance therapeutic efficacy.",
        keywords: ["Medicinal Chemistry", "Drug Delivery", "Organic Synthesis", "Nanotechnology"],
    },
    {
        "title": "Formation, development, and evaluation of flexible polymeric topical antifungal film (TAP)",
        "authors": "P. Rasale, Farahana Atturahaman",
        "journal": "International Journal of Advances in Pharmacy, Medicine, and Bioallied Sciences, Vol. 3, 2015",
        "abstract": "This research focuses on the development and evaluation of a flexible polymeric topical antifungal film, emphasizing its potential for medical applications.",
        "keywords": ["Topical antifungal film", "Polymeric film", "Formulation", "Medical applications"]
    },
];
export default function ResearchPublicationsCommerce() {
    return (_jsxs("div", { className: "min-h-screen bg-gray-50", children: [_jsx("div", { className: "bg-[#9E1B32] text-white py-16", children: _jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [_jsxs(Link, { to: "/", className: "inline-flex items-center text-white hover:text-gray-200 mb-8", children: [_jsx(ArrowLeft, { className: "h-5 w-5 mr-2" }), "Back to Home"] }), _jsx("h1", { className: "text-4xl font-serif mb-4", children: "Research Publications" }), _jsx("p", { className: "text-lg opacity-90", children: "Our contributions to chemical sciences" })] }) }), _jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12", children: _jsxs("div", { className: "bg-white rounded-xl shadow-sm p-8", children: [_jsxs("div", { className: "flex items-center mb-8", children: [_jsx(BookOpen, { className: "h-8 w-8 text-[#9E1B32] mr-3" }), _jsx("h2", { className: "text-3xl font-serif text-gray-900", children: "Recent Publications" })] }), _jsx("div", { className: "space-y-8", children: publications.map((publication, index) => (_jsxs("div", { className: "border-b border-gray-200 pb-8 last:border-b-0 last:pb-0", children: [_jsx("h3", { className: "text-xl font-medium text-gray-900 mb-2", children: publication.title }), _jsx("p", { className: "text-[#9E1B32] mb-2", children: publication.authors }), _jsx("p", { className: "text-gray-600 mb-4", children: publication.journal }), _jsx("p", { className: "text-gray-600 mb-4", children: publication.abstract }), _jsx("div", { className: "flex flex-wrap gap-2", children: publication.keywords.map((keyword, keywordIndex) => (_jsx("span", { className: "bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm", children: keyword }, keywordIndex))) })] }, index))) })] }) })] }));
}
