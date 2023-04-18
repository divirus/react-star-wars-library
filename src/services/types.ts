export interface IBase {
    name: string;
    created: string;
    edited: string;
    url: string;
}

export interface IPeopleSliceState {
  data: ICharacter[],
  dataLoadPending: boolean;
  dataLoadSuccess: boolean;
  dataLoadError: boolean;
}

export interface IPeopleData {
  count: number;
  next: string;
  previous: string | null;
  results: ICharacter[];
}

export interface ICharacter extends IBase {
    height: string;
    mass: string;
    hair_color: string;
    skin_color: string;
    eye_color: string;
    birth_year: string;
    gender: string;
    homeworld: string;
    films: string[];
    species: string[];
    vehicles: string[];
    starships: string[];
}

export interface IPlanet extends IBase {
    rotation_period: string;
    orbital_period: string;
    diameter: string;
    climate: string;
    gravity: string;
    terrain: string;
    surface_water: string;
    population: string;
    residents: string[];
    films: string[];
}

export interface IMovie {
    title: string;
    episode_id: number;
    opening_crawl: string;
    director: string;
    producers: string[];
    release_date: string;
    characters: string[];
    planets: string[];
    starships: string[];
    vehicles: string[];
    species: string[];
    created: string;
    edited: string;
    url: string;
  }

export interface ISpecies extends IBase {
    classification: string;
    designation: string;
    average_height: number;
    average_lifespan: number;
    eye_colors: string[];
    hair_colors: string[];
    skin_colors: string[];
    language: string;
    homeworld: string;
    people: string[];
    films: string[];
}

export interface IStarship extends IBase {
    model: string;
    starshipClass: string;
    manufacturer: string;
    cost_in_credits: string;
    length: string;
    crew: string;
    passengers: string;
    max_atmosphering_speed: string;
    hyperdrive_rating: string;
    MGLT: string;
    cargo_capacity: string;
    consumables: string;
    pilots: string[];
    films: string[];
  }

export interface IVehicle extends IBase {
    model: string;
    vehicle_class: string;
    manufacturer: string;
    cost_in_credits: string;
    length: string;
    crew: string;
    passengers: string;
    max_atmosphering_speed: string;
    cargo_capacity: string;
    consumables: string;
    pilots: string[];
    films: string[];
}