"use client"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Recycle, Camera, Upload, Utensils, Shirt, Droplet, ArrowLeft, Check, Info, Loader2 } from "lucide-react"

export default function ScanPage() {
  const [activeTab, setActiveTab] = useState("camera")
  const [isScanning, setIsScanning] = useState(false)
  const [scanResult, setScanResult] = useState(null)
  const [cameraPermission, setCameraPermission] = useState(false)
  const videoRef = useRef(null)
  const canvasRef = useRef(null)

  // Simulate camera initialization
  useEffect(() => {
    if (activeTab === "camera" && !cameraPermission) {
      // In a real app, this would request camera permissions
      const timer = setTimeout(() => {
        setCameraPermission(true)
      }, 1000)

      return () => clearTimeout(timer)
    }
  }, [activeTab, cameraPermission])

  // Simulate scanning process
  const handleScan = () => {
    setIsScanning(true)

    // Simulate AI processing delay
    setTimeout(() => {
      // Mock results - in a real app, this would come from AI analysis
      const mockResults = [
        {
          type: "food",
          name: "Vegetable Scraps",
          confidence: 0.92,
          recommendations: [
            { title: "Compost", description: "Convert into nutrient-rich soil" },
            { title: "Vegetable Stock", description: "Create flavorful cooking base" },
            { title: "Animal Feed", description: "Provide to local farms" },
          ],
        },
        {
          type: "clothing",
          name: "Cotton T-Shirt",
          confidence: 0.89,
          recommendations: [
            { title: "Upcycle into Bag", description: "Convert into a reusable tote" },
            { title: "Cleaning Rags", description: "Cut into cleaning cloths" },
            { title: "Fabric Donation", description: "Donate to textile recyclers" },
          ],
        },
        {
          type: "plastic",
          name: "PET Plastic Bottle",
          confidence: 0.95,
          recommendations: [
            { title: "Recycle", description: "Clean and place in recycling bin" },
            { title: "3D Printing Filament", description: "Convert into printing material" },
            { title: "Craft Projects", description: "Use for DIY planters or organizers" },
          ],
        },
      ]

      // Randomly select one of the mock results
      const randomIndex = Math.floor(Math.random() * mockResults.length)
      setScanResult(mockResults[randomIndex])
      setIsScanning(false)
    }, 3000)
  }

  const resetScan = () => {
    setScanResult(null)
  }

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
          <div className="flex items-center gap-4">
            <Link href="/dashboard">
              <Button variant="ghost" size="sm">
                Dashboard
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1 container py-8">
        <Link href="/dashboard" className="flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6">
          <ArrowLeft className="h-4 w-4" />
          Back to Dashboard
        </Link>

        <div className="max-w-2xl mx-auto">
          <h1 className="text-3xl font-bold mb-6">Scan & Classify Waste</h1>

          {!scanResult ? (
            <>
              <Tabs defaultValue="camera" value={activeTab} onValueChange={setActiveTab} className="w-full mb-6">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="camera" className="flex items-center gap-2">
                    <Camera className="h-4 w-4" />
                    <span>Camera</span>
                  </TabsTrigger>
                  <TabsTrigger value="upload" className="flex items-center gap-2">
                    <Upload className="h-4 w-4" />
                    <span>Upload Image</span>
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="camera" className="mt-4">
                  <Card>
                    <CardHeader>
                      <CardTitle>Camera Scan</CardTitle>
                      <CardDescription>Point your camera at the waste item to classify it</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="relative aspect-video bg-muted rounded-md overflow-hidden">
                        {cameraPermission ? (
                          <div className="absolute inset-0 flex items-center justify-center">
                            <video
                              ref={videoRef}
                              className="absolute inset-0 w-full h-full object-cover"
                              autoPlay
                              playsInline
                              muted
                            />
                            <canvas ref={canvasRef} className="absolute inset-0 w-full h-full object-cover opacity-0" />

                            {isScanning && (
                              <div className="absolute inset-0 bg-background/50 flex items-center justify-center">
                                <div className="flex flex-col items-center gap-2">
                                  <Loader2 className="h-8 w-8 text-primary animate-spin" />
                                  <p className="font-medium">Analyzing waste...</p>
                                </div>
                              </div>
                            )}

                            {/* Scanning guide overlay */}
                            {!isScanning && (
                              <div className="absolute inset-0 pointer-events-none">
                                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 border-2 border-primary rounded-lg"></div>
                                <div className="absolute bottom-4 left-0 right-0 text-center text-sm text-primary font-medium">
                                  Center the waste item in the box
                                </div>
                              </div>
                            )}
                          </div>
                        ) : (
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="flex flex-col items-center gap-2">
                              <Loader2 className="h-8 w-8 text-primary animate-spin" />
                              <p className="font-medium">Requesting camera access...</p>
                            </div>
                          </div>
                        )}
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full" onClick={handleScan} disabled={isScanning || !cameraPermission}>
                        {isScanning ? (
                          <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Scanning...
                          </>
                        ) : (
                          <>
                            <Camera className="mr-2 h-4 w-4" />
                            Scan Waste
                          </>
                        )}
                      </Button>
                    </CardFooter>
                  </Card>
                </TabsContent>
                <TabsContent value="upload" className="mt-4">
                  <Card>
                    <CardHeader>
                      <CardTitle>Upload Image</CardTitle>
                      <CardDescription>Upload an image of the waste item to classify it</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="border-2 border-dashed border-muted-foreground/25 rounded-md p-8 text-center">
                        <div className="flex flex-col items-center gap-4">
                          <Upload className="h-8 w-8 text-muted-foreground" />
                          <div>
                            <p className="font-medium">Drag and drop an image here</p>
                            <p className="text-sm text-muted-foreground">or click to browse files</p>
                          </div>
                          <input type="file" className="hidden" accept="image/*" />
                          <Button
                            variant="outline"
                            onClick={() => document.querySelector('input[type="file"]').click()}
                          >
                            Select Image
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full" onClick={handleScan} disabled={isScanning}>
                        {isScanning ? (
                          <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Analyzing...
                          </>
                        ) : (
                          <>
                            <Upload className="mr-2 h-4 w-4" />
                            Analyze Image
                          </>
                        )}
                      </Button>
                    </CardFooter>
                  </Card>
                </TabsContent>
              </Tabs>

              <div className="space-y-4">
                <h2 className="text-xl font-medium">Scanning Tips</h2>
                <div className="grid gap-3">
                  <div className="flex items-start gap-3">
                    <div className="rounded-full bg-primary/20 p-1 mt-0.5">
                      <Info className="h-4 w-4 text-primary" />
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Ensure good lighting for accurate waste classification
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="rounded-full bg-primary/20 p-1 mt-0.5">
                      <Info className="h-4 w-4 text-primary" />
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Place the waste item against a plain background if possible
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="rounded-full bg-primary/20 p-1 mt-0.5">
                      <Info className="h-4 w-4 text-primary" />
                    </div>
                    <p className="text-sm text-muted-foreground">
                      For mixed waste, scan each item separately for best results
                    </p>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Scan Results</CardTitle>
                    <CardDescription>AI classification and upcycling recommendations</CardDescription>
                  </div>
                  <Badge variant="outline" className="flex items-center gap-1">
                    {scanResult.type === "food" && <Utensils className="h-3 w-3" />}
                    {scanResult.type === "clothing" && <Shirt className="h-3 w-3" />}
                    {scanResult.type === "plastic" && <Droplet className="h-3 w-3" />}
                    <span className="capitalize">{scanResult.type} Waste</span>
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="relative aspect-square w-full md:w-1/3 bg-muted rounded-md overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=300&width=300"
                      alt="Scanned waste item"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1 space-y-4">
                    <div>
                      <h3 className="text-xl font-bold">{scanResult.name}</h3>
                      <div className="flex items-center gap-2 mt-1">
                        <div className="text-sm text-muted-foreground">AI Confidence:</div>
                        <div className="flex items-center gap-1">
                          <div className="h-2 w-24 bg-muted rounded-full overflow-hidden">
                            <div
                              className="h-full bg-primary"
                              style={{ width: `${scanResult.confidence * 100}%` }}
                            ></div>
                          </div>
                          <span className="text-sm font-medium">{Math.round(scanResult.confidence * 100)}%</span>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <h4 className="font-medium">Upcycling Recommendations</h4>
                      <div className="space-y-3">
                        {scanResult.recommendations.map((rec, index) => (
                          <div key={index} className="flex items-start gap-3 rounded-lg border p-3">
                            <div className="rounded-full bg-primary/20 p-1 mt-0.5">
                              <Check className="h-4 w-4 text-primary" />
                            </div>
                            <div>
                              <h5 className="font-medium">{rec.title}</h5>
                              <p className="text-sm text-muted-foreground">{rec.description}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="rounded-lg bg-muted p-4">
                  <h4 className="font-medium mb-2">Environmental Impact</h4>
                  <p className="text-sm text-muted-foreground">
                    By upcycling this {scanResult.type} waste, you can help reduce landfill waste and conserve
                    resources.
                    {scanResult.type === "food" &&
                      " Food waste in landfills produces methane, a potent greenhouse gas."}
                    {scanResult.type === "clothing" &&
                      " The fashion industry is one of the largest polluters globally."}
                    {scanResult.type === "plastic" &&
                      " Plastic waste can take hundreds of years to decompose in nature."}
                  </p>
                </div>
              </CardContent>
              <CardFooter className="flex flex-col sm:flex-row gap-3">
                <Button className="w-full sm:w-auto" asChild>
                  <Link href={`/tutorials/${scanResult.type}/${scanResult.name.toLowerCase().replace(/\s+/g, "-")}`}>
                    View Detailed Upcycling Guide
                  </Link>
                </Button>
                <Button variant="outline" className="w-full sm:w-auto" onClick={resetScan}>
                  Scan Another Item
                </Button>
              </CardFooter>
            </Card>
          )}
        </div>
      </main>

      <footer className="border-t bg-muted">
        <div className="container px-4 py-6 md:px-6 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Waste-to-Wealth AI. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

