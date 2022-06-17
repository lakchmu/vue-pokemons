<template>
  <div class="card" v-if="pokemon.id">
    <div class="img-wrap">
      <img class="img" alt="pokemon avatar" :src="pokemon.url" />
    </div>
    <h2 class="name row">{{ pokemon.name }} #{{ pokemon.id }}</h2>

    <xp-indicator class="row" :types="pokemon.types" :value="pokemon.experience" />

    <div class="row">
      HP {{ pokemon.defense }}/{{ pokemon.hp }}
      <span class="delimiter">|</span>
      XP {{ pokemon.experience }}
    </div>
    <div class="row">
      <star-outlined :style="{ fontSize: '72px', color: iconFontColor }" />
    </div>
    <div class="stats row">
      <div class="stat">
        <span>
          {{ pokemon.types.join(', ') }}
        </span>
        <small>type</small>
      </div>
      <span class="delimiter">|</span>
      <div class="stat">
        <span>{{ pokemon.weight }}</span>
        <small>weight</small>
      </div>
      <span class="delimiter">|</span>
      <div class="stat">
        <span>{{ pokemon.height }}</span>
        <small>height</small>
      </div>
    </div>
    <div class="stats row">
      <div class="stat">
        <span>{{ pokemon.attack }}</span>
        <small>attack</small>
      </div>
      <span class="delimiter">|</span>
      <div class="stat">
        <span>{{ pokemon.speed }}</span>
        <small>speed</small>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { StarOutlined } from '@ant-design/icons-vue'

import { palette } from '@/shared'

import { XPIndicator } from './ui'

import type { Pokemon } from '@/entities/pokemon'

export default defineComponent({
  name: 'pokemon-full-card',
  props: {
    pokemon: {
      type: Object as () => Pokemon,
      required: true,
    },
  },
  data() {
    return {
      xpLineBackgroundColor: palette.main,
      delimiterColor: palette.text.secondary,
      iconFontColor: palette.main,
    }
  },
  components: { StarOutlined, 'xp-indicator': XPIndicator },
})
</script>

<style lang="scss" scoped>
.delimiter {
  display: inline-block;
  color: v-bind(delimiterColor);
  margin: 0 10px;
}
.card {
  align-self: center;
  background-color: #fff;
  border-radius: 20px;
  box-shadow: 0 3px 15px rgb(100 100 100 / 50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 145px;
  padding: 109px 32px 32px;
  position: relative;
  min-height: 500px;
  width: 400px;
}
.img-wrap {
  position: absolute;
  top: -50%;
  left: 50%;
  transform: translate(-50%, 50%);

  img {
    height: 218px;
  }
}
.name {
  text-transform: capitalize;
}
.row {
  margin-bottom: 24px;
}
.stats {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
}
.stat {
  display: flex;
  flex-direction: column;
  align-items: center;

  span:first-child {
    font-weight: 600;
  }
}
</style>
