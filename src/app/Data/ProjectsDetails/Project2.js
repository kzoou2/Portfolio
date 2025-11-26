export const Project2 ={
    id:"2",
    title:"BeatBuddy",
    subTitle:"플레이리스트 공유 SNS 웹사이트",
    Summary:"음악 감상과 추천을 넘어 SNS 기능을 결합하여 감정과 순간을 기록 및 공유하며, 태그 기반의 개인화된 플레이리스트를 제공하는 음악 소통 플랫폼",
    subText:[
        "BeatBuddy는 음악의 beat와 친구의 buddy를 합쳐 만든 이름으로, 나만의 플레이리스트를 만들어 친구들과 공유하고 소통할수 있는 음악 기반 SNS 플랫폼입니다.",
        "기존 음악 서비스가 감상과 추천에 집중되어 있었다면, BeatBuddy는 음악에 SNS 기능을 결합해 감정과 순간을 기록하고 나눌 수 있도록 기획한 서비스입니다.",
        "태그 기반의 개인화된 플레이리스트를 통해 사용자들이 취향과 감정으로 연결되는 새로운 음악 소통의 형태를 제안합니다.",

    ],
    img:"https://raw.githubusercontent.com/kzoou2/Portfolio/refs/heads/main/src/app/assets/images/Project2-playlist.jpg",
    info:{
        period: "2024.03 ~ 2024.06",
        member: "4명 (FE 2, BE 2)",
        skills: [
            { name: "JavaScript", img: "/image/JavaScript.png" },
            { name: "React", img: "/image/React.png" },
            { name: "Bootstrap", img: "/image/Bootstrap.png" },
            { name: "github", img: "/image/github.png" },
            { name: "Figma", img: "/image/Figma.png" },
        ],
    },
    links:[
        {label:"배포",href:"https://kzoou2.github.io/BB_Frontend/",},
        {label:"Github",href:"https://github.com/kzoou2/BB_Frontend",}
    ],
    featInfo:[
        "Spotify 및 YouTube API를 활용한 음악 정보 기반 피드 작성 및 관리 기능",
        "작성한 피드의 태그를 기반으로 개인화된 플레이리스트 생성,수정,삭제 기능",
        "플레이리스트 음악 재생할 수 있는 미니 플레이어 제공",
        "WebSocket 기반 실시간 DM 채팅 기능",
        "유저·피드·플레이리스트·해시태그 통합 검색",
        "프로필 페이지에서 사용자 정보 수정, 작성한 피드·플레이리스트 확인 및 북마크 관리"
        
    ],
    parts:[
        {
            title:' 전체적인 UI/UX 설계 및 디자인 총괄',
            items:[
                "Figma를 활용해 플로우차트와 와이어프레임을 제작하여 전체 페이지 구조와 사용자 이동 흐름을 시각화",
                "프로젝트의 시각적 통일성과 사용성 개선을 위해 디자인 방향 제시",
                "색상, 간격, 인터랙션 등 세부 UI 요소를 수정해 전체적인 사용성 및 시각적 완성도 향상",
            ],
        },
        {
            title: '공통 컴포넌트 및 화면 구조 설계',
            items: [
            '버튼, 카드, 입력창 등 재사용 가능한 공통 컴포넌트 설계로 UI 일관성 확보',
            '웹 표준 및 접근성을 고려한 컴포넌트 작업으로 사용성 개선',
            ],
        },
        {
            title:'실시간 채팅 기능 구현',
            items:[
                "WebSocket을 활용한 실시간 메시지 송수신 기능 구현",
                "채팅방 생성 및 기존 방 연결 로직 설계, 메시지 송수신 상태 및 읽음 처리 로직 기획",
                '연속 메시지 그룹화, 채팅 상대 식별, 하단 스크롤 자동 이동 기능 구현으로 DM 사용 경험 개선',
            ],
        },
        {
            title:'공통으로 사용하는 로그인 유/무에 따른 화면 구성 ',
            items:["로그인 여부에 따라 Navbar 및 메인 홈 UI를 동적으로 구성",
                "로그인 시 프로필과 닉네임 표시, 비로그인 시 페이지 접근 제어 처리",
                "localStorage를 이용해 로그인 상태를 확인하고, 비로그인 사용자는 로그인 페이지로 이동되도록 작업",
                "공통 컴포넌트 구조로 재사용성 강화하여, 로그인 상태 변화 시 UI가 전역적으로 반영되도록 설계"
            ],
        },
        {
            title:'ReactPlayer활용해 음악 플레이어 기능 구현',
            items:[
                "Recoil 전역 상태 관리로 재생 상태·볼륨·진행률 등 상태 동기화",
                "페이지 이동 시 재생 상태 유지 및 끊김 최소화를 위해 progress 상태 저장 처리",
                "커스텀 ProgressBar와 볼륨 슬라이더를 구현해 사용자 경험을 향상하고, 재생 중인 곡에 따라 플레이리스트 UI에 인터랙션을 적용",
            ],
        },

    ],
    trouble:[
        {
            title:'페이지 이동시 음악 플레이어 음악 끊김 현상 ',
            items:[
                {label:"[문제점]", text:"기존에는 페이지 이동시 miniplayer가 각 페이지에서 새로 렌더링 되어 음악 재생이 끊기는 현상 발생"}, 
                {label:"[원인]", text:"MiniPlayer가 각 라우트(Route) 내부에서 개별 렌더링되었고, 상태를 유지해도 DOM이 새로 생성되면서 재생이 끊김 현상 발생"},
                {label:"[해결]", text:"Layout 컴포넌트 만들어 Navbar와 miniplayer를 모든 페이지에 공통으로 유지 되도록 배치하고, useLocation을 활용해 특정 페이지(회원가입/로그인)에서는 제외"},
            ],
        },
        {
            title:'DM 채팅방에서 메시지 중복 수신 문제',
            items:[
                {label:"[문제점]", text:"사용자가 DM 채팅방을 변경할 때 이전 채팅방 구독이 완전히 해제되지 않아, 채팅방 재입장시 동일한 메시지가 중복으로 수신되는 문제 발생"}, 
                {label:"[원인]", text:"subscribe/unsubscribe 로직에서 기존 구독 객체를 제대로 관리하지 않음.\n client.current가 null일 수 있어 구독 객체(subscription)를 저장하지 못하고 있음.\nuseEffect 의 의존성(dmRoomId, connected) 변경 시 기존 구독 취소가 올바르게 수행되지 않음."},
                {label:"[해결]", text:"구독 객체를 별도의 ref(subscriptionRef)로 저장하고, 채팅방 변경 시 이전 구독을 unsubscribe 하도록 수정.\n subscribe 함수 시작 시 client.current가 존재하는지 확인.\n useEffect cleanup 함수에서 subscriptionRef.current.unsubscribe()를 호출하여 구독을 안전하게 해제."},
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