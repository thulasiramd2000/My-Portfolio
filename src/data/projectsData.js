import one from '../assets/svg/projects/one.svg'
import two from '../assets/svg/projects/two.svg'
import three from '../assets/svg/projects/three.svg'
import four from '../assets/svg/projects/four.svg'
import five from '../assets/svg/projects/five.svg'
import six from '../assets/svg/projects/six.svg'
import seven from '../assets/svg/projects/seven.svg'
import eight from '../assets/svg/projects/eight.svg'
import Netflix from '../assets/svg/projects/Netflix.svg'
import Coffee from '../assets/svg/projects/Coffee.svg'
import chatbot from '../assets/svg/projects/Chatbot.svg'

export const projectsData = [
    {
        id: 1,
        projectName: 'Web Application to analyze Stock Market Results',
        projectDesc: 'An online studying algorithm for forecasting the end-of-day price of a given stock with the assist of Long Short Term Memory (LSTM), a type of Recurrent Neural Network (RNN)',
        tags: ['JavaScript', 'CSS',  'HTML','python','React'],
        code: 'https://github.com/thulasiramd2000/Web-Application-to-Analyze-Stock-Market-Results-using-Machine-Learning',
        demo:'',
        image: seven
    },
    {
        id: 2,
        projectName: 'React-Based Netflix Clone: A Full-Stack Web Application Project',
        projectDesc: 'Developed an interactive user interface utilizing React framework to replicate the front-end of Netflix.',
        tags: ['React', 'Firebase','Javascript', 'CSS','HTML'],
        code: 'https://github.com/thulasiramd2000/React-Based-NETFLIX-Clone/tree/main',
        image: Netflix
    },
    {
        id: 3,
        projectName: ' Optimizing Inventory & Sales in Global Coffee Chains',
        projectDesc: 'To boost sales and efficiency for a global coffee chain with 1000+ stores and $400M revenue, the focus is on leveraging sales forecasts and inventory management to cut waste and enhance operations.',
        tags: ['Python','Pandas','Matplotlib','Seaborn'],
        code: 'https://github.com/thulasiramd2000/Optimizing-Inventory-and-Sales-in-Global-Coffee-Chains-Advanced-AI-Approach',
        demo: 'https://github.com/thulasiramd2000/Optimizing-Inventory-and-Sales-in-Global-Coffee-Chains-Advanced-AI-Approach/blob/main/Source%20Code.ipynb',
        image:Coffee 
    },
    {
        id: 4,
        projectName: 'SADie - A Depression Support bot',
        projectDesc: 'This project is an attempt to create a depression support bot that could help in guiding people with depression towards the correct path. SImply put, SADie uses a combination of GRU and LSTM to run the model.',
        tags: ['Python','TensorFlow', 'Matplotlib','Seaborn','NumPy'],
        code: 'https://github.com/thulasiramd2000/SADie-NLP-chatbot-master',
        demo: 'https://github.com/thulasiramd2000/SADie-NLP-chatbot-master/blob/main/nlp_LSTM%20%26%20GRU.ipynb',
        image: chatbot
    },
    
]


// Do not remove any fields.
// Leave it blank instead as shown below

/* 
{
    id: 1,
    projectName: 'Car Pooling System',
    projectDesc: '',
    tags: ['Flutter', 'React'],
    code: '',
    demo: '',
    image: ''
}, 
*/