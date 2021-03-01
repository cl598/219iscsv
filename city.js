class city {
    constructor(file = null) {
        if(file) {
            this.name = file.name;
            this.country = file.country;
            this.subcountry = file.subcountry;
            this.geonameid = file.geonameid;
        }
    }

    static create(file) {
        return new city(file);
    }
}
module.exports = city;