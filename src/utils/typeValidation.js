/**
 * Used for custom validations
 * @param hero {String}
 * @param time {String}
 * @param classSlug {String}
 * @constructor
 */
class HeroData {
    constructor(hero, time, classSlug) {
        this.hero = hero
        this.time = time
        this.classSlug = classSlug
    }
}
  
export {
    HeroData
}