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
export type Address = {
    country: Country,
    zipCode: ZipCode | undefined,
    prefecture: string,
    city: string,
    streetAddress: string | undefined,
}

const isValidZipcode = (zipcode: string): boolean => {
    const [f, s] = zipcode.split('-')
    return f.length == 3 && s.length == 4
}

export const exportedForTesting = {
    isValidZipcode
}