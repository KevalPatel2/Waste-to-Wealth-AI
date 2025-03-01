"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Leaf, ArrowLeft, DollarSign, Clock, BarChart3, Droplets } from "lucide-react"

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
    energyUsage: 0,
    traditionalEnergyUsage: 0,
    waterUsage: 0,
    traditionalWaterUsage: 0,
    category: "Office Supplies",
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
    lifespan: 50000, // hours
    traditionalLifespan: 10000, // hours
    energyUsage: 12, // watts
    traditionalEnergyUsage: 60, // watts
    waterUsage: 0,
    traditionalWaterUsage: 0,
    category: "Lighting",
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
    lifespan: 15, // years
    traditionalLifespan: 10, // years
    energyUsage: 0,
    traditionalEnergyUsage: 0,
    waterUsage: 1.5, // gallons per use
    traditionalWaterUsage: 3.5, // gallons per use
    category: "Plumbing",
  },
]

export default function ComparisonPage() {
  const [selectedProduct1, setSelectedProduct1] = useState(products[0].id.toString())
  const [selectedProduct2, setSelectedProduct2] = useState(products[1].id.toString())
  const [timeframe, setTimeframe] = useState("5")

  const product1 = products.find((p) => p.id.toString() === selectedProduct1)
  const product2 = products.find((p) => p.id.toString() === selectedProduct2)

  const calculateCostSavings = (product, years) => {
    if (!product) return { initialCost: 0, operatingCost: 0, totalCost: 0, savings: 0 }

    // Initial costs
    const ecoInitialCost = product.price
    const traditionalInitialCost = product.traditionalPrice

    // Calculate replacements needed
    const ecoReplacements = product.lifespan === 1 ? years : Math.ceil(years / product.lifespan)
    const traditionalReplacements =
      product.traditionalLifespan === 1 ? years : Math.ceil(years / product.traditionalLifespan)

    // Total product costs over time
    const ecoProductCost = ecoInitialCost * ecoReplacements
    const traditionalProductCost = traditionalInitialCost * traditionalReplacements

    // Energy costs (assuming $0.12 per kWh)
    const ecoEnergyCost = (product.energyUsage * 0.12 * 8760 * years) / 1000 // 8760 hours in a year
    const traditionalEnergyCost = (product.traditionalEnergyUsage * 0.12 * 8760 * years) / 1000

    // Water costs (assuming $0.01 per gallon, 1000 uses per year)
    const ecoWaterCost = product.waterUsage * 0.01 * 1000 * years
    const traditionalWaterCost = product.traditionalWaterUsage * 0.01 * 1000 * years

    // Operating costs
    const ecoOperatingCost = ecoEnergyCost + ecoWaterCost
    const traditionalOperatingCost = traditionalEnergyCost + traditionalWaterCost

    // Total costs
    const ecoTotalCost = ecoProductCost + ecoOperatingCost
    const traditionalTotalCost = traditionalProductCost + traditionalOperatingCost

    return {
      initialCost: ecoInitialCost,
      operatingCost: ecoOperatingCost,
      totalCost: ecoTotalCost,
      traditionalInitialCost: traditionalInitialCost,
      traditionalOperatingCost: traditionalOperatingCost,
      traditionalTotalCost: traditionalTotalCost,
      savings: traditionalTotalCost - ecoTotalCost,
    }
  }

  const years = Number.parseInt(timeframe)
  const product1Analysis = calculateCostSavings(product1, years)
  const product2Analysis = calculateCostSavings(product2, years)

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-primary py-4">
        <div className="container flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2">
            <Leaf className="h-6 w-6 text-primary-foreground" />
            <h1 className="text-2xl font-bold text-primary-foreground">EcoProcure</h1>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/products" className="text-primary-foreground hover:text-primary-foreground/80">
              Products
            </Link>
            <Link href="/comparison" className="text-primary-foreground hover:text-primary-foreground/80 font-medium">
              Cost Comparison
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
        <Link href="/products" className="flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6">
          <ArrowLeft className="h-4 w-4" />
          Back to Products
        </Link>

        <h1 className="text-3xl font-bold mb-8">Sustainable Product Cost Comparison</h1>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Select First Product</CardTitle>
              <CardDescription>Choose a sustainable product to analyze</CardDescription>
            </CardHeader>
            <CardContent>
              <Select value={selectedProduct1} onValueChange={setSelectedProduct1}>
                <SelectTrigger>
                  <SelectValue placeholder="Select a product" />
                </SelectTrigger>
                <SelectContent>
                  {products.map((product) => (
                    <SelectItem key={product.id} value={product.id.toString()}>
                      {product.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              {product1 && (
                <div className="mt-4 grid gap-4">
                  <div className="aspect-video relative rounded-lg overflow-hidden">
                    <Image
                      src={product1.image || "/placeholder.svg"}
                      alt={product1.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">{product1.name}</h3>
                    <p className="text-sm text-muted-foreground">{product1.description}</p>
                    <div className="mt-2 grid grid-cols-2 gap-2">
                      <div className="flex items-center gap-1">
                        <DollarSign className="h-4 w-4 text-muted-foreground" />
                        <span>
                          ${product1.price} {product1.unit}
                        </span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4 text-muted-foreground" />
                        <span>
                          Lifespan: {product1.lifespan} {product1.category === "Lighting" ? "hours" : "years"}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Select Second Product</CardTitle>
              <CardDescription>Choose another sustainable product to compare</CardDescription>
            </CardHeader>
            <CardContent>
              <Select value={selectedProduct2} onValueChange={setSelectedProduct2}>
                <SelectTrigger>
                  <SelectValue placeholder="Select a product" />
                </SelectTrigger>
                <SelectContent>
                  {products.map((product) => (
                    <SelectItem key={product.id} value={product.id.toString()}>
                      {product.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              {product2 && (
                <div className="mt-4 grid gap-4">
                  <div className="aspect-video relative rounded-lg overflow-hidden">
                    <Image
                      src={product2.image || "/placeholder.svg"}
                      alt={product2.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">{product2.name}</h3>
                    <p className="text-sm text-muted-foreground">{product2.description}</p>
                    <div className="mt-2 grid grid-cols-2 gap-2">
                      <div className="flex items-center gap-1">
                        <DollarSign className="h-4 w-4 text-muted-foreground" />
                        <span>
                          ${product2.price} {product2.unit}
                        </span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4 text-muted-foreground" />
                        <span>
                          Lifespan: {product2.lifespan} {product2.category === "Lighting" ? "hours" : "years"}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Analysis Timeframe</CardTitle>
            <CardDescription>Select the period for cost comparison analysis</CardDescription>
          </CardHeader>
          <CardContent>
            <Select value={timeframe} onValueChange={setTimeframe}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select years" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">1 Year</SelectItem>
                <SelectItem value="3">3 Years</SelectItem>
                <SelectItem value="5">5 Years</SelectItem>
                <SelectItem value="10">10 Years</SelectItem>
                <SelectItem value="15">15 Years</SelectItem>
                <SelectItem value="20">20 Years</SelectItem>
              </SelectContent>
            </Select>
          </CardContent>
        </Card>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Cost Analysis: {product1?.name}</CardTitle>
              <CardDescription>Comparison with traditional alternatives over {years} years</CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="summary">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="summary">Summary</TabsTrigger>
                  <TabsTrigger value="breakdown">Cost Breakdown</TabsTrigger>
                  <TabsTrigger value="environmental">Environmental</TabsTrigger>
                </TabsList>
                <TabsContent value="summary" className="pt-4">
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-muted p-4 rounded-lg">
                        <div className="text-sm text-muted-foreground">Total Cost (Sustainable)</div>
                        <div className="text-2xl font-bold">${product1Analysis.totalCost.toFixed(2)}</div>
                      </div>
                      <div className="bg-muted p-4 rounded-lg">
                        <div className="text-sm text-muted-foreground">Total Cost (Traditional)</div>
                        <div className="text-2xl font-bold">${product1Analysis.traditionalTotalCost.toFixed(2)}</div>
                      </div>
                    </div>
                    <div className="bg-primary/10 p-4 rounded-lg">
                      <div className="text-sm text-primary">Total Savings over {years} years</div>
                      <div className="text-2xl font-bold text-primary">${product1Analysis.savings.toFixed(2)}</div>
                      <div className="text-sm text-primary/80">
                        {product1Analysis.savings > 0
                          ? `${((product1Analysis.savings / product1Analysis.traditionalTotalCost) * 100).toFixed(1)}% less expensive than traditional alternatives`
                          : "Higher upfront cost but better for the environment"}
                      </div>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="breakdown" className="pt-4">
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <h3 className="font-medium mb-2">Sustainable Option</h3>
                        <ul className="space-y-2">
                          <li className="flex justify-between">
                            <span className="text-muted-foreground">Initial Cost:</span>
                            <span>${product1Analysis.initialCost.toFixed(2)}</span>
                          </li>
                          <li className="flex justify-between">
                            <span className="text-muted-foreground">Operating Cost:</span>
                            <span>${product1Analysis.operatingCost.toFixed(2)}</span>
                          </li>
                          <li className="flex justify-between font-medium">
                            <span>Total:</span>
                            <span>${product1Analysis.totalCost.toFixed(2)}</span>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="font-medium mb-2">Traditional Option</h3>
                        <ul className="space-y-2">
                          <li className="flex justify-between">
                            <span className="text-muted-foreground">Initial Cost:</span>
                            <span>${product1Analysis.traditionalInitialCost.toFixed(2)}</span>
                          </li>
                          <li className="flex justify-between">
                            <span className="text-muted-foreground">Operating Cost:</span>
                            <span>${product1Analysis.traditionalOperatingCost.toFixed(2)}</span>
                          </li>
                          <li className="flex justify-between font-medium">
                            <span>Total:</span>
                            <span>${product1Analysis.traditionalTotalCost.toFixed(2)}</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="environmental" className="pt-4">
                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <Leaf className="h-5 w-5 text-green-600" />
                      <span>Carbon Footprint: {product1?.carbonFootprint} kg CO2e</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <BarChart3 className="h-5 w-5 text-blue-600" />
                      <span>Energy Usage: {product1?.energyUsage} watts</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Droplets className="h-5 w-5 text-blue-600" />
                      <span>Water Usage: {product1?.waterUsage} gallons per use</span>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg">
                      <div className="font-medium text-green-800">Environmental Benefits</div>
                      <p className="text-sm text-green-700 mt-1">
                        Using this sustainable product instead of traditional alternatives saves approximately{" "}
                        {(((product1?.traditionalEnergyUsage - product1?.energyUsage) * 8760 * years) / 1000) * 0.7} kg
                        CO2e over {years} years.
                      </p>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Cost Analysis: {product2?.name}</CardTitle>
              <CardDescription>Comparison with traditional alternatives over {years} years</CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="summary">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="summary">Summary</TabsTrigger>
                  <TabsTrigger value="breakdown">Cost Breakdown</TabsTrigger>
                  <TabsTrigger value="environmental">Environmental</TabsTrigger>
                </TabsList>
                <TabsContent value="summary" className="pt-4">
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-muted p-4 rounded-lg">
                        <div className="text-sm text-muted-foreground">Total Cost (Sustainable)</div>
                        <div className="text-2xl font-bold">${product2Analysis.totalCost.toFixed(2)}</div>
                      </div>
                      <div className="bg-muted p-4 rounded-lg">
                        <div className="text-sm text-muted-foreground">Total Cost (Traditional)</div>
                        <div className="text-2xl font-bold">${product2Analysis.traditionalTotalCost.toFixed(2)}</div>
                      </div>
                    </div>
                    <div className="bg-primary/10 p-4 rounded-lg">
                      <div className="text-sm text-primary">Total Savings over {years} years</div>
                      <div className="text-2xl font-bold text-primary">${product2Analysis.savings.toFixed(2)}</div>
                      <div className="text-sm text-primary/80">
                        {product2Analysis.savings > 0
                          ? `${((product2Analysis.savings / product2Analysis.traditionalTotalCost) * 100).toFixed(1)}% less expensive than traditional alternatives`
                          : "Higher upfront cost but better for the environment"}
                      </div>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="breakdown" className="pt-4">
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <h3 className="font-medium mb-2">Sustainable Option</h3>
                        <ul className="space-y-2">
                          <li className="flex justify-between">
                            <span className="text-muted-foreground">Initial Cost:</span>
                            <span>${product2Analysis.initialCost.toFixed(2)}</span>
                          </li>
                          <li className="flex justify-between">
                            <span className="text-muted-foreground">Operating Cost:</span>
                            <span>${product2Analysis.operatingCost.toFixed(2)}</span>
                          </li>
                          <li className="flex justify-between font-medium">
                            <span>Total:</span>
                            <span>${product2Analysis.totalCost.toFixed(2)}</span>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="font-medium mb-2">Traditional Option</h3>
                        <ul className="space-y-2">
                          <li className="flex justify-between">
                            <span className="text-muted-foreground">Initial Cost:</span>
                            <span>${product2Analysis.traditionalInitialCost.toFixed(2)}</span>
                          </li>
                          <li className="flex justify-between">
                            <span className="text-muted-foreground">Operating Cost:</span>
                            <span>${product2Analysis.traditionalOperatingCost.toFixed(2)}</span>
                          </li>
                          <li className="flex justify-between font-medium">
                            <span>Total:</span>
                            <span>${product2Analysis.traditionalTotalCost.toFixed(2)}</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="environmental" className="pt-4">
                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <Leaf className="h-5 w-5 text-green-600" />
                      <span>Carbon Footprint: {product2?.carbonFootprint} kg CO2e</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <BarChart3 className="h-5 w-5 text-blue-600" />
                      <span>Energy Usage: {product2?.energyUsage} watts</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Droplets className="h-5 w-5 text-blue-600" />
                      <span>Water Usage: {product2?.waterUsage} gallons per use</span>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg">
                      <div className="font-medium text-green-800">Environmental Benefits</div>
                      <p className="text-sm text-green-700 mt-1">
                        Using this sustainable product instead of traditional alternatives saves approximately{" "}
                        {(((product2?.traditionalEnergyUsage - product2?.energyUsage) * 8760 * years) / 1000) * 0.7} kg
                        CO2e over {years} years.
                      </p>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Comparison Results</CardTitle>
            <CardDescription>Side-by-side comparison of both sustainable products</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3 px-4">Metric</th>
                    <th className="text-left py-3 px-4">{product1?.name}</th>
                    <th className="text-left py-3 px-4">{product2?.name}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="py-3 px-4 font-medium">Initial Cost</td>
                    <td className="py-3 px-4">${product1Analysis.initialCost.toFixed(2)}</td>
                    <td className="py-3 px-4">${product2Analysis.initialCost.toFixed(2)}</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-4 font-medium">Operating Cost ({years} years)</td>
                    <td className="py-3 px-4">${product1Analysis.operatingCost.toFixed(2)}</td>
                    <td className="py-3 px-4">${product2Analysis.operatingCost.toFixed(2)}</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-4 font-medium">Total Cost ({years} years)</td>
                    <td className="py-3 px-4">${product1Analysis.totalCost.toFixed(2)}</td>
                    <td className="py-3 px-4">${product2Analysis.totalCost.toFixed(2)}</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-4 font-medium">Savings vs. Traditional</td>
                    <td className="py-3 px-4 text-green-600">
                      ${product1Analysis.savings > 0 ? product1Analysis.savings.toFixed(2) : 0}
                    </td>
                    <td className="py-3 px-4 text-green-600">
                      ${product2Analysis.savings > 0 ? product2Analysis.savings.toFixed(2) : 0}
                    </td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-4 font-medium">Carbon Footprint</td>
                    <td className="py-3 px-4">{product1?.carbonFootprint} kg CO2e</td>
                    <td className="py-3 px-4">{product2?.carbonFootprint} kg CO2e</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-4 font-medium">Lifespan</td>
                    <td className="py-3 px-4">
                      {product1?.lifespan} {product1?.category === "Lighting" ? "hours" : "years"}
                    </td>
                    <td className="py-3 px-4">
                      {product2?.lifespan} {product2?.category === "Lighting" ? "hours" : "years"}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-6 p-4 bg-primary/10 rounded-lg">
              <h3 className="font-medium text-primary mb-2">Recommendation</h3>
              <p className="text-sm">
                {product1Analysis.savings > product2Analysis.savings
                  ? `Based on cost analysis over ${years} years, ${product1?.name} provides better long-term value with ${(product1Analysis.savings - product2Analysis.savings).toFixed(2)} more in savings compared to ${product2?.name}.`
                  : `Based on cost analysis over ${years} years, ${product2?.name} provides better long-term value with ${(product2Analysis.savings - product1Analysis.savings).toFixed(2)} more in savings compared to ${product1?.name}.`}
                {product1?.carbonFootprint < product2?.carbonFootprint
                  ? ` However, ${product1?.name} has a lower carbon footprint, which may be a priority for sustainability goals.`
                  : ` However, ${product2?.name} has a lower carbon footprint, which may be a priority for sustainability goals.`}
              </p>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}

