<script setup lang='ts'>
import { computed } from 'vue';
import TrackIcon from '../../assets/track.svg';

const props = defineProps({
  name: {
    type: String,
    default: 'Name',
  },
  speed: {
    type: String,
    default: 'Speed',
  },
  loadCapacity: {
    type: String,
    default: 'H×W×Dcm'
  },
  maxCapacity: {
    type: String,
    default: 'Weightkg'
  },
  account: {
    type: Number,
    default: 0
  },
  perDistance: {
    type: Number,
    default: 0.0
  },
  perMinTime: {
    type: Number,
    default: 0
  }
})

defineEmits(['click'])

const perTimeString = computed(() => {
  if (props.perMinTime < 60) return `${props.perMinTime}分`
  const hourTime = props.perMinTime / 60
  const minTime = props.perMinTime % 60
  console.log('hour: ' + hourTime)
  console.log('minutes: ' + minTime)
  return `${hourTime}時間${minTime}分`
})
</script>

<template>
  <div class="car-type" @click="$emit('click')">
    <div class="car-type-description">
      <TrackIcon class="car-type-description__icon" alt="track" />
      <div class="car-type-description__name-speed-wrapper">
        <div class="car-type-description__name">{{ name }}</div>
        <!-- /.car-type-description__name -->
        <div class="car-type-description__speed">{{ speed }}</div>
        <!-- /.car-type-description__speed -->
      </div>
      <!-- /.car-type-description__name-speed-wrapper -->
      <div class="car-type-description__load-capacity">
        積載の目安:{{ loadCapacity }}
      </div>
      <!-- /.car-type-description__load-capacity -->
      <div class="car-type-description__max-capacity">
        最大積載量:{{ maxCapacity }}
      </div>
      <!-- /.car-type-description__max-capacity -->
    </div>
    <!-- /.car-type-description -->
    <div class="car-type__account">
      金額（税込）<span>￥{{ account.toLocaleString() }}</span>
    </div>
    <!-- /.car-type__account -->
    <div class="car-type__account-per">
      推定距離／時間 <span>{{ perDistance }}km/{{ perTimeString }}</span>
    </div>
    <!-- /.car-type__account-per -->
  </div>
  <!-- /.car-type -->
</template>

<style scoped>
.car-type {
  position: relative;
  border: 4px solid var(--blue-500);
  border-radius: 12px;
  padding: 1rem;
  cursor: pointer;
}
.car-type:hover {
  border-color: var(--blue-400);
}
.car-type-description {
  margin: 0 0 1rem 0;
}
.car-type__icon {
  width: var(--w-2);
  height: var(--h-2);
  fill: var(--white);
}
.car-type-description__name-speed-wrapper {
  position: absolute;
  top: 1rem;
  left: 6rem;
  right: 0;
  display: flex;
  justify-content: space-between;
}
.car-type-description__name {
  font-weight: bold;
  font-size: 2rem;
  line-height: 2rem;
}
.car-type-description__speed {
  flex-grow: 1;
  background-color: var(--blue-500);
  margin: 0 0.5rem;
  border-radius: 8px;
  font-weight: bold;
}
.car-type-description__load-capacity,
.car-type-description__max-capacity {
  position: absolute;
  left: 5rem;
  padding: 0 1rem;
  font-size: 0.8rem;
}
.car-type-description__load-capacity {
  top: 3rem;
}
.car-type-description__max-capacity {
  top: 4rem;
}
.car-type__account,
.car-type__account-per {
  color: var(--black);
  height: 2rem;
  border-radius: 8px;
}
.car-type__account span,
.car-type__account-per span {
  font-weight: bold;
}
.car-type__account {
  background-color: var(--blue-300);
  margin: 0 0 0.5rem
}
.car-type__account-per {
  background-color: var(--amber-200);
}
</style>