
import Logo from "../../../public/Logo";

export default function HomeMain(){
    return(
      <section className="mainhome min-h-[85vh] w-[85%] mx-auto flex flex-col justify-center items-start md:items-center gap-2 md:gap-4 ">
        <div className="flex items-end gap-4 md:gap-6">

          {/* <Logo /> */}

        </div>
        <h1 className="text-center text-5xl md:text-6xl font-bold tracking-wide leading-[1.25]">
          안녕하세요, <br/> 
          프론트엔드 개발자<br/> 
          <span className="font-extrabold text-[#9BE200]">이경주</span>입니다.
        </h1>
        {/* <p className="text-5xl md:text-6xl font-bold tracking-wide">안녕하세요,</p>
        <p className="text-5xl md:text-6xl font-bold tracking-wide ">프론트엔드 개발자</p>
        <p className="text-5xl md:text-6xl font-bold tracking-wide "><span className="font-extrabold text-[#9BE200]">이경주</span>입니다.</p> */}

        <p className="text-[#9CA3AF] text-base md:text-xl text-center  break-keep mb-5 md:mb-8">
          포기하지 않고 배우며 성장하는 프론트엔드 개발자입니다.<br />
          React를 중심으로 웹을 구현하고, 함께 성장할 팀을 찾고 있습니다.
        </p>

      </section>



    )
}
