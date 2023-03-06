<template>
  <ul class='list-unstyled'>
    <!-- Itera -->
    <li v-for='attr in attributes' :key='attr.name' class='mb-1'>
      <div class='d-flex justify-content-between'>
        <!-- Nombre atributo -->
        <div class='pl-2 text-capitalize name-text'>{{ attr.name }}</div>
        <!-- Valor formateado -->
        <div class='px-2 text-monospace'>{{ $filters.formatNumber(attr.val) }}</div>
      </div>
    </li>
  </ul>
</template>

<script>
    export default {
        name: 'AttributeList',
        props: {
            attributes: {
                type: Array,
                required: true
            }
        }
    }
</script>

<style lang='stylus'>
  ul
    li
      .name-text
        color #efb45d
        font-weight 600
</style>