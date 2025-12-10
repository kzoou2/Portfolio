export const Project3 = {
    id:"3",
    title:"포트폴리오",
    subTitle:"Next.js 기반으로 제작한 반응형 개인 포트폴리오 웹사이트",
    Summary:"Next.js와 Tailwind CSS를 구현한 반응형 개인 포트폴리오 웹사이트",
    subText:"Next.js App Router와 컴포넌트 모듈화를 활용해 구조적으로 설계했으며, Tailwind CSS 기반의 반응형 UI로 다양한 디바이스에서 자연스러운 사용자 경험을 제공하도록 구현했습니다.",
    img:"https://raw.githubusercontent.com/kzoou2/kzoou2/refs/heads/main/assets/portfolio/Project2/%EB%A9%94%EC%9D%B8%ED%94%BC%EB%93%9C%20(2).jpg",
    info:{
        period: "2025.08 ~ 진행중",
        member: "개인",
        skills: [
            { name: "JavaScript", img: "/icons/Javascript.svg" },
            { name: "Next.js", img: "/icons/Nextjs.svg" },
            { name: "Tailwind CSS", img: "/icons/Tailwindcss.svg"},
            { name: "Vercel", img: "/icons/Vercel.svg" },
            { name: "github", img: "/icons/Github.svg" },
        ],
    },
    links:[
        {label:"배포",href:"https://leekj.vercel.app/",},
        {label:"Github",href:"https://github.com/kzoou2/Portfolio",}
    ],

    parts:[
        {
            title: "Next.js App Router 기반의 페이지 구조 설계",
            items: [
                "정적 페이지(SSG) 렌더링을 구현하여 초기 로딩 성능 최적화",
                "Intercepted Routes 기능을 활용해 고유 URL을 가진 모달 페이지 구현",
            ],
        },
        {
            title: "컴포넌트 구조 설계 및 재사용성 강화",
            items: [
                "페이지 단위를 `_sections`로 모듈화하여 구조적 설계 및 확장 용이성 확보",
                "공통 UI를 `_components`로 분리하여 재사용성과 유지보수성 강화",
            ],
        },
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