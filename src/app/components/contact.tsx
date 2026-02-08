import React from "react";
import { GlassCard } from "./ui/glass-card";
import { Send } from "lucide-react";

export const Contact = () => {
  return (
    <section className="py-32 px-4 max-w-3xl mx-auto text-center" id="contact">
      <GlassCard className="p-10 md:p-16 relative overflow-hidden" spotlight>
        <h2 className="text-4xl font-bold text-white mb-6">期待与您合作</h2>
        <p className="text-zinc-300 mb-10 text-lg max-w-xl mx-auto">
          如果您对我的技术背景感兴趣，或者有任何项目合作意向，欢迎随时联系。
        </p>
        
        <form className="space-y-6 text-left max-w-md mx-auto relative z-10">
          <div>
            <label className="block text-sm font-medium text-zinc-400 mb-2">姓名</label>
            <input 
              type="text" 
              className="w-full bg-black/20 border border-white/10 rounded-xl p-4 text-white placeholder-zinc-600 focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/50 transition-all"
              placeholder="您的称呼"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-zinc-400 mb-2">邮箱</label>
            <input 
              type="email" 
              className="w-full bg-black/20 border border-white/10 rounded-xl p-4 text-white placeholder-zinc-600 focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/50 transition-all"
              placeholder="example@email.com"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-zinc-400 mb-2">留言内容</label>
            <textarea 
              rows={4}
              className="w-full bg-black/20 border border-white/10 rounded-xl p-4 text-white placeholder-zinc-600 focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/50 transition-all resize-none"
              placeholder="请简要描述您的需求..."
            />
          </div>
          
          <button 
            type="button"
            className="w-full group relative overflow-hidden rounded-xl bg-white text-black font-bold py-4 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all duration-300"
          >
            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/50 to-transparent -translate-x-full group-hover:animate-shimmer" />
            <span className="flex items-center justify-center gap-2 relative z-10">
              发送消息 <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </button>
        </form>
      </GlassCard>
    </section>
  );
};
