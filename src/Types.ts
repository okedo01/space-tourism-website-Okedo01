interface Tourism {
    destination: []
    crew: []
    technology: []
}

interface destination {
    name: string
    images: {}
    description: string
    distance: string
    travel: string
}

interface images {
    png: string
    webp: string
}

interface crew {
    name: string
    images: {}
    role: string
    bio: string
}

interface technology {
    name: string
    TechImages: {}
    description: string
}

interface TechImages {
    portrait: string
    landscape: string
}