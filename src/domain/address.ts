export class ZipCode {
    private _zipcode: string = ""

    private constructor(zipcode: string) {
        if (!isValidZipcode(zipcode)) throw new Error(`Invalid zipcode: ${zipcode}`)
        this._zipcode = zipcode
    }

    static of(zipcode: string | undefined): ZipCode | undefined {
        if (!zipcode) return undefined
        return new ZipCode(zipcode)
    }

    get zipcode(): string { return this._zipcode }
}
export type Country = 'JP' | undefined
export type Geometry = {
    lat: number,
    lng: number,
}
export class Address {
    private _country: Country
    private _zipcode: ZipCode | undefined
    private _prefecture: string = ''
    private _city: string = ''
    private _streetAddress: string | undefined
    private _geometry: Geometry = { lat: 0, lng: 0 }

    constructor(
        country: Country,
        pref: string,
        city: string,
        geo: Geometry,
        zipcode?: ZipCode,
        street?: string
    ) {
        this._country = country
        this._zipcode = zipcode
        this._prefecture = pref
        this._city = city
        this._streetAddress = street
        this._geometry = geo
    }

    toString() {
        const zipcode = this._zipcode?.zipcode ?? ''
        const pref = this._prefecture ?? ''
        const city = this._city ?? ''
        const street = this._streetAddress ?? ''
        return '〒' + zipcode + ' ' + pref + city + street
    }

    get country() { return this._country }
    get zipcode() { return this._zipcode }
    get prefecture() { return this._prefecture }
    get city() { return this._city }
    get streetAddress() { return this._streetAddress }
    get geometry() { return this._geometry }
}

const isValidZipcode = (zipcode: string): boolean => {
    const [f, s] = zipcode.split('-')
    return f.length == 3 && s.length == 4
}

export const exportedForTesting = {
    isValidZipcode
}