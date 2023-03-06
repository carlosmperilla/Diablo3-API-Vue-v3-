<template>
  <section class='hero-items mb-5'>
    <h2 class='font-diablo'>Items</h2>

    <hr class='bg-white'>

    <!-- Grid de 3 columnas. Mostramos solo una centrada -->
    <b-row>
      <b-col cols='4' offset='4'>
        <ItemDetail :item='itemsData.head'/>
      </b-col>
    </b-row>

    <hr>

    <!-- Grid de 3 columnas -->
    <b-row>
      <b-col>
        <ItemDetail :item='itemsData.shoulders'/>
      </b-col>
      <b-col>
        <ItemDetail :item='itemsData.torso'/>
      </b-col>
      <b-col>
        <ItemDetail :item='itemsData.neck'/>
      </b-col>
    </b-row>

    <hr>

    <!-- Grid de 3 columnas -->
    <b-row>
      <b-col>
        <ItemDetail :item='itemsData.hands'/>
      </b-col>
      <b-col>
        <ItemDetail :item='itemsData.waist'/>
      </b-col>
      <b-col>
        <ItemDetail :item='itemsData.bracers'/>
      </b-col>
    </b-row>

    <hr>

    <!-- Grid de 3 columnas -->
    <b-row>
      <b-col>
        <ItemDetail :item='itemsData.leftFinger'/>
      </b-col>
      <b-col>
        <ItemDetail :item='itemsData.legs'/>
      </b-col>
      <b-col>
        <ItemDetail :item='itemsData.rightFinger'/>
      </b-col>
    </b-row>

    <hr>

    <!-- Grid de 3 columnas -->
    <b-row>
      <b-col>
        <ItemDetail :item='itemsData.mainHand'/>
      </b-col>
      <b-col>
        <ItemDetail :item='itemsData.feet'/>
      </b-col>
      <b-col>
        <ItemDetail :item='itemsData.offHand'/>
      </b-col>
    </b-row>

  </section>

</template>

<script>
    import ItemDetail from './ItemDetail.vue'

    // Objeto con las keys de los 'items' del personaje
    const defaultItems = {
        head: {
            slotName: 'head'
        },
        shoulders: {
            slotName: 'Shoulders'
        },
        torso: {
            slotName: 'Torso'
        },
        neck: {
            slotName: 'Neck'
        },
        hands: {
            slotName: 'Hands'
        },
        waist: {
            slotName: 'Waist'
        },
        bracers: {
            slotName: 'Bracers'
        },
        leftFinger: {
            slotName: 'Left Finger'
        },
        legs: {
            slotName: 'Legs'
        },
        rightFinger: {
            slotName: 'Right Finger'
        },
        mainHand: {
            slotName: 'Main Hand'
        },
        feet: {
            slotName: 'Feet'
        },
        offHand: {
            slotName: 'Off Hand'
        }
    }

    export default {
        name: 'HeroItems',
        components: { ItemDetail },
        props: {
            items: {
                type: Object,
                required: true
            }
        },
        computed: {
            itemsData () {
                // Fusionar objetos:
                // Esto lo hacemos para mostrar el hueco vacío en caso de que ese objeto no esté equipado
                // Si NO hay item equipado, manda el valor de 'defaultItems' correspondiente
                // Si hay item equipado, manda la info del item
                return {
                    ...defaultItems,
                    ...this.items
                }
            }
        }
    }
</script>