export interface Hotel {
  id: string
  name: string
  starRating: number
  contactPerson: string
  email: string
  phone?: string
  address?: string
  registrationDate: string
}

export interface User {
  id: string
  email: string
  hotel: Hotel
}

// Mock authentication functions - in a real app, these would connect to a backend
export const authService = {
  async login(email: string, password: string): Promise<User | null> {
    // Mock login - in real app, this would validate against backend
    if (email && password) {
      const mockUser: User = {
        id: "user-1",
        email,
        hotel: {
          id: "hotel-1",
          name: "Grand Plaza Hotel",
          starRating: 4,
          contactPerson: "John Smith",
          email,
          phone: "+1 (555) 123-4567",
          address: "123 Hotel Street, City, State 12345",
          registrationDate: new Date().toISOString(),
        },
      }
      localStorage.setItem("user", JSON.stringify(mockUser))
      return mockUser
    }
    return null
  },

  async register(hotelData: {
    hotelName: string
    starRating: number
    contactPerson: string
    email: string
    password: string
    phone?: string
    address?: string
  }): Promise<User | null> {
    // Mock registration - in real app, this would create account in backend
    const newUser: User = {
      id: `user-${Date.now()}`,
      email: hotelData.email,
      hotel: {
        id: `hotel-${Date.now()}`,
        name: hotelData.hotelName,
        starRating: hotelData.starRating,
        contactPerson: hotelData.contactPerson,
        email: hotelData.email,
        phone: hotelData.phone,
        address: hotelData.address,
        registrationDate: new Date().toISOString(),
      },
    }
    localStorage.setItem("user", JSON.stringify(newUser))
    return newUser
  },

  async logout(): Promise<void> {
    localStorage.removeItem("user")
  },

  getCurrentUser(): User | null {
    if (typeof window === "undefined") return null
    const userData = localStorage.getItem("user")
    return userData ? JSON.parse(userData) : null
  },
}
