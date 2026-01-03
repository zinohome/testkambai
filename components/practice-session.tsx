"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { 
  Target, 
  Play,
  CheckCircle,
  Clock,
  TrendingUp,
  MessageSquare,
  Users,
  Lightbulb,
  Award,
  ArrowRight
} from "lucide-react";

interface Scenario {
  id: string;
  title: string;
  description: string;
  difficulty: "beginner" | "intermediate" | "advanced";
  category: "parent" | "youth";
  duration: string;
  skills: string[];
  completed?: boolean;
}

export default function PracticeSession() {
  const [selectedScenario, setSelectedScenario] = useState<Scenario | null>(null);
  const [activeCategory, setActiveCategory] = useState<"all" | "parent" | "youth">("all");

  const scenarios: Scenario[] = [
    {
      id: "1",
      title: "学习压力对话",
      description: "练习如何与孩子谈论学习压力，理解他们的感受并提供支持",
      difficulty: "beginner",
      category: "parent",
      duration: "15分钟",
      skills: ["倾听", "共情", "鼓励"],
      completed: true
    },
    {
      id: "2",
      title: "处理青春期叛逆",
      description: "模拟青春期孩子的叛逆行为，学习保持冷静并有效沟通",
      difficulty: "intermediate",
      category: "parent",
      duration: "20分钟",
      skills: ["情绪管理", "耐心", "边界设定"]
    },
    {
      id: "3",
      title: "朋友关系困扰",
      description: "帮助青少年处理与朋友的矛盾，提供情感支持和建设性建议",
      difficulty: "beginner",
      category: "youth",
      duration: "15分钟",
      skills: ["倾听", "建议", "鼓励"]
    },
    {
      id: "4",
      title: "考试焦虑应对",
      description: "与孩子讨论考试焦虑，帮助他们找到缓解压力的方法",
      difficulty: "intermediate",
      category: "parent",
      duration: "20分钟",
      skills: ["共情", "问题解决", "支持"]
    },
    {
      id: "5",
      title: "表达情绪困难",
      description: "练习引导不善表达的青少年说出内心感受",
      difficulty: "advanced",
      category: "youth",
      duration: "25分钟",
      skills: ["提问技巧", "倾听", "共情", "耐心"]
    },
    {
      id: "6",
      title: "手机使用冲突",
      description: "就手机使用时间与孩子达成共识，避免激化矛盾",
      difficulty: "intermediate",
      category: "parent",
      duration: "20分钟",
      skills: ["谈判", "边界设定", "妥协"]
    }
  ];

  const filteredScenarios = scenarios.filter(s => 
    activeCategory === "all" || s.category === activeCategory
  );

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "beginner": return "bg-healing-green text-healing-green";
      case "intermediate": return "bg-warm-orange text-warm-orange";
      case "advanced": return "bg-destructive text-destructive";
      default: return "bg-muted text-muted-foreground";
    }
  };

  const getDifficultyLabel = (difficulty: string) => {
    switch (difficulty) {
      case "beginner": return "入门";
      case "intermediate": return "进阶";
      case "advanced": return "高级";
      default: return difficulty;
    }
  };

  const completedCount = scenarios.filter(s => s.completed).length;
  const progressPercentage = (completedCount / scenarios.length) * 100;

  return (
    <div className="space-y-4 sm:space-y-6">
      {/* Header Stats - Responsive Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
        <Card>
          <CardHeader className="pb-2 sm:pb-3">
            <CardDescription className="text-[10px] sm:text-xs uppercase tracking-wider">总场景</CardDescription>
          </CardHeader>
          <CardContent className="pb-3 sm:pb-4">
            <div className="flex items-end justify-between">
              <div>
                <div className="text-2xl sm:text-3xl font-bold">{scenarios.length}</div>
                <p className="text-[10px] sm:text-xs text-muted-foreground mt-1">个</p>
              </div>
              <Target className="w-6 h-6 sm:w-8 sm:h-8 text-primary/30" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardDescription className="text-meta">已完成</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-end justify-between">
              <div>
                <div className="text-3xl font-bold text-healing-green">{completedCount}</div>
                <p className="text-xs text-muted-foreground mt-1">个场景</p>
              </div>
              <CheckCircle className="w-8 h-8 text-healing-green/30" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardDescription className="text-meta">练习时长</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-end justify-between">
              <div>
                <div className="text-3xl font-bold text-secondary">2.5</div>
                <p className="text-xs text-muted-foreground mt-1">小时</p>
              </div>
              <Clock className="w-8 h-8 text-secondary/30" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardDescription className="text-meta">技能提升</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-end justify-between">
              <div>
                <div className="text-3xl font-bold text-warm-orange">+22%</div>
                <p className="text-xs text-muted-foreground mt-1">沟通能力</p>
              </div>
              <TrendingUp className="w-8 h-8 text-warm-orange/30" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Progress Overview */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>练习进度</CardTitle>
              <CardDescription>完成更多场景，提升沟通技巧</CardDescription>
            </div>
            <Badge variant="outline" className="gap-1.5">
              <Award className="w-3 h-3" />
              {completedCount}/{scenarios.length} 完成
            </Badge>
          </div>
        </CardHeader>
        <CardContent>
          <Progress value={progressPercentage} className="h-2" />
          <p className="text-sm text-muted-foreground mt-2">
            已完成 {progressPercentage.toFixed(0)}% 的练习场景
          </p>
        </CardContent>
      </Card>

      {/* Category Filters - Responsive */}
      <div className="flex flex-wrap gap-2">
        <Button
          variant={activeCategory === "all" ? "default" : "outline"}
          size="sm"
          onClick={() => setActiveCategory("all")}
          className="text-xs sm:text-sm"
        >
          全部场景
        </Button>
        <Button
          variant={activeCategory === "parent" ? "default" : "outline"}
          size="sm"
          onClick={() => setActiveCategory("parent")}
          className="gap-1.5 sm:gap-2 text-xs sm:text-sm"
        >
          <Users className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          父母陪练
        </Button>
        <Button
          variant={activeCategory === "youth" ? "default" : "outline"}
          size="sm"
          onClick={() => setActiveCategory("youth")}
          className="gap-1.5 sm:gap-2 text-xs sm:text-sm"
        >
          <MessageSquare className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          青少年陪练
        </Button>
      </div>

      {/* Scenarios Grid - Responsive */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
        {filteredScenarios.map((scenario) => (
          <Card 
            key={scenario.id} 
            className={`hover:shadow-lg transition-all cursor-pointer ${
              selectedScenario?.id === scenario.id ? 'ring-2 ring-primary' : ''
            } ${scenario.completed ? 'bg-muted/30' : ''}`}
            onClick={() => setSelectedScenario(scenario)}
          >
            <CardHeader>
              <div className="flex items-start justify-between mb-2">
                <Badge 
                  variant="outline" 
                  className={`${getDifficultyColor(scenario.difficulty)} bg-opacity-10`}
                >
                  {getDifficultyLabel(scenario.difficulty)}
                </Badge>
                {scenario.completed && (
                  <CheckCircle className="w-5 h-5 text-healing-green" />
                )}
              </div>
              <CardTitle className="text-base">{scenario.title}</CardTitle>
              <CardDescription className="text-xs line-clamp-2">
                {scenario.description}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <Clock className="w-3 h-3" />
                {scenario.duration}
              </div>
              
              <Separator />
              
              <div>
                <p className="text-xs font-medium mb-2">练习技能：</p>
                <div className="flex flex-wrap gap-1">
                  {scenario.skills.map((skill, idx) => (
                    <Badge key={idx} variant="secondary" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>

              <Button 
                className="w-full" 
                size="sm"
                variant={scenario.completed ? "outline" : "default"}
              >
                {scenario.completed ? (
                  <>
                    <CheckCircle className="w-4 h-4 mr-2" />
                    再次练习
                  </>
                ) : (
                  <>
                    <Play className="w-4 h-4 mr-2" />
                    开始练习
                  </>
                )}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Selected Scenario Details */}
      {selectedScenario && (
        <Card className="border-2 border-primary/20">
          <CardHeader>
            <div className="flex items-start justify-between">
              <div>
                <CardTitle className="flex items-center gap-2">
                  <Target className="w-5 h-5 text-primary" />
                  {selectedScenario.title}
                </CardTitle>
                <CardDescription className="mt-2">
                  {selectedScenario.description}
                </CardDescription>
              </div>
              <Badge variant="outline">
                {selectedScenario.category === "parent" ? "父母陪练" : "青少年陪练"}
              </Badge>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm">
                  <Clock className="w-4 h-4 text-muted-foreground" />
                  <span className="font-medium">预计时长：</span>
                  <span className="text-muted-foreground">{selectedScenario.duration}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Lightbulb className="w-4 h-4 text-muted-foreground" />
                  <span className="font-medium">难度：</span>
                  <Badge variant="outline" className={`${getDifficultyColor(selectedScenario.difficulty)} bg-opacity-10`}>
                    {getDifficultyLabel(selectedScenario.difficulty)}
                  </Badge>
                </div>
              </div>

              <div className="space-y-2">
                <p className="text-sm font-medium">训练技能：</p>
                <div className="flex flex-wrap gap-2">
                  {selectedScenario.skills.map((skill, idx) => (
                    <Badge key={idx} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>

            <Separator />

            <div className="bg-muted/50 p-4 rounded-lg space-y-2">
              <div className="flex items-start gap-2">
                <Lightbulb className="w-5 h-5 text-warm-orange mt-0.5" />
                <div>
                  <p className="text-sm font-medium">练习提示</p>
                  <p className="text-xs text-muted-foreground mt-1">
                    在这个场景中，你将扮演{selectedScenario.category === "parent" ? "父母" : "陪伴者"}的角色。
                    AI会模拟真实的对话场景，你需要运用学到的沟通技巧进行回应。
                    练习结束后，你会收到详细的反馈和改进建议。
                  </p>
                </div>
              </div>
            </div>

            <div className="flex gap-3">
              <Button className="flex-1" size="lg">
                <Play className="w-4 h-4 mr-2" />
                {selectedScenario.completed ? "再次练习" : "开始练习"}
              </Button>
              <Button variant="outline" size="lg">
                查看攻略
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}