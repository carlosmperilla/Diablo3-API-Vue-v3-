<template>
  <div class='resource-wrapper'>
    <div class='resource'>
      <div class='d-flex justify-content-start align-items-center'>
        <!-- Imagen Vida -->
        <div class='resource-icon resource-life'/>
        <!-- Nombre -->
        <div class='ml-3 text-uppercase name-text'>
          <span>{{ resources.resources.life.name }}</span>
        </div>
        <!-- Valor -->
        <div class='ml-3'>
          <span class='text-monospace'> {{ $filters.formatNumber(resources.resources.life.val) }} </span>
        </div>
      </div>

    </div>

    <hr>

    <div class='resource'>
      <div class='d-flex justify-content-start align-items-center'>
        <!-- Imagen Recurso -->
        <div class='resource-icon' :class='classResourceName'/>
        <!-- Nombre -->
        <div class='ml-3 text-uppercase name-text' :class="'resource-name-' + resources.classSlug">
          <span>{{ displayResourceName }}</span>
        </div>
        <div class='ml-3'>
          <!-- Valor -->
          <span class='text-monospace'>
              {{ $filters.formatNumber(resources.resources.primaryResource.val) }}
            <template v-if='hasSecondaryResource'>
                <!-- Valor recurso secundario -->
                <span class='mx-0 text-muted'>/</span>
                <span> {{ $filters.formatNumber(resources.resources.secondaryResource.val) }} </span>
            </template>
          </span>
        </div>
      </div>

    </div>

  </div>
</template>

<script>
    import resources from '@/mixins/resources'

    export default {
        name: 'HeroResources',
        mixins: [resources],
        props: {
            resources: {
                required: true,
                type: Object
            }
        },
        computed: {
            classResourceName () {
                return `resource-${this.resourceClassName(this.resources.classSlug)}`
            },
            displayResourceName () {
                return this.resourceDisplayName(this.resources.classSlug)
            },
            // Solo demon-hunter tiene recurso secundario
            hasSecondaryResource () {
                return this.resources.classSlug === 'demon-hunter'
            }
        }
    }
</script>

<style lang='stylus'>
  .resource
    .name-text
      color #efb45d

    .resource-name-demon-hunter
      width auto

  @media (min-width: 992px)
    .resource
      .resource-name-demon-hunter
        width 100px
</style>