  import React from "react"
  import { Card } from "@/components/ui/card"
  import CommitBox from "@/components/CommitBox"
  import { Cloud, renderSimpleIcon } from "react-icon-cloud"
  import { 
    siJavascript, siPython, siReact, siNodedotjs, siTypescript, 
    siHtml5, siCss3, siGit, siIntellijidea, 
    siPycharm, siWebstorm, siDocker
  } from "simple-icons/icons"

  const Skills = () => {
    const generateCommitData = () => {
      const data = []
      const today = new Date()
      for (let i = 0; i < 52; i++) {
        const weekData = []
        for (let j = 0; j < 7; j++) {
          const date = new Date(today)
          date.setDate(today.getDate() - (i * 7 + (6 - j)))
          weekData.push({ count: Math.floor(Math.random() * 20), date })
        }
        data.unshift(weekData)
      }
      return data
    }

    const commitData = generateCommitData()

    const icons = [
      siJavascript, siPython, siReact, siNodedotjs, siTypescript, 
      siHtml5, siCss3, siGit, siIntellijidea, 
      siPycharm, siWebstorm, siDocker
    ].map((icon) => renderSimpleIcon({
      icon,
      size: 42,
      aProps: {
        onClick: (e) => e.preventDefault()
      }
    }))

    return (
      <div className="min-h-screen bg-background p-4 md:p-6 lg:p-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Left side: Title and Commit Box */}
            <div className="w-full md:w-1/2 flex flex-col gap-4 justify-center">
              <div className="mb-8">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
            Skills 
          </h2>
          <p className="text-lg text-muted-foreground ">
          I am proficient in both frontend and backend development, with expertise in React.js, Node.js, Flutter, Java, Spring Boot, and ASP.NET. I have experience working with databases like MySQL, PostgreSQL, MongoDB, and SQL Server. Additionally, I'm skilled in HTML, CSS, JavaScript, Laravel, Bootstrap, and TailwindCSS for building responsive and scalable web applications.
          </p>
              </div>
              <Card className="rounded-xl border text-card-foreground shadow p-6 bg-card/50 backdrop-blur-xl border-border h-52"> 
                <div className="overflow-x-auto">
                  <div className="inline-flex gap-1" style={{ maxWidth: "100%" }}>
                    {commitData.map((week, weekIndex) => (
                      <div key={weekIndex} className="flex flex-col gap-1">
                        {week.map((day, dayIndex) => (
                          <CommitBox
                            key={dayIndex}
                            count={day.count}
                            date={day.date}
                          />
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="mt-4 flex justify-between items-center text-sm text-muted-foreground">
                  <div>
                    {commitData[0][0].date.toDateString().slice(4)} -{" "}
                    {commitData[commitData.length - 1][6].date
                      .toDateString()
                      .slice(4)}
                  </div>
                  <div className="flex items-center gap-2">
                    <span>Less</span>
                    <div className="flex gap-1">
                      <div className="w-3 h-3 bg-gray-800 rounded-sm"></div>
                      <div className="w-3 h-3 bg-green-800 rounded-sm"></div>
                      <div className="w-3 h-3 bg-green-700 rounded-sm"></div>
                      <div className="w-3 h-3 bg-green-600 rounded-sm"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-sm"></div>
                    </div>
                    <span>More</span>
                  </div>
                </div>
              </Card>
            </div>

            {/* Right side: Icon Cloud */}
            <div className="w-full md:w-1/2 flex flex-col items-center justify-center">
              <Cloud
                options={{
                  clickToFront: 500,
                  depth: 1,
                  imageScale: 2,
                  initial: [0.1, -0.1],
                  outlineColour: "#0000",
                  reverse: true,
                  tooltip: "native",
                  tooltipDelay: 0,
                  wheelZoom: false
                }}
              >
                {icons}
              </Cloud>
            </div>
          </div>
        </div>
      </div>
    )
  }

  export default Skills
