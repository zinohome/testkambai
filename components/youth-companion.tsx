"use client";

import { useState, useRef, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Send, 
  Smile, 
  Sun,
  Moon,
  Cloud,
  Star,
  Heart
} from "lucide-react";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
  mood?: "happy" | "sad" | "anxious" | "calm";
}

export default function YouthCompanion() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      role: "assistant",
      content: "嗨！很高兴见到你😊 我是你的成长伙伴，这里是一个安全、温暖的聊天空间。无论你想分享什么，开心的、烦恼的，或只是想聊聊天，我都在这里倾听。\n\n今天感觉怎么样？",
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [currentMood, setCurrentMood] = useState<string | null>(null);
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
        content: "我听到你了。谢谢你愿意和我分享。每个人都会有各种各样的情绪，这很正常。\n\n你想更详细地说说吗？或者我们可以一起想想怎么让你感觉好一点？",
        timestamp: new Date()
      };
      setMessages(prev => [...prev, aiMessage]);
      setIsTyping(false);
    }, 1200);
  };

  const moods = [
    { icon: Sun, label: "开心", value: "happy", color: "text-warm-orange" },
    { icon: Cloud, label: "平静", value: "calm", color: "text-serene-cyan" },
    { icon: Moon, label: "疲惫", value: "tired", color: "text-soft-purple" },
    { icon: Star, label: "焦虑", value: "anxious", color: "text-secondary" }
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
      {/* Chat Area */}
      <div className="lg:col-span-2">
        <Card className="h-[calc(100vh-180px)] sm:h-[calc(100vh-200px)]">
          <CardHeader className="border-b py-3 sm:py-4 px-3 sm:px-6">
            <div className="flex items-center justify-between gap-2">
              <div className="flex items-center gap-2 sm:gap-3 min-w-0">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-honey-500 to-primary-600 flex items-center justify-center flex-shrink-0">
                  <Smile className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                </div>
                <div className="min-w-0">
                  <CardTitle className="text-sm sm:text-base truncate">心灵伙伴</CardTitle>
                  <CardDescription className="text-xs hidden sm:block">你的倾诉和成长空间</CardDescription>
                </div>
              </div>
              <Badge variant="outline" className="gap-1.5 text-xs flex-shrink-0 border-primary-200 bg-primary-50">
                <Heart className="w-3 h-3 text-primary-600 fill-primary-600" />
                <span className="hidden sm:inline">陪伴中</span>
              </Badge>
            </div>
          </CardHeader>
          
          <CardContent className="p-0 flex flex-col h-[calc(100%-65px)] sm:h-[calc(100%-80px)]">
            {/* Messages */}
            <ScrollArea className="flex-1 p-3 sm:p-4" ref={scrollRef}>
              <div className="space-y-4">
                {messages.map((message) => (
                  <div key={message.id} className={`flex gap-2 sm:gap-3 ${message.role === "user" ? "justify-end" : "justify-start"}`}>
                    {message.role === "assistant" && (
                      <Avatar className="w-7 h-7 sm:w-8 sm:h-8 flex-shrink-0">
                        <AvatarFallback className="bg-gradient-to-br from-honey-50 to-primary-50 text-honey-600 text-xs">🌟</AvatarFallback>
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
                        <AvatarFallback className="bg-primary-50 text-primary-700 text-xs">你</AvatarFallback>
                      </Avatar>
                    )}
                  </div>
                ))}

                {isTyping && (
                  <div className="flex gap-3">
                    <Avatar className="w-8 h-8">
                      <AvatarFallback className="bg-gradient-to-br from-secondary/20 to-healing-green/20 text-secondary">🌟</AvatarFallback>
                    </Avatar>
                    <div className="chat-bubble-ai">
                      <div className="flex gap-1">
                    <div className="w-2 h-2 rounded-full bg-honey-400 animate-bounce" style={{ animationDelay: "0ms" }} />
                        <div className="w-2 h-2 rounded-full bg-honey-400 animate-bounce" style={{ animationDelay: "150ms" }} />
                        <div className="w-2 h-2 rounded-full bg-honey-400 animate-bounce" style={{ animationDelay: "300ms" }} />
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
                  placeholder="分享你的感受..."
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
        {/* Mood Tracker */}
        <Card className="bg-gradient-to-br from-primary-50 to-honey-50 border-primary-200">
          <CardHeader>
            <CardTitle className="text-base text-primary-900">今天的心情</CardTitle>
            <CardDescription className="text-xs">记录你的情绪变化</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-3">
              {moods.map((mood) => (
                <button
                  key={mood.value}
                  onClick={() => setCurrentMood(mood.value)}
                  className={`p-3 rounded-lg border-2 transition-all ${
                    currentMood === mood.value 
                      ? 'border-primary-600 bg-primary-100' 
                      : 'border-warm-200 hover:border-primary-300'
                  }`}
                >
                  <mood.icon className={`w-6 h-6 mx-auto mb-2 ${mood.color}`} />
                  <p className="text-xs font-medium text-center">{mood.label}</p>
                </button>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Quick Topics */}
        <Card>
          <CardHeader>
            <CardTitle className="text-base">聊天话题</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <Tabs defaultValue="feelings" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="feelings" className="text-xs">情绪</TabsTrigger>
                <TabsTrigger value="life" className="text-xs">生活</TabsTrigger>
              </TabsList>
              <TabsContent value="feelings" className="space-y-2 mt-3">
                {[
                  "感到压力很大",
                  "有些焦虑",
                  "今天很开心",
                  "觉得孤单"
                ].map((topic, idx) => (
                  <Button
                    key={idx}
                    variant="outline"
                    size="sm"
                    className="w-full justify-start text-xs h-auto py-2"
                    onClick={() => setInput(topic)}
                  >
                    {topic}
                  </Button>
                ))}
              </TabsContent>
              <TabsContent value="life" className="space-y-2 mt-3">
                {[
                  "学校的事情",
                  "朋友关系",
                  "兴趣爱好",
                  "未来规划"
                ].map((topic, idx) => (
                  <Button
                    key={idx}
                    variant="outline"
                    size="sm"
                    className="w-full justify-start text-xs h-auto py-2"
                    onClick={() => setInput(topic)}
                  >
                    {topic}
                  </Button>
                ))}
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        {/* Encouragement */}
        <Card className="bg-gradient-to-br from-primary-50 to-honey-50 border-primary-200">
          <CardHeader>
            <CardTitle className="text-base flex items-center gap-2">
              <Star className="w-4 h-4 text-honey-600 fill-honey-600" />
              每日鼓励
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              "你比想象中更强大。每一天的努力都在让你变得更好。加油！💪"
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}