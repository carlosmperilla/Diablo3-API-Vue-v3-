
import { useRouter, useRoute } from "vue-router"

// Es necesario empaquetar (wrapper) la función a obtener
// Para que reconozcar el manejar de rutas (router) y la ruta actual (route)
export default function handlerGoToHero() {
    const router = useRouter()
    const route = useRoute()

    const goToHero = (heroId) => {
            /**
            * Go to hero Id
            * @param heroId {String | Number}
            */
            // Sacar los datos de la URL
            // const { region, battleTag } = this.$route.params
            const { region, battleTag } = route.params
            // Navegar a la ruta "Hero"
            // this.$router.push({ name: 'Hero', params: { region, battleTag, heroId } })
            router.push({ name: 'Hero', params: { region, battleTag, heroId } })
        };

    return goToHero;
};