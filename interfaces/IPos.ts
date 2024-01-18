interface ICoords {
    latitude: number,
    longitude: number,
    accuracy: number
}

export interface IPos {
    coords: ICoords
}