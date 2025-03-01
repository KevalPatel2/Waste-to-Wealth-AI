"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import {
  Recycle,
  Camera,
  ShoppingBag,
  Award,
  Utensils,
  Shirt,
  Droplet,
  BarChart3,
  Plus,
  Clock,
  Leaf,
} from "lucide-react"

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState("overview")

  return (
    <div className="flex flex-col min-h-screen">
      <header className="border-b sticky top-0 z-40 bg-background">
        <div className="container flex h-16 items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center gap-2">
              <Recycle className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold">Waste-to-Wealth AI</span>
            </Link>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/scan" className="text-sm font-medium hover:text-primary">
              Scan Waste
            </Link>
            <Link href="/marketplace" className="text-sm font-medium hover:text-primary">
              Marketplace
            </Link>
            <Link href="/tutorials" className="text-sm font-medium hover:text-primary">
              Tutorials
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon">
              <ShoppingBag className="h-5 w-5" />
            </Button>
            <div className="relative">
              <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center">
                <span className="text-xs font-medium">JD</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-1 container py-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold">Dashboard</h1>
            <p className="text-muted-foreground">Track your waste upcycling journey and environmental impact</p>
          </div>
          <div className="flex gap-3">
            <Link href="/scan">
              <Button className="flex items-center gap-2">
                <Camera className="h-4 w-4" />
                Scan Waste
              </Button>
            </Link>
            <Link href="/marketplace/sell">
              <Button variant="outline" className="flex items-center gap-2">
                <Plus className="h-4 w-4" />
                List Product
              </Button>
            </Link>
          </div>
        </div>

        <Tabs defaultValue="overview" value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="activity">Activity</TabsTrigger>
            <TabsTrigger value="rewards">Rewards</TabsTrigger>
            <TabsTrigger value="impact">Impact</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="mt-6 space-y-8">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Waste Upcycled</CardTitle>
                  <Recycle className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">24.5 kg</div>
                  <p className="text-xs text-muted-foreground">+2.5 kg from last week</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">CO₂ Emissions Saved</CardTitle>
                  <Leaf className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">12.8 kg</div>
                  <p className="text-xs text-muted-foreground">+1.2 kg from last week</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Products Created</CardTitle>
                  <ShoppingBag className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">8</div>
                  <p className="text-xs text-muted-foreground">+2 from last week</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Eco-Credits Earned</CardTitle>
                  <Award className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">1,250</div>
                  <p className="text-xs text-muted-foreground">+150 from last week</p>
                </CardContent>
              </Card>
            </div>

            <div className="grid gap-4 md:grid-cols-7">
              <Card className="md:col-span-4">
                <CardHeader>
                  <CardTitle>Waste Breakdown</CardTitle>
                  <CardDescription>Distribution of waste types you've upcycled</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[300px] relative">
                    <Image
                      src="/placeholder.svg?height=300&width=600"
                      alt="Waste breakdown chart"
                      fill
                      className="object-contain"
                    />
                  </div>
                </CardContent>
              </Card>
              <Card className="md:col-span-3">
                <CardHeader>
                  <CardTitle>Recent Activity</CardTitle>
                  <CardDescription>Your latest waste upcycling activities</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="rounded-full bg-primary/20 p-2">
                        <Utensils className="h-4 w-4 text-primary" />
                      </div>
                      <div className="space-y-1">
                        <p className="text-sm font-medium">Scanned Food Waste</p>
                        <p className="text-xs text-muted-foreground">Vegetable scraps converted to compost</p>
                        <div className="flex items-center text-xs text-muted-foreground">
                          <Clock className="h-3 w-3 mr-1" />
                          <span>2 hours ago</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="rounded-full bg-primary/20 p-2">
                        <Shirt className="h-4 w-4 text-primary" />
                      </div>
                      <div className="space-y-1">
                        <p className="text-sm font-medium">Listed Upcycled Product</p>
                        <p className="text-xs text-muted-foreground">Denim tote bag from old jeans</p>
                        <div className="flex items-center text-xs text-muted-foreground">
                          <Clock className="h-3 w-3 mr-1" />
                          <span>Yesterday</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="rounded-full bg-primary/20 p-2">
                        <Droplet className="h-4 w-4 text-primary" />
                      </div>
                      <div className="space-y-1">
                        <p className="text-sm font-medium">Scanned Plastic Waste</p>
                        <p className="text-xs text-muted-foreground">PET bottles for 3D printing filament</p>
                        <div className="flex items-center text-xs text-muted-foreground">
                          <Clock className="h-3 w-3 mr-1" />
                          <span>2 days ago</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Link href="/activity" className="text-sm text-primary hover:underline">
                    View all activity
                  </Link>
                </CardFooter>
              </Card>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Upcycling Goals</CardTitle>
                  <CardDescription>Track your progress towards monthly goals</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="text-sm font-medium">Food Waste: 10kg</div>
                        <div className="text-sm text-muted-foreground">70%</div>
                      </div>
                      <Progress value={70} className="h-2" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="text-sm font-medium">Clothing: 5 items</div>
                        <div className="text-sm text-muted-foreground">40%</div>
                      </div>
                      <Progress value={40} className="h-2" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="text-sm font-medium">Plastic: 3kg</div>
                        <div className="text-sm text-muted-foreground">90%</div>
                      </div>
                      <Progress value={90} className="h-2" />
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    Set New Goals
                  </Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Recommended Tutorials</CardTitle>
                  <CardDescription>Based on your waste scanning history</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="relative aspect-square w-12 h-12 rounded-md overflow-hidden flex-shrink-0">
                        <Image
                          src="/placeholder.svg?height=100&width=100"
                          alt="Tutorial thumbnail"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="text-sm font-medium">DIY Compost Bin from Recycled Materials</h4>
                        <p className="text-xs text-muted-foreground mt-1">
                          Learn how to create an efficient compost system at home
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="relative aspect-square w-12 h-12 rounded-md overflow-hidden flex-shrink-0">
                        <Image
                          src="/placeholder.svg?height=100&width=100"
                          alt="Tutorial thumbnail"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="text-sm font-medium">Upcycled Denim Projects: Beyond Bags</h4>
                        <p className="text-xs text-muted-foreground mt-1">
                          Creative ways to transform old jeans into home decor
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="relative aspect-square w-12 h-12 rounded-md overflow-hidden flex-shrink-0">
                        <Image
                          src="/placeholder.svg?height=100&width=100"
                          alt="Tutorial thumbnail"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="text-sm font-medium">3D Printing with Recycled Plastic</h4>
                        <p className="text-xs text-muted-foreground mt-1">
                          How to process PET bottles into usable filament
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Link href="/tutorials" className="w-full">
                    <Button variant="outline" className="w-full">
                      View All Tutorials
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="activity" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Activity History</CardTitle>
                <CardDescription>Your waste scanning and upcycling activities</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-8">
                  {/* Activity timeline */}
                  <div className="relative border-l pl-6 pb-2">
                    <div className="absolute left-0 top-0 flex items-center justify-center -translate-x-1/2 rounded-full bg-primary/20 p-1">
                      <Utensils className="h-4 w-4 text-primary" />
                    </div>
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <h4 className="font-medium">Scanned Food Waste</h4>
                        <Badge variant="outline" className="text-xs">
                          Food
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">Vegetable scraps converted to compost</p>
                      <div className="flex items-center text-xs text-muted-foreground">
                        <Clock className="h-3 w-3 mr-1" />
                        <span>Today, 2:34 PM</span>
                      </div>
                    </div>
                  </div>

                  <div className="relative border-l pl-6 pb-2">
                    <div className="absolute left-0 top-0 flex items-center justify-center -translate-x-1/2 rounded-full bg-primary/20 p-1">
                      <ShoppingBag className="h-4 w-4 text-primary" />
                    </div>
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <h4 className="font-medium">Listed Upcycled Product</h4>
                        <Badge variant="outline" className="text-xs">
                          Marketplace
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">Denim tote bag from old jeans</p>
                      <div className="flex items-center text-xs text-muted-foreground">
                        <Clock className="h-3 w-3 mr-1" />
                        <span>Yesterday, 11:20 AM</span>
                      </div>
                    </div>
                  </div>

                  <div className="relative border-l pl-6 pb-2">
                    <div className="absolute left-0 top-0 flex items-center justify-center -translate-x-1/2 rounded-full bg-primary/20 p-1">
                      <Droplet className="h-4 w-4 text-primary" />
                    </div>
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <h4 className="font-medium">Scanned Plastic Waste</h4>
                        <Badge variant="outline" className="text-xs">
                          Plastic
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">PET bottles for 3D printing filament</p>
                      <div className="flex items-center text-xs text-muted-foreground">
                        <Clock className="h-3 w-3 mr-1" />
                        <span>2 days ago, 4:15 PM</span>
                      </div>
                    </div>
                  </div>

                  <div className="relative border-l pl-6 pb-2">
                    <div className="absolute left-0 top-0 flex items-center justify-center -translate-x-1/2 rounded-full bg-primary/20 p-1">
                      <Award className="h-4 w-4 text-primary" />
                    </div>
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <h4 className="font-medium">Earned Achievement Badge</h4>
                        <Badge variant="outline" className="text-xs">
                          Rewards
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">Plastic Recycling Champion - Level 1</p>
                      <div className="flex items-center text-xs text-muted-foreground">
                        <Clock className="h-3 w-3 mr-1" />
                        <span>3 days ago, 9:30 AM</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  Load More
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="rewards" className="mt-6">
            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Your Eco-Credits</CardTitle>
                  <CardDescription>Earn credits by upcycling waste and completing challenges</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold">1,250</div>
                    <Button variant="outline" size="sm">
                      Redeem Credits
                    </Button>
                  </div>

                  <div className="space-y-2">
                    <h4 className="text-sm font-medium">Recent Credits Earned</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center text-sm">
                        <span>Food waste composting</span>
                        <span className="font-medium text-primary">+50</span>
                      </div>
                      <div className="flex justify-between items-center text-sm">
                        <span>Clothing upcycling project</span>
                        <span className="font-medium text-primary">+100</span>
                      </div>
                      <div className="flex justify-between items-center text-sm">
                        <span>Weekly challenge completion</span>
                        <span className="font-medium text-primary">+75</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Achievement Badges</CardTitle>
                  <CardDescription>Showcase your waste upcycling accomplishments</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="flex flex-col items-center text-center">
                      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/20">
                        <Utensils className="h-8 w-8 text-primary" />
                      </div>
                      <span className="mt-2 text-xs font-medium">Food Recycler</span>
                      <span className="text-xs text-muted-foreground">Level 2</span>
                    </div>
                    <div className="flex flex-col items-center text-center">
                      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/20">
                        <Shirt className="h-8 w-8 text-primary" />
                      </div>
                      <span className="mt-2 text-xs font-medium">Textile Wizard</span>
                      <span className="text-xs text-muted-foreground">Level 1</span>
                    </div>
                    <div className="flex flex-col items-center text-center">
                      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/20">
                        <Droplet className="h-8 w-8 text-primary" />
                      </div>
                      <span className="mt-2 text-xs font-medium">Plastic Hero</span>
                      <span className="text-xs text-muted-foreground">Level 3</span>
                    </div>
                    <div className="flex flex-col items-center text-center">
                      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-muted">
                        <Award className="h-8 w-8 text-muted-foreground" />
                      </div>
                      <span className="mt-2 text-xs font-medium">Eco Innovator</span>
                      <span className="text-xs text-muted-foreground">Locked</span>
                    </div>
                    <div className="flex flex-col items-center text-center">
                      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-muted">
                        <Award className="h-8 w-8 text-muted-foreground" />
                      </div>
                      <span className="mt-2 text-xs font-medium">Zero Waste</span>
                      <span className="text-xs text-muted-foreground">Locked</span>
                    </div>
                    <div className="flex flex-col items-center text-center">
                      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-muted">
                        <Award className="h-8 w-8 text-muted-foreground" />
                      </div>
                      <span className="mt-2 text-xs font-medium">Community Leader</span>
                      <span className="text-xs text-muted-foreground">Locked</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Link href="/rewards/badges" className="w-full">
                    <Button variant="outline" className="w-full">
                      View All Badges
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </div>

            <Card className="mt-6">
              <CardHeader>
                <CardTitle>Available Rewards</CardTitle>
                <CardDescription>Redeem your eco-credits for these sustainable rewards</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-3">
                  <div className="rounded-lg border p-4">
                    <div className="relative aspect-video rounded-md overflow-hidden mb-3">
                      <Image src="/placeholder.svg?height=150&width=250" alt="Reward" fill className="object-cover" />
                    </div>
                    <h4 className="font-medium">15% Off Eco-Store</h4>
                    <p className="text-sm text-muted-foreground mt-1">Discount on sustainable products</p>
                    <div className="flex justify-between items-center mt-3">
                      <div className="flex items-center text-sm font-medium text-primary">
                        <Award className="h-4 w-4 mr-1" />
                        500 credits
                      </div>
                      <Button size="sm">Redeem</Button>
                    </div>
                  </div>

                  <div className="rounded-lg border p-4">
                    <div className="relative aspect-video rounded-md overflow-hidden mb-3">
                      <Image src="/placeholder.svg?height=150&width=250" alt="Reward" fill className="object-cover" />
                    </div>
                    <h4 className="font-medium">Tree Planting Donation</h4>
                    <p className="text-sm text-muted-foreground mt-1">We'll plant a tree in your name</p>
                    <div className="flex justify-between items-center mt-3">
                      <div className="flex items-center text-sm font-medium text-primary">
                        <Award className="h-4 w-4 mr-1" />
                        750 credits
                      </div>
                      <Button size="sm">Redeem</Button>
                    </div>
                  </div>

                  <div className="rounded-lg border p-4">
                    <div className="relative aspect-video rounded-md overflow-hidden mb-3">
                      <Image src="/placeholder.svg?height=150&width=250" alt="Reward" fill className="object-cover" />
                    </div>
                    <h4 className="font-medium">Upcycling Starter Kit</h4>
                    <p className="text-sm text-muted-foreground mt-1">Tools and materials for projects</p>
                    <div className="flex justify-between items-center mt-3">
                      <div className="flex items-center text-sm font-medium text-primary">
                        <Award className="h-4 w-4 mr-1" />
                        1,200 credits
                      </div>
                      <Button size="sm">Redeem</Button>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Link href="/rewards" className="w-full">
                  <Button variant="outline" className="w-full">
                    View All Rewards
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="impact" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Environmental Impact</CardTitle>
                <CardDescription>Track the positive difference you're making</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px] relative mb-6">
                  <Image
                    src="/placeholder.svg?height=300&width=800"
                    alt="Environmental impact chart"
                    fill
                    className="object-contain"
                  />
                </div>

                <div className="grid gap-4 md:grid-cols-3">
                  <div className="rounded-lg bg-muted p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Leaf className="h-5 w-5 text-primary" />
                      <h4 className="font-medium">CO₂ Emissions Saved</h4>
                    </div>
                    <div className="text-2xl font-bold">12.8 kg</div>
                    <p className="text-sm text-muted-foreground mt-1">Equivalent to planting 2 trees</p>
                  </div>

                  <div className="rounded-lg bg-muted p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Droplet className="h-5 w-5 text-primary" />
                      <h4 className="font-medium">Water Saved</h4>
                    </div>
                    <div className="text-2xl font-bold">450 L</div>
                    <p className="text-sm text-muted-foreground mt-1">Equivalent to 5 days of household use</p>
                  </div>

                  <div className="rounded-lg bg-muted p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <BarChart3 className="h-5 w-5 text-primary" />
                      <h4 className="font-medium">Landfill Space Saved</h4>
                    </div>
                    <div className="text-2xl font-bold">0.12 m³</div>
                    <p className="text-sm text-muted-foreground mt-1">Keeping waste out of landfills</p>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Link href="/impact/details" className="w-full">
                  <Button variant="outline" className="w-full">
                    View Detailed Impact Report
                  </Button>
                </Link>
              </CardFooter>
            </Card>

            <div className="grid gap-6 md:grid-cols-2 mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Community Impact</CardTitle>
                  <CardDescription>How your efforts compare to the community</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="text-sm font-medium">Your Ranking</div>
                        <div className="text-sm font-medium text-primary">Top 15%</div>
                      </div>
                      <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                        <div className="h-full bg-primary" style={{ width: "85%" }}></div>
                      </div>
                      <p className="text-xs text-muted-foreground">You're in the top 15% of users in your area</p>
                    </div>

                    <div className="pt-2">
                      <h4 className="text-sm font-medium mb-3">Leaderboard</h4>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
                              <span className="text-xs font-medium">1</span>
                            </div>
                            <span className="text-sm">EcoWarrior92</span>
                          </div>
                          <span className="text-sm font-medium">45.2 kg</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
                              <span className="text-xs font-medium">2</span>
                            </div>
                            <span className="text-sm">GreenThumb</span>
                          </div>
                          <span className="text-sm font-medium">38.7 kg</span>
                        </div>
                        <div className="flex items-center justify-between bg-muted/50 p-2 rounded-md">
                          <div className="flex items-center gap-2">
                            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/20">
                              <span className="text-xs font-medium">8</span>
                            </div>
                            <span className="text-sm font-medium">You</span>
                          </div>
                          <span className="text-sm font-medium">24.5 kg</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Link href="/community" className="w-full">
                    <Button variant="outline" className="w-full">
                      View Community
                    </Button>
                  </Link>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Impact Goals</CardTitle>
                  <CardDescription>Set and track your environmental impact goals</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="text-sm font-medium">Monthly CO₂ Reduction: 20kg</div>
                        <div className="text-sm text-muted-foreground">64%</div>
                      </div>
                      <Progress value={64} className="h-2" />
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="text-sm font-medium">Waste Diverted: 30kg</div>
                        <div className="text-sm text-muted-foreground">82%</div>
                      </div>
                      <Progress value={82} className="h-2" />
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="text-sm font-medium">Products Created: 10</div>
                        <div className="text-sm text-muted-foreground">80%</div>
                      </div>
                      <Progress value={80} className="h-2" />
                    </div>

                    <div className="pt-2">
                      <h4 className="text-sm font-medium mb-3">Suggested Goals</h4>
                      <div className="space-y-3">
                        <div className="flex items-start gap-3 rounded-lg border p-3">
                          <Leaf className="h-5 w-5 text-primary shrink-0" />
                          <div>
                            <h5 className="text-sm font-medium">Reduce Carbon Footprint</h5>
                            <p className="text-xs text-muted-foreground">
                              Aim to reduce your carbon footprint by 25kg next month
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3 rounded-lg border p-3">
                          <Recycle className="h-5 w-5 text-primary shrink-0" />
                          <div>
                            <h5 className="text-sm font-medium">Zero Plastic Challenge</h5>
                            <p className="text-xs text-muted-foreground">Upcycle all plastic waste for one month</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Set New Impact Goals</Button>
                </CardFooter>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </main>

      <footer className="border-t bg-muted">
        <div className="container px-4 py-6 md:px-6 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Waste-to-Wealth AI. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

