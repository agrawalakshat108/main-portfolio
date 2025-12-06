import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Passionate Software Developer & Data Analyst
            </h3>

            <p className="text-muted-foreground">
              I'm a Computer Science student and a passionate web developer who enjoys building modern,
              responsive, and user-friendly web applications. I specialize in front-end development and have
              hands-on experience with full-stack projects using technologies like React, Node.js, Express,
              MongoDB, and Redis.
            </p>

            <p className="text-muted-foreground">
              I love creating clean, elegant solutions to real-world problems and continuously improving my
              skills by learning new tools, frameworks, and best practices. My goal is to build impactful
              digital experiences that are intuitive, performant, and visually engaging.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
                Get In Touch
              </a>

              <a
                href="/AKSHAT_AGRAWAL,IIITM_.pdf"
                download="Akshat_Agrawal_CV"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>

            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg"> Full-Stack Development</h4>
                  <p className="text-muted-foreground">
                    Building scalable, modern
                    applications using React, Node.js, Express, MongoDB, Redis, and industry-standard tools.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Data Analytics & Visualization</h4>
                  <p className="text-muted-foreground">
                    Transforming raw data into insights using Power BI, SQL, DAX, Python (Pandas, NumPy), and interactive dashboards.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">Cloud & DevOps</h4>
                  <p className="text-muted-foreground">
                    Deploying efficient, reliable applications using Docker, Render, AWS, CI/CD practices, and API-driven workflows.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
