import React from "react";
import { GlassCard } from "./ui/glass-card";
import { motion } from "motion/react";
import { Database, Cloud, Zap, Shield, Share2, Layers } from "lucide-react";

const projects = [
  {
    title: "校园图书借阅管理系统",
    subtitle: "前后端分离架构 | Java 全栈",
    desc: "在 Java 课程实践中独立开发。该项目不仅获得了课程优异成绩，更充分展现了专业开发能力。通过采用前后端分离架构，显著优化了数据处理流程，极大提升了系统的响应速度与可靠性，完美契合校园图书管理的多样化需求。",
    tags: ["Spring Boot", "Vue.js", "MyBatis", "MySQL"],
    image: "https://images.unsplash.com/photo-1764406807567-a24faaaad034?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBsaWJyYXJ5JTIwYXJjaGl0ZWN0dXJlJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzcwNTQ0MzAyfDA&ixlib=rb-4.1.0&q=80&w=1080",
    color: "from-orange-500/20 to-red-500/20",
    features: [
        { icon: Layers, text: "前后端分离架构设计" },
        { icon: Zap, text: "高并发响应速度优化" },
        { icon: Database, text: "复杂事务与数据持久化" },
        { icon: Shield, text: "系统可靠性与安全性" }
    ]
  },
  {
    title: "家庭共享图库",
    subtitle: "微信小程序 | 云开发",
    desc: "独立开发的一款基于微信云开发（云数据库+云存储+云函数）的全栈小程序。支持游客模式、家庭成员管理及图片实时共享，实现了本地与云端数据的自动同步，为家庭用户提供温馨便捷的照片管理体验。",
    tags: ["WeChat Cloud", "TypeScript", "Vant Weapp", "NoSQL"],
    image: "https://images.unsplash.com/photo-1563030646-2957db71d197?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBwaG9uZSUyMHBob3RvJTIwZ2FsbGVyeSUyMGFwcHxlbnwxfHx8fDE3NzA1NDQzMDJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    color: "from-blue-500/20 to-cyan-500/20",
    features: [
        { icon: Cloud, text: "Serverless 云开发架构" },
        { icon: Share2, text: "多端数据自动同步" },
        { icon: Shield, text: "家庭组权限管理机制" },
        { icon: Layers, text: "Vant Weapp 组件库" }
    ]
  }
];

export const Projects = () => {
  return (
    <section className="py-32 px-4 max-w-7xl mx-auto" id="projects">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-20 space-y-4"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">精选项目案例</h2>
        <div className="h-1 w-20 bg-purple-500 rounded-full" />
      </motion.div>

      <div className="space-y-32">
        {projects.map((project, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20%" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className={`flex flex-col lg:flex-row gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
          >
            {/* Project Visual */}
            <div className="w-full lg:w-3/5 group">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl transition-transform duration-700 hover:-translate-y-2">
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.color} mix-blend-overlay z-10`} />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-20" />
                    <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-1000"
                    />
                    
                    {/* Floating Tags Overlay */}
                    <div className="absolute bottom-6 left-6 z-30 flex flex-wrap gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-y-4 group-hover:translate-y-0">
                        {project.tags.map((tag, t) => (
                            <span key={t} className="px-3 py-1.5 bg-black/60 backdrop-blur-md border border-white/10 rounded-full text-xs font-medium text-white shadow-lg">
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            </div>

            {/* Project Details */}
            <div className="w-full lg:w-2/5 space-y-8">
                <div>
                    <h3 className="text-3xl font-bold text-white mb-2">{project.title}</h3>
                    <p className="text-purple-400 font-medium tracking-wide text-sm uppercase">{project.subtitle}</p>
                </div>
                
                <p className="text-zinc-300 leading-relaxed text-lg font-light">
                    {project.desc}
                </p>

                <div className="grid grid-cols-1 gap-4">
                    {project.features.map((feat, i) => (
                        <GlassCard key={i} className="p-4 flex items-center gap-4 bg-white/5 border-white/5" hoverEffect={true}>
                            <div className="p-2 bg-white/5 rounded-lg text-white">
                                <feat.icon className="w-5 h-5" />
                            </div>
                            <span className="text-sm text-zinc-300 font-medium">{feat.text}</span>
                        </GlassCard>
                    ))}
                </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
