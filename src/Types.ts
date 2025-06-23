export interface Tourism {
    destinations: DestinationData[]
    crew: CrewData[]
    technology: TechnologyData[]
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
}

export interface TechnologyData {
    name: string
    images: TechImages
    description: string
}

export interface TechImages {
    portrait: string
    landscape: string
}