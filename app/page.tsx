"use client";

import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  Heart, 
  MessageCircle, 
  Users, 
  TrendingUp, 
  Calendar,
  Sparkles,
  Brain,
  Target,
  Award,
  Clock
} from "lucide-react";
import ParentCoach from "@/components/parent-coach";
import YouthCompanion from "@/components/youth-companion";
import PracticeSession from "@/components/practice-session";
import FamilyProfile from "@/components/family-profile";

export default function Home() {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-background">
      {/* Header - Responsive */}
      <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-3 sm:px-4 py-3 sm:py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-primary-600 to-honey-500 flex items-center justify-center">
                <Heart className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <div>
                <h1 className="text-base sm:text-xl font-semibold">心灵成长助手</h1>
                <p className="text-xs text-muted-foreground hidden sm:block">Youth Mental Health AI Companion</p>
              </div>
            </div>
            
            <div className="flex items-center gap-2 sm:gap-3">
              <Badge variant="outline" className="gap-1.5 text-xs hidden sm:flex">
                <div className="w-2 h-2 rounded-full bg-healing-green animate-pulse" />
                在线服务中
              </Badge>
              <Avatar className="w-8 h-8 sm:w-10 sm:h-10">
                <AvatarFallback className="bg-primary text-primary-foreground text-sm">家</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-3 sm:px-4 py-4 sm:py-6 lg:py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4 sm:space-y-6">
          {/* Responsive Tab Navigation */}
          <div className="overflow-x-auto -mx-3 sm:mx-0">
            <TabsList className="inline-flex w-max sm:w-auto min-w-full sm:min-w-0 sm:grid sm:grid-cols-5 px-3 sm:px-0">
              <TabsTrigger value="overview" className="gap-1.5 sm:gap-2 text-xs sm:text-sm whitespace-nowrap">
                <TrendingUp className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                <span className="hidden sm:inline">总览</span>
                <span className="sm:hidden">总览</span>
              </TabsTrigger>
              <TabsTrigger value="parent-coach" className="gap-1.5 sm:gap-2 text-xs sm:text-sm whitespace-nowrap">
                <Brain className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                <span className="hidden sm:inline">父母教练</span>
                <span className="sm:hidden">教练</span>
              </TabsTrigger>
              <TabsTrigger value="youth-companion" className="gap-1.5 sm:gap-2 text-xs sm:text-sm whitespace-nowrap">
                <MessageCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                <span className="hidden sm:inline">青少年陪伴</span>
                <span className="sm:hidden">陪伴</span>
              </TabsTrigger>
              <TabsTrigger value="practice" className="gap-1.5 sm:gap-2 text-xs sm:text-sm whitespace-nowrap">
                <Target className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                <span className="hidden sm:inline">沟通陪练</span>
                <span className="sm:hidden">陪练</span>
              </TabsTrigger>
              <TabsTrigger value="family" className="gap-1.5 sm:gap-2 text-xs sm:text-sm whitespace-nowrap">
                <Users className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                <span className="hidden sm:inline">家庭画像</span>
                <span className="sm:hidden">画像</span>
              </TabsTrigger>
            </TabsList>
          </div>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6">
            {/* Welcome Banner */}
            <Card className="border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-secondary/5">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-2xl mb-2">欢迎回来！</CardTitle>
                    <CardDescription className="text-base">
                      您的家庭心理健康成长伙伴，陪伴青少年健康成长每一步
                    </CardDescription>
                  </div>
                  <Sparkles className="w-8 h-8 text-primary" />
                </div>
              </CardHeader>
            </Card>

            {/* Quick Stats - Responsive Grid */}
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
              <Card>
                <CardHeader className="pb-2 sm:pb-3">
                  <CardDescription className="text-[10px] sm:text-xs uppercase tracking-wider">本周对话</CardDescription>
                </CardHeader>
                <CardContent className="pb-3 sm:pb-4">
                  <div className="flex items-end justify-between">
                    <div>
                      <div className="text-2xl sm:text-3xl font-bold text-primary-600">12</div>
                      <p className="text-[10px] sm:text-xs text-muted-foreground mt-1">次交流</p>
                    </div>
                    <MessageCircle className="w-6 h-6 sm:w-8 sm:h-8 text-primary-600/30" />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2 sm:pb-3">
                  <CardDescription className="text-[10px] sm:text-xs uppercase tracking-wider">陪练时长</CardDescription>
                </CardHeader>
                <CardContent className="pb-3 sm:pb-4">
                  <div className="flex items-end justify-between">
                    <div>
                      <div className="text-2xl sm:text-3xl font-bold text-honey-500">2.5</div>
                      <p className="text-[10px] sm:text-xs text-muted-foreground mt-1">小时</p>
                    </div>
                    <Clock className="w-6 h-6 sm:w-8 sm:h-8 text-honey-500/30" />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2 sm:pb-3">
                  <CardDescription className="text-[10px] sm:text-xs uppercase tracking-wider">成长进步</CardDescription>
                </CardHeader>
                <CardContent className="pb-3 sm:pb-4">
                  <div className="flex items-end justify-between">
                    <div>
                      <div className="text-2xl sm:text-3xl font-bold text-primary-700">+18%</div>
                      <p className="text-[10px] sm:text-xs text-muted-foreground mt-1">提升</p>
                    </div>
                    <TrendingUp className="w-6 h-6 sm:w-8 sm:h-8 text-primary-700/30" />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2 sm:pb-3">
                  <CardDescription className="text-[10px] sm:text-xs uppercase tracking-wider">成就解锁</CardDescription>
                </CardHeader>
                <CardContent className="pb-3 sm:pb-4">
                  <div className="flex items-end justify-between">
                    <div>
                      <div className="text-2xl sm:text-3xl font-bold text-honey-600">8</div>
                      <p className="text-[10px] sm:text-xs text-muted-foreground mt-1">个</p>
                    </div>
                    <Award className="w-6 h-6 sm:w-8 sm:h-8 text-honey-600/30" />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-3">
                  <CardDescription className="text-meta">陪练时长</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-end justify-between">
                    <div>
                      <div className="text-3xl font-bold text-secondary">2.5</div>
                      <p className="text-xs text-muted-foreground mt-1">小时练习</p>
                    </div>
                    <Clock className="w-8 h-8 text-secondary/30" />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-3">
                  <CardDescription className="text-meta">成长进步</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-end justify-between">
                    <div>
                      <div className="text-3xl font-bold text-healing-green">+18%</div>
                      <p className="text-xs text-muted-foreground mt-1">情绪管理提升</p>
                    </div>
                    <TrendingUp className="w-8 h-8 text-healing-green/30" />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-3">
                  <CardDescription className="text-meta">成就解锁</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-end justify-between">
                    <div>
                      <div className="text-3xl font-bold text-warm-orange">8</div>
                      <p className="text-xs text-muted-foreground mt-1">个里程碑</p>
                    </div>
                    <Award className="w-8 h-8 text-warm-orange/30" />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Main Features Grid - Responsive */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
              {/* Parent Coach Preview */}
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Brain className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <CardTitle>父母心理教练</CardTitle>
                      <CardDescription>帮助您理解和应对青少年成长问题</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-start gap-3 p-3 rounded-lg bg-muted/50">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                      <div className="flex-1">
                        <p className="text-sm font-medium">焦虑情绪缓解</p>
                        <p className="text-xs text-muted-foreground mt-1">
                          专业指导帮您缓解对孩子成长的担忧
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-3 rounded-lg bg-muted/50">
                      <div className="w-2 h-2 rounded-full bg-secondary mt-2" />
                      <div className="flex-1">
                        <p className="text-sm font-medium">沟通技巧提升</p>
                        <p className="text-xs text-muted-foreground mt-1">
                          学习有效的亲子沟通方法
                        </p>
                      </div>
                    </div>
                  </div>
                  <Button 
                    className="w-full" 
                    onClick={() => setActiveTab("parent-coach")}
                  >
                    开始对话
                  </Button>
                </CardContent>
              </Card>

              {/* Youth Companion Preview */}
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center">
                      <MessageCircle className="w-5 h-5 text-secondary" />
                    </div>
                    <div>
                      <CardTitle>青少年心灵陪伴</CardTitle>
                      <CardDescription>安全的倾诉空间，温暖的成长伙伴</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-start gap-3 p-3 rounded-lg bg-muted/50">
                      <div className="w-2 h-2 rounded-full bg-healing-green mt-2" />
                      <div className="flex-1">
                        <p className="text-sm font-medium">情绪倾诉</p>
                        <p className="text-xs text-muted-foreground mt-1">
                          无压力的倾诉环境，随时分享你的感受
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-3 rounded-lg bg-muted/50">
                      <div className="w-2 h-2 rounded-full bg-serene-cyan mt-2" />
                      <div className="flex-1">
                        <p className="text-sm font-medium">成长引导</p>
                        <p className="text-xs text-muted-foreground mt-1">
                          温和的建议和正面的鼓励
                        </p>
                      </div>
                    </div>
                  </div>
                  <Button 
                    className="w-full" 
                    variant="secondary"
                    onClick={() => setActiveTab("youth-companion")}
                  >
                    开始聊天
                  </Button>
                </CardContent>
              </Card>

              {/* Practice Session Preview */}
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-lg bg-healing-green/10 flex items-center justify-center">
                      <Target className="w-5 h-5 text-healing-green" />
                    </div>
                    <div>
                      <CardTitle>沟通陪练系统</CardTitle>
                      <CardDescription>针对性练习，提升实际沟通能力</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-start gap-3 p-3 rounded-lg bg-muted/50">
                      <div className="w-2 h-2 rounded-full bg-warm-orange mt-2" />
                      <div className="flex-1">
                        <p className="text-sm font-medium">亲子沟通陪练</p>
                        <p className="text-xs text-muted-foreground mt-1">
                          模拟真实场景，练习有效对话
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-3 rounded-lg bg-muted/50">
                      <div className="w-2 h-2 rounded-full bg-soft-purple mt-2" />
                      <div className="flex-1">
                        <p className="text-sm font-medium">情境应对训练</p>
                        <p className="text-xs text-muted-foreground mt-1">
                          针对棘手问题的专项练习
                        </p>
                      </div>
                    </div>
                  </div>
                  <Button 
                    className="w-full" 
                    variant="outline"
                    onClick={() => setActiveTab("practice")}
                  >
                    开始练习
                  </Button>
                </CardContent>
              </Card>

              {/* Family Profile Preview */}
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-lg bg-warm-orange/10 flex items-center justify-center">
                      <Users className="w-5 h-5 text-warm-orange" />
                    </div>
                    <div>
                      <CardTitle>家庭成长画像</CardTitle>
                      <CardDescription>记录成长轨迹，见证美好改变</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-start gap-3 p-3 rounded-lg bg-muted/50">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                      <div className="flex-1">
                        <p className="text-sm font-medium">成长记录</p>
                        <p className="text-xs text-muted-foreground mt-1">
                          详细的成长数据和进步可视化
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-3 rounded-lg bg-muted/50">
                      <div className="w-2 h-2 rounded-full bg-secondary mt-2" />
                      <div className="flex-1">
                        <p className="text-sm font-medium">家庭互动分析</p>
                        <p className="text-xs text-muted-foreground mt-1">
                          了解家庭沟通模式和改善建议
                        </p>
                      </div>
                    </div>
                  </div>
                  <Button 
                    className="w-full" 
                    variant="outline"
                    onClick={() => setActiveTab("family")}
                  >
                    查看画像
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Recent Activity */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  最近活动
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { type: "parent", title: "与父母教练讨论了学习压力问题", time: "2小时前", color: "primary" },
                    { type: "youth", title: "孩子完成了情绪日记记录", time: "5小时前", color: "secondary" },
                    { type: "practice", title: "完成亲子沟通场景练习", time: "昨天", color: "healing-green" },
                    { type: "achievement", title: "解锁成就：连续7天情绪记录", time: "2天前", color: "warm-orange" }
                  ].map((activity, idx) => (
                    <div key={idx} className="flex items-start gap-3 pb-4 border-b last:border-0 last:pb-0">
                      <div className={`w-2 h-2 rounded-full bg-(--color-${activity.color}) mt-2`} style={{ backgroundColor: `var(--${activity.color})` }} />
                      <div className="flex-1">
                        <p className="text-sm font-medium">{activity.title}</p>
                        <p className="text-xs text-muted-foreground mt-1">{activity.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Other Tabs */}
          <TabsContent value="parent-coach">
            <ParentCoach />
          </TabsContent>

          <TabsContent value="youth-companion">
            <YouthCompanion />
          </TabsContent>

          <TabsContent value="practice">
            <PracticeSession />
          </TabsContent>

          <TabsContent value="family">
            <FamilyProfile />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}