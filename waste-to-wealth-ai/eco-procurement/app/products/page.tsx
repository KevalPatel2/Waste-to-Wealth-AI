"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Leaf, Search, Filter, ArrowUpDown } from "lucide-react"

// Sample product data
const products = [
  {
    id: 1,
    name: "Eco-Friendly Office Paper",
    description: "100% recycled paper for everyday office use",
    price: 45.99,
    unit: "per case",
    vendor: "GreenPaper Co.",
    image: "/placeholder.svg?height=200&width=200",
    sustainability: {
      recyclable: true,
      lowCarbon: true,
      energyEfficient: false,
      waterConservation: false,
      reducedPackaging: true,
      sustainableSupplyChain: true,
      biodegradable: true,
      nonToxic: true,
    },
    carbonFootprint: 25,
    traditionalPrice: 39.99,
    lifespan: 1,
    traditionalLifespan: 1,
  },
  {
    id: 2,
    name: "Energy-Efficient LED Lighting",
    description: "Long-lasting LED office lighting with minimal energy consumption",
    price: 129.99,
    unit: "per fixture",
    vendor: "BrightFuture Lighting",
    image: "/placeholder.svg?height=200&width=200",
    sustainability: {
      recyclable: true,
      lowCarbon: true,
      energyEfficient: true,
      waterConservation: false,
      reducedPackaging: false,
      sustainableSupplyChain: true,
      biodegradable: false,
      nonToxic: true,
    },
    carbonFootprint: 15,
    traditionalPrice: 89.99,
    lifespan: 50000,
    traditionalLifespan: 10000,
  },
  {
    id: 3,
    name: "Biodegradable Cleaning Supplies",
    description: "Environmentally friendly cleaning products for office use",
    price: 32.5,
    unit: "per set",
    vendor: "CleanGreen Solutions",
    image: "/placeholder.svg?height=200&width=200",
    sustainability: {
      recyclable: true,
      lowCarbon: true,
      energyEfficient: false,
      waterConservation: true,
      reducedPackaging: true,
      sustainableSupplyChain: true,
      biodegradable: true,
      nonToxic: true,
    },
    carbonFootprint: 10,
    traditionalPrice: 25.99,
    lifespan: 1,
    traditionalLifespan: 1,
  },
  {
    id: 4,
    name: "Recycled Plastic Office Furniture",
    description: "Durable office chairs made from recycled ocean plastic",
    price: 249.99,
    unit: "per chair",
    vendor: "OceanWare Furniture",
    image: "/placeholder.svg?height=200&width=200",
    sustainability: {
      recyclable: true,
      lowCarbon: true,
      energyEfficient: false,
      waterConservation: false,
      reducedPackaging: true,
      sustainableSupplyChain: true,
      biodegradable: false,
      nonToxic: true,
    },
    carbonFootprint: 35,
    traditionalPrice: 199.99,
    lifespan: 10,
    traditionalLifespan: 5,
  },
  {
    id: 5,
    name: "Solar-Powered Charging Station",
    description: "Renewable energy charging station for office devices",
    price: 189.99,
    unit: "per unit",
    vendor: "SolarTech Innovations",
    image: "/placeholder.svg?height=200&width=200",
    sustainability: {
      recyclable: true,
      lowCarbon: true,
      energyEfficient: true,
      waterConservation: false,
      reducedPackaging: false,
      sustainableSupplyChain: true,
      biodegradable: false,
      nonToxic: true,
    },
    carbonFootprint: 5,
    traditionalPrice: 149.99,
    lifespan: 8,
    traditionalLifespan: 3,
  },
  {
    id: 6,
    name: "Water-Efficient Bathroom Fixtures",
    description: "Low-flow faucets and toilets for government facilities",
    price: 299.99,
    unit: "per set",
    vendor: "AquaSave Systems",
    image: "/placeholder.svg?height=200&width=200",
    sustainability: {
      recyclable: true,
      lowCarbon: false,
      energyEfficient: false,
      waterConservation: true,
      reducedPackaging: true,
      sustainableSupplyChain: true,
      biodegradable: false,
      nonToxic: true,
    },
    carbonFootprint: 30,
    traditionalPrice: 249.99,
    lifespan: 15,
    traditionalLifespan: 10,
  },
]

