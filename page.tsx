"use client"
import type React from "react"
import { Heart, MapPin, Clock, Star, Phone, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Link from "next/link"
import { useState } from "react"

interface Review {
  id: number
  name: string
  rating: number
  comment: string
  date: string
}

export default function HomePage() {
  const [reviews, setReviews] = useState<Review[]>([])
  const [reviewForm, setReviewForm] = useState({
    name: "",
    rating: "",
    comment: "",
  })

  const handleReviewSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (reviewForm.name && reviewForm.rating && reviewForm.comment) {
      const newReview: Review = {
        id: Date.now(),
        name: reviewForm.name,
        rating: Number.parseInt(reviewForm.rating),
        comment: reviewForm.comment,
        date: new Date().toLocaleDateString(),
      }
      setReviews([newReview, ...reviews])
      setReviewForm({ name: "", rating: "", comment: "" })
    }
  }

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star key={i} className={`w-5 h-5 ${i < rating ? "text-orange-500 fill-current" : "text-gray-300"}`} />
    ))
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const headerOffset = 80
      const elementPosition = element.offsetTop
      const offsetPosition = elementPosition - headerOffset
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
    }
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-orange-100 bg-white sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">🐕</span>
            </div>
            <span className="text-2xl font-bold text-gray-900">Waggle</span>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("services")}
              className="text-gray-600 hover:text-orange-600 transition-colors font-medium"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-gray-600 hover:text-orange-600 transition-colors font-medium"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("pricing")}
              className="text-gray-600 hover:text-orange-600 transition-colors font-medium"
            >
              Pricing
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-gray-600 hover:text-orange-600 transition-colors font-medium"
            >
              Contact
            </button>
            <Link href="/dashboard" className="text-gray-600 hover:text-orange-600 transition-colors font-medium">
              Dashboard
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-orange-50 to-white">
        <div className="container mx-auto text-center max-w-4xl">
          <div className="inline-flex items-center px-4 py-2 bg-orange-100 rounded-full text-orange-700 text-sm font-medium mb-8">
            <MapPin className="w-4 h-4 mr-2" />
            Serving your neighborhood with love
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Your Dog's
            <span className="text-orange-500"> Best Friend</span>
            <br />
            While You're Away
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Professional, caring, and reliable dog walking services in your neighborhood. Your furry friend deserves the
            best care and exercise while you're busy.
          </p>
          <div className="flex items-center justify-center space-x-8 text-sm text-gray-500">
            <div className="flex items-center">
              <Star className="w-4 h-4 text-orange-500 mr-2" />
              Local neighborhood expert
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Tail-Wagging Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Every dog is unique, and so are their needs. I offer personalized care for your furry family member.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Link href="/book/quick-walk">
              <Card className="border-orange-100 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-2xl">⚡</span>
                  </div>
                  <CardTitle className="text-gray-900">Quick Walk</CardTitle>
                  <CardDescription>
                    Perfect for busy schedules or potty breaks. A brisk 15-minute jog and light jog session.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-center">
                      <Clock className="w-4 h-4 text-orange-500 mr-2" />
                      15 minutes
                    </li>
                    <li className="flex items-center">
                      <MapPin className="w-4 h-4 text-orange-500 mr-2" />
                      Around pond & back
                    </li>
                    <li className="flex items-center">
                      <Heart className="w-4 h-4 text-orange-500 mr-2" />
                      No treats included
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </Link>
            <Link href="/book/standard-walk">
              <Card className="border-orange-100 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-2xl">🚶‍♂️</span>
                  </div>
                  <CardTitle className="text-gray-900">Standard Walk</CardTitle>
                  <CardDescription>
                    Our most popular option! A 25-minute jog-walk-jog combo with time for sniffing and exploring.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-center">
                      <Clock className="w-4 h-4 text-orange-500 mr-2" />
                      25 minutes
                    </li>
                    <li className="flex items-center">
                      <MapPin className="w-4 h-4 text-orange-500 mr-2" />
                      Neighborhood & park
                    </li>
                    <li className="flex items-center">
                      <Heart className="w-4 h-4 text-orange-500 mr-2" />
                      Free treats included
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </Link>
            <Link href="/book/premium-walk">
              <Card className="border-orange-100 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-2xl">⭐</span>
                  </div>
                  <CardTitle className="text-gray-900">Premium Walk</CardTitle>
                  <CardDescription>
                    The ultimate experience! A full 35-minute walk-jog adventure with extra playtime and attention.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-center">
                      <Clock className="w-4 h-4 text-orange-500 mr-2" />
                      35 minutes
                    </li>
                    <li className="flex items-center">
                      <Star className="w-4 h-4 text-orange-500 mr-2" />
                      Pond, park & rest break
                    </li>
                    <li className="flex items-center">
                      <Heart className="w-4 h-4 text-orange-500 mr-2" />
                      Free treats & premium care
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-orange-50">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">About Waggle</h2>
              <p className="text-lg text-gray-600 mb-6">
                We are passionate about dogs and understand that every pup is special. With extensive experience caring
                for dogs of all sizes and temperaments, we treat every furry client like family.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Living right here in the neighborhood means we know all the best walking routes, dog-friendly spots, and
                we're always just around the corner when you need us.
              </p>
            </div>
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-orange-200 to-orange-300 rounded-2xl flex items-center justify-center">
                <span className="text-8xl">🐕‍🦺</span>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-lg shadow-lg">
                <div className="flex items-center space-x-2">
                  <Star className="w-5 h-5 text-orange-500 fill-current" />
                  <Star className="w-5 h-5 text-orange-500 fill-current" />
                  <Star className="w-5 h-5 text-orange-500 fill-current" />
                  <Star className="w-5 h-5 text-orange-500 fill-current" />
                  <Star className="w-5 h-5 text-orange-500 fill-current" />
                </div>
                <p className="text-sm text-gray-600 mt-1">Trusted by local families</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Customer Reviews</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Share your experience with Waggle dog walking services
            </p>
          </div>
          {/* Review Form */}
          <div className="max-w-2xl mx-auto mb-12">
            <Card className="border-orange-200 bg-orange-50">
              <CardHeader>
                <CardTitle className="text-gray-900">Leave a Review</CardTitle>
                <CardDescription>Tell us about your experience with our dog walking services</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleReviewSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Your Name
                      </label>
                      <Input
                        id="name"
                        value={reviewForm.name}
                        onChange={(e) => setReviewForm({ ...reviewForm, name: e.target.value })}
                        placeholder="Enter your name"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="rating" className="block text-sm font-medium text-gray-700 mb-1">
                        Rating
                      </label>
                      <Select onValueChange={(value) => setReviewForm({ ...reviewForm, rating: value })}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select rating" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="5">5 Stars - Excellent</SelectItem>
                          <SelectItem value="4">4 Stars - Very Good</SelectItem>
                          <SelectItem value="3">3 Stars - Good</SelectItem>
                          <SelectItem value="2">2 Stars - Fair</SelectItem>
                          <SelectItem value="1">1 Star - Poor</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div>
                    <label htmlFor="comment" className="block text-sm font-medium text-gray-700 mb-1">
                      Your Review
                    </label>
                    <Textarea
                      id="comment"
                      value={reviewForm.comment}
                      onChange={(e) => setReviewForm({ ...reviewForm, comment: e.target.value })}
                      placeholder="Tell us about your experience..."
                      rows={4}
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full bg-orange-500 hover:bg-orange-600 text-white">
                    Submit Review
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
          {/* Display Reviews */}
          {reviews.length > 0 && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {reviews.map((review) => (
                <Card key={review.id} className="border-orange-100">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="flex space-x-1">{renderStars(review.rating)}</div>
                    </div>
                    <p className="text-gray-600 mb-4">"{review.comment}"</p>
                    <div className="flex justify-between items-center text-sm text-gray-500">
                      <span>- {review.name}</span>
                      <span>{review.date}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
          {reviews.length === 0 && (
            <div className="text-center text-gray-500">
              <p>No reviews yet. Be the first to leave a review!</p>
            </div>
          )}
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Simple, Fair Pricing</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Quality care at affordable rates. No hidden fees, just honest pricing for peace of mind.
            </p>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Cash Only</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="border-orange-100">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl text-gray-900">Quick Walk</CardTitle>
                <div className="text-4xl font-bold text-orange-500 mt-4">$12</div>
                <CardDescription>Perfect for busy days or high-energy dogs needing a workout</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-600">
                    <Clock className="w-4 h-4 text-orange-500 mr-3" />
                    15 minutes of jogging
                  </li>
                  <li className="flex items-center text-gray-600">
                    <Phone className="w-4 h-4 text-orange-500 mr-3" />
                    Quick text update
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card className="border-orange-300 ring-2 ring-orange-200 relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                  Most Popular
                </span>
              </div>
              <CardHeader className="text-center">
                <CardTitle className="text-2xl text-gray-900">Standard Walk</CardTitle>
                <div className="text-4xl font-bold text-orange-500 mt-4">$18</div>
                <CardDescription>Ideal for most dogs and daily exercise needs</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-600">
                    <Clock className="w-4 h-4 text-orange-500 mr-3" />
                    25 minutes: jog-walk-jog
                  </li>
                  <li className="flex items-center text-gray-600">
                    <Heart className="w-4 h-4 text-orange-500 mr-3" />
                    Free treats included
                  </li>
                  <li className="flex items-center text-gray-600">
                    <Phone className="w-4 h-4 text-orange-500 mr-3" />
                    Walk report
                  </li>
                  <li className="flex items-center text-gray-600">
                    <MapPin className="w-4 h-4 text-orange-500 mr-3" />
                    Neighborhood & park route
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card className="border-orange-100">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl text-gray-900">Premium Walk</CardTitle>
                <div className="text-4xl font-bold text-orange-500 mt-4">$25</div>
                <CardDescription>The ultimate walking experience for your pup</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-600">
                    <Clock className="w-4 h-4 text-orange-500 mr-3" />
                    35 minutes: walk & jog combo
                  </li>
                  <li className="flex items-center text-gray-600">
                    <Star className="w-4 h-4 text-orange-500 mr-3" />
                    Free treats & 2-min rest break
                  </li>
                  <li className="flex items-center text-gray-600">
                    <Phone className="w-4 h-4 text-orange-500 mr-3" />
                    Detailed walk report
                  </li>
                  <li className="flex items-center text-gray-600">
                    <Heart className="w-4 h-4 text-orange-500 mr-3" />
                    Pond, park & neighborhood
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-8">
            <p className="text-gray-600">
              <strong>Weekly packages available!</strong> Save 10% when you book 5+ walks per week.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-gradient-to-br from-orange-500 to-orange-600">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Give Your Dog the Best?</h2>
            <p className="text-xl text-orange-100 max-w-2xl mx-auto">
              Get in touch today to schedule a meet & greet. I'd love to meet you and your furry friend!
            </p>
          </div>
          <div className="max-w-2xl mx-auto">
            <div className="space-y-6">
              <div className="flex items-center justify-center text-white">
                <Phone className="w-6 h-6 mr-4" />
                <div className="text-center">
                  <div className="font-semibold">Call or Text</div>
                  <div className="text-orange-100 text-lg">918-230-2790</div>
                </div>
              </div>
              <div className="flex items-center justify-center text-white">
                <Mail className="w-6 h-6 mr-4" />
                <div className="text-center">
                  <div className="font-semibold">Email</div>
                  <div className="text-orange-100">waggle.business.co@gmail.com</div>
                </div>
              </div>
              <div className="flex items-center justify-center text-white">
                <MapPin className="w-6 h-6 mr-4" />
                <div className="text-center">
                  <div className="font-semibold">Service Area</div>
                  <div className="text-orange-100">8624 E 99th St, Tulsa, OK 74133</div>
                </div>
              </div>
              <div className="flex items-center justify-center text-white">
                <Clock className="w-6 h-6 mr-4" />
                <div className="text-center">
                  <div className="font-semibold">Available Hours</div>
                  <div className="text-orange-100">Mon-Fri: 4PM-7PM | Weekends: 11AM-8PM</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">🐕</span>
                </div>
                <span className="text-2xl font-bold">Waggle</span>
              </div>
              <p className="text-gray-400 mb-4">
                Your neighborhood's trusted dog walking service. Keeping tails wagging since 2025!
              </p>
              <div className="flex space-x-4">
                <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm">📘</span>
                </div>
                <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm">📷</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-orange-400">Services</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Daily Dog Walks</li>
                <li>Exercise & Play Sessions</li>
                <li>Pet Sitting</li>
                <li>Weekend Care</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-orange-400">Contact Info</h3>
              <ul className="space-y-2 text-gray-400">
                <li>📞 918-230-2790</li>
                <li>✉️ waggle.business.co@gmail.com</li>
                <li>📍 8624 E 99th St, Tulsa, OK 74133</li>
                <li>🕐 Mon-Fri: 4PM-7PM | Weekends: 11AM-8PM</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Waggle Dog Walking. Made with ❤️ for our furry friends.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
