import betmate from '../projects/Betmate.png';
import RTB from '../projects/RaiseTheBarMic.svg';
import DOC from '../projects/DOC2.png';
import ZT from '../projects/ZodiacTime.png';
import SLAR from '../projects/SLAR.png'
import wifi from '../projects/wifi.png'
import stampd from '../projects/stampd_logo.png'
import operators from '../projects/operators_logo.png'

export const projectCards = [
    {
        'name': 'Operators',
        'date': 'On Going',
        'company': 'Independent',
        'icon': operators,
        'color': 'grey',
        'tools': 'React Native',
        'info': 'While initially having this idea in high school, Operators is an engaging game that puts your puzzle-solving and math skills to the test. Strategically combine operations to reach subsequent numbers with limited steps.',
        'width': '22em',
        'height': '14em',
        'overlay': true,
        'link': 'https://apps.apple.com/ag/app/operators/id1636821697?platform=iphone'
    },
    {
        'name': 'Stampd',
        'date': 'Winter 2023',
        'company': 'CS98',
        'icon': stampd,
        'color': '#DC5C41',
        'tools': 'React Native - AWS Lambda - SQL',
        'info': 'Designed to provide users with more authentic and trustworthy recommendations for media such as movies, books, and songs, Stampd is an app that encourages users to share and discover recommendations from their friends and trusted network through a social media platform. My team and I were given an academic award for this project!',
        'width': '22em',
        'height': '14em',
        'link': 'https://medium.com/dartmouth-cs98/ditching-influencers-ads-anonymous-reviews-and-ai-for-more-authentic-recommendations-b12a603713a8'
    },
    {
        'name': 'BetMate',
        'date': 'Spring 2021',
        'company': 'DALI Lab',
        'icon': betmate,
        'color': 'lightgreen',
        'tools': 'React - Netlify - AWS Lambda',
        'info': 'Place wagers on chess matches! Spectate and bet on individual moves or match outcomes within a chess match. Games include active games in tournaments for betting against grandmasters to archived chess games for ongoing betting fun!',
        'width': '29em',
        'height': '14em',
        'overlay': true,
        'link': 'https://betmate-dev.netlify.app/'
    },
    {
        'name': 'RTB',
        'real-name': 'Raise The Bar',
        'date': 'Spring 2021',
        'company': 'Hack Dartmouth 2021',
        'icon': RTB,
        'color': 'black',
        'tools': 'React - Firebase',
        'info': 'Measure your proficiency at rapping using Google’s speech-to-text API. Given a beat and lyrics, rap as clearly as you can to receive a score derived from our proficiency algorithm. Compete with your friends by using the built in leaderboard!',
        'width': '16em',
        'height': '14em',
        'link': 'https://github.com/bentaro89/RaiseTheBar'
    },
    {
        'name': 'SLSA',
        'real-name': 'Sign Language Space Adventure',
        'date': 'Summer 2020',
        'company': 'DALI Lab',
        'icon': SLAR,
        'color': 'lightpink',
        'tools': 'C# - Unity - Maya',
        'info': 'Learn American Sign Language (ASL)  through a virtual reality program with Oculus Quest’s hand-tracking system. Includes a learning module, glossary, and various game modes to practice sign language.',
        'width': '22em',
        'height': '13em',
        'overlay': true,
        'link': 'https://www.notion.so/CASE-STUDY-SIGN-LANGUAGE-SPACE-ADVENTURE-f6d329c3ea83423299dadc8193c9ea9d'
    },
    {
        'name': 'DOC',
        'real-name': 'Dartmouth Outing Club',
        'date': 'Spring 2020',
        'company': 'DALI Lab',
        'icon': DOC,
        'color': 'Dartmouth Outing Club',
        'tools': 'React - MongoDB - Netlify',
        'info': 'Browse, create, and sign up for Dartmouth Outing Club trip. This website allows members of the Dartmouth Outing Club to more easily access and organize outdoor trips and the members who sign up.',
        'width': '22em',
        'height': '13em',
        'overlay': true,
        'link': 'https://doc.dartmouth.edu/'
    },
    // {
    //     'name': 'Zodiac Time',
    //     'date': 'Spring 2020',
    //     'company': 'Independent',
    //     'icon': ZT,
    //     'color': 'lightblue',
    //     'tools': 'Unity - C# - Swift',
    //     'info': 'Test your reaction time with this fast-paced IOS tapping game. From the lazy pig to the quick-witted rat, tap quickly to conquer all the zodiacs.',
    //     'width': '14em',
    //     'height': '14em'
    // },
    // {
    //     'name': 'Dartmouth Wifi',
    //     'date': 'Winter 2020',
    //     'company': 'DALI Lab',
    //     'icon': wifi,
    //     'color': 'lightgrey',
    //     'tools':  'React - MongoDB',
    //     'info': 'Report your wifi issues around the Dartmouth campus to improve the multi-million campus-wide upgrade. This allows Dartmouth ITC to view overloaded access points and focus on areas that needs the most upgrading.',
    //     'width': '29em',
    //     'height': '14em',
    //     'overlay': true
    // }
]