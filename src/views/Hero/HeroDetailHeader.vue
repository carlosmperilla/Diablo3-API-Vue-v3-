<template>
  <b-row class='hero-detail-header my-5'>
    <b-col cols='12'>

      <!-- Avatar -->
      <div class='d-flex justify-content-center mb-3'>
        <div class='hero-detail-avatar' :class='heroClass'></div>
      </div>

      <div class='text-center'>

        <!-- Nombre -->
        <h1 v-diablo:bone class='text-truncate'>{{ detail.name }}</h1>

        <div class='text-monospace'>
          <small>
            <!-- Nivel -->
            <span>{{ detail.level }}</span>
            <!-- Nivel de Leyenda -->
            <span class='text-info' v-if='detail.paragonLevel'>
              <span class='text-white'> · </span>
              ({{ detail.paragonLevel }})
            </span>
            <!-- Clase (A través del Mixin) -->
            <span> · {{classToName(detail.classSlug)}}</span>
            <!-- ¿Es de temporada? -->
            <span v-if='detail.seasonal' class='text-success'> · Seasonal </span>
            <!-- ¿Es hardcore? -->
            <span v-if='detail.hardcore' class='text-danger'> · Hardcore </span>
          </small>

          <div>
            <!-- En qué temporada ha sido creado el héroe -->
            <small class='text-muted'>
              Season created:
            </small>
            <b-badge>{{ detail.seasonCreated }}</b-badge>
          </div>
        </div>

        <hr>

      </div>
    </b-col>
  </b-row>
</template>

<script>
    import heroName from '@/mixins/heroName'

    export default {
        name: 'HeroDetailHeader',
        mixins: [heroName],
        props: {
            detail: {
                type: Object,
                required: true
            }
        },
        computed: {
            heroClass () {
                const gender = this.detail.gender === 0 ? 'male' : 'female'
                return `hero-${this.detail.classSlug} ${gender}`
            }
        }
    }
</script>

<style lang="stylus" scoped>
    .hero-detail-avatar
        width 138px
        height 105px
        background-size 280px

    .text-bone
        color #e8dcc2
</style>