export default function ProductsPage() {
  const [filters, setFilters] = useState({
    search: "",
    recyclable: false,
    lowCarbon: false,
    energyEfficient: false,
    waterConservation: false,
    reducedPackaging: false,
    sustainableSupplyChain: false,
    biodegradable: false,
    nonToxic: false,
    maxCarbonFootprint: 100,
  })

  const [sortBy, setSortBy] = useState("relevance")

  const handleFilterChange = (key, value) => {
    setFilters((prev) => ({
      ...prev,
      [key]: value,
    }))
  }

  // Filter products based on selected criteria
  const filteredProducts = products
    .filter((product) => {
      // Search filter
      if (
        filters.search &&
        !product.name.toLowerCase().includes(filters.search.toLowerCase()) &&
        !product.description.toLowerCase().includes(filters.search.toLowerCase())
      ) {
        return false
      }

      // Sustainability criteria filters
      if (filters.recyclable && !product.sustainability.recyclable) return false
      if (filters.lowCarbon && !product.sustainability.lowCarbon) return false
      if (filters.energyEfficient && !product.sustainability.energyEfficient) return false
      if (filters.waterConservation && !product.sustainability.waterConservation) return false
      if (filters.reducedPackaging && !product.sustainability.reducedPackaging) return false
      if (filters.sustainableSupplyChain && !product.sustainability.sustainableSupplyChain) return false
      if (filters.biodegradable && !product.sustainability.biodegradable) return false
      if (filters.nonToxic && !product.sustainability.nonToxic) return false

      // Carbon footprint filter
      if (product.carbonFootprint > filters.maxCarbonFootprint) return false

      return true
    })
    .sort((a, b) => {
      switch (sortBy) {
        case "price-low":
          return a.price - b.price
        case "price-high":
          return b.price - a.price
        case "carbon-low":
          return a.carbonFootprint - b.carbonFootprint
        case "savings-high":
          const aSavings = calculateLifetimeSavings(a)
          const bSavings = calculateLifetimeSavings(b)
          return bSavings - aSavings
        default:
          return 0
      }
    })

  // Calculate lifetime savings compared to traditional products
  const calculateLifetimeSavings = (product) => {
    const ecoLifetimeCost = product.price * (product.lifespan === 1 ? 1 : 1)
    const traditionalLifetimeCost = product.traditionalPrice * (product.lifespan / product.traditionalLifespan || 1)
    return traditionalLifetimeCost - ecoLifetimeCost
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-primary py-4">
        <div className="container flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2">
            <Leaf className="h-6 w-6 text-primary-foreground" />
            <h1 className="text-2xl font-bold text-primary-foreground">EcoProcure</h1>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/products" className="text-primary-foreground hover:text-primary-foreground/80 font-medium">
              Products
            </Link>
            <Link href="/vendors" className="text-primary-foreground hover:text-primary-foreground/80">
              Vendors
            </Link>
            <Link href="/dashboard" className="text-primary-foreground hover:text-primary-foreground/80">
              Dashboard
            </Link>
          </nav>
          <div>
            <Button variant="outline" className="bg-white text-primary hover:bg-white/90">
              Agency Dashboard
            </Button>
          </div>
        </div>
      </header>

      <main className="container py-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Filters sidebar */}
          <aside className="w-full md:w-64 shrink-0">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Filter className="h-5 w-5" />
                  Filters
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="search">Search Products</Label>
                  <div className="relative">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="search"
                      placeholder="Search..."
                      className="pl-8"
                      value={filters.search}
                      onChange={(e) => handleFilterChange("search", e.target.value)}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Sustainability Criteria</Label>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="recyclable"
                        checked={filters.recyclable}
                        onCheckedChange={(checked) => handleFilterChange("recyclable", checked)}
                      />
                      <Label htmlFor="recyclable" className="font-normal">
                        Recyclable Materials
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="lowCarbon"
                        checked={filters.lowCarbon}
                        onCheckedChange={(checked) => handleFilterChange("lowCarbon", checked)}
                      />
                      <Label htmlFor="lowCarbon" className="font-normal">
                        Low Carbon Footprint
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="energyEfficient"
                        checked={filters.energyEfficient}
                        onCheckedChange={(checked) => handleFilterChange("energyEfficient", checked)}
                      />
                      <Label htmlFor="energyEfficient" className="font-normal">
                        Energy Efficient
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="waterConservation"
                        checked={filters.waterConservation}
                        onCheckedChange={(checked) => handleFilterChange("waterConservation", checked)}
                      />
                      <Label htmlFor="waterConservation" className="font-normal">
                        Water Conservation
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="reducedPackaging"
                        checked={filters.reducedPackaging}
                        onCheckedChange={(checked) => handleFilterChange("reducedPackaging", checked)}
                      />
                      <Label htmlFor="reducedPackaging" className="font-normal">
                        Reduced Packaging
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="sustainableSupplyChain"
                        checked={filters.sustainableSupplyChain}
                        onCheckedChange={(checked) => handleFilterChange("sustainableSupplyChain", checked)}
                      />
                      <Label htmlFor="sustainableSupplyChain" className="font-normal">
                        Sustainable Supply Chain
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="biodegradable"
                        checked={filters.biodegradable}
                        onCheckedChange={(checked) => handleFilterChange("biodegradable", checked)}
                      />
                      <Label htmlFor="biodegradable" className="font-normal">
                        Biodegradable
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="nonToxic"
                        checked={filters.nonToxic}
                        onCheckedChange={(checked) => handleFilterChange("nonToxic", checked)}
                      />
                      <Label htmlFor="nonToxic" className="font-normal">
                        Non-Toxic
                      </Label>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between">
                    <Label htmlFor="carbonFootprint">Max Carbon Footprint</Label>
                    <span className="text-sm text-muted-foreground">{filters.maxCarbonFootprint} kg CO2e</span>
                  </div>
                  <Slider
                    id="carbonFootprint"
                    min={0}
                    max={100}
                    step={5}
                    value={[filters.maxCarbonFootprint]}
                    onValueChange={(value) => handleFilterChange("maxCarbonFootprint", value[0])}
                  />
                </div>
              </CardContent>
              <CardFooter>
                <Button
                  variant="outline"
                  className="w-full"
                  onClick={() =>
                    setFilters({
                      search: "",
                      recyclable: false,
                      lowCarbon: false,
                      energyEfficient: false,
                      waterConservation: false,
                      reducedPackaging: false,
                      sustainableSupplyChain: false,
                      biodegradable: false,
                      nonToxic: false,
                      maxCarbonFootprint: 100,
                    })
                  }
                >
                  Reset Filters
                </Button>
              </CardFooter>
            </Card>
          </aside>

          {/* Product listing */}
          <div className="flex-1">
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-2xl font-bold">Sustainable Products</h1>
              <div className="flex items-center gap-2">
                <Label htmlFor="sort" className="whitespace-nowrap">
                  Sort by:
                </Label>
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger id="sort" className="w-[180px]">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="relevance">Relevance</SelectItem>
                    <SelectItem value="price-low">Price: Low to High</SelectItem>
                    <SelectItem value="price-high">Price: High to Low</SelectItem>
                    <SelectItem value="carbon-low">Lowest Carbon Footprint</SelectItem>
                    <SelectItem value="savings-high">Highest Cost Savings</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.length > 0 ? (
                filteredProducts.map((product) => (
                  <Card key={product.id} className="overflow-hidden">
                    <div className="aspect-square relative">
                      <Image
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle>{product.name}</CardTitle>
                      <CardDescription>{product.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="font-medium">${product.price}</span>
                          <span className="text-muted-foreground">{product.unit}</span>
                        </div>
                        <div className="text-sm text-muted-foreground">Vendor: {product.vendor}</div>
                        <div className="flex items-center gap-1 text-sm">
                          <Leaf className="h-4 w-4 text-green-600" />
                          <span>Carbon Footprint: {product.carbonFootprint} kg CO2e</span>
                        </div>
                        <div className="flex flex-wrap gap-1 mt-2">
                          {product.sustainability.recyclable && (
                            <span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded-full">
                              Recyclable
                            </span>
                          )}
                          {product.sustainability.lowCarbon && (
                            <span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded-full">
                              Low Carbon
                            </span>
                          )}
                          {product.sustainability.energyEfficient && (
                            <span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded-full">
                              Energy Efficient
                            </span>
                          )}
                          {product.sustainability.waterConservation && (
                            <span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded-full">
                              Water Conservation
                            </span>
                          )}
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="flex gap-2">
                      <Button className="w-full">View Details</Button>
                      <Button variant="outline" className="shrink-0">
                        <ArrowUpDown className="h-4 w-4" />
                      </Button>
                    </CardFooter>
                  </Card>
                ))
              ) : (
                <div className="col-span-full text-center py-12">
                  <p className="text-muted-foreground">No products match your filter criteria.</p>
                  <Button
                    variant="link"
                    onClick={() =>
                      setFilters({
                        search: "",
                        recyclable: false,
                        energyEfficient: false,
                        waterConservation: false,
                        reducedPackaging: false,
                        sustainableSupplyChain: false,
                        biodegradable: false,
                        nonToxic: false,
                        maxCarbonFootprint: 100,
                        lowCarbon: false,
                      })
                    }
                  >
                    Reset filters
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

