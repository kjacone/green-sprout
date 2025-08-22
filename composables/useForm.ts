import { ref } from 'vue';
import { useFetch } from '#app';

interface UseFormOptions<T> {
  endpoint: string;
  initialValues: T;
  validate?: (fields: T) => Record<string, string>;
}

export function useForm<T extends Record<string, any>>(options: UseFormOptions<T>) {
  const fields = ref({ ...options.initialValues });
  const errors = ref<Record<string, string>>({});
  const submitting = ref(false);
  const success = ref(false);
  const responseMessage = ref('');

  /**
   * Validates the form fields using provided validate function (if any).
   * Populates the errors object. Returns true if valid, else false.
   */
  const validate = (): boolean => {
    if (options.validate) {
      const result = options.validate(fields.value);
      errors.value = result;
      return Object.keys(result).length === 0;
    }
    errors.value = {};
    return true;
  };

  /**
   * Submits the form via POST to the endpoint. Handles loading, error, and success state.
   */
  const submitForm = async () => {
    success.value = false;
    responseMessage.value = '';
    if (!validate()) {
      responseMessage.value = 'Please correct highlighted errors.';
      return false;
    }
    submitting.value = true;
    try {
      const { data, error: fetchError } = await useFetch(options.endpoint, {
        method: 'POST',
        body: fields.value,
      });
      if (fetchError.value) {
        responseMessage.value = fetchError.value.message || 'Submission failed. Please try again.';
        return false;
      }
      success.value = true;
      responseMessage.value = 'Form submitted successfully!';
      fields.value = { ...options.initialValues }; // reset fields
      errors.value = {};
      return true;
    } catch (e: any) {
      responseMessage.value = e.message || 'Submission failed.';
      return false;
    } finally {
      submitting.value = false;
    }
  };

  return {
    fields,
    errors,
    submitting,
    success,
    responseMessage,
    validate,
    submitForm,
  };
}
