"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Users, 
  TrendingUp,
  Heart,
  MessageCircle,
  Calendar,
  Award,
  Target,
  Activity,
  BarChart3,
  Smile,
  Frown,
  Meh
} from "lucide-react";

export default function FamilyProfile() {
  const familyMembers = [
    {
      name: "父亲",
      role: "parent",
      activeLevel: 85,
      mood: "positive",
      engagementDays: 28
    },
    {
      name: "母亲",
      role: "parent",
      activeLevel: 92,
      mood: "positive",
      engagementDays: 30
    },
    {
      name: "孩子",
      role: "youth",
      activeLevel: 78,
      mood: "neutral",
      engagementDays: 25
    }
  ];

  const growthMetrics = [
    { label: "情绪管理", current: 75, change: +15, color: "healing-green" },
    { label: "沟通能力", current: 82, change: +18, color: "primary" },
    { label: "问题解决", current: 68, change: +12, color: "secondary" },
    { label: "自我认知", current: 71, change: +10, color: "warm-orange" }
  ];

  const weeklyActivity = [
    { day: "周一", parent: 4, youth: 3 },
    { day: "周二", parent: 3, youth: 4 },
    { day: "周三", parent: 5, youth: 2 },
    { day: "周四", parent: 4, youth: 5 },
    { day: "周五", parent: 6, youth: 4 },
    { day: "周六", parent: 5, youth: 6 },
    { day: "周日", parent: 4, youth: 4 }
  ];

  const achievements = [
    {
      title: "连续30天记录",
      description: "坚持记录情绪和互动",
      icon: Calendar,
      unlocked: true,
      date: "2024-01-15"
    },
    {
      title: "沟通达人",
      description: "完成10次深度对话",
      icon: MessageCircle,
      unlocked: true,
      date: "2024-01-10"
    },
    {
      title: "情绪管理师",
      description: "情绪管理能力提升20%",
      icon: Heart,
      unlocked: true,
      date: "2024-01-20"
    },
    {
      title: "陪练专家",
      description: "完成所有练习场景",
      icon: Target,
      unlocked: false
    }
  ];

  const getMoodIcon = (mood: string) => {
    switch (mood) {
      case "positive": return <Smile className="w-5 h-5 text-healing-green" />;
      case "negative": return <Frown className="w-5 h-5 text-destructive" />;
      default: return <Meh className="w-5 h-5 text-muted-foreground" />;
    }
  };

  const maxActivity = Math.max(...weeklyActivity.flatMap(d => [d.parent, d.youth]));

  return (
    <div className="space-y-4 sm:space-y-6">
      {/* Family Overview */}
      <Card className="border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-secondary/5">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-2xl flex items-center gap-2">
                <Users className="w-6 h-6 text-primary" />
                家庭成长画像
              </CardTitle>
              <CardDescription className="text-base mt-2">
                记录每一步成长，见证美好改变
              </CardDescription>
            </div>
            <Badge className="gap-1.5 text-sm py-1.5 px-3">
              <Activity className="w-4 h-4" />
              活跃家庭
            </Badge>
          </div>
        </CardHeader>
      </Card>

      {/* Family Members - Responsive */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
        {familyMembers.map((member, idx) => (
          <Card key={idx}>
            <CardHeader>
              <div className="flex items-center gap-3">
                <Avatar className="w-12 h-12">
                  <AvatarFallback className={`${
                    member.role === "parent" ? "bg-primary/10 text-primary" : "bg-secondary/10 text-secondary"
                  }`}>
                    {member.name[0]}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <CardTitle className="text-base">{member.name}</CardTitle>
                  <CardDescription className="text-xs flex items-center gap-1.5 mt-1">
                    当前心情：{getMoodIcon(member.mood)}
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-muted-foreground">活跃度</span>
                  <span className="font-medium">{member.activeLevel}%</span>
                </div>
                <Progress value={member.activeLevel} className="h-2" />
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="text-muted-foreground">连续参与</span>
                <Badge variant="outline" className="text-xs">
                  {member.engagementDays} 天
                </Badge>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Detailed Analytics - Responsive Tabs */}
      <Tabs defaultValue="growth" className="space-y-4">
        <div className="overflow-x-auto -mx-3 sm:mx-0">
          <TabsList className="inline-flex w-max sm:w-auto min-w-full sm:min-w-0 px-3 sm:px-0">
            <TabsTrigger value="growth" className="gap-1.5 sm:gap-2 text-xs sm:text-sm whitespace-nowrap">
              <TrendingUp className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              成长指标
            </TabsTrigger>
            <TabsTrigger value="activity" className="gap-1.5 sm:gap-2 text-xs sm:text-sm whitespace-nowrap">
              <BarChart3 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              活动分析
            </TabsTrigger>
            <TabsTrigger value="achievements" className="gap-1.5 sm:gap-2 text-xs sm:text-sm whitespace-nowrap">
              <Award className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              成就徽章
            </TabsTrigger>
          </TabsList>
        </div>

        {/* Growth Metrics */}
        <TabsContent value="growth" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>成长能力评估</CardTitle>
              <CardDescription>过去30天的能力提升情况</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {growthMetrics.map((metric, idx) => (
                <div key={idx}>
                  <div className="flex justify-between items-center mb-2">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium">{metric.label}</span>
                      <Badge 
                        variant="outline" 
                        className={`text-xs ${metric.change > 0 ? 'bg-healing-green/10 text-healing-green border-healing-green/20' : ''}`}
                      >
                        +{metric.change}%
                      </Badge>
                    </div>
                    <span className="text-sm font-semibold">{metric.current}%</span>
                  </div>
                  <Progress value={metric.current} className="h-2.5" />
                </div>
              ))}
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-base">本月亮点</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {[
                  { icon: Heart, text: "父母焦虑水平降低25%", color: "text-healing-green" },
                  { icon: MessageCircle, text: "亲子对话质量提升30%", color: "text-primary" },
                  { icon: Target, text: "完成8个沟通练习场景", color: "text-secondary" }
                ].map((highlight, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-2 rounded-lg bg-muted/30">
                    <highlight.icon className={`w-5 h-5 ${highlight.color} mt-0.5`} />
                    <p className="text-sm">{highlight.text}</p>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-base">改进建议</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {[
                  "增加每周深度对话次数",
                  "尝试更多高难度练习场景",
                  "定期记录家庭互动感受"
                ].map((suggestion, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                    <p className="text-muted-foreground">{suggestion}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Activity Analysis */}
        <TabsContent value="activity" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>本周活动统计</CardTitle>
              <CardDescription>家庭成员的互动频率</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {weeklyActivity.map((day, idx) => (
                  <div key={idx} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="font-medium">{day.day}</span>
                      <span className="text-muted-foreground">
                        父母 {day.parent}次 · 孩子 {day.youth}次
                      </span>
                    </div>
                    <div className="flex gap-2 h-8">
                      <div 
                        className="bg-primary rounded transition-all" 
                        style={{ width: `${(day.parent / maxActivity) * 100}%` }}
                        title={`父母: ${day.parent}次`}
                      />
                      <div 
                        className="bg-secondary rounded transition-all" 
                        style={{ width: `${(day.youth / maxActivity) * 100}%` }}
                        title={`孩子: ${day.youth}次`}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-6 mt-6 pt-4 border-t">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded bg-primary" />
                  <span className="text-xs text-muted-foreground">父母活动</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded bg-secondary" />
                  <span className="text-xs text-muted-foreground">孩子活动</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
            <Card>
              <CardHeader className="pb-3">
                <CardDescription className="text-meta">总互动次数</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-primary">42</div>
                <p className="text-xs text-muted-foreground mt-1">本周</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardDescription className="text-meta">平均每天</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-secondary">6</div>
                <p className="text-xs text-muted-foreground mt-1">次互动</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardDescription className="text-meta">对话质量</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-healing-green">优秀</div>
                <p className="text-xs text-muted-foreground mt-1">深度交流</p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Achievements */}
        <TabsContent value="achievements" className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            {achievements.map((achievement, idx) => (
              <Card 
                key={idx} 
                className={`${
                  achievement.unlocked 
                    ? 'border-2 border-warm-orange/20 bg-gradient-to-br from-warm-orange/5 to-healing-green/5' 
                    : 'opacity-60'
                }`}
              >
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                        achievement.unlocked 
                          ? 'bg-warm-orange/10' 
                          : 'bg-muted'
                      }`}>
                        <achievement.icon className={`w-6 h-6 ${
                          achievement.unlocked 
                            ? 'text-warm-orange' 
                            : 'text-muted-foreground'
                        }`} />
                      </div>
                      <div>
                        <CardTitle className="text-base">{achievement.title}</CardTitle>
                        <CardDescription className="text-xs mt-1">
                          {achievement.description}
                        </CardDescription>
                      </div>
                    </div>
                    {achievement.unlocked && (
                      <Award className="w-5 h-5 text-warm-orange" />
                    )}
                  </div>
                </CardHeader>
                {achievement.unlocked && achievement.date && (
                  <CardContent>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Calendar className="w-3 h-3" />
                      解锁于 {achievement.date}
                    </div>
                  </CardContent>
                )}
              </Card>
            ))}
          </div>

          <Card>
            <CardHeader>
              <CardTitle>成就进度</CardTitle>
              <CardDescription>已解锁 {achievements.filter(a => a.unlocked).length} / {achievements.length} 个成就</CardDescription>
            </CardHeader>
            <CardContent>
              <Progress 
                value={(achievements.filter(a => a.unlocked).length / achievements.length) * 100} 
                className="h-3"
              />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}