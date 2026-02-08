import React from "react";
import { motion } from "motion/react";
import { Github, Mail, Code2 } from "lucide-react";
import { GlassCard } from "./ui/glass-card";

export const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center relative px-4 pt-20 overflow-hidden">
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        <div className="space-y-8">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.1, delayChildren: 0.2 },
              },
            }}
          >
            <motion.div
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              className="inline-flex items-center gap-2 px-3 py-1 mb-6 border border-purple-500/30 rounded-full bg-purple-500/10 text-purple-300 text-sm font-medium tracking-wide"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
              </span>
              软件技术专业 | 全栈探索者
            </motion.div>

            <motion.h1
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              className="text-5xl md:text-7xl font-bold text-white tracking-tight mb-6 leading-[1.1]"
            >
              代码构建 <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400">
                数字艺术体验
              </span>
            </motion.h1>

            <motion.p
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              className="text-lg text-zinc-400 max-w-lg leading-relaxed font-light"
            >
              精通 Java 后端架构，擅长现代前端交互，同时也注重代码质量与自动化测试。
              致力于将严谨的逻辑与极致的视觉美感完美融合。
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex gap-4"
          >
            {[Github, Code2, Mail].map((Icon, index) => (
              <GlassCard
                key={index}
                className="p-3 rounded-full hover:bg-white/10 transition-colors cursor-pointer group"
                spotlight={false}
              >
                <Icon className="text-zinc-300 w-5 h-5 group-hover:text-white group-hover:scale-110 transition-all duration-300" />
              </GlassCard>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
          className="relative hidden lg:block h-[600px]"
        >
          <div className="absolute top-0 right-0 w-full h-full">
            <motion.div
              animate={{ y: [0, -20, 0], rotate: [0, 2, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-0 right-10 z-0"
            >
              <GlassCard className="w-80 h-96 border-white/5 bg-white/5" spotlight={false}>
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-blue-600/20" />
              </GlassCard>
            </motion.div>

            <motion.div
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute top-20 right-32 z-10"
            >
              <GlassCard className="w-80 h-auto p-4 border-white/20 bg-black/40 shadow-2xl backdrop-blur-2xl">
                <div className="flex items-center gap-2 mb-4 border-b border-white/10 pb-2">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                  </div>
                  <span className="text-[10px] text-zinc-500 font-mono ml-auto">App.java</span>
                </div>
                <div className="space-y-2 font-mono text-xs">
                  <div className="flex">
                    <span className="text-purple-400 w-8">01</span>
                    <span className="text-pink-400">class</span>{" "}
                    <span className="text-yellow-200 pl-2">Developer</span>{" "}
                    <span className="text-zinc-400">{"{"}</span>
                  </div>
                  <div className="flex">
                    <span className="text-zinc-600 w-8">02</span>
                    <span className="text-zinc-400 pl-4">skills:</span>{" "}
                    <span className="text-green-400 pl-2">["Java", "Vue", "Python"]</span>;
                  </div>
                  <div className="flex">
                    <span className="text-zinc-600 w-8">03</span>
                    <span className="text-blue-400 pl-4">buildFuture</span>
                    <span className="text-zinc-300">()</span>;
                  </div>
                  <div className="flex">
                    <span className="text-zinc-600 w-8">04</span>
                    <span className="text-zinc-400">{"}"}</span>
                  </div>
                </div>
              </GlassCard>
            </motion.div>

            <motion.div
              animate={{ x: [0, 10, 0], y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-20 right-10 z-20"
            >
              <GlassCard className="px-4 py-3 rounded-xl border-white/20 bg-zinc-900/80 flex items-center gap-3">
                <div className="bg-green-500/20 p-2 rounded-lg">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                </div>
                <div>
                  <div className="text-xs text-zinc-400">Status</div>
                  <div className="text-sm font-bold text-white">Open to Work</div>
                </div>
              </GlassCard>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
