import { useRef } from "react";
import Card from "../components/Card";
import { Globe } from "../components/globe";
import CopyEmailButton from "../components/CopyEmailButton";
import { Frameworks } from "../components/Frameworks";

const About = () => {
  const grid2Container = useRef();

  return (
    <section
      className="c-space section-spacing cursor-none relative z-10"
      id="about"
    >
      <h2 className="text-heading">About Me</h2>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12 relative">

        {/* Grid 1 - Intro */}
        <div className="flex items-end grid-default-color grid-1 relative overflow-hidden py-16 px-6 lg:px-16">
          <img
            src="assets/coding-pov.png"
            className="absolute scale-[1.75] -right-[5rem] -top-[1rem] md:scale-[3] lg:scale-[2.5] pointer-events-none opacity-50"
          />

          <div className="z-10 max-w-prose">
            <p className="text-4xl font-bold text-white mb-6">
              Hi, I'm K.B. Dhanush
            </p>

            <p className="text-base text-gray-200 leading-relaxed mt-4">
              Hands-on developer passionate about building intelligent systems.
              I focus on AI agents, automation, and real-time workflows.
            </p>
            <p className="text-base text-gray-200 leading-relaxed mt-4">
              My approach: use the right mix of coding, AI tools, and no-code
              platforms to create effective solutions quickly.
            </p>
            <p className="text-base text-gray-200 leading-relaxed mt-4">
              Outside coding, I explore design, new tools, and share what I
              learn. Always curious and eager to build smarter systems.
            </p>
          </div>
          <div className="absolute inset-x-0 -bottom-4 h-1/2 sm:h-1/3 bg-gradient-to-t from-indigo pointer-events-none" />
        </div>

        {/* Grid 2 - Cards */}
        <div className="grid-default-color grid-2 relative overflow-hidden">
          <div
            ref={grid2Container}
            className="relative flex flex-col items-center justify-center w-full h-full space-y-6 z-10"
          >
            <p className="text-5xl text-gray-300 font-semibold text-center">
              Hey, I’m Dhanush <br /> Ask me what I love to build with.
            </p>
            <Card style={{ rotate: "-10deg", top: "-5%", left: "-10%" }} text="LLM Agents" containerRef={grid2Container} />
<Card style={{ rotate: "8deg", top: "-5%", left: "60%" }} text="Real-time Systems" containerRef={grid2Container} />
<Card style={{ rotate: "5deg", top: "80%", left: "-5%" }} text="AI Workflows" containerRef={grid2Container} />
<Card style={{ rotate: "10deg", top: "55%", left: "70%" }} text="LangChain" containerRef={grid2Container} />
<Card style={{ rotate: "-8deg", top: "85%", left: "75%" }} text="n8n Automation" containerRef={grid2Container} />
<Card style={{ rotate: "5deg", top: "55%", left: "-10%" }} text="LangGraph" containerRef={grid2Container} />
<Card style={{ rotate: "0deg", top: "70%", left: "40%" }} text="CrewAI" containerRef={grid2Container} />

          </div>
        </div>

        {/* Grid 3 - Time Zone */}
        <div className="grid-black-color grid-3 relative">
          <div className="z-10 w-[55%]">
            <p className="headtext">Time Zone</p>
            <p className="subtext">Available worldwide, working on cloud servers.</p>
          </div>
          <figure className="absolute left-[35%] top-[15%] pointer-events-none">
            <Globe />
          </figure>
        </div>

        {/* Grid 4 - Contact */}
        <div className="grid-special-color grid-4 relative">
          <div className="flex flex-col items-center justify-center gap-4 size-full z-10">
            <p className="text-center headtext">
              Do you want to start a project together?
            </p>
            <CopyEmailButton />
          </div>
        </div>

        {/* Grid 5 - Tech Stack */}
        <div className="grid-default-color grid-5 relative overflow-hidden">
          <div className="z-10 w-[55%]">
            <p className="headtext">Tech Stack</p>
            <p className="subtext">
              I mix code and no-code tools for efficient, scalable builds.
              Whether LangChain, n8n, or traditional stacks, I use what works
              best for real-world results.
            </p>
          </div>
          <div className="absolute inset-y-0 md:inset-y-9 w-full h-full start-[50%] md:scale-125 pointer-events-none">
            <Frameworks />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
