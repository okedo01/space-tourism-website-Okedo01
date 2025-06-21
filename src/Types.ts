export interface Tourism {
    destinations: DestinationData[]
    crew: CrewData[]
    technology: Technology[]
}

export interface DestinationData {
    name: string
    images: Images
    description: string
    distance: string
    travel: string
}

export interface Images {
    png: string
    webp: string
}

export interface CrewData {
    name: string
    images: Images
    role: string
    bio: string
    empty: string
}

export interface Technology {
    name: string
    images: TechImages
    description: string
}

export interface TechImages {
    portrait: string
    landscape: string
}