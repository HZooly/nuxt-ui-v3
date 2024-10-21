<script setup lang="ts">
import type { FormSubmitEvent } from '@nuxt/ui'
import { z } from 'zod'

const { loadCSS } = useLoadCSS()

const schema = z.object({
  primary: z.string()
})
type Schema = z.output<typeof schema>

const appConfig = useAppConfig()

const form = reactive<Partial<Schema>>({
  primary: appConfig.ui.colors.primary
})

const onSubmit = async (event: FormSubmitEvent<Schema>) => {
  try {
    await loadCSS(`css/${event.data.primary}.css`)
    console.log(`Sucessfully load ${event.data.primary} CSS file.`)
  } catch (err) {
    console.error(err)
  }
  updateAppConfig({
    ui: {
      colors: event.data
    }
  })
}
</script>

<template>
  <UContainer class="my-4 space-y-4">
    Available palettes are <code>chesnut</code>, <code>turquoise</code> and <code>directus</code>.
    <UForm :schema="schema" :state="form" class="space-x-2" @submit="onSubmit">
      <UInput v-model="form.primary" />
      <UButton type="submit">
        Update
      </UButton>
    </UForm>

    <pre>{{ appConfig.ui.colors }}</pre>
  </UContainer>
  <p class="text-chesnut-500">hello world</p>
  <p class="text-green-500">hello world</p>
</template>
