export default defineI18nLocale(async (locale) => {
  const config = useRuntimeConfig();

  return $fetch(`${config.public.api}translations/${locale}`);
});
