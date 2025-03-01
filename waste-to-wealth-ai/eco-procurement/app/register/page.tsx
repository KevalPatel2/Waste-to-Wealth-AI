"use client"

import { useState } from "react"
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Building2, Shield, ArrowLeft } from "lucide-react"

export default function RegisterPage() {
  const searchParams = useSearchParams()
  const defaultType = searchParams.get("type") || "vendor"
  const [activeTab, setActiveTab] = useState(defaultType)

  return (
    <div className="container py-10 max-w-md">
      <Link href="/" className="flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6">
        <ArrowLeft className="h-4 w-4" />
        Back to Home
      </Link>

      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Create an Account</CardTitle>
          <CardDescription>Register to access the EcoProcure platform</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue={defaultType} value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid grid-cols-2 mb-6">
              <TabsTrigger value="vendor" className="flex items-center gap-2">
                <Building2 className="h-4 w-4" />
                Vendor
              </TabsTrigger>
              <TabsTrigger value="agency" className="flex items-center gap-2">
                <Shield className="h-4 w-4" />
                Agency
              </TabsTrigger>
            </TabsList>

            <TabsContent value="vendor">
              <form className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="company-name">Company Name</Label>
                  <Input id="company-name" placeholder="Enter your company name" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="business-type">Business Type</Label>
                  <RadioGroup defaultValue="manufacturer">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="manufacturer" id="manufacturer" />
                      <Label htmlFor="manufacturer">Manufacturer</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="distributor" id="distributor" />
                      <Label htmlFor="distributor">Distributor</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="service-provider" id="service-provider" />
                      <Label htmlFor="service-provider">Service Provider</Label>
                    </div>
                  </RadioGroup>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="vendor-email">Email</Label>
                  <Input id="vendor-email" type="email" placeholder="Enter your email" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="vendor-password">Password</Label>
                  <Input id="vendor-password" type="password" placeholder="Create a password" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="vendor-confirm-password">Confirm Password</Label>
                  <Input id="vendor-confirm-password" type="password" placeholder="Confirm your password" />
                </div>
              </form>
            </TabsContent>

            <TabsContent value="agency">
              <form className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="agency-name">Agency Name</Label>
                  <Input id="agency-name" placeholder="Enter your agency name" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="agency-type">Agency Type</Label>
                  <RadioGroup defaultValue="federal">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="federal" id="federal" />
                      <Label htmlFor="federal">Federal</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="state" id="state" />
                      <Label htmlFor="state">State</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="local" id="local" />
                      <Label htmlFor="local">Local</Label>
                    </div>
                  </RadioGroup>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="agency-email">Email</Label>
                  <Input id="agency-email" type="email" placeholder="Enter your email" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="agency-password">Password</Label>
                  <Input id="agency-password" type="password" placeholder="Create a password" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="agency-confirm-password">Confirm Password</Label>
                  <Input id="agency-confirm-password" type="password" placeholder="Confirm your password" />
                </div>
              </form>
            </TabsContent>
          </Tabs>
        </CardContent>
        <CardFooter>
          <Button className="w-full">Create Account</Button>
        </CardFooter>
      </Card>

      <div className="text-center mt-6">
        <p className="text-sm text-muted-foreground">
          Already have an account?{" "}
          <Link href="/login" className="text-primary hover:underline">
            Log in
          </Link>
        </p>
      </div>
    </div>
  )
}

