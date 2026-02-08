import React from "react";
import { GlassCard } from "./ui/glass-card";
import { Server, Smartphone, Bug, CheckCircle2 } from "lucide-react";
import { motion } from "motion/react";

const skillCategories = [
  {
    title: "后端开发",
    subtitle: "架构与性能",
    icon: Server,
    color: "from-blue-500 to-indigo-600",
    desc: "具备扎实的面向对象编程基础，能够独立完成从数据库设计到API开发的全流程。",
    skills: [
      "熟练掌握 Java, 熟练 Python",
      "精通 Spring Boot 独立搭建与部署",
      "熟练使用 MyBatis/MyBatis-Plus",
      "MySQL 索引优化与事务处理",
      "熟悉 Redis 缓存设计与数据结构"
    ]
  },
  {
    title: "前端与移动端",
    subtitle: "交互与体验",
    icon: Smartphone,
    color: "from-emerald-500 to-teal-600",
    desc: "关注用户体验，能够开发响应式网页与跨平台小程序。",
    skills: [
      "熟悉 Android 原生开发 (布局/组件/网络)",
      "熟悉 微信小程序 开发流程与框架",
      "掌握 Vue.js 及响应式页面开发",
      "HTML5 / CSS3 / ES6+ 基础扎实"
    ]
  },
  {
    title: "测试与质量",
    subtitle: "稳定与保障",
    icon: Bug,
    color: "from-rose-500 to-pink-600",
    desc: "坚持质量优先，通过自动化测试保障代码的健壮性与可维护性。",
    skills: [
      "掌握 Python 与 Pytest 自动化测试框架",
      "熟悉 Allure 测试报告生成",
      "编写高质量测试用例",
      "全流程功能测试能力"
    ]
  }
];

export const Skills = () => {
  return (
    <section className="py-32 px-4 max-w-7xl mx-auto relative z-10" id="skills">
      <div className="text-center mb-20">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-white mb-6"
        >
          技术栈 & 专业技能
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-zinc-400 max-w-2xl mx-auto text-lg"
        >
          从后端高并发架构到前端细腻交互，再到严苛的质量保障，我构建的是全方位的技术护城河。
        </motion.p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {skillCategories.map((category, idx) => (
          <GlassCard 
            key={idx} 
            className="flex flex-col h-full p-0 group"
          >
            {/* Header with Gradient */}
            <div className={`p-8 bg-gradient-to-br ${category.color} relative overflow-hidden`}>
              <div className="absolute top-0 right-0 p-8 opacity-10 transform rotate-12 scale-150 transition-transform duration-700 group-hover:scale-125 group-hover:rotate-6">
                <category.icon className="w-32 h-32 text-white" />
              </div>
              <div className="relative z-10">
                <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center mb-6 shadow-lg border border-white/30">
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-1">{category.title}</h3>
                <p className="text-white/80 text-sm font-medium tracking-wide uppercase">{category.subtitle}</p>
              </div>
            </div>
            
            {/* Content */}
            <div className="p-8 flex flex-col flex-grow">
              <p className="text-zinc-400 text-sm leading-relaxed mb-6 border-b border-white/5 pb-6">
                {category.desc}
              </p>
              
              <ul className="space-y-4 flex-grow">
                {category.skills.map((skill, sIdx) => (
                  <li key={sIdx} className="flex items-start gap-3 text-zinc-300 group/item">
                    <CheckCircle2 className={`w-5 h-5 shrink-0 text-zinc-500 group-hover/item:text-white transition-colors duration-300`} />
                    <span className="text-sm font-light group-hover/item:text-white transition-colors duration-300">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          </GlassCard>
        ))}
      </div>
    </section>
  );
};
