import { FaGithub } from 'react-icons/fa';
import { MdOutlinePlayCircleOutline } from 'react-icons/md';

export default function Projects(){
    const projects = [
        {
            id:2,
            title: 'BeatBuddy',
            period: '2023/11/01',
            type: ['팀', ''],
            description: ['플레이리스트 공유 SNS 웹사이트'],
            stack:['JavaScript','React','Bootstrap',''],
            readme:'',
            img: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
            github:'https://github.com/kzoou2/BB_Frontend',
            url:'https://kzoou2.github.io/BB_Frontend/',
        },
        {
            id:1,
            title: 'Pringles',
            period: '2023/09/24',
            type: '',
            description: ['제주 여행일정 추천 웹사이트'],
            stack:['JavaScript','React','Bootstrap',''],
            readme:'',
            img: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
            github:'https://github.com/kzoou2/Project_Pringles',
            url:'https://kzoou2.github.io/Pringles_Frontend/',
        },
        {
            id:3,
            title: 'Portfolio',
            period: '2025/04/24',
            type: '',
            description: ['개인 포트폴리오'],
            stack:['JavaScript','Next.js','Tailwind CSS'],
            readme:'',
            img:'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
            github:'https://github.com/kzoou2/portfolio',
            url:'',
        }
    ]
    return(
        <section id="projects" className='w-full'>
            <div>
                <h2 className="section-eyebrow">프로젝트 상세</h2>
                <p className="section-title">주요 프로젝트의 세부 사항을 확인해보세요</p>

                <div className='mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-3 '>
                    {projects.map((project, id) =>(
                        <div key={project.id} className='relative group overflow-hidden p-8 rounded-xl bg-white border border-gray-200 dark:border-gray-800 dark:bg-gray-900'>
                            <div aria-hidden='true' className="inset-0 absolute aspect-video border rounded-full -translate-y-1/2 group-hover:-translate-y-1/4 duration-300 bg-gradient-to-b from-blue-500 to-white dark:from-white dark:to-white blur-2xl opacity-25 dark:opacity-5 dark:group-hover:opacity-10"></div>

                            <div className='relative'>
                                <div className='mb-4'>
                                    <img src={project.img} alt={project.title} className="relative mb-2.5 md:mb-4 w-full h-36 md:h-40 rounded-md overflow-hidden"/>
                                </div>

                                <h3 className="text-xl font-bold mb-1"> {project.title}</h3>
                                <div className='flex space-x-2 mb-4'>
                                    {/* {} */}
                                </div>
                                
                                <div className='text-gray-600 mb-6 space-y-2'>
                                    {project.description}
                                </div>

                                <div className="flex gap-3 -mb-8 py-4 border-t border-gray-200 dark:border-gray-800">
                                    <a href={`/project/${project.id}` || '#'} key={project.id} className="no-underline group rounded-xl disabled:border *:select-none [&>*:not(.sr-only)]:relative *:disabled:opacity-20 disabled:text-gray-950 disabled:border-gray-200 disabled:bg-gray-100 dark:disabled:border-gray-800/50 disabled:dark:bg-gray-900 dark:*:disabled:!text-white text-gray-950 bg-gray-100 hover:bg-gray-200/75 active:bg-gray-100 dark:text-white dark:bg-gray-500/10 dark:hover:bg-gray-500/15 dark:active:bg-gray-500/10 flex gap-1.5 items-center text-sm h-8 px-3.5 justify-center">
                                        <span>자세히 보기</span>
                                        
                                    </a>

                                    <a href={project.github} target='_blank' rel="noopener noreferrer" className="group flex items-center rounded-xl disabled:border *:select-none [&>*:not(.sr-only)]:relative *:disabled:opacity-20 disabled:text-gray-950 disabled:border-gray-200 disabled:bg-gray-100 dark:disabled:border-gray-800/50 disabled:dark:bg-gray-900 dark:*:disabled:!text-white text-gray-950 bg-gray-100 hover:bg-gray-200/75 active:bg-gray-100 dark:text-white dark:bg-gray-500/10 dark:hover:bg-gray-500/15 dark:active:bg-gray-500/10 size-8 justify-center">
                                        <span className="sr-only">Source Code</span>
                                        <FaGithub className="size-5"/>
                                    </a>
                                    
                                    <a href={project.url} target='_blank' rel="noopener noreferrer" className="group flex items-center rounded-xl disabled:border *:select-none [&>*:not(.sr-only)]:relative *:disabled:opacity-20 disabled:text-gray-950 disabled:border-gray-200 disabled:bg-gray-100 dark:disabled:border-gray-800/50 disabled:dark:bg-gray-900 dark:*:disabled:!text-white text-gray-950 bg-gray-100 hover:bg-gray-200/75 active:bg-gray-100 dark:text-white dark:bg-gray-500/10 dark:hover:bg-gray-500/15 dark:active:bg-gray-500/10 size-8 justify-center">
                                        <span className="sr-only">Source Code</span>
                                        <MdOutlinePlayCircleOutline className="size-5"/>
                                    </a>
                                
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

