<script setup lang='ts'>
import { ref, watchEffect } from 'vue';
import { toFormattedDateString, nDaysLaterFrom } from '../../utils/date';
import Pulldown from '../atoms/Pulldown.vue';

const props = defineProps<{ modelValue: Date }>()
const emits = defineEmits(['update:modelValue'])

const selectedDate = ref(props.modelValue)
const selectedHour = ref(props.modelValue.getHours())
const selectedMinute = ref(props.modelValue.getMinutes())

watchEffect(() => {
  const year = selectedDate.value.getFullYear()
  const month = selectedDate.value.getMonth()
  const date = selectedDate.value.getDate()
  const hour = selectedHour.value
  const minute = selectedMinute.value
  const second = 0
  emits('update:modelValue', new Date(year, month, date, hour, minute, second))
})


const dateCandidates = () => {
  let candidates = []
  for (let i=0; i<30; i++) {
    candidates.push(nDaysLaterFrom(props.modelValue, i))
  }
  return candidates
}
const hourCandidates = () => {
  let candidates = []
  for (let i=0; i<24; i++) {
    candidates.push(`${i}`)
  }
  return candidates
}
const minuteCandidates = () => {
  let candidates = []
  for (let i=0; i<60; i++) {
    candidates.push(`${i}`)
  }
  return candidates
}
</script>

<template>
  <div class="date-picker">
    <div class="date-picker__date-pulldown-wrapper">
      <Pulldown
        v-model="selectedDate"
        :candidates="dateCandidates()"
        :stringfyFn="toFormattedDateString">
      </Pulldown>
    </div>
    <!-- /.date-picker__date-pulldown-wrapper -->
    <div class="date-picker__hour-pulldown-wrapper">
      <Pulldown
        v-model="selectedHour"
        :candidates="hourCandidates()"
        :stringfyFn="(i:string) => i">
      </Pulldown>
    </div>
    <!-- /.date-picker__hour-pulldown-wrapper -->
    <div class="date-picker__hour-label">
      時
    </div>
    <!-- /.date-picker__hour-label -->
    <div class="date-picker__minute-pulldown-wrapper">
      <Pulldown
        v-model="selectedMinute"
        :candidates="minuteCandidates()"
        :stringfyFn="(i:string) => i">
      </Pulldown>
    </div>
    <!-- /.date-picker__minute-pulldown-wrapper -->
    <div class="date-picker__minute-label">
      分
    </div>
    <!-- /.date-picker__minute-label -->
  </div>
  <!-- /.date-picker -->
</template>

<style scoped>
.date-picker {
  display: flex;
  justify-content: center;
  margin: 0.5rem 0;
}
.date-picker__date-pulldown-wrapper,
.date-picker__hour-pulldown-wrapper,
.date-picker__minute-pulldown-wrapper,
.date-picker__hour-label {
  margin: 0 0.5rem 0 0;
}
</style>