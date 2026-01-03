"use client";

import { useState, useRef, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { 
  Send, 
  Lightbulb, 
  Heart, 
  BookOpen,
  Sparkles,
  ThumbsUp
} from "lucide-react";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
  suggestions?: string[];
}

export default function ParentCoach() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      role: "assistant",
      content: "您好！我是您的家庭心理教练。作为父母，面对青少年的成长问题，产生焦虑是很正常的。我在这里倾听您的担忧，帮助您找到更好的应对方式。请问今天有什么想和我聊的吗？",
      timestamp: new Date(),
      suggestions: [
        "孩子最近学习压力很大",
        "不知道如何和孩子沟通",
        "担心孩子的情绪问题",
        "想了解青春期心理特点"
      ]
    }
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: input,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: "我理解您的关切。青少年时期确实是一个充满变化和挑战的阶段。让我们一起探讨一下这个问题，找到适合您家庭的解决方案。\n\n首先，您能具体描述一下目前遇到的主要困扰是什么吗？这样我可以更有针对性地提供建议。",
        timestamp: new Date(),
        suggestions: [
          "孩子不愿意和我交流",
          "经常因为小事发脾气",
          "学习成绩下降了",
          "担心手机使用过度"
        ]
      };
      setMessages(prev => [...prev, aiMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const handleSuggestionClick = (suggestion: string) => {
    setInput(suggestion);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
      {/* Chat Area */}
      <div className="lg:col-span-2">
        <Card className="h-[calc(100vh-180px)] sm:h-[calc(100vh-200px)]">
          <CardHeader className="border-b py-3 sm:py-4 px-3 sm:px-6">
            <div className="flex items-center justify-between gap-2">
              <div className="flex items-center gap-2 sm:gap-3 min-w-0">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Heart className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                </div>
                <div className="min-w-0">
                  <CardTitle className="text-sm sm:text-base truncate">父母心理教练</CardTitle>
                  <CardDescription className="text-xs hidden sm:block">专业、理解、支持</CardDescription>
                </div>
              </div>
              <Badge variant="outline" className="gap-1.5 text-xs flex-shrink-0">
                <div className="w-2 h-2 rounded-full bg-healing-green animate-pulse" />
                <span className="hidden sm:inline">在线</span>
              </Badge>
            </div>
          </CardHeader>
          
          <CardContent className="p-0 flex flex-col h-[calc(100%-65px)] sm:h-[calc(100%-80px)]">
            {/* Messages */}
            <ScrollArea className="flex-1 p-3 sm:p-4" ref={scrollRef}>
              <div className="space-y-4">
                {messages.map((message) => (
                  <div key={message.id}>
                    <div className={`flex gap-2 sm:gap-3 ${message.role === "user" ? "justify-end" : "justify-start"}`}>
                      {message.role === "assistant" && (
                        <Avatar className="w-7 h-7 sm:w-8 sm:h-8 flex-shrink-0">
                          <AvatarFallback className="bg-primary/10 text-primary text-xs">AI</AvatarFallback>
                        </Avatar>
                      )}
                      
                      <div className={`flex flex-col ${message.role === "user" ? "items-end" : "items-start"} max-w-[85%] sm:max-w-[80%]`}>
                        <div className={`${message.role === "user" ? "chat-bubble-user" : "chat-bubble-ai"} text-xs sm:text-sm`}>
                          <p className="whitespace-pre-wrap">{message.content}</p>
                        </div>
                        <span className="text-[10px] sm:text-xs text-muted-foreground mt-1">
                          {message.timestamp.toLocaleTimeString('zh-CN', { hour: '2-digit', minute: '2-digit' })}
                        </span>
                      </div>
                      
                      {message.role === "user" && (
                        <Avatar className="w-7 h-7 sm:w-8 sm:h-8 flex-shrink-0">
                          <AvatarFallback className="bg-secondary/10 text-secondary text-xs">我</AvatarFallback>
                        </Avatar>
                      )}
                    </div>

                    {/* Suggestions */}
                    {message.suggestions && message.role === "assistant" && (
                      <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-2 sm:mt-3 ml-9 sm:ml-11">
                        {message.suggestions.map((suggestion, idx) => (
                          <Button
                            key={idx}
                            variant="outline"
                            size="sm"
                            className="text-[11px] sm:text-xs h-auto py-1.5 px-2 sm:px-3"
                            onClick={() => handleSuggestionClick(suggestion)}
                          >
                            {suggestion}
                          </Button>
                        ))}
                      </div>
                    )}
                  </div>
                ))}

                {isTyping && (
                  <div className="flex gap-3">
                    <Avatar className="w-8 h-8">
                      <AvatarFallback className="bg-primary/10 text-primary">AI</AvatarFallback>
                    </Avatar>
                    <div className="chat-bubble-ai">
                      <div className="flex gap-1">
                        <div className="w-2 h-2 rounded-full bg-primary/50 animate-bounce" style={{ animationDelay: "0ms" }} />
                        <div className="w-2 h-2 rounded-full bg-primary/50 animate-bounce" style={{ animationDelay: "150ms" }} />
                        <div className="w-2 h-2 rounded-full bg-primary/50 animate-bounce" style={{ animationDelay: "300ms" }} />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </ScrollArea>

            {/* Input Area */}
            <div className="border-t p-2 sm:p-4">
              <div className="flex gap-2">
                <Input
                  placeholder="输入您的问题..."
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && handleSend()}
                  className="flex-1 text-sm"
                />
                <Button onClick={handleSend} disabled={!input.trim()} size="sm" className="sm:h-10 px-3 sm:px-4">
                  <Send className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Sidebar - Hidden on mobile, shown on desktop */}
      <div className="space-y-4 hidden lg:block">
        {/* Quick Tips */}
        <Card>
          <CardHeader>
            <CardTitle className="text-base flex items-center gap-2">
              <Lightbulb className="w-4 h-4 text-warm-orange" />
              实用建议
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {[
              { icon: Heart, title: "保持耐心", desc: "给孩子时间成长" },
              { icon: Sparkles, title: "积极倾听", desc: "真正听懂孩子的话" },
              { icon: ThumbsUp, title: "正面鼓励", desc: "关注进步而非完美" }
            ].map((tip, idx) => (
              <div key={idx} className="flex gap-3 p-2 rounded-lg hover:bg-muted/50 transition-colors">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <tip.icon className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium">{tip.title}</p>
                  <p className="text-xs text-muted-foreground">{tip.desc}</p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Resources */}
        <Card>
          <CardHeader>
            <CardTitle className="text-base flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-secondary" />
              推荐资源
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            {[
              "青春期心理发展指南",
              "有效沟通的5个技巧",
              "处理冲突的智慧方法"
            ].map((resource, idx) => (
              <Button
                key={idx}
                variant="ghost"
                className="w-full justify-start text-sm h-auto py-2"
              >
                {resource}
              </Button>
            ))}
          </CardContent>
        </Card>

        {/* Today's Focus */}
        <Card className="bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20">
          <CardHeader>
            <CardTitle className="text-base">今日焦点</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              "理解是沟通的第一步。今天尝试先听孩子说完，再表达您的想法。"
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}