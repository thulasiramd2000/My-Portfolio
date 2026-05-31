import logo from "../assets/svg/experience/accenture.svg"
import logo3 from "../assets/svg/experience/wifin.svg"
import logo4 from "../assets/svg/experience/Invisible.svg"
import logo5 from "../assets/svg/experience/Kaashiv.svg"
import logo6 from "../assets/svg/experience/FractalAnalytics.svg"

export const experienceData = [
    {
        id: 1,
        jobtitle: 'AI Engineer (Frontend / GenAI Applications)',
        company: 'Fractal Analytics — Client: USAA',
        startYear: 'May 2025',
        endYear: 'Present',
        logo: logo6,
        jobDescription: [
            '• Architected and shipped a library of 18 reusable React components on USAA\'s Reveille Design System, released as an internal NPM package and adopted across 8+ dashboards; standardized UI patterns and cut net-new feature UI build time ~35%, driving 26% higher user engagement (Adobe Analytics).',
            '• Owned end-to-end delivery of data-heavy coaching dashboards (MSR / Sales Coach / Service Coach) — multipage React + Redux apps surfacing call metrics, trend charts, rankings, peer-comparison data, and transcript views — taking them from mock-driven prototypes to production with ~8% higher task-completion rates.',
            '• Drove a frontend performance pass profiled in Lighthouse and Chrome DevTools — code-splitting, memoized Redux selectors, and lazy-loaded chart bundles cut initial dashboard load from 3.6s to 1.3s and raised Lighthouse score from 61 to 93.',
            '• Reduced redundant API traffic 45% by introducing request-ready state, response caching, and include/exclude scoping; cut duplicate network requests per page load from 14 to 6 (validated in Datadog).',
            '• Hardened reliability with structured UI error logging in Kibana / ELK plus unit + regression coverage — reducing unresolved frontend errors 55% and error-triage time 50%.',
            '• Built complex stateful UI flows — pagination, sorting, multi-select filtering, URL-driven deep-linking with back/forward navigation, and resilient empty/error states; partnered with data engineers and API developers to define request/response contracts (Postman).',
            '• Engineered backend services using FastAPI on OpenShift with Snowflake — distributed caching (Hazelcast) and SQL tuning cut p95 API latency 40% (Datadog); built REST APIs with Pydantic + Swagger for transcript analytics.',
            '• Built a LangChain ReAct agent routing reviewer queries across hybrid retrieval (BM25 + dense), a coaching-taxonomy classifier, metadata APIs, and a grounded-summary generator — cutting analyst review time from 12 minutes to under 4.',
        ]
    },
    {
        id: 2,
        jobtitle: 'Senior LLM Data Trainer',
        company: 'Invisible Technologies — Project: ChatGPT, OpenAI',
        startYear: 'Jul 2024',
        endYear: 'May 2025',
        logo: logo4,
        jobDescription: [
            '• Optimized image generation DALL-E and GPT-3 models with Gen-AI Parameter Efficient Fine Tuning (PEFT) techniques like LoRA & QLoRA.',
            '• Fine-tuned GPT model in medical domain, improving accuracy by 33% through advanced database chunking techniques, embedding techniques, and leveraging Agentic RAG for enhanced retrieval and contextual understanding.',
            '• Used Proximal Policy Optimization (PPO) for reinforcement learning with prompt-engineered rubrics, rationales, and Chain-of-Thought prompting, improving task success rates by 25% as measured on the BBH benchmark.',
            '• Utilized BLEU, ROUGE, and perplexity metrics to evaluate and benchmark LLM-based solutions; leveraged advanced distributed training like FSDP for model training.',
            '• Collaborated with cross-functional teams including product managers from OpenAI and communicated with the offshore team to implement featurization improvements.',
        ]
    },
    {
        id: 3,
        jobtitle: 'AWS Machine Learning Engineer (Internship)',
        company: 'Kaashiv Infotech',
        startYear: 'May 2023',
        endYear: 'Aug 2023',
        logo: logo5,
        jobDescription: [
            '• Built a lightweight multi-stage Neural Network pipeline for edge devices (size < 100 KB) using PyTorch to detect glass breaks with a false positive rate of 0.0003.',
            '• Conducted literature reviews and implemented LLaMA 2 prototypes to test cloud-based infrastructure.',
            '• Improved Named Entity Recognition BERT model precision by 20%, supporting more accurate eCommerce data analytics on order data coordinating revenue generation for client business outcomes.',
        ]
    },
    {
        id: 4,
        jobtitle: 'Software Engineer I',
        company: 'Accenture',
        startYear: 'Jun 2021',
        endYear: 'Aug 2022',
        logo: logo,
        jobDescription: [
            '• Engineered RESTful API endpoints for an EMI payment system module, handling 800+ requests per minute, boosting system efficiency by 50% using Python, Django, and SQL.',
            '• Developed a search and export module in React.js and Django for a transaction website, optimized to handle over 10,000 simultaneous user interactions, reducing load time by 45%.',
            '• Programmed Kafka servers for smooth CMS content migration, reducing data transfer issues by 50% and cutting costs by 15%.',
        ]
    },
    {
        id: 5,
        jobtitle: 'Software Engineer (Python)',
        company: 'Wifin Technologies',
        startYear: 'May 2020',
        endYear: 'May 2021',
        logo: logo3,
        jobDescription: [
            '• Implemented the TabNet transformer model for predictive analytics, resulting in a 27% improvement in key metrics such as Accuracy, Precision, Recall, F1 Score, and AUC/ROC.',
            '• Developed and optimized a Python-based microservice for real-time geospatial data retrieval using Flask and the Google Maps API, achieving 100-meter accuracy.',
            '• Automated server management tasks using Bash and Python scripts, improving Linux Server efficiency by 50%.',
            '• Designed and deployed FastAPI-based endpoints to serve TabNet model predictions; achieved 6x throughput by quantization techniques and converting the model to ONNX format.',
        ]
    },
]
