export const Project2 ={
    id:"2",
    title:"BeatBuddy",
    subTitle:"태그 기반 플레이리스트 공유 SNS 플랫폼",
    Summary:"태그 기반 플레이리스트와 SNS 기능을 결합한 음악 공유 플랫폼",
    subText:[
        "BeatBuddy는 음악의 'Beat'와 친구를 의미하는 'Buddy'를 결합한 이름으로, 사용자가 자신만의 플레이리스트를 만들고 다른 사용자와 공유하며 소통할 수 있는 음악 기반 SNS 플랫폼입니다.",
        "기존 음악 서비스가 감상과 추천 중심이었다면, BeatBuddy는 음악에 SNS 기능을 결합하여 사용자가 음악과 함께 감정과 순간을 기록하고 공유할 수 있도록 기획했습니다.",
        "태그 기반 플레이리스트를 통해 비슷한 취향과 감정을 가진 사용자들이 음악을 매개로 자연스럽게 연결될 수 있는 새로운 소통 경험을 제공합니다."
    ],
    img:"https://raw.githubusercontent.com/kzoou2/Portfolio/refs/heads/main/src/app/assets/images/Project2-playlist.jpg",
    info:{
        period: "2023.11 ~ 2024.02",
        member: "4명 (FE 2, BE 2)",
        skills: [
            { name: "JavaScript", img: "/icons/Javascript.svg" },
            { name: "React", img: "/icons/React.svg" },
            { name: "Bootstrap", img: "/icons/Bootstrap.svg" },
            { name: "github", img: "/icons/Github.svg" },
            { name: "Figma", img: "/icons/Figma.svg" },
        ],
    },
    links:[
        {label:"배포",href:"https://kzoou2.github.io/BB_Frontend/",},
        {label:"Github",href:"https://github.com/kzoou2/BB_Frontend",}
    ],
    featInfo:[
        "Spotify · YouTube API 기반 음악 정보를 활용한 피드 작성 및 공유",
        "태그 기반 플레이리스트 생성 및 관리 기능",
        "ReactPlayer 기반 음악 재생 Mini Player 제공",
        "WebSocket 기반 실시간 DM 채팅 기능",
        "유저·피드·플레이리스트·해시태그 통합 검색 기능",
        "프로필 페이지에서 사용자 정보 관리 및 피드 · 플레이리스트 확인"
        
    ],
    parts:[
        {
            title:'실시간 채팅 기능 구현',
            items:[
                "WebSocket(STOMP) 기반 1:1 실시간 채팅 구현",
                "채팅방 단위로 subscribe/unsubscribe를 관리하여 다른 방으로 섞이거나 중복 수신되지 않도록 처리",
                "채팅방 생성 및 재입장 시 기존 세션을 재활용하는 방식으로 연결 안정성 확보",
                "메시지 읽음 상태 처리, 연속 메시지 그룹화, 자동 스크롤 기능 구현 등 UX 중심의 채팅 인터페이스 개선",
            ],
        },
        {
            title:"JWT 기반 로그인·회원가입 기능 구현",
            items:[
                "JWT 기반 인증 흐름을 구성하고 로그인 시 Access/Refresh Token을 저장해 인증 상태 관리",
                "Refresh Token을 활용한 재발급 로직을 적용해 토큰 만료 시에도 로그인 상태 유지",
                "로그인 상태에 따라 접근 가능한 페이지와 UI를 분기 처리",
                "입력값 유효성 검사 및 에러 메시지 분기 처리로 사용자 입력 오류 대응",
            ]
        },
        {
            title:'음악 미니 플레이어 구현',
            items:[
                "Recoil을 활용해 재생 상태, 볼륨, 진행률을 전역 상태로 관리",
                "페이지 이동 시에도 재생 상태가 유지되도록 상태 관리 구조 설계",
                "ReactPlayer 기반 커스텀 플레이어 UI 및 컨트롤 로직 구현",
            ],
        },
        {
            title:'UI/UX 설계 및 개선',
            items:[
                "Figma를 활용해 사용자 흐름 기반 와이어프레임을 설계하고 이를 기준으로 페이지 구조와 컴포넌트 구성 정의",
                "UI 일관성을 고려해 인터랙션 및 레이아웃 개선",
                
            ],
        },

    ],
    trouble:[
        {
            title:'페이지 이동시 음악 플레이어 음악 끊김 현상 ',
            items:[
                {label:"[문제점]", text:"페이지 이동 시 MiniPlayer가 새로 렌더링되면서 재생 중이던 음악이 끊겼다가 이어지는 현상 발생"}, 
                {label:"[원인]", text:"MiniPlayer를 각 라우트 내부에서 렌더링해 페이지 이동 시 unmount → mount가 반복되었고, 상태는 유지되더라도 오디오 DOM이 초기화되면서 재생이 끊기는 문제 발생"},
                {label:"[해결]", text:"Layout 컴포넌트에 MiniPlayer를 고정 배치해 페이지 이동 시에도 unmount되지 않도록 구조 변경하고, 내부 콘텐츠만 교체되도록 구성"},
            ],
        },
        {
            title:'DM 채팅방 메시지 중복 수신 문제',
            items:[
                {label:"[문제점]", text:"채팅방 재입장시 동일한 메시지가 중복으로 수신되는 문제 발생"}, 
                {label:"[원인]", text:"채팅방 전환 시 기존 subscribe가 해제되지 않은 상태에서 새로운 subscribe가 실행되면서 구독이 중첩됨"},
                {label:"[해결]", text:"구독 객체를 ref로 관리하고, 채팅방 변경 시 기존 구독을 unsubscribe한 뒤 새로 subscribe하도록 구조 수정.\n useEffect cleanup에서 unsubscribe를 보장해 이전 구독이 남지 않도록 처리"},
            ],
        }
    ],
    images:[
        {
            subject:'메인 화면',
            imgurl:'https://raw.githubusercontent.com/kzoou2/Portfolio/refs/heads/main/src/app/assets/images/Project2-Home.jpg',

        },
        {
            subject:"검색",
            imgurl:"https://raw.githubusercontent.com/kzoou2/Portfolio/refs/heads/main/src/app/assets/images/Project2-search.jpg",
        },
        {
            subject:"유저 프로필",
            imgurl:"https://raw.githubusercontent.com/kzoou2/Portfolio/refs/heads/main/src/app/assets/images/Project2-userprofile.jpg",
        },
        {
            subject:'DM',
            imgurl:'https://raw.githubusercontent.com/kzoou2/Portfolio/refs/heads/main/src/app/assets/images/Project2-DM.jpg',

        },
        {
            subject:"플레이리스트",
            imgurl:"https://raw.githubusercontent.com/kzoou2/Portfolio/refs/heads/main/src/app/assets/images/Project2-playlist.jpg",
        },
        {
            subject:"플레이리스트 상세",
            imgurl:"https://raw.githubusercontent.com/kzoou2/Portfolio/refs/heads/main/src/app/assets/images/Project2-PLdetail.jpg",
        }
    ],
}