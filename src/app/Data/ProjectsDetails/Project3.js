export const Project3 = {
    id:"3",
    title:"포트폴리오",
    subTitle:"개인 포트폴리오 웹사이트",
    Summary:"음악 감상과 추천을 넘어 SNS 기능을 결합하여 감정과 순간을 기록 및 공유하며, 태그 기반의 개인화된 플레이리스트를 제공하는 음악 소통 플랫폼",
    subText:"Next.js와 Tailwind CSS를 활용해 제작한 반응형 개인 포트폴리오 웹사이트",
    img:"https://raw.githubusercontent.com/kzoou2/kzoou2/refs/heads/main/assets/portfolio/Project2/%EB%A9%94%EC%9D%B8%ED%94%BC%EB%93%9C%20(2).jpg",
    info:{
        period: "2025.08 ~ 진행중",
        member: "개인",
        skills: [
            { name: "JavaScript", img: "/image/JavaScript.png" },
            { name: "Nextjs", img: "/image/Nextjs.png" },
            { name: "Tailwindcss", img: "/image/Tailwindcss.png" },
            { name: "github", img: "/image/github.png" },
        ],
    },
    links:[
        {label:"배포",href:"https://leekj.vercel.app/",},
        {label:"Github",href:"https://github.com/kzoou2/Portfolio",}
    ],
    // featInfo:[
    //     "",
    // ],

    parts:[
        {
            title:'Vercel 이용하여 배포',
            items:["GitHub main 브랜치와 연동하여 자동 빌드 & 자동 배포(CI/CD) 환경 구축", "Preview Deployments를 통해 변경 사항을 실시간 확인 가능"],
        },
        {
            title:'Tailwind css 사용',
            items:["프로젝트 전체 UI에 Tailwind CSS 적용", "시스템 테마와 연동되는 다크 모드 자동 지원","반응형 레이아웃 구성 [ 375~640px / 640~768px / 768px~ ] "],
        }
    ],
    // trouble:[
    //     {
    //         title:'',
    //         items:[],
    //     }
    // ],
    images:[],
};