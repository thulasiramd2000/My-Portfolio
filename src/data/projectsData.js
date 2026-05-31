import seven from '../assets/svg/projects/seven.svg'
import chatbot from '../assets/svg/projects/Chatbot.svg'
import Coffee from '../assets/svg/projects/Coffee.svg'
import Netflix from '../assets/svg/projects/Netflix.svg'
import VAE from '../assets/svg/projects/VAE.svg'
import Ecommerce from '../assets/svg/projects/Ecommerce.svg'
import InsuranceAI from '../assets/svg/projects/InsuranceAI.svg'

export const projectsData = [
    {
        id: 1,
        projectName: 'Insurance-AI Knowledge Assistant',
        projectDesc: 'RAG assistant built with LangChain, OpenAI, and Chroma with a Gradio interface, streamlining employee access to critical insurance knowledge and cutting query resolution time significantly.',
        tags: ['Python', 'LangChain', 'OpenAI', 'Chroma', 'Gradio', 'RAG'],
        code: 'https://github.com/thulasiramd2000',
        demo: '',
        image: InsuranceAI
    },
    {
        id: 2,
        projectName: 'Stock Market Predictive Analytics Web App',
        projectDesc: 'Led a team building an LSTM forecasting model on a 600MB dataset featuring 300 companies (Google, NVIDIA, IBM) achieving 77% precision. Published in IRJET (impact factor 7.8).',
        tags: ['Python', 'LSTM', 'TensorFlow', 'Pandas', 'Flask', 'JavaScript'],
        code: 'https://github.com/thulasiramd2000/Web-Application-to-Analyze-Stock-Market-Results-using-Machine-Learning',
        demo: '',
        image: seven
    },
    {
        id: 3,
        projectName: 'SADie — NLP-Based Depression Support Bot',
        projectDesc: 'A depression support chatbot using a combination of GRU and LSTM networks with NLTK preprocessing to guide users toward mental health resources.',
        tags: ['Python', 'TensorFlow', 'NLTK', 'GRU', 'LSTM', 'Seaborn'],
        code: 'https://github.com/thulasiramd2000/SADie-NLP-chatbot-master',
        demo: 'https://github.com/thulasiramd2000/SADie-NLP-chatbot-master/blob/main/nlp_LSTM%20%26%20GRU.ipynb',
        image: chatbot
    },
    {
        id: 4,
        projectName: 'Variational Autoencoder (VAE) for Image Pattern Generation',
        projectDesc: 'Designed and implemented a VAE for 1,600 images, improving model performance by 25% through computational architecture optimizations.',
        tags: ['Python', 'PyTorch', 'TensorFlow', 'CUDA'],
        code: 'https://github.com/thulasiramd2000/Pattern-Recognition-CECS-550/blob/main/HW4/HW4_Thulasiram_Duraisamy.ipynb',
        demo: '',
        image: VAE
    },
    {
        id: 5,
        projectName: 'Optimizing Inventory & Sales in Global Coffee Chains',
        projectDesc: 'AI-driven analysis boosting sales and efficiency for a global coffee chain with 1,000+ stores and $400M revenue using sales forecasting and inventory management to cut waste.',
        tags: ['Python', 'Pandas', 'Matplotlib', 'Seaborn'],
        code: 'https://github.com/thulasiramd2000/Optimizing-Inventory-and-Sales-in-Global-Coffee-Chains-Advanced-AI-Approach',
        demo: 'https://github.com/thulasiramd2000/Optimizing-Inventory-and-Sales-in-Global-Coffee-Chains-Advanced-AI-Approach/blob/main/Source%20Code.ipynb',
        image: Coffee
    },
    {
        id: 6,
        projectName: 'AI-Driven E-Commerce Food Delivery Platform',
        projectDesc: 'Full-stack AI-driven eCommerce food delivery platform with Python, Django, and React, enabling efficient order management and dynamic user interactions.',
        tags: ['React.js', 'Django', 'Django REST Framework', 'TensorFlow', 'PyTorch', 'Tailwind CSS'],
        code: 'https://github.com/thulasiramd2000/Django-backend',
        demo: '',
        image: Ecommerce
    },
    {
        id: 7,
        projectName: 'React-Based Netflix Clone',
        projectDesc: 'Developed an interactive, full-stack web application utilizing React to replicate the Netflix front-end with Firebase authentication and real-time data.',
        tags: ['React', 'Firebase', 'Javascript', 'CSS', 'HTML'],
        code: 'https://github.com/thulasiramd2000/React-Based-NETFLIX-Clone/tree/main',
        demo: '',
        image: Netflix
    },
]
