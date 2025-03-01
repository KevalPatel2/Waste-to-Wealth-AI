import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import {
  Recycle,
  Leaf,
  ShoppingBag,
  Camera,
  Award,
  Utensils,
  Shirt,
  Droplet,
  ArrowRight,
  BarChart3,
  Users,
  Zap,
} from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="border-b sticky top-0 z-40 bg-background">
        <div className="container flex h-16 items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <Recycle className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">Waste-to-Wealth AI</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#how-it-works" className="text-sm font-medium hover:text-primary">
              How It Works
            </Link>
            <Link href="#waste-types" className="text-sm font-medium hover:text-primary">
              Waste Types
            </Link>
            <Link href="#marketplace" className="text-sm font-medium hover:text-primary">
              Marketplace
            </Link>
            <Link href="#impact" className="text-sm font-medium hover:text-primary">
              Impact
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="/login">
              <Button variant="ghost" size="sm">
                Log in
              </Button>
            </Link>
            <Link href="/register">
              <Button size="sm">Get Started</Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 md:py-28 bg-gradient-to-b from-primary/10 to-background">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <Badge className="inline-flex bg-primary text-primary-foreground mb-2">Sustainable Innovation</Badge>
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                    Transform Waste into Valuable Products
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Our AI-powered platform helps you classify, process, and redistribute waste into high-value
                    secondary products.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/register">
                    <Button size="lg" className="gap-1">
                      Start Upcycling <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="#how-it-works">
                    <Button size="lg" variant="outline">
                      Learn More
                    </Button>
                  </Link>
                </div>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Leaf className="h-4 w-4 text-primary" />
                    <span>Eco-friendly</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <ShoppingBag className="h-4 w-4 text-primary" />
                    <span>Circular Economy</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Award className="h-4 w-4 text-primary" />
                    <span>Earn Rewards</span>
                  </div>
                </div>
              </div>
              <div className="relative aspect-video overflow-hidden rounded-xl lg:aspect-square">
                <Image
                  src="/placeholder.svg?height=600&width=600"
                  alt="Waste to Wealth Transformation"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="py-16 md:py-20">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-sm font-semibold">
                  <Zap className="mr-1 h-3.5 w-3.5 text-primary" />
                  How It Works
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  AI-Powered Waste Transformation
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our platform uses artificial intelligence to classify waste and provide personalized upcycling
                  solutions.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:gap-12 mt-12">
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <Camera className="h-8 w-8 text-primary" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Scan & Classify</h3>
                  <p className="text-muted-foreground">
                    Scan your waste with our AI-powered app. Our technology identifies the type of waste and its
                    potential for upcycling.
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <Recycle className="h-8 w-8 text-primary" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Process & Upcycle</h3>
                  <p className="text-muted-foreground">
                    Follow our guided instructions to transform your waste into valuable products, or connect with local
                    upcycling centers.
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <ShoppingBag className="h-8 w-8 text-primary" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Sell & Share</h3>
                  <p className="text-muted-foreground">
                    List your upcycled products on our marketplace, donate them, or use them yourself. Track your
                    environmental impact.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Waste Types Section */}
        <section id="waste-types" className="py-16 md:py-20 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-sm font-semibold">
                  <Recycle className="mr-1 h-3.5 w-3.5 text-primary" />
                  Waste Categories
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">From Waste to Wealth</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our platform specializes in three major waste categories, each with unique upcycling opportunities.
                </p>
              </div>
            </div>
            <div className="mt-12">
              <Tabs defaultValue="food" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="food" className="flex items-center gap-2">
                    <Utensils className="h-4 w-4" />
                    <span className="hidden sm:inline">Food Waste</span>
                  </TabsTrigger>
                  <TabsTrigger value="clothing" className="flex items-center gap-2">
                    <Shirt className="h-4 w-4" />
                    <span className="hidden sm:inline">Clothing Waste</span>
                  </TabsTrigger>
                  <TabsTrigger value="plastic" className="flex items-center gap-2">
                    <Droplet className="h-4 w-4" />
                    <span className="hidden sm:inline">Plastic Waste</span>
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="food" className="mt-6">
                  <div className="grid gap-6 md:grid-cols-2 lg:gap-12">
                    <div className="relative aspect-video overflow-hidden rounded-xl">
                      <Image
                        src="/placeholder.svg?height=400&width=600"
                        alt="Food Waste Upcycling"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex flex-col justify-center space-y-4">
                      <h3 className="text-2xl font-bold">Food Waste Upcycling</h3>
                      <p className="text-muted-foreground">
                        Transform food waste into valuable resources instead of sending it to landfills.
                      </p>
                      <ul className="grid gap-2">
                        <li className="flex items-start gap-2">
                          <div className="rounded-full bg-primary/20 p-1">
                            <Leaf className="h-4 w-4 text-primary" />
                          </div>
                          <div>
                            <span className="font-medium">Edible Leftovers:</span> Redistributed as low-cost meals for
                            food banks
                          </div>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="rounded-full bg-primary/20 p-1">
                            <Leaf className="h-4 w-4 text-primary" />
                          </div>
                          <div>
                            <span className="font-medium">Organic Scraps:</span> Converted into animal feed, compost,
                            and biofuel
                          </div>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="rounded-full bg-primary/20 p-1">
                            <Leaf className="h-4 w-4 text-primary" />
                          </div>
                          <div>
                            <span className="font-medium">Citrus Peels & Coffee Grounds:</span> Transformed into natural
                            cleaning agents
                          </div>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="rounded-full bg-primary/20 p-1">
                            <Leaf className="h-4 w-4 text-primary" />
                          </div>
                          <div>
                            <span className="font-medium">Expired Grains & Bread:</span> Processed into bioplastics and
                            biodegradable packaging
                          </div>
                        </li>
                      </ul>
                      <Link href="/food-waste">
                        <Button className="w-full sm:w-auto">Learn More About Food Upcycling</Button>
                      </Link>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="clothing" className="mt-6">
                  <div className="grid gap-6 md:grid-cols-2 lg:gap-12">
                    <div className="relative aspect-video overflow-hidden rounded-xl">
                      <Image
                        src="/placeholder.svg?height=400&width=600"
                        alt="Clothing Waste Upcycling"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex flex-col justify-center space-y-4">
                      <h3 className="text-2xl font-bold">Clothing Waste Upcycling</h3>
                      <p className="text-muted-foreground">
                        Give old clothing new life through creative reuse and recycling processes.
                      </p>
                      <ul className="grid gap-2">
                        <li className="flex items-start gap-2">
                          <div className="rounded-full bg-primary/20 p-1">
                            <Shirt className="h-4 w-4 text-primary" />
                          </div>
                          <div>
                            <span className="font-medium">AI Fabric Sorting:</span> Automatically categorizes fabric by
                            type and condition
                          </div>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="rounded-full bg-primary/20 p-1">
                            <Shirt className="h-4 w-4 text-primary" />
                          </div>
                          <div>
                            <span className="font-medium">DIY Upcycling:</span> Step-by-step tutorials for transforming
                            old clothes
                          </div>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="rounded-full bg-primary/20 p-1">
                            <Shirt className="h-4 w-4 text-primary" />
                          </div>
                          <div>
                            <span className="font-medium">Upcycled Marketplace:</span> Platform for selling and trading
                            upcycled clothing
                          </div>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="rounded-full bg-primary/20 p-1">
                            <Shirt className="h-4 w-4 text-primary" />
                          </div>
                          <div>
                            <span className="font-medium">Textile Recycling:</span> Converting fabric into new yarn and
                            materials
                          </div>
                        </li>
                      </ul>
                      <Link href="/clothing-waste">
                        <Button className="w-full sm:w-auto">Learn More About Clothing Upcycling</Button>
                      </Link>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="plastic" className="mt-6">
                  <div className="grid gap-6 md:grid-cols-2 lg:gap-12">
                    <div className="relative aspect-video overflow-hidden rounded-xl">
                      <Image
                        src="/placeholder.svg?height=400&width=600"
                        alt="Plastic Waste Upcycling"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex flex-col justify-center space-y-4">
                      <h3 className="text-2xl font-bold">Plastic Waste Upcycling</h3>
                      <p className="text-muted-foreground">
                        Transform plastic waste into useful products instead of polluting our environment.
                      </p>
                      <ul className="grid gap-2">
                        <li className="flex items-start gap-2">
                          <div className="rounded-full bg-primary/20 p-1">
                            <Droplet className="h-4 w-4 text-primary" />
                          </div>
                          <div>
                            <span className="font-medium">AI Plastic Categorization:</span> Identifies plastic types for
                            proper recycling
                          </div>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="rounded-full bg-primary/20 p-1">
                            <Droplet className="h-4 w-4 text-primary" />
                          </div>
                          <div>
                            <span className="font-medium">3D Printing Filament:</span> Converting plastic waste into 3D
                            printing material
                          </div>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="rounded-full bg-primary/20 p-1">
                            <Droplet className="h-4 w-4 text-primary" />
                          </div>
                          <div>
                            <span className="font-medium">Biodegradable Products:</span> Creating eco-friendly
                            alternatives to plastic
                          </div>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="rounded-full bg-primary/20 p-1">
                            <Droplet className="h-4 w-4 text-primary" />
                          </div>
                          <div>
                            <span className="font-medium">Small-Scale Pyrolysis:</span> Converting plastic into fuel for
                            local use
                          </div>
                        </li>
                      </ul>
                      <Link href="/plastic-waste">
                        <Button className="w-full sm:w-auto">Learn More About Plastic Upcycling</Button>
                      </Link>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>

        {/* Marketplace Section */}
        <section id="marketplace" className="py-16 md:py-20">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-sm font-semibold">
                  <ShoppingBag className="mr-1 h-3.5 w-3.5 text-primary" />
                  Circular Economy
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Marketplace & Donation Hub
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Buy, sell, trade, and donate upcycled products in our circular economy marketplace.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
              <Card>
                <CardHeader>
                  <CardTitle>Circular Economy Marketplace</CardTitle>
                  <CardDescription>Connect with buyers and sellers of upcycled products</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="relative aspect-square overflow-hidden rounded-md">
                      <Image
                        src="/placeholder.svg?height=200&width=200"
                        alt="Upcycled Product"
                        fill
                        className="object-cover"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-background/80 p-2">
                        <p className="text-xs font-medium">Compost from Food Waste</p>
                        <p className="text-xs text-muted-foreground">$15.99</p>
                      </div>
                    </div>
                    <div className="relative aspect-square overflow-hidden rounded-md">
                      <Image
                        src="/placeholder.svg?height=200&width=200"
                        alt="Upcycled Product"
                        fill
                        className="object-cover"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-background/80 p-2">
                        <p className="text-xs font-medium">Upcycled Denim Bag</p>
                        <p className="text-xs text-muted-foreground">$24.99</p>
                      </div>
                    </div>
                    <div className="relative aspect-square overflow-hidden rounded-md">
                      <Image
                        src="/placeholder.svg?height=200&width=200"
                        alt="Upcycled Product"
                        fill
                        className="object-cover"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-background/80 p-2">
                        <p className="text-xs font-medium">3D Printed Planters</p>
                        <p className="text-xs text-muted-foreground">$19.99</p>
                      </div>
                    </div>
                    <div className="relative aspect-square overflow-hidden rounded-md">
                      <Image
                        src="/placeholder.svg?height=200&width=200"
                        alt="Upcycled Product"
                        fill
                        className="object-cover"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-background/80 p-2">
                        <p className="text-xs font-medium">Natural Cleaning Spray</p>
                        <p className="text-xs text-muted-foreground">$8.99</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Link href="/marketplace" className="w-full">
                    <Button className="w-full">Browse Marketplace</Button>
                  </Link>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Donation & Redistribution Hub</CardTitle>
                  <CardDescription>Connect with organizations that can use your upcycled products</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-4">
                    <div className="flex items-start gap-4 rounded-lg border p-3">
                      <Utensils className="h-5 w-5 text-primary mt-0.5" />
                      <div>
                        <h4 className="font-medium">Food Donation</h4>
                        <p className="text-sm text-muted-foreground">
                          Restaurants and households can list surplus food for shelters and food banks.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4 rounded-lg border p-3">
                      <Shirt className="h-5 w-5 text-primary mt-0.5" />
                      <div>
                        <h4 className="font-medium">Clothing Donation</h4>
                        <p className="text-sm text-muted-foreground">
                          Connect with charities and upcycling centers that need textile materials.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4 rounded-lg border p-3">
                      <Droplet className="h-5 w-5 text-primary mt-0.5" />
                      <div>
                        <h4 className="font-medium">Plastic Collection</h4>
                        <p className="text-sm text-muted-foreground">
                          Submit collection requests for verified recyclers and upcycling centers.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Link href="/donate" className="w-full">
                    <Button className="w-full">Find Donation Centers</Button>
                  </Link>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        {/* Impact Section */}
        <section id="impact" className="py-16 md:py-20 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-sm font-semibold">
                  <BarChart3 className="mr-1 h-3.5 w-3.5 text-primary" />
                  Environmental Impact
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Making a Difference Together
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Track your environmental impact and earn rewards for your contributions.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Waste Diverted from Landfills</CardTitle>
                  <Recycle className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">24,568 kg</div>
                  <p className="text-xs text-muted-foreground">+20.1% from last month</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">CO₂ Emissions Prevented</CardTitle>
                  <Leaf className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">12,345 kg</div>
                  <p className="text-xs text-muted-foreground">+15.3% from last month</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Active Community Members</CardTitle>
                  <Users className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">5,280</div>
                  <p className="text-xs text-muted-foreground">+32.5% from last month</p>
                </CardContent>
              </Card>
            </div>
            <div className="mt-12">
              <Card>
                <CardHeader>
                  <CardTitle>Gamification & Eco-Rewards</CardTitle>
                  <CardDescription>
                    Earn badges, climb leaderboards, and receive eco-credits for your contributions
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <h3 className="text-lg font-medium">Achievement Badges</h3>
                      <div className="grid grid-cols-4 gap-4">
                        <div className="flex flex-col items-center">
                          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                            <Award className="h-6 w-6 text-primary" />
                          </div>
                          <span className="mt-1 text-xs">Beginner</span>
                        </div>
                        <div className="flex flex-col items-center">
                          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/20">
                            <Award className="h-6 w-6 text-primary" />
                          </div>
                          <span className="mt-1 text-xs">Intermediate</span>
                        </div>
                        <div className="flex flex-col items-center">
                          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/30">
                            <Award className="h-6 w-6 text-primary" />
                          </div>
                          <span className="mt-1 text-xs">Advanced</span>
                        </div>
                        <div className="flex flex-col items-center">
                          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/40">
                            <Award className="h-6 w-6 text-primary" />
                          </div>
                          <span className="mt-1 text-xs">Expert</span>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <h3 className="text-lg font-medium">Eco-Credits System</h3>
                      <div className="rounded-lg border p-4">
                        <div className="flex justify-between items-center mb-2">
                          <span className="font-medium">Your Eco-Credits</span>
                          <span className="text-xl font-bold text-primary">1,250</span>
                        </div>
                        <p className="text-sm text-muted-foreground mb-4">
                          Redeem your eco-credits for discounts on sustainable products and services.
                        </p>
                        <Link href="/rewards">
                          <Button variant="outline" className="w-full">
                            View Rewards
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-20">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Join the Waste-to-Wealth Movement
                </h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Start transforming your waste into valuable products today and make a positive impact on our planet.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/register">
                  <Button size="lg" className="gap-1">
                    Get Started <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button size="lg" variant="outline">
                    Contact Us
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t bg-muted">
        <div className="container px-4 py-12 md:px-6">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Recycle className="h-5 w-5 text-primary" />
                <span className="text-lg font-bold">Waste-to-Wealth AI</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Transforming waste into valuable products through AI-powered solutions.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-sm font-medium">Platform</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#how-it-works" className="text-muted-foreground hover:text-foreground">
                    How It Works
                  </Link>
                </li>
                <li>
                  <Link href="#waste-types" className="text-muted-foreground hover:text-foreground">
                    Waste Types
                  </Link>
                </li>
                <li>
                  <Link href="#marketplace" className="text-muted-foreground hover:text-foreground">
                    Marketplace
                  </Link>
                </li>
                <li>
                  <Link href="#impact" className="text-muted-foreground hover:text-foreground">
                    Impact
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-sm font-medium">Resources</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/blog" className="text-muted-foreground hover:text-foreground">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/tutorials" className="text-muted-foreground hover:text-foreground">
                    Tutorials
                  </Link>
                </li>
                <li>
                  <Link href="/case-studies" className="text-muted-foreground hover:text-foreground">
                    Case Studies
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className="text-muted-foreground hover:text-foreground">
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-sm font-medium">Company</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/about" className="text-muted-foreground hover:text-foreground">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-muted-foreground hover:text-foreground">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="text-muted-foreground hover:text-foreground">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="text-muted-foreground hover:text-foreground">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
            <p>© {new Date().getFullYear()} Waste-to-Wealth AI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

