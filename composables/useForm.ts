import { reactive, ref } from 'vue';

export function useForm({ endpoint, fields }: { endpoint: string; fields: Record<string, any> }) {
  const form = reactive({ ...fields });
  const errors = reactive<Record<string, string | null>>({});
  const isSubmitting = ref(false);
  const isSuccess = ref(false);
  const isError = ref(false);

  async function submit() {
    isSubmitting.value = true;
    isSuccess.value = false;
    isError.value = false;

    try {
      const res = await $fetch(endpoint, {
        method: 'POST',
        body: form,
      });
      if (res.success) {
        isSuccess.value = true;
        Object.keys(form).forEach((key) => (form[key] = '')); // reset
      } else {
        Object.assign(errors, res.errors || {});
        isError.value = true;
      }
    } catch (e) {
      isError.value = true;
    } finally {
      isSubmitting.value = false;
    }
  }

  return {
    form,
    errors,
    isSubmitting,
    isSuccess,
    isError,
    submit,
  };
}
