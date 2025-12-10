export const Project1 = {
    id:"1",
    title:"Pringles",
    subTitle:"사용자 선호도 기반 제주 관광지 추천 및 일정 자동 생성 서비스",
    Summary:"사용자 선호도 가중치와 거리 계산을 기반으로 여행 일정을 자동으로 구성하는 제주 관광 추천 서비스",
    subText:[
        "사용자가 입력한 가격·별점·리뷰 가중치를 기반으로 관광지를 추천하고, 위치 기반 거리 계산을 통해 일정별로 최적의 관광지를 자동 배치해주는 제주 여행 일정 생성 서비스입니다. ",
        "여행 계획의 복잡함을 줄이고, 개인의 선호와 이동 동선을 함께 고려해 누구나 손쉽게 나만의 여행 일정을 만들 수 있도록 만든 프로젝트입니다."],

    img:"https://raw.githubusercontent.com/kzoou2/Portfolio/refs/heads/main/src/app/assets/images/Project1-1.jpg",
    info:{
        period: "2023.08 ~ 2023.10",
        member: "3명",
        skills: [
            { name: "JavaScript", img: "/icons/Javascript.svg" },
            { name: "React", img: "/icons/React.svg" },
            { name: "Bootstrap", img: "/icons/Bootstrap.svg" },
            { name: "github", img: "/icons/Github.svg" },
            { name: "Figma", img: "/icons/Figma.svg" },
        ],
    },
    links:[
        {label:"배포",href:"https://kzoou2.github.io/Pringles_Frontend/",},
        {label:"Github",href:"https://github.com/kzoou2/Project_Pringles",},
    ],
    featInfo:[
        "사용자 선호도[가격, 별점, 리뷰 개수] 를 기반으로 관광지를 점수화하고 유사 관광지 50개 추천 ",
        "사용자 위치기반으로 가까운 관광지 위주로 최적화된 일정 자동 생성",
        "카카오 맵 API 활용해 관광지 지도 표시 및 상세 정보 확인 ",
        "마이페이지에서 나의 여행 일정 과 북마크한 관광지 목록 확인",
        "다른 사용자의 여행 계획 조회 및 나만의 일정 공유",
    ],
    parts:[
        {
            title:'프로젝트 아이디어 도출 및 기획 구성',
            items:[
                "유사 서비스 벤치마킹을 통해 차별화된 기능 및 서비스 방향성 도출",
                "피그마를 활용해 팀원들과 서비스 플로우차트 설계 및 아이디어 구체화"
            ],
        },
        {
            title:'UI 디자인 총괄 및 UX 개선 협업',
            items:["전체 UI 디자인 총괄 및 화면 구성 담당",
                "사용자 피드백을 기반으로 팀원들과 UX 개선 및 디자인 수정 진행"],
        },
        {
            title:'관광지 추천 및 일정 생성 로직 구현',
            items:[
                "사용자가 선택한 날짜와 숙소 정보를 기반으로 관광지 추천 여부 결정 및 가중치 입력 UI 구현",
                "추천된 관광지와 사용자가 선택한 관광지를 기반으로 일정 자동 생성 기능 구현",
                "사용자 입력 가중치와 관광지 속성 점수를 계산해 맞춤형 추천 알고리즘 적용"],
        },
        {
            title:'관광지 상세 페이지 개발 및 데이터 연동 ',
            items:['백엔드 API를 구현하고 데이터를 연동하여 관광지 정보와 테마별 필터링 기능 제공',
                '페이지네이션 적용으로 무작위 데이터 출력 방지 및 사용자 경험 개선',
                '관광지 상세 정보 시각적 구성 및 북마크 토글, 이미지 표시, 평점/리뷰 등 UI 요소 배치 최적화'
            ],
        },
        {
            title:'Kakao Map API 연동 및 지도 시각화 구현',
            items:['관광지 위치 표시 및 지도 기반 시각적 요소 구현',
                '일정 생성 시 선택된 관광지 위치 지도에 표시하여 사용자 직관성 향상'
            ],
        }
    ],
    trouble:[
        {
            title:'데이터 무작위 출력 및 페이징 처리 문제',
            items:[
                {label:"[문제점]", text:"새로고침 시 관광지 카드의 순서가 달라지고, 한번에 많은 데이터가 로드되어 무한스크롤처럼 느껴짐"}, 
                {label:"[원인]", text:"백엔드에서 정렬 기준 없이 findAll() 호출하여 데이터가 랜덤 순서로 조회되고, 모든 데이터를 한 번에 전송함"},
                {label:"[해결]", text:"Pageable 적용으로 페이지별 데이터 전송 및 정렬기준`(id, createdAt)` 지정하고,프론트에서 currentPage와 pageSize 기반으로 API 호출하도록 개선"},
                {label:"[결과]", text:"데이터 순서 일관성 확보하고, 페이지 단위로 표시하여 페이지네이션으로 한번에 표시되는 데이터량을 제한해 UX 향상시킴"},
            ],
        }
    ],
    images:[
        {
            subject:'메인 화면',
            imgurl:'https://raw.githubusercontent.com/kzoou2/Portfolio/refs/heads/main/src/app/assets/images/Project1-1.jpg',
        },
        {
            subject:"관광지 상세",
            imgurl:"https://raw.githubusercontent.com/kzoou2/Portfolio/refs/heads/main/src/app/assets/images/Project1-2.jpg",
        },
        {
            subject:"마이페이지",
            imgurl:"https://raw.githubusercontent.com/kzoou2/Portfolio/refs/heads/main/src/app/assets/images/Project1-3.jpg",
        },
        {
            subject:"일정생성 - 관광지 선택",
            imgurl:"https://raw.githubusercontent.com/kzoou2/Portfolio/refs/heads/main/src/app/assets/images/Project1-4.jpg",
        },
        {
            subject:"일정생성 - 가중치 입력",
            imgurl:"https://raw.githubusercontent.com/kzoou2/Portfolio/refs/heads/main/src/app/assets/images/Project1-5.jpg",
        },
        {
            subject:"일정생성결과",
            imgurl:"https://raw.githubusercontent.com/kzoou2/Portfolio/refs/heads/main/src/app/assets/images/Project1-6.jpg",
            
        },
    ],
